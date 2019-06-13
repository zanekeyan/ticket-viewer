const config = require('config')
const express = require('express');
const axios = require('axios');
var cors = require('cors')

// init constants
const PORT = 3001;
const MAX_PER_PAGE = 25;
const BASE_64_ENCODING = "base64";
const API_TOKEN = config.get('API_TOKEN')
const EMAIL_ACCOUNT =config.get('EMAIL_ACCOUNT')
const WORKSPACE = config.get('WORKSPACE')

const authToken = `${EMAIL_ACCOUNT}/token:${API_TOKEN}`
let buff = new Buffer(authToken);
let base_64_data = buff.toString(BASE_64_ENCODING);

const app = express();
app.use(cors());

// init axios instance with authorization header
var axiosInstance = axios.create({
    baseURL: `https://${WORKSPACE}.zendesk.com/api/v2/tickets.json?per_page=${MAX_PER_PAGE}`,
    headers: {'Authorization': "Basic " + base_64_data}
});

// handle front end ticket requests
app.get('/tickets', function (req, res) {
    // init url if it sent with the request , handy for previous and next pagination
    var requestedPageUrl = req.query.requestedPageUrl

    // update baseURL if new url is provided , used for previous and next url 
    if(requestedPageUrl !== undefined){
        axiosInstance.defaults.baseURL = requestedPageUrl
    }

    // process request to from zendesk API 
    axiosInstance.get()
            .then((response) => {
                console.log("Success" , response.data.tickets[0].id)
                return res.send(response.data);
             })
             // catch any errors
            .catch((error) => {
                return res.send(error);
            });
});

// host server on port
app.listen(process.env.PORT || PORT , () => {
    console.log(`server is running on port ${PORT}`);
});