import fs from 'fs';

import chalk from "chalk";



function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({texto: captura[1], link: captura[2]}));

    return resultados;
}


function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'arquivo nao encontrado'));
}


async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile
        (caminhoDoArquivo, encoding)
        return extraiLinks(texto);
    } catch (erro){
        trataErro(erro)
    }
}


export default pegaArquivo;



