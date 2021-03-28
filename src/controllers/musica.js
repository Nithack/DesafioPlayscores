const Musica = require('../models/musica')

module.exports = app =>{
    app.get('/musica', async(req, res) => {
        const data = req.body
        data.latitude =  parseFloat(data.latitude)
        data.latitude =  parseFloat(data.longitude)
        await Musica.busca(data, res)
    })
}