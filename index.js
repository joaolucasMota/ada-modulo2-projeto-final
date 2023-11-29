bd = [];

function adicionarTarefa (tarefa){
   return bd.push(tarefa)
}

function listarTarefas(){
    return bd.forEach((tarefa) =>{
        console.log(tarefa)
    })
}

function editarTarefa(index, novoConteudo){
    return bd[index] = novoConteudo;
}

function excluirTarefa(index){
    return bd.splice(index, 1)
}

