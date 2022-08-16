const palavras = ["dinossauro", "calopsita", "papagaio", "cobra", "falcao", "lesma", "hipopotamo"]
let input = document.getElementById('letra')
let escolha = Math. floor(Math. random() * palavras. length)
let palavraVez = palavras[escolha]
let y = 50
let vida = 7;
let vidaPlus = palavraVez.length;

    function chutar() {
    
    let checagem = false;
    for(let i = 0; i < palavraVez.length;i++){
            if(palavraVez[i] == input.value) {
            desenharLetras(input.value)
             } 
             if(palavraVez.split("") && palavraVez[0] != input.value && palavraVez[1] != input.value && palavraVez[2] != input.value && palavraVez[3] != input.value && palavraVez[4] != input.value && palavraVez[5] != input.value && palavraVez[6] != input.value && palavraVez[7] != input.value && palavraVez[8] != input.value && palavraVez[9] != input.value){
                 checagem = true;
             }
    } 
    
    if(checagem == true) {
        y = y + 50;
        vida = vida - 1;
        desenharLetrasErradas(input.value, y)
        desenharCorpo(vida);
    }
}

    function desenharQuadro() {
        var quadro = document.getElementById('quadro')
        var botao = document.getElementById('inicio')
        var tela = document.querySelector('canvas');
        var pincel = tela.getContext('2d')
        pincel.fillStyle = 'white';
        pincel.fillRect(0, 0, 600, 400);
        pincel.fillStyle = 'black'
        pincel.fillRect(100, 250, 100, 10)
        pincel.fillStyle = 'black'
        pincel.fillRect(150, 50, 10, 200)
        pincel.fillStyle = 'black'
        pincel.fillRect(150, 50, 200, 10)
        pincel.fillStyle = 'black'
        pincel.fillRect(350, 50, 10, 50)
        botao.style.display = "none";
        quadro.style.position = "absolute";
        quadro.style.top = 0;
        quadro.style.bottom = "15px";
        quadro.style.left = 0;
        quadro.style.right = 0;
        quadro.style.margin = 'auto';
        aparecer();
        desenharTracos(palavraVez)
        
        
    }
        
    function aparecer() {
        var botaoChutar = document.getElementById("container")
        botaoChutar.style.display = "contents";
        botaoChutar.style.position = "absolute";
        botaoChutar.style.top = 0;
        botaoChutar.style.bottom = 15;
        botaoChutar.style.left = 15;
        botaoChutar.style.right = 0;

    }
    
    
    function desenharTracos(desenho) {
        let x = 100
        var tela = document.querySelector('canvas');
        var pincel = tela.getContext('2d')
        for(let tamanho = 0; tamanho < desenho.length; tamanho++) {
        pincel.fillStyle = 'black'
        pincel.fillRect(x, 370, 30, 5)
        x = x + 50
        }
        
    }

    function desenharLetras(letra){
        var tela = document.querySelector('canvas')
        var pincel = tela.getContext('2d')
        pincel.font='40px Georgia';
        
        if(palavraVez[0] == input.value) {
        pincel.fillText(letra, 100, 370)
        } 
        if(palavraVez[1] == input.value) {
            pincel.fillText(letra, 150, 370)
        } 
        if(palavraVez[2] == input.value) {
            pincel.fillText(letra, 200, 370)
        }
        if(palavraVez[3] == input.value) {
            pincel.fillText(letra, 250, 370)
        } 
        if(palavraVez[4] == input.value) {
            pincel.fillText(letra, 300, 370)
        } 
        if(palavraVez[5] == input.value) {
            pincel.fillText(letra, 350, 370)
        } 
        if(palavraVez[6] == input.value) {
            pincel.fillText(letra, 400, 370)
        } 
        if(palavraVez[7] == input.value) {
            pincel.fillText(letra, 450, 370)
        } 
        if(palavraVez[8] == input.value) {
            pincel.fillText(letra, 500, 370)
        } 
        if(palavraVez[9] == input.value) {
            pincel.fillText(letra, 550, 370)
        }
        vidaPlus = vidaPlus - 1;
        
        console.log(vidaPlus)
        if(vidaPlus == 0) {
            pincel.fillStyle = "white"
            pincel.fillRect(0, 0, 600, 400)
            fundoVitoria()
        }
    }

    function desenharLetrasErradas(letra, y) {
        var tela = document.querySelector('canvas')
        var pincel = tela.getContext('2d')
        pincel.font='40px Georgia'; 
        if (palavraVez.value != letra) {
            pincel.fillText(letra, 10, y)
        }
    }

   
    function desenharCorpo(vida) {
        var tela = document.querySelector('canvas')
        var pincel = tela.getContext('2d')
        if(vida == 6) {
            pincel.beginPath()
            pincel.arc(355, 110, 20, 0, 2 * 3.14)
            pincel.stroke()
        } else if (vida == 5) {
            pincel.fillStyle = 'black';
            pincel.fillRect(350, 125, 10, 90)
        } else if (vida == 4) {
            pincel.fillStyle = 'black';
            pincel.beginPath()
            pincel.moveTo(360, 200)
            pincel.lineTo(300, 255)
            pincel.closePath();
            pincel.stroke()
        } else if (vida == 3) {
            pincel.fillStyle = 'black';
            pincel.beginPath()
            pincel.moveTo(360, 205)
            pincel.lineTo(400, 255)
            pincel.closePath();
            pincel.stroke();
        } else if (vida == 2) {
            pincel.fillStyle = 'black';
            pincel.beginPath()
            pincel.moveTo(350, 150)
            pincel.lineTo(300, 190)
            pincel.closePath();
            pincel.stroke()
        } else if (vida == 1) {
            pincel.fillStyle = 'black';
            pincel.beginPath()
            pincel.moveTo(350, 140)
            pincel.lineTo(400, 190)
            pincel.closePath();
            pincel.stroke()
        } else {
            pincel.fillStyle = "white"
            pincel.fillRect(0, 0, 600, 400)
            fundoDerrota();
        }

    }
    
    function fundoDerrota() {
        var tela = document.querySelector('canvas')
        var pincel = tela.getContext('2d')
        let tumulo = new Image()
        tumulo.src = "tumulo.png"
        tumulo.onload = () => {
        pincel.drawImage(tumulo,300,174)
        pincel.font='20px Georgia';
        pincel.fillStyle = "black"
        pincel.fillText(`Você perdeu! A palavra era ${palavraVez}!`, 120, 150)
        }
    }
    
    function fundoVitoria() {
        var tela = document.querySelector('canvas')
        var pincel = tela.getContext('2d')
        let feliz = new Image()
        feliz.src = "feliz.jpg"
        feliz.onload = () => {
        pincel.drawImage(feliz, 0, 0)
        pincel.font='30px Georgia';
        pincel.fillStyle = "black"
        pincel.fillText(`Você venceu! A palavra era ${palavraVez}!`, 100, 150)
        }
        
    }
    