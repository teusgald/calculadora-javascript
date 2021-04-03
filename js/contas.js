function calcular(tipo, valor){

    if(tipo === 'acao'){
        
        if(valor === 'c'){
            document.getElementById('entrada').value = ''
        }else if(valor === '-' || valor === '+' || valor === '*' || valor === '/' || valor === '.'){

            document.getElementById('entrada').value += valor
        }else if(valor === '='){
            var valorCampo = eval(document.getElementById('entrada').value)

            document.getElementById('entrada').value = valorCampo
        }
    }
    
    if(tipo === 'valor'){
        document.getElementById('entrada').value += valor
    }

}