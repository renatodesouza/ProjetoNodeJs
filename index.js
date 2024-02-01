import fs from 'fs';
import path from 'path';
import chalk from "chalk";


function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'arquivo nao encontrado'));
}

async function pegaArquivo(caminhoDoArquivo){
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(chalk.green(texto));
    } catch (erro){
        trataErro(erro)
    }
}

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.promises
//         .readFile(caminhoDoArquivo, encoding)
//         .then((texto) => console.log(chalk.green(texto)))
//         .catch(trataErro)
// }


// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     const caminhoCompleto = path.resolve(caminhoDoArquivo);

//     fs.readFile(caminhoCompleto, encoding, (erro, texto) => {
//         if(erro){
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     })
// }

pegaArquivo('./arquivos/texto.md')
pegaArquivo('./arquivos/')

// const caminhoRelativo = './arquivos/texto.txt';
// const caminhoAbsoluto = path.resolve(caminhoRelativo);

// console.log(chalk.red(caminhoAbsoluto))



