$(document).ready(function(){
    
    $('body').on('click', '#consultar', function(){
        consultaCep(); 

        //alert(123);
    });

    function consultaCep(){
        const cep = $('#CEP').val(); 

        if(cep.length !== 8){
            alert('Informe um CEP válido!');
            return false; 
        }

        loading();
        setTimeout(function(){

        $.ajax({
            url:'https://viacep.com.br/ws/'+cep+'/json/',
            type: 'GET', 
            dataType: 'json', 
            success: function(data){
                console.log(data);
                $('body').find('#result').html('<h2>Resultado da consulta!</h2>'
                                                + '<p>CEP: '+data.cep+'</p>'
                                                + '<p>Logradouro: '+data.logradouro+'</p>'
                                                +'<p>Bairro: '+data.bairro+'</p>'
                                                +'<p>Cidade: '+data.localidade+'</p>'                                                
                                                +'<p>Estado: '+data.uf+'</p>'                                                
                                                +'<p>IBGE: '+data.ibge+'</p>'                                                
                                                );  

            }
        })
    },2500);        
    }

    function loading(){
        $('#result').html('<img src="Loading_blu.gif" />')
    }

    $('body').on('click', '#modo-noturno', function(){
          $('body').toggleClass('dark-mode'); 
    });
})