require('dotenv').config()
const Request = require('../../config/requestConfig')
const weatherMapKey = process.env.WEATHERMAP_KEY
const apiUrl = process.env.WEATHERMAP_BASE_URL
class Cidade {
    async temperatura(data) {
        
        if (!data.cidade) {
            if (!data.latitude && !data.longitude) {
                return Error({ message: 'Campos Inválidos' })
            } else {
               try {
                const nextURL = `weather?lat=${data.latitude}&lon=${data.longitude}&appid=${weatherMapKey}&units=metric`
                var newRequest = Request.tempCidade(apiUrl,nextURL)
                const resultData = await newRequest.get()
                return resultData.data.main.temp
               } catch (error) {
                   return  error
               }
                
            }
        } else {
            const nextURL = `weather?q=${data.cidade}&appid=${weatherMapKey}&units=metric`
            const newRequest = Request.tempCidade(apiUrl,nextURL)
            const resultData = await newRequest.get()
            return resultData.data.main.temp
        }
    }
}


module.exports = new Cidade
