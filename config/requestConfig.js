const axios = require('axios')

class Request {
    tempCidade(apiUrl, nextURL) {
        var requestTempData = axios.create({
            baseURL: apiUrl + nextURL,
            timeout: 5000,
            headers: {
                "Content-Type": "application/json"
            }
        })

        return requestTempData
    }
    getToken(authData) {
        const requestTempData = axios.create({
            baseURL: authData.baseURL,
            method: 'post',
            params: {
                grant_type: 'client_credentials'
            },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            auth: {
                username: authData.clientID,
                password: authData.clientSecret
            }
        })
        return requestTempData
    }
    getMusics(authData) {
        const requestTempData = axios.create({
            baseURL: authData.baseURL,
            headers: {
                Authorization: "Bearer " + authData.token
            }
        });
        return requestTempData
    }


}

module.exports = new Request