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
        $.ajax({
            url:'https://viacep.com.br/ws/'+cep+'/json/',
            type: 'GET', 
            dataType: 'json', 
            success: function(data){
                console.log(data); 

            }
        })
    }



})