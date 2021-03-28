const cidadeTemp = require('../utils/cidadeTemp')
const cidadeMusica = require('../utils/cidadeMusica')
const filterPlaylist = require('../utils/filterPlaylist')
class Musica {
    async busca(data, res) {
        try {
            const resultTemp  = await cidadeTemp.temperatura(data)
            const resultFilterPlayList = filterPlaylist(resultTemp)
            const resultToken =  await cidadeMusica.token()
            const resultPlayList = await cidadeMusica.buscaMusica(resultToken, resultFilterPlayList)
            res.json({mussica: resultPlayList})
            
        } catch (error) {
            console.log(error)
            res.status(400).json({message : 'Erro na Solicitação'})
        }
    }
}

module.exports = new Musica