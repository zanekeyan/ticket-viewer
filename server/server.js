const config = require('config')
const express = require('express');
const path = require('path');
const axios = require('axios');
var cors = require('cors')

// init constants
const PORT = 3001;
const MAX_PER_PAGE = 25;
const BASE_64_ENCODING = config.get("BASE_64_ENCODING");
const API_TOKEN = config.get('API_TOKEN')
const EMAIL_ACCOUNT =config.get('EMAIL_ACCOUNT')

const authToken = `${EMAIL_ACCOUNT}/token:${API_TOKEN}`
let buff = new Buffer(authToken);
let base_64_data = buff.toString(BASE_64_ENCODING);

const app = express();
app.use(cors());

// var instance = axios.create({
//     baseURL: `https://zane-k.zendesk.com/api/v2/tickets.json?per_page=${MAX_PER_PAGE}`,
//     headers: {'Authorization': "Basic " + base_64_data}
//   });

var baseURL = `https://zane-k.zendesk.com/api/v2/tickets.json?per_page=${MAX_PER_PAGE}`;
var authHeader = {'Authorization': "Basic " + base_64_data};

app.get('/tickets', function (req, res) {
    var requestedPageUrl = req.query.requestedPageUrl

    console.log("requested" , requestedPageUrl)
    if(requestedPageUrl !== undefined){
        console.log("new page requested" , requestedPageUrl)
        baseURL = requestedPageUrl
        //console.log("instance base url ==" , instance.baseURL)
    }

    axios.get(baseURL , { headers: authHeader })
            .then((response) => {
                console.log("Success" , response.data.tickets[0].id)
                return res.send(response.data);
             })
            .catch((error) => {
                console.log('token is' ,  base_64_data)
                console.log(error)
                return res.send(error);
            });
});


app.listen(process.env.PORT || PORT , () => {
    console.log(`server is running on port ${PORT}`);
});