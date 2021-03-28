require('dotenv').config()
const requestConfig = require('../../config/requestConfig')
class cidadeMusica{
    async token(){  
        const authData = {
            baseURL : process.env.SPOTIFY_BASE_URL_TOKEN,
            clientID : process.env.SPOTIFY_CLIENT_ID,
            clientSecret : process.env.SPOTIFY_CLIENT_SECRET,
        }
        try {
            const requestToken = requestConfig.getToken(authData)
            const token = (await requestToken.post()).data.access_token
            return token
        } catch (error) {   
            return error
        }
    }
   async  buscaMusica(token, playListId){
         const authData = {
            baseURL : process.env.SPOTIFY_BASE_URL_PLAYLIST + playListId + "/tracks",
            token : token
        }
        try {
            const requestMusics = requestConfig.getMusics(authData)
            var resultMusic = (await requestMusics.get()).data.items
            resultMusic = (resultMusic[Math.floor(Math.random() * resultMusic.length)]).track.name
            return resultMusic
        } catch (error) {
            return new Error({message: error})
        }
    }
}
module.exports = new cidadeMusica