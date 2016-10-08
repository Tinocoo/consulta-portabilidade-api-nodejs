# API de Consulta à Portabilidade Numérica

## O que é

Exemplo de como consultar a portabilidade na API do site [api-portabilidade.com.br](https://api-portabilidade.com.br)
 
[![consulta portabilidade](https://api-portabilidade.com.br/images/body/gifanimado2.gif)](https://api-portabilidade.com.br/)


## Código Exemplo

```js
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
``` 

## Testando na sua máquina...
(código foi feito no nodejs v6.6.0)

```sh
git clone https://github.com/bruno222/consulta-portabilidade-api-nodejs.git
cd consulta-portabilidade-api-nodejs
npm install
node app.js 
```

## Search Keywords

[api portabilidade](https://api-portabilidade.com.br)
[consulta portabilidade](https://api-portabilidade.com.br/#features)
[consulta de operadora](https://api-portabilidade.com.br/#pricing)


