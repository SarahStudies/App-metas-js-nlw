//constantes, variaveis e escopos. 
/*const mensagem = "ola mundo!";

{
    let mensagem = "ola eu";
    console.log(mensagem);
}

console.log(mensagem);
*/

//------------------------------------------

/*arrays e objetos
let metas = ["Sarah", "Inter"];

console.log(metas[1]);

//concatenação 
console.log(metas[0] + " é " + metas[1]);
*/
//objetos
let meta = {
    value: 'terminar trabalho de csharp',
    adress: 2,
    checked: true,
    log: (info) => {
        console.log(info)
    }
}

meta.value = "agora é terminar meus livros"
meta.log(meta.value); 


//funçoes
const criarMeta = () => {}

//function criarMeta() {}