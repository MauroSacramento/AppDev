const { Router } = require('express');
const axios = require('axios');

const routes = Router()

routes.get("/devs", async (req, res) => {

    const {github_username} = req.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    console.log(apiResponse);

    return res.json({msg: "Hello there"})
})

module.exports = routes;