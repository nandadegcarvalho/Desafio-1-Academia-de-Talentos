var botaoAdicionar = document.querySelector("#adicionar-cliente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var CPF = form.CPF.value;
    var nascimento = form.nascimento.value;
    var renda = form.renda.value;
      
    var clienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var cpfTd = document.createElement("td");
    var nascimentoTd = document.createElement("td");
    var rendaTd = document.createElement("td");
  
    nomeTd.textContent = nome;
    cpfTd.textContent = CPF;
    nascimentoTd.textContent = nascimento;
    rendaTd.textContent = renda;
    
    clienteTr.appendChild(nomeTd);
    clienteTr.appendChild(cpfTd);
    clienteTr.appendChild(nascimentoTd);
    clienteTr.appendChild(rendaTd);

    var tabela = document.querySelector("#tabela-clientes");

    tabela.appendChild(clienteTr);
});
