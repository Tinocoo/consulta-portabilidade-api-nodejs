'use strict'

const request = require('request')

module.exports = (celular, cb) => {
    request(`https://api-portabilidade.com.br/run/?telefone=${celular}`, (error, response, body) => {
        if (error) {
            cb(celular, { erro: true, descricao: error })
            return
        }

        if (response.statusCode != 200) {
            cb(celular, { erro: true, descricao: `Nao retornou HTTP CODE 200, retornou: ${response.statusCode}` })
            return
        }

        try {
            let bodyJson = JSON.parse(body)
            cb(celular, bodyJson)
        } catch (e) {
            cb(celular, { erro: true, descricao: e })
        }
    })
}
