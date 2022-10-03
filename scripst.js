const dica = document.querySelector(".dica");
const alerta = document.querySelector(".alerta");
const getContainer = document.querySelector(".container");
const getDivChutes = document.querySelector('.divChutes');
const inputChute = document.querySelector(".inputChute");
const buttonChute = document.querySelector(".buttonChute");
let btnNovoJogo = document.querySelectorAll('.btnJogarNovamente');
let h1 = document.querySelector('h1');
let nRandomico = Math.floor(Math.random() * 101);
//console.log(`Número Randomico ${nRandomico}`);
let contChutes = 1;

function desabilitar(){
    //desabilitar o button e o input
    inputChute.disabled = true;
    buttonChute.disabled = true;
}
function perdeu(){
    dica.innerText='Não foi dessa vez! Seus chutes acabaram e você não acertou o número.';
    dica.style.color = 'tomato';
    h1.style.color = 'tomato';
    getContainer.style.border = '2px solid tomato';
    desabilitar();
}
function ganhou(){
    dica.innerText='Você acertou o chute, parabéns!';
    dica.style.color = 'green';
    h1.style.color = 'green';
    getContainer.style.border = '2px solid green';
    desabilitar();
}

function inputChange(){
    var inputValido = inputChute.value.trim().length>0;
    if(inputValido){
        inputChute.classList.remove("validacao");
    }
} 
function chutar(){
   /***cria as divs e mostra os chutes na tela****/
   if(inputChute.value.trim().length>0){
            if(contChutes == 1){
            getDivChutes.textContent = 'Últimos chutes: ';
            }    
            const addSpan = document.createElement('span'); 
            addSpan.classList.add('spanChutes');
            addSpan.innerText = inputChute.value;
            let chute = inputChute.value; 
            getDivChutes.appendChild(addSpan);
                    
            if(contChutes>=10 && chute != nRandomico){
                perdeu();
                jogarNovamente();
            }else if(chute==nRandomico){
                ganhou();
                jogarNovamente();
            }else if(chute>nRandomico){
                dica.innerText='seu chute está alto';
                dica.style.color = 'darksalmon';
                h1.style.color = 'darksalmon';
                getContainer.style.border = '2px solid darksalmon';
                inputChute.style.outlineColor = 'darksalmon';
                inputChute.style.border = '1px solid darksalmon';
                buttonChute.style.background = 'darksalmon';
                
                
            }else if(chute<nRandomico){
                dica.innerText='seu chute está baixo';
                dica.style.color = 'darkkhaki';
                h1.style.color = 'darkkhaki';
                getContainer.style.border = '2px solid darkkhaki';
                inputChute.style.outlineColor = 'darkkhaki';
                inputChute.style.border = '1px solid darkkhaki';
                buttonChute.style.background = 'darkkhaki';
                
            
            }
            contChutes ++;
            inputChute.value = '';
            inputChute.focus();
    }else{
        inputChute.classList.add("validacao");
    }
          
}
function jogarNovamente(){
    inputChute.style.outlineColor = '';
    inputChute.style.border = '';
    buttonChute.style.background = '';
    buttonChute.style.border = '2px solid ';
    btnNovoJogo = document.createElement('input');
    btnNovoJogo.type = 'button';
    btnNovoJogo.classList.add("btnJogarNovamente");
    btnNovoJogo.value = 'Jogar novamente';
    getContainer.appendChild(btnNovoJogo);
    btnNovoJogo.addEventListener("click", habilitarCampos);
}
function habilitarCampos(){
    nRandomico = Math.floor(Math.random() * 101);
    contChutes = 1;
    inputChute.disabled = false;
    buttonChute.disabled = false;
    getDivChutes.textContent = '';
    dica.textContent = '';
    h1.removeAttribute('style');
    getContainer.removeAttribute('style');
    inputChute.removeAttribute('style');
    btnNovoJogo.remove();
    
}
buttonChute.addEventListener("click", chutar);
inputChute.addEventListener("change", inputChange);

