
    function um(){
            let numbe = document.getElementById('num')
            numbe.innerHTML += 1
        }
    function dois(){
        let numbe = window.document.getElementById ('num')
        numbe.innerHTML += 2
    }
    function tres(){
        let numbe = window.document.getElementById ('num')
        numbe.innerHTML += 3 
    }
    function quatro(){
        let numbe = window.document.getElementById ('num')
        numbe.innerHTML += 4
    }
    function cinco(){
        let numbe = window.document.getElementById ('num')
        numbe.innerHTML += 5
    }
    function seis(){
        let numbe = window.document.getElementById ('num')
        numbe.innerHTML += 6
    }
    function sete(){
        let numbe = window.document.getElementById ('num')
        numbe.innerHTML += 7
    }
    function oito(){
        let numbe = window.document.getElementById ('num')
        numbe.innerHTML += 8 
    }
    function nove(){
        let numbe = window.document.getElementById ('num')
        numbe.innerHTML += 9
    }
    function zero(){
        let numbe = window.document.getElementById ('num')
        numbe.innerHTML += 0
    }
    function limpar(){
        window.document.getElementById ('num').innerHTML = '';
    }
    function mult(){
        let nve = window.document.getElementById ('num')
        nve.innerHTML += '*'
        
    }
     
    function dividir(){
        let nd = window.document.getElementById ('num')
        nd.innerHTML += '/'
    }
  
    function menos(){
        let nme = window.document.getElementById ('num')
        nme .innerHTML += '-'
    }
    function mais(){
        let nma = window.document.getElementById ('num')
        nma.innerHTML += '+'
    }
    function virgula(){
        let nv = window.document.getElementById ('num')
        nv.innerHTML += '.'
    }
    function back(){
        let numb = window.document.getElementById ('num').innerHTML
        window.document.getElementById ('num').innerHTML = numb.substring(0 , numb.length -1)
        }
    function resultado(){
        let numr = window.document.getElementById ('num').innerHTML
        if (numr){
            window.document.getElementById ('num').innerHTML = eval(numr)
        } else {
            window.document.getElementById ('num').innerHTML = '0'
        }}
    
        function porcento(){
        let np = window.document.getElementById ('num').innerHTML
        if (np => 1) { 
            document.getElementById ('num').innerHTML = eval(np) / 100 
        } else { document.getElementById ('num')= '0'
    }
        }
