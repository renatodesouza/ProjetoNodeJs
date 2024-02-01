import fs from 'fs';
import chalk from "chalk";

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'arquivo nao encontrado'));
}


async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile
        (caminhoDoArquivo, encoding)
        console.log(extraiEmail(texto));
    } catch (erro){
        trataErro(erro)
    }
}

function extraiEmail(texto){
    const regex = /[^\s]*@[^\s]*/gm;
    const capturas = [...texto.matchAll(regex)].map(texto => texto[0])
    return capturas
}

pegaArquivo('./arquivos/curriculo.txt')