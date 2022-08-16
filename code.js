const palavras = ["dinossauro", "calopsita", "papagaio", "cobra", "falcao", "lesma", "hipopotamo"]
//let input = document.getElementById('letra')
let escolha = Math. floor(Math. random() * palavras. length)
let palavraVez = palavras[escolha]
let y = 50
let vida = 7;
let vidaPlus = palavraVez.length;
const input = document.getElementById('letra')
let palavraAdicionada = document.getElementsByClassName('adicionar__escondido')[0]

palavraAdicionada.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
        e.preventDefault();
    }
})
input.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
        e.preventDefault();
    }
})
function checkChar(e) {
    const char = String.fromCharCode(e.keyCode)

    const pattern = '[a-z]'
    if(char.match(pattern)) {
        return true
    }
}

    function chutar() {
    
    let checagem = false;
    if(input.value != (input.length == 0)) {
    for(let i = 0; i < palavraVez.length;i++){
            if(palavraVez[i] == input.value) {
            desenharLetras(input.value.toLocaleUpperCase())
             } 
             if(palavraVez.split("") && palavraVez[0] != input.value && palavraVez[1] != input.value && palavraVez[2] != input.value && palavraVez[3] != input.value && palavraVez[4] != input.value && palavraVez[5] != input.value && palavraVez[6] != input.value && palavraVez[7] != input.value && palavraVez[8] != input.value && palavraVez[9] != input.value){
                 checagem = true;
             }
    } 
}
    if(checagem == true) {
        y = y + 50;
        vida = vida - 1;
        desenharLetrasErradas(input.value.toLocaleUpperCase(), y)
        desenharCorpo(vida);
    
    input.value = '';
    }
}

    function desenharQuadro() {
        var quadro = document.getElementsByClassName('container')[0]
        var quadroCanvas = document.getElementsByClassName('container')[1]
        var botao = document.getElementsByClassName('inicio')[0]
        var tela = document.querySelector('canvas');
        var pincel = tela.getContext('2d')
        pincel.clearRect(0,0,600,400);
        pincel.fillStyle = 'black'
        pincel.fillRect(100, 250, 100, 10)
        pincel.fillStyle = 'black'
        pincel.fillRect(150, 50, 10, 200)
        pincel.fillStyle = 'black'
        pincel.fillRect(150, 50, 200, 10)
        pincel.fillStyle = 'black'
        pincel.fillRect(350, 50, 10, 50)
        botao.style.display = "none";
        quadro.style.display = "flex";
        quadro.style.flexDirection = "column";
        quadro.style.alignItems = "center";
        quadroCanvas.style.display = "flex"
        quadroCanvas.style.marginBottom = "10px";
        aparecer();
        desenharTracos(palavraVez);
        
        
    }
        
    function aparecer() {
        var inputChutar = document.getElementsByClassName("container")[2] 
        var botaoChutar = document.getElementsByClassName("container")[3]
        var botaoRecomecar = document.getElementsByClassName("container")[4]
        inputChutar.style.display = "flex"
        inputChutar.style.marginBottom = "10px"
        botaoChutar.style.display = "flex"
        botaoChutar.style.backgroundColor = "#052051";
        botaoChutar.style.color = "#CED4DA"
        botaoChutar.style.border = "#052051";
        botaoChutar.style.borderRadius = "5px";
        botaoChutar.style.padding = "10px"
        botaoRecomecar.style.display = "flex"

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
            pincel.arc(355, 120, 20, 0, 2 * 3.14)
            pincel.moveTo(360, 129);
            pincel.arc(355, 135, 8, 0, -3, Math.PI)
            pincel.moveTo(350, 115);
            pincel.arc(350, 115, 3, 0, Math.PI * 2)
            pincel.moveTo(360, 115);
            pincel.arc(360, 115, 3, 0, Math.PI * 2)
            pincel.stroke()
        } else if (vida == 5) {
            pincel.fillStyle = 'black';
            pincel.beginPath()
            pincel.moveTo(350, 140)
            pincel.lineTo(350, 200)
            pincel.closePath();
            pincel.stroke()
        } else if (vida == 4) {
            pincel.fillStyle = 'black';
            pincel.beginPath()
            pincel.moveTo(350, 200)
            pincel.lineTo(300, 250)
            pincel.closePath();
            pincel.stroke()
        } else if (vida == 3) {
            pincel.fillStyle = 'black';
            pincel.beginPath()
            pincel.moveTo(350, 200)
            pincel.lineTo(395, 250)
            pincel.closePath();
            pincel.stroke();
        } else if (vida == 2) {
            pincel.fillStyle = 'black';
            pincel.beginPath()
            pincel.moveTo(350, 140)
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
        pincel.clearRect(0,0,600,400);
        pincel.drawImage(tumulo,300,164)
        pincel.font='20px Georgia';
        pincel.fillStyle = "black"
        pincel.fillText(`Você perdeu! A palavra era ${palavraVez.toLocaleLowerCase()}!`, 120, 150)
        
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

    function aparecerAdicionar() {
        palavraAdicionada.style.display = "flex";
        palavraAdicionada.style.alignItems = "center";
    }

    function adicionar() {
        if("" != palavraAdicionada.value) {
        palavras.push(palavraAdicionada.value);
        console.log(palavras)
        palavraAdicionada.value = ""
        }
    }
    