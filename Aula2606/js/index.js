$('#btnEntrar').click(
    function(){
        document.getElementById("messagem").innerHTML ='';

        var validacaoImput = ((document.getElementById("InputEmail").value != '') &&
             (document.getElementById("InputPassword").value !='')) ? alert('dados ok') : 
             document.getElementById("messagem").innerHTML = '<b style="color:red">Informe seu email</br>';

        login = {
            'email':document.getElementById("InputEmail").value,
            'senha':document.getElementById("InputPassword").value
        };
      
        var requesAjax = ((login.email == 'jheferson@email.com') && (login.senha == '1234')) ? alert('Acesso permitido Ola Jheferson') : 
                          document.getElementById("messagem").innerHTML = '<b style="color:red">Usuario e Senha invalido</br>';
    }
)


