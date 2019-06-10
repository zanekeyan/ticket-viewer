const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

const PORT = 3001;



app.listen(process.env.PORT || PORT , () => {
    console.log(`server is running on port ${PORT}`);
});