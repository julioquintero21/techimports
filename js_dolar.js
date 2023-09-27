
fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL')
    .then(resposta => resposta.json())
    .then(economia => {
        console.log(economia);

        var num1 = parseFloat(document.getElementById("valorDolar").innerHTML);
        var num2 = parseFloat(economia.USDBRL.bid);

        console.log("num1 = " +num1)
        console.log("num2 = " +num2)

        var multiplicacao = num1 * num2;

        console.log("multiplicacao = " +multiplicacao)

        document.getElementById("valorReal").innerHTML = ("R$") + multiplicacao.toFixed(2);
    })
    .catch(error => {
        console.error('Ocorreu um erro:', error);
    });







function enderecoDoFrete() {
    var cep = document.getElementById("Cep0").value;
    console.log(cep);

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(corpo => {
            console.log(corpo);

            document.getElementById("Rua").value = corpo.logradouro;
            document.getElementById("Bairro").value = corpo.bairro;
            document.getElementById("Cidade").value = corpo.localidade;
            document.getElementById("Estado").value = corpo.uf;

            var estado = corpo.uf;
            var frete = "";

             
             if(estado == "MA" || estado == "PI" || estado == "CE" || estado == "RN" || estado == "PB" ||
            estado == "PE" || estado == "AL" || estado == "SE" || estado == "BA") {
                frete = "Frete: 18,10 R$";
            } 
            if (estado == "GO" || estado == "MT" || estado == "MS" || estado == "DF") {
                frete = "Frete: 11,99 R$";
            }
             if (estado == "PR" || estado == "SC" || estado == "RS") {
                frete = "Frete: 15,60 R$.";
            } 
            if (estado == "ES" || estado == "MG" || estado == "RJ" || estado == "SP") {
                frete = "Frete: grátis";
            } 
            if (estado == "AC" || estado == "AP" || estado == "AM" || estado == "PA" || 
             estado == "AM" || estado == "RO" || estado == "RR" || estado == "TO") {
                frete = "Frete: 21,90 R$";
            }
            
            document.getElementById("frete").value = frete;
        })
        .catch(error => {
            console.error("Erro ao buscar o CEP:", error);
            document.getElementById("frete").value = "Erro ao buscar o CEP.";
        });
    }

    