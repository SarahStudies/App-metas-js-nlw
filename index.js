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

let metas = [
    meta,
    {
        value: "tocar baixo por 20 minutos todos os dias",
        checked: false
    }
]

meta.value = "agora é terminar meus livros"
meta.log(meta.value); 

console.log(metas[1].value)

//funçoes
//const criarMeta = () => {}

//function criarMeta() {}