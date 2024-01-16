let boxes=document.querySelectorAll(".box")
let rt=document.querySelector("#rbtn")

let msgc=document.querySelector(".msg-container")
let msg=document.querySelector(".msg")

let turn =true;
let count=0;

let winnerarr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    if(turn && box.innerText==""){
        box.innerText="X"
        box.style.color="grey"
        turn =false;
    }
    else if (box.innerText==""){
        box.innerText='O';
        box.style.color="black"
        turn=true;

    }
    count++;
    let win=checkwinner();

    if(count==9 && !win){
        draw();
    }
});
});

const reset=()=>{
    turn=true;
    count=0;
    enable();
    msgc.classList.add("hide")
};

let disable=()=>{
    for(let  box of boxes)
    box.disabled=true;
};


let enable=()=>{
    for(let  box of boxes){
    box.disabled=false;
    box.innerText="";
    }
}
let showWinner=(win)=>{
msg.innerText=`Congratulations 🌟🧿, Winner is ${win}`;
msgc.classList.remove("hide")
disable();
}

const draw=()=>{
msg.innerText=`Game was a Draw 💀`;
msgc.classList.remove("hide")
disable();
}

let checkwinner=()=>{
    for(arr of winnerarr){
        let win=boxes[arr[0]].innerText;
        if(boxes[arr[0]].innerText!='' && boxes[arr[1]].innerText!='' && boxes[arr[2]].innerText!='')
        if(boxes[arr[0]].innerText==boxes[arr[1]].innerText &&  boxes[arr[1]].innerText==boxes[arr[2]].innerText)
        {
            console.log("Winner ")
            showWinner(win);
            return true;
            
            // let h=document.createElement('h1')
            // h.innerText="X is Winner";
            // document.body.appendChild(h)

        }
        // else if(boxes[arr[0]].innerText=="O" && boxes[arr[1]].innerText=="O" && boxes[arr[2]].int=="O"){
        //     console.log("Winner is O")
        //     let h=document.createElement('h1')
        //     h.innerText="O is Winner";
        //     document.body.appendChild(h)
        // }
       
    }
}

rt.addEventListener("click",(reset))