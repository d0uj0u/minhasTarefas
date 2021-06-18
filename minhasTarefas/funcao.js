let novaTarefa = document.getElementById('novaTarefa')
let botaoAdicionar = document.getElementById('botaoAdicionar')
let camponovaTarefa = document.getElementById('camponovaTarefa')
let arrayTarefas = []

botaoAdicionar.addEventListener('click', function()
{
  if(novaTarefa.value!="")
  {
    //cria nova tarefa, foca input, apaga tarefa apos inserir
    let li = document.createElement("li")
    li.innerHTML=novaTarefa.value
    campoTarefa.appendChild(li)
    novaTarefa.focus()
    novaTarefa.value=""

    //

    arrayTarefas.push(li)

  }
  else alert("A nova tarefa não deve ser vazia!")
})

let posicao = 0
let botaoSobe = document.getElementById('botaoSobe')
botaoSobe.addEventListener("click", function()
{
  if(posicao => 0)
  {
    posicao--
  }
})

let botaoDesce = document.getElementById('botaoDesce')
botaoDesce.addEventListener("click", function()
{
  for(let x of arrayTarefas)
  {
    if(posicao < arrayTarefas[x])
    {
      posicao++
      console.log("saaaaa")
    }

  }
})
