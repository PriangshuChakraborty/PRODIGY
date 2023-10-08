let turn = "X"
let gameOver = false;
let play = true;
let restart = document.querySelector('#restart');

const change_turn = ()=>{
    
        // console.log("changing turn")
        return turn === "X"? "O" : "X";
    
}

const check_win = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [3,4,5],
    [2,5,8],
    [6,7,8],
    [2,4,6]
]

win.forEach(e =>{
    if((boxtext[e[0]].innerText !== '') && (boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText)){
        document.getElementById('win_msg').innerText = boxtext[e[0]].innerText + " Won";
        gameOver = true;
        play = false;
        // console.log(gameOver);

        boxtext[e[0]].classList.add('matched');
        boxtext[e[1]].classList.add('matched');
        boxtext[e[2]].classList.add('matched');
    }
})
}

let boxes = document.getElementsByClassName("box");

if(play){
    Array.from(boxes).forEach((element)=>{
        let boxtext = element.querySelector('.boxtext');
        element.addEventListener("click", ()=>{
            if(boxtext.innerText === "" && play){
                // console.log(boxtext)
                boxtext.innerText = turn;
                turn = change_turn();
                check_win();
                if(!gameOver){
                    document.getElementById('player_status').innerText = "Turn for " + turn;
                }
                else{
                    document.getElementById('player_status').innerText = "Game Over";
                    gameOver = false;
                }
            }
        })
    })
}
    

restart.addEventListener("click", ()=>{
    let new_boxtext = document.querySelectorAll('.boxtext');
    
    let win_msg = document.getElementById('win_msg');
    win_msg.innerText = "Play";
    
    let player_status = document.getElementById('player_status');
    player_status.innerText = "Turn for "+ turn;
    
    Array.from(new_boxtext).forEach((element) =>{
        element.innerText = "";
    })
    let boxtext = document.getElementsByClassName('boxtext');
    Array.from(boxtext).forEach((e)=>{
        e.classList.remove('matched');
        // console.log(new_boxtext);

    })
    play = true;

})