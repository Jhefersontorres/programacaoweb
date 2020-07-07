$.support.cors = true;

$('#btConsultarCEP').click(
    function(){        
        cep = document.getElementById("inputCEP").value;

        if (cep!=""){
            $.ajax({
                type:'GET',
                url:'https://viacep.com.br/ws/'+cep+'/json/',
                headers:{

                },
                success: function(data){
                    document.getElementById("inputBairro").value        = data.bairro;
                    document.getElementById("inputEndereco").value      = data.logradouro;
                    document.getElementById("inputCidade").value        = data.localidade;
                    document.getElementById("inputComplemento").value   = data.complemento;
                    document.getElementById("inputEstado").value        = data.uf;
                    document.getElementById("inputIBGE").value          = data.ibge;                                

                },
                error: function(data){
                    document.getElementById("retorno").innerHTML = '<b style="color:red">Erro ao Consultar!</b>'
                }
            })
        } else {
            document.getElementById("retorno").innerHTML = '<b style="color:red">Favor Informar o CEP!</b>'        
        }
    }
);


