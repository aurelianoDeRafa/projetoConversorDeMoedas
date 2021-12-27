
var clickMoedas = document.querySelector('.area-moedas--bandeiras');



   


    clickMoedas.addEventListener('click', (event)=>{
        converMoedas[event.target.id]();
        console.log(converMoedas)
    });

    const converMoedas = {
        'dolar': ()=> { 
            const valorDigitado = parseFloat(document.getElementById('valor').value);
            const resultadoDaConver = document.querySelector('.convertido');
            const valorMoeda = document.querySelector('.valorDaMoeda');

            const moeda = 5.63

            if(valorDigitado > 0){
            const valor = valorDigitado * moeda;
            resultadoDaConver.innerHTML = "R$:" + valor.toFixed(2);
            valorMoeda.innerHTML = "Valor do Dólar " + moeda;
            }else{
                resultadoDaConver.innerHTML = "Digite um valor para converter";
            }
         },
         'libras': ()=> { 
            var valorDigitado = parseFloat(document.getElementById('valor').value);
            const resultadoDaConver = document.querySelector('.convertido');
            const valorMoeda = document.querySelector('.valorDaMoeda');

            const moeda = 7.56;

            if(valorDigitado > 0){
            var valor = valorDigitado * moeda;
            resultadoDaConver.innerHTML = "R$:" + valor.toFixed(2);
            valorMoeda.innerHTML = "Valor da Libras " + moeda;
            }else{
                resultadoDaConver.innerHTML = "Digite um valor para converter";
            }
         },
         'euro': ()=> { 
            var valorDigitado = parseFloat(document.getElementById('valor').value);
            const resultadoDaConver = document.querySelector('.convertido');
            const valorMoeda = document.querySelector('.valorDaMoeda');

            const moeda = 6.37;

            if(valorDigitado > 0){
            var valor = valorDigitado * moeda;
            resultadoDaConver.innerHTML = "R$:" + valor.toFixed(2);
            valorMoeda.innerHTML = "Valor do Euro " + moeda;
            }else{
                resultadoDaConver.innerHTML = "Digite um valor para converter";
            }
         },
         'renmi': ()=> { 
            var valorDigitado = parseFloat(document.getElementById('valor').value);
            const resultadoDaConver = document.querySelector('.convertido');
            const valorMoeda = document.querySelector('.valorDaMoeda');

            const moeda = 0.88;

            if(valorDigitado > 0){
            var valor = valorDigitado * moeda;
            resultadoDaConver.innerHTML = "R$:" + valor.toFixed(2);
            valorMoeda.innerHTML = "Valor do Renminbi " + moeda;
            }else{
                resultadoDaConver.innerHTML = "Digite um valor para converter";
            }
         }
    }


    //dava pra fazer assim também 
    /*function libras () {
    let resultadoDaConver = document.querySelector('.convertido');
    let valorDigitado = parseFloat(document.getElementById('valor').value);

    let valor = valorDigitado * 5.55 ;

    let resultado = valor.toFixed(2);

    resultadoDaConver.innerHTML = resultado;

}*/