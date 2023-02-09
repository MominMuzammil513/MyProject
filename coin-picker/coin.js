    let scontainer = document.querySelector('.scontainer');
    const array = []
    for(let i=0;i<100;i++){
        array.push(i);
        let coins=document.createElement('div');
        coins.innerHTML=`${i}`;
        coins.setAttribute('class','child-scontainer');
        scontainer.append(coins)

    }
    
    const showData = () =>{
        let number = Math.floor(Math.random()*99)
        document.querySelector(".child-container").innerHTML = number
        for(let i = 0 ; i<100 ; i++){
            let compare = document.querySelectorAll('.child-scontainer')[i].innerHTML
            if(compare == number){
                document.querySelectorAll('.child-scontainer')[i].style.backgroundColor =
                "grey"
            }
        }
    }
   
    