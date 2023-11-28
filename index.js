bd = [];

function adicionarTarefa (tarefa){
    bd.push(tarefa)
}

function listarTarefas(){
    bd.forEach((tarefa) =>{
        console.log(tarefa)
    })
}

function editarTarefa(index, novoConteudo){
   bd[index] = novoConteudo;
}

function excluirTarefa(index){
    bd.splice(index, 1)
}

