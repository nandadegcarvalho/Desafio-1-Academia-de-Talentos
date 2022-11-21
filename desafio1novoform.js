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

    somarAsRendas()

    form.reset()
});

    function ajustaRenda(renda){
    let rendaConvertida = parseFloat(renda).toLocaleString('pt-br',{style: 'decimal',minimumFractionDigits:2})
    return rendaConvertida
}

    function somarAsRendas(){
        var clientes = document.querySellectorAll(".cliente")
        var somaFloat = 0
        console.log('clientes:',clientes)
        console.log('somaFloat;',somaFloat)

        for (var i = 0; i < clientes.length; i++) {
            var cliente = clientes[i];
            var tdRenda = cliente.querySelector(".info-renda");
            var rendaString = tdRenda.textContent
            var rendaFloat = parseFloat(rendaString.toString().replace(/\./g,'').replace(',','.'))
            somaFloat = somaFloat + somaFloat
            console.log('cliente:', cliente)
            console.log('tdRenda:',tdRenda)
            console.log('rendaString:',rendaString)
            console.log('rendaFloat',rendaFloat)

        }

        var somatorioRendas = document.querySelector("#totalizadorRendas")
        var somaString = somaFloat.toLocaleString('pt-br',{style: 'decimal',minimumFractionDigits:2})
        somatorioRendas.innerHTML = somaString
    }
    

