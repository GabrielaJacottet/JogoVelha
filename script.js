let player1 = true;

let jogadaVencedora1 = ["l1c1","l1c2","l1c3"];
let jogadaVencedora2 = ["l1c1","l2c1","l3c1"];
let jogadaVencedora3 = ["l1c1","l2c2","l3c3"];
let jogadaVencedora4 = ["l1c2","l2c2","l3c2"];
let jogadaVencedora5 = ["l1c3","l2c3","l3c3"];
let jogadaVencedora6 = ["l2c1","l2c2","l2c3"];
let jogadaVencedora7 = ["l3c1","l2c2","l1c3"];
let jogadaVencedora8 = ["l3c1","l3c2","l3c3"];
let arrayVencedor = [];


let contadorPlayer1 = 0;
let contadorPlayer2 = 0;

const celula  = document.querySelectorAll(".celula");

let jaClicou = false;

let id;

let posPlayer1 = [];
let posPlayer2 = [];

let posPlayerTotal = [];

celula.forEach((celula) => 
{   
    celula.addEventListener("click", () => 
    {
        if(player1)
        {    
            id = celula.getAttribute("id");
            verificaSeJaClicou(posPlayerTotal);

            if(!jaClicou)
            {
                celula.innerHTML = "O";                   
                posPlayer1.push(id);
                celula.classList.add("player1");
                player1 = false;
                contadorPlayer1++; 
                posPlayerTotal.push(id); 
            }
        }
        else
        {     
            id = celula.getAttribute("id");
            verificaSeJaClicou(posPlayerTotal);

            if(!jaClicou)
            {
                console.log("entrei");
                celula.innerHTML = "X";
                posPlayer2.push(id);
                celula.classList.add("player2");
                player1 = true;
                contadorPlayer2++;
                posPlayerTotal.push(id); 
            }  
        }

        if(contadorPlayer1 >= 3 && !player1 && !jaClicou)
        {                      
            verificaJogada(posPlayer1,"Player 1");
            
        }else if(contadorPlayer2 >= 3 && player1 && !jaClicou)
        {
            verificaJogada(posPlayer2, "Player 2");
        }
    })
    
})


function verificaSeJaClicou(posplayer)
{
    for (let j = 0; j < posplayer.length; j++)
    {
        if (id === posplayer[j])
        {
            jaClicou = true;
            break;
        }
        else
        {
            jaClicou = false;
        }
    }    
}    

function verificaJogada(posplayer, player)
{

    for (let i = 0; i < jogadaVencedora1.length; i++)
    {
        for (let j = 0; j < posplayer.length; j++)
        {
            if (jogadaVencedora1[i] === posplayer[j])
            {
                arrayVencedor.push(posplayer[i]);                                           
            }
        }
    }

    if (jogadaVencedora1.length === arrayVencedor.length)
    {
        mensagemVencedor(player);
    }
    else
    {
        limpaArray();
    }

    for (let i = 0; i < jogadaVencedora2.length; i++)
    {
        for (let j = 0; j < posplayer.length; j++)
        {
            if (jogadaVencedora2[i] === posplayer[j])
            {
                arrayVencedor.push(posplayer[i]);                                           
            }
        }
    }

    if (jogadaVencedora2.length === arrayVencedor.length)
    {
        mensagemVencedor(player);
    }
    else
    {
        limpaArray();
    }

    for (let i = 0; i < jogadaVencedora3.length; i++)
    {
        for (let j = 0; j < posplayer.length; j++)
        {
            if (jogadaVencedora3[i] === posplayer[j])
            {
                arrayVencedor.push(posplayer[i]);                                           
            }
        }
    }

    if (jogadaVencedora3.length === arrayVencedor.length)
    {
        mensagemVencedor(player);
    }
    else
    {
        limpaArray();
    }

    for (let i = 0; i < jogadaVencedora4.length; i++)
    {
        for (let j = 0; j < posplayer.length; j++)
        {
            if (jogadaVencedora4[i] === posplayer[j])
            {
                arrayVencedor.push(posplayer[i]);                                           
            }
        }
    }

    if (jogadaVencedora4.length === arrayVencedor.length)
    {
        mensagemVencedor(player);
    }
    else
    {
        limpaArray();
    }

    for (let i = 0; i < jogadaVencedora5.length; i++)
    {
        for (let j = 0; j < posplayer.length; j++)
        {
            if (jogadaVencedora5[i] === posplayer[j])
            {
                arrayVencedor.push(posplayer[i]);                                           
            }
        }
    }

    if (jogadaVencedora5.length === arrayVencedor.length)
    {
        mensagemVencedor(player);
    }
    else
    {
        limpaArray();
    }

    for (let i = 0; i < jogadaVencedora6.length; i++)
    {
        for (let j = 0; j < posplayer.length; j++)
        {
            if (jogadaVencedora6[i] === posplayer[j])
            {
                arrayVencedor.push(posplayer[i]);                                           
            }
        }
    }

    if (jogadaVencedora6.length === arrayVencedor.length)
    {
        mensagemVencedor(player);
    }
    else
    {
        limpaArray();
    }

    for (let i = 0; i < jogadaVencedora7.length; i++)
    {
        for (let j = 0; j < posplayer.length; j++)
        {
            if (jogadaVencedora7[i] === posplayer[j])
            {
                arrayVencedor.push(posplayer[i]);                                           
            }
        }
    }

    if (jogadaVencedora7.length === arrayVencedor.length)
    {
        mensagemVencedor(player);
    }
    else
    {
        limpaArray();
    }

    for (let i = 0; i < jogadaVencedora8.length; i++)
    {
        for (let j = 0; j < posplayer.length; j++)
        {
            if (jogadaVencedora8[i] === posplayer[j])
            {
                arrayVencedor.push(posplayer[i]);                                           
            }
        }
    }

    if (jogadaVencedora8.length === arrayVencedor.length)
    {
        mensagemVencedor(player);
    }
    else
    {
        limpaArray();
    }
}


function limpaArray()
{
    for (let i = arrayVencedor.length; i > 0; i--) 
    {
        arrayVencedor.pop();
    }
}


function mensagemVencedor(player)
{
    setTimeout(() =>{
        alert(player + " venceu");
        location.reload();
    },300)
}