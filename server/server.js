const config = require('config')
const express = require('express');
const path = require('path');
const axios = require('axios');
var cors = require('cors')

// init constants
const PORT = 3001;
const BASE_64_ENCODING = config.get("BASE_64_ENCODING");
const API_TOKEN = config.get('API_TOKEN')
const EMAIL_ACCOUNT =config.get('EMAIL_ACCOUNT')

const authToken = `${EMAIL_ACCOUNT}/token:${API_TOKEN}`
let buff = new Buffer(authToken);
let base_64_data = buff.toString(BASE_64_ENCODING);

const app = express();
app.use(cors());

const instance = axios.create({
    baseURL: 'https://zane-k.zendesk.com/api/v2/tickets.json',
    headers: {'Authorization': "Basic " + base_64_data}
  });

app.get('/tickets', function (req, res) {
    instance.get()
            .then((response) => {
                console.log("Success")
                return res.send(response.data.tickets);
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