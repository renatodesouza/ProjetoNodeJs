import pegaArquivo from "./index.js";
import fs from 'fs';
import chalk from "chalk";

import listaValidada from "./http-validacao.js";

//O metodo process.argv retorna um array com o caminho de executaveis do node
//E o segundo item do array é um caminho absoluto desde a pasta raiz até
//o arquivo cli.js
const caminho = process.argv;

function imprimeLista(valida, arquivo, identificador = ''){

    if (valida){
        console.log(
            chalk.yellow('Lista validada'),
            chalk.black.bgGreen(identificador),
            listaValidada(arquivo));
    }

    console.log(
        chalk.yellow('Lista de links'),
        chalk.black.bgGreen(identificador),arquivo);
}


async function porcessaTexto(argumentos){
    
    const caminho = argumentos[2];
    const valida =argumentos[3] === '--valida';

    console.log(valida)

    try {
        fs.lstatSync(caminho);
    }catch (erro){
        if (erro.code === 'ENOENT'){
            console.log('Arquivo ou diretorio nao existe');
            return;
        }
    }

    if (fs.lstatSync(caminho).isFile()){
        const arquivo = await pegaArquivo(argumentos[2]);
        imprimeLista(valida, arquivo)

    }else if (fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
            imprimeLista(valida, lista, nomeDeArquivo)
        })
    }

    };



porcessaTexto(caminho)