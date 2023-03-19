
$(function(){
  
  // funçao usada para abrir formulario após o click
  abrirformulario();

  function abrirformulario(){
    $('#validar').click(function(){

        $('#formulario').fadeIn(0700);

    })

    // funçao usada para fechar o formulario após o click
    fecharformulario();

    function fecharformulario(){
        $('#fechar').click(function(){
        $('#formulario').fadeOut(600);
      })
    }
  }

  //funçao para salvar o valor dos imputs
  salvarvalor();
  function salvarvalor(){
    $('#acao').click(function(){

      var Nome = nome = $('#nome').val()
      var Numero = num = $('#num').val()
      var Email = email = $('#email').val()

      // validando campos se estiverem vazio
      
      if(Nome === "" && Numero === "" && Email === ""){
        $('#alerta').fadeIn(1000)
        function erro(){ 
          $('#formulario').css('border','1px solid red') 
          $("input").css('color','red')
          
      }
        return erro()  
        
      }
      

      //validando campo "nome" de Formulario

      var print = prompt('Seu nome é ' +" "+ Nome+"?"+ ', se sim digite "Sim" para a confirmaçao do formulário !')
      

      if(print === "Sim" || print === 'sim'){
        alert('Por Enquanto Tudo Certo')
        var print_1 = prompt('Seu Telefone é ' +" "+ Numero+"?"+ ', se sim digite "Sim" para a confirmaçao do formulário !')
      }else{
        alert('Tente novamente ,algo deu errado :(')
      }

       //validando campo "Num" de Formulario

      if(print_1 === "Sim" || print_1 === 'sim'){
        alert('Por Enquanto Tudo Certo!')
        var print_2 = prompt('Seu Email é ' +" "+ Email+"?"+ ', se sim digite "Sim" para a confirmaçao do formulário !')
      }else{
        alert('Tente novamente ,algo deu errado :(')
      }
      
      // validando campo de email
      if(print_2 === "Sim" || print_2 === 'sim'){
        alert('Formulário Enviado com sucesso !')
        return 
      }else{
        alert('Tente novamente ,algo deu errado :(')
      }
        return false
    });
    
  }


})