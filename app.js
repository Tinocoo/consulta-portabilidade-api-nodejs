'use strict'

/**
 * Testado no nodejs versao 6.6.0
 * 
 * Para rodar:
 * 
 *      npm install
 *      node app.js
 */

const consultaOperadora = require('./lib/consulta-operadora')

const processaRetorno = (celular, {id, descricao, erro}) => {
    if (erro) {
        console.log(`\nTELEFONE ${celular} - ERRO:`, descricao,'\n')
        return
    }

    console.log(`\nTELEFONE ${celular} - CODIGO OPERADORA: ${id} - NOME OPERADORA: ${descricao}\n`)
}

console.log('\n *** Iniciando ***')
consultaOperadora('(48) 9183-9686', processaRetorno)
consultaOperadora('[11] 77776666', processaRetorno)
consultaOperadora('1125254445', processaRetorno)