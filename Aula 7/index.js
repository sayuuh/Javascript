const alunos = []
// arrow function
const formulario = (e) => {
    e.preventDeault()
    console.log(e.submitter.defaultValue)
    switch(e.submitter.defaultValue){
        case "Cadastrar":
            cadastrarAluno()
            break
        case "Alterar":
            alterarAluno()
            break
        case "Pesquisar":
            console.log("Chamar a função Pesquisar")
            break
        default:
            console.log("Nenhuma das opções anteriores")
            break
        
    }
}

const cadastrarAluno = () => {
    console.log("Aluno cadastrado")
    const nome = document.getElementsByClassName("name")[0].value.trim().toUpperCase()
    const media = Number(document.getElementsByClassName("mean")[0].value.replace(",","."))
    let situacao
    if(media < 6){
        situacao = "REPROVADO"
    }else{
        situacao = "APROVADO"
    }
    // console.log(nome, media, sitacao)
    const id = returnLastID(alunos)

    const aluno = {
        id: id,
        nome: nome,
        media: media,
        situacao: situacao
    }
    alunos.push(aluno)
    console.log(alunos)
}

const alterarAluno = () => {
    const id = document.getElementsByName("id")[0].value
    if(id){
        const nome = document.getElementsByName("name")[0].value.trim().toUpperCase()
        const media = Number(document.getElementsByName("mean")[0].value.replace(",", "."))
        let situacao
        if(media >= 6){
            situacao = "APROVADO"
        }else{
            situacao = "REPROVADO"
        }
        const retorno = alterarArray(alunos, id, nome, media, situacao )
        if(retorno){
            exibirTabela(alunos)
            limparCampos()
        }else{
            exibirTabela([])
        }
    }else{
        exibirTabela([])
    }
}

const pesquisarAluno = () => {
    const id = Number(window.prompt("Digite o código do aluno"))
    if(id){
        const data = pesquisarArray(id)
        if(!data){
            exibirTabela([])
        }else{
            exibirTabela([data])
            document.getElementsByName("id")[0].value = data.id
            document.getElementsByName("name").value = data.nome
            document.getElementsByName("mean")[0].value = data.media
        }
    }else{
        console.log("Nenhum ID digitado!")
        document.querySelector("form").reset()
    }
} 

const pesquisarArray = (id) => {
    for(let item in alunos){
        if(alunos[item].id === id){
            return alunos[item]
        }
    }
    return false
}

const listarAlunos = () => {
    exibirTabela(alunos)
    limparCampos()
}

const removerAluno = () =>{
    const id = Number(window.prompt("Digite o ID a ser REMOVIDO"))
    if(id){
        for(let item in alunos){
            if(alunos[item].id === id){
                alunos.splice(item, 1)
                return exibirTabela(alunos)
            }
    }
    }else{
        console.log("ID não encontrado")
    }
}

const returnLastID = (array) => {
    if(!array.length){
        return 1
    }else{
        return array[array.length - 1].id + 1
    }
}

const exibirTabela = (array) => {
    const tbody = document.querySelector('table tbody')
    tbody.innerHTML = ""
    if(!array.length){
        tbody.innerHTML = `
        <tr>
            <td colspan="4">Aluno não encontrado</td>
        </tr>
        `
    }else{
        for(let i = 0; i < array.length; i++){
            tbody.innerHTML +=
            `
            <tr>
                <td>${array[i].id}</td>
                <td>${array[i].nome}</td>
                <td>${array[i].media}</td>
                <td>${array[i].situacao}</td>
            `
        }
    }
}

function limparCampos(){
    document.querySelector("form").reset()
    document.getElementsByName("name")[0].focus()
}