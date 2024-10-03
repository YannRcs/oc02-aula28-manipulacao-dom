const dadosPessoa = {
    "nome": "Yann da Rosa",
    "email": "yann@email.com",
    "telefone": "46987654321",
    "cpf": "28021746068",
    "endereco": "Rua de teste do Yann",
    "numero": 25,
    "complemento": "carinha que mora logo ali",
    "cep": 123456789,
    "bairro": "Centro",
    "cidade": "Pato Branco",
    "estado": "Paraná",
    "sexo": "Masculino",
    "estadoCivil": "Casado",
    "profissao": "Analista de Suporte",
    "dataNascimento": "27/05/2000",
    "urls": [
        "https://github.com/yanndarosa", "https://linkedin.com/yanndarosa"
    ]

}
//Montagem da DIV title

const divTitle = document.getElementById("title")

const h1Nome = document.createElement("h1")
h1Nome.textContent = dadosPessoa.nome
divTitle.appendChild(h1Nome)

const spanProfissao = document.createElement("span")
spanProfissao.textContent = dadosPessoa.profissao
divTitle.appendChild(spanProfissao)


//Montagem da DIV contact
const divContact = document.getElementById("contact")

//lista não ordenada
const listaContato = document.createElement("ul")

//item de lista para o endereço completo
const itemEndereco = document.createElement("li")
itemEndereco.textContent = `${dadosPessoa.endereco}, ${dadosPessoa.numero}`
listaContato.appendChild(itemEndereco)

// item de lista para o email
const itemEmail = document.createElement("li")
itemEmail.textContent = dadosPessoa.email
listaContato.appendChild(itemEmail)


// item de lista para o telefone
const itemTelefone = document.createElement("li")
itemTelefone.textContent = dadosPessoa.telefone
listaContato.appendChild(itemTelefone)

// item de lista com o link para cada link da lista de links
for (url of dadosPessoa.urls){
    const itemLink = document.createElement("li")
    const ancora = document.createElement("a")
    ancora.textContent = url
    ancora.setAttribute("href", url)
    itemLink.appendChild(ancora)
    listaContato.appendChild(itemLink)
}

divContact.appendChild(listaContato)



