window.onload=function(){
    let innercontainer=document.querySelector(".innercontainer")
    
   
    let gameBoard=(function(){
        let boardSpots=[];
        let winner;
        let trigger=1;
        let resetter=function(){
             
            boardSpots.length=0;
            console.log(`new array is ${boardSpots} of length ${boardSpots.length}`);
            clearMarks();
            winner="true";
            console.log(`winner is ${winner}`)
        }
        function checkWinner(){
            console.log("CHECK WINNER STARTS HERE")
            console.log(`${boardSpots}`)
            
            if((boardSpots[0]!=null&&boardSpots[0]==boardSpots[1]&&boardSpots[0]==boardSpots[2])||(boardSpots[0]!=null&&boardSpots[0]==boardSpots[3]&&boardSpots[0]==boardSpots[6])||(boardSpots[0]!=null&&boardSpots[0]==boardSpots[4]&&boardSpots[0]==boardSpots[8])){
                    if(boardSpots[0]==playerOne.symbol){
                        alert(`${playerOne.name} won`)
                        console.log(`I am first condition of checkwinner`)
                        resetter();
                        
                        
                    }
                    else{//boardSpots[0]==playerTwo.symbol;
                        alert(`${playerTwo.name} won`)
                        console.log(`I am first condition of checkwinner`)
                        resetter();}
                        
                        
             }
            
            else if(boardSpots[1]!=null&&boardSpots[1]==boardSpots[4]&&boardSpots[1]==boardSpots[7]){   
        
                    if(boardSpots[1]==playerOne.symbol){
                        alert(`${playerOne.name} won`)
                        console.log(`I am first condition of checkwinner`)
                        resetter();
                        
                    }
                    else{//boardSpots[1]==playerTwo.symbol
                        alert(`${playerTwo.name} won`)
                        console.log(`I am first condition of checkwinner`)
                        resetter();
                        
                    }
                    
             
            }
            
            else if((boardSpots[2]!=null&&boardSpots[2]==boardSpots[5]&&boardSpots[2]==boardSpots[8])||(boardSpots[0]!=null&&boardSpots[2]==boardSpots[4]&&boardSpots[2]==boardSpots[6])){   
                    if(boardSpots[2]==playerOne.symbol){
                        alert(`${playerOne.name} won`)
                        console.log(`I am first condition of checkwinner`)
                        resetter();
                       
                    }
                    else{//boardSpots[2]==playerTwo.symbol
                        alert(`${playerTwo.name} won`)
                        console.log(`I am first condition of checkwinner`)
                        resetter();
                        
                    }
                    

            }
          
            else if(boardSpots[3]!=null&&boardSpots[3]==boardSpots[4]&&boardSpots[3]==boardSpots[5]){
                    if(boardSpots[1]==playerOne.symbol){
                        alert(`${playerOne.name} won`)
                        console.log(`I am first condition of checkwinner`)
                        resetter();
                      
                    }
                    else {//boardSpots[1]==playerTwo.symbol
                        alert(`${playerTwo.name} won`)
                        console.log(`I am first condition of checkwinner`)
                        resetter();
                        
                    }
                   
              
            }
            
            else if(boardSpots[6]!=null&&boardSpots[6]==boardSpots[7]&&boardSpots[6]==boardSpots[8]){
                    if(boardSpots[1]==playerOne.symbol){
                        alert(`${playerOne.name} won`)
                        console.log(`I am first condition of checkwinner`)
                        resetter();
                        
                       
                    }
                    else{//boardSpots[1]==playerTwo.symbol
                        alert(`${playerTwo.name} won`)
                        console.log(`I am first condition of checkwinner`)
                        resetter();
                      
                    }
                  
            
            }
            else if(!boardSpots.includes(null)&&boardSpots.length==9){
                resetter();
            }
            else {console.log("no winner yet")}
            console.log("CHECK WINNER ENDS HERE")
            trigger=1;
        }
       
        
        return{boardSpots,checkWinner,winner};
        })()

    let coordinator = gameController();
        

    for(let i=0;i<9;i++){
        console.log("I am working");
        let symbolbox=document.createElement("div");
        symbolbox.classList.add("symbolbox");
        symbolbox.setAttribute("id",i)
        symbolbox.addEventListener("click",coordinator.fillBoard)
        innercontainer.appendChild(symbolbox);
        console.log("I am working")
     }

     let arrayPlayers=[];
     let name=prompt("what's your name player 1?")
     playerOne=player(name,"x");
     arrayPlayers.push(playerOne)
     name=prompt("what's your name player 2?")
     playerTwo=player(name,"o");
     arrayPlayers.push(playerTwo)
     coordinator.turns();




    //function declarations
    function player(name,symbol){
        return{name,symbol}
    }
 
    function clearMarks(){
        let all = document.getElementsByClassName("symbolbox");
        all.innerHTML="";
        [].slice.call(all).forEach(function(val){
            val.innerHTML="";
        });
        console.log("I run")
    }

    function gameController(){
        let  count=0;
        let turnCount=0;
        let turnPointer;
        function turns(){ 
                console.log(`TURNS STARTS HERE! winner is ${gameBoard.winner}`)
                if(gameBoard.winner=="true"){count=0;
                console.log("gameboard is equal to winner 2 is greater than one")}
          
                let playerTurn =document.querySelector(".playerturn")
                if(count>(arrayPlayers.length)-1){
                    count=0;}
                turnPointer=arrayPlayers[count];
                console.log(`I am ${count} count pointing to ${arrayPlayers[count].name}`)
                console.log(`I am the pointer pointing to ${turnPointer.name}`)
                let htmlText=`<p>${turnPointer.name}'s turn </p>`
                playerTurn.innerHTML=htmlText;
                count++;
                console.log(`I am count now ${count} and would re-assign turn pointer when you call turn again`)
                turnCount++;
                console.log(`count is now ${count} and turn count is now ${turnCount}`)
                
                console.log(`turnpointer is still on ${turnPointer.name} since you havent recalled tunrs`)
                console.log("TURNS ENDS HERE")
            }
        function fillBoard(e){
            console.log("FILLBOARD STARTS HERE")
            let position = e.target.id;
            if (gameBoard.boardSpots[position]==null){
                    console.log("this array slot says I got nothing in me")
                    console.log(`the id and position is ${position}`)
                    e.target.innerHTML=`<p>${turnPointer.symbol}</p>`
                    console.log("now I have got something in me")
                    gameBoard.boardSpots[position]=turnPointer.symbol;
                    console.log(gameBoard.boardSpots)
                    console.log(`length of array is${gameBoard.boardSpots.length}`)
                    console.log(turnPointer.symbol)
                    console.log(`turn count is ${[turnCount]}`)
                    if(turnCount>4){
                        console.log(`now I would check for a winner`)
                        gameBoard.checkWinner();
                        console.log(`gameboard is= ${gameBoard.boardSpots}`)
                        if(gameBoard.winner="true"){
                           
                            turnCount=0;
                            gameBoard.winner="false";
                            console.log("we have a winner that is true so we shall restart from player one")
                        }
                    }
                    console.log(`now i would call turns`)
                    turns();
                }
                else {alert("already filled")
                       console.log(`filled because this is gameboard = ${gameBoard.boardSpots}`)
                
                }
            } 
            console.log("FILLBOARD ENDS HERE")  
        return{turns,turnPointer,fillBoard}

        
         
    }

    
  
       
    

  /*  //Gameboard module
    let gameBoard=(function(){
        let boardSpots=[];
        let winner;
        function checkWinner(){
            if((boardSpots[0]==boardSpots[1]&&boardSpots[0]==boardSpots[2])||(boardSpots[0]==boardSpots[3]&&boardSpots[0]==boardSpots[6])||(boardSpots[0]==boardSpots[4]&&boardSpots[0]==boardSpots[8])){
                    if(boardSpots[0]==playerOne.symbol){
                        alert(`${playerOne.name} won`)
                        
                    }
                    else alert(`${playerTwo.name} won`)
                    boardSpots=[];
                    console.log(`new array is ${boardSpots} of length ${boardSpots.length}`);
                    clearMarks();
                    winner=true;
             }
            else if(boardSpots[1]==boardSpots[4]&&boardSpots[1]==boardSpots[7]){   
                    if(boardSpots[1]==playerOne.symbol){
                        alert(`${playerOne.name} won`)
                    }
                    else alert(`${playerTwo.name} won`)
                    boardSpots=[];
                    clearMarks();
                    winner=true;
                
            }
            else if((boardSpots[2]==boardSpots[5]&&boardSpots[2]==boardSpots[8])||(boardSpots[2]==boardSpots[4]&&boardSpots[2]==boardSpots[6])){   
                    if(boardSpots[1]==playerOne.symbol){
                        alert(`${playerOne.name} won`)
                    }
                    else alert(`${playerTwo.name} won`)
                    boardSpots=[];
                    clearMarks();
                    winner=true;
            }
            else if(boardSpots[3]==boardSpots[4]&&boardSpots[3]==boardSpots[5]){
                    if(boardSpots[1]==playerOne.symbol){
                        alert(`${playerOne.name} won`)
                    }
                    else alert(`${playerTwo.name} won`)
                    boardSpots=[];
                    clearMarks();
                    winner=true;
            }
            else if(boardSpots[6]==boardSpots[7]&&boardSpots[6]==boardSpots[8]){
                    if(boardSpots[1]==playerOne.symbol){
                        alert(`${playerOne.name} won`)
                       
                    }
                    else alert(`${playerTwo.name} won`)
                    boardSpots=[];
                    clearMarks();
                    winner=true;
            }
            else{console.log("no winner yet")}
        }
       
        
        return{boardSpots,checkWinner,winner};
        })()

    coordinator.turns();

       //fill board with slots for placing x and os
       for(let i=0;i<9;i++){
        console.log("I am working");
        let symbolbox=document.createElement("div");
        symbolbox.classList.add("symbolbox");
        symbolbox.setAttribute("id",i)
        symbolbox.addEventListener("click",coordinator.fillBoard)
        innercontainer.appendChild(symbolbox);
        console.log("I am working")
    }

    let innercontainer=document.querySelector(".innercontainer")
    let arrayPlayers=[];
    let coordinator = gameController();
    let name=prompt("what's your name player 1?")
    playerOne=player(name,"x");
    arrayPlayers.push(playerOne)
    name=prompt("what's your name player 2?")
    playerTwo=player(name,"o");
    arrayPlayers.push(playerTwo)
    

  
  

   

    



    function gameController(){
        let  count=0;
        let turnCount=0;
        let turnPointer;
        function turns(){ 
                if(gameBoard.winner==true){count=0;
                console.log("gameboard is equal to winner")}
          
                let playerTurn =document.querySelector(".playerturn")
                if(count>(arrayPlayers.length)-1){
                    count=0;}
                turnPointer=arrayPlayers[count];
                console.log(`I am ${count} count pointing to ${arrayPlayers[count].name}`)
                console.log(`I am the pointer pointing to ${turnPointer.name}`)
                let htmlText=`<p>${turnPointer.name}'s turn </p>`
                playerTurn.innerHTML=htmlText;
                count++;
                turnCount++;
                
            }
        function fillBoard(e){
            let position = e.target.id;
            if (gameBoard.boardSpots[position]==null){
                    console.log("I got nothing in me")
                    console.log(`the id is ${position}`)
                    e.target.innerHTML=`<p>${turnPointer.symbol}</p>`
                    gameBoard.boardSpots[position]=turnPointer.symbol;
                    console.log(gameBoard.boardSpots)
                    console.log(`length of array is${gameBoard.boardSpots.length}`)
                    console.log(turnPointer.symbol)
                    if(turnCount>4){
                        gameBoard.checkWinner();
                    }
                    turns();
                }
                else {alert("already filled")
                       console.log(`filled because this is gameboard = ${gameBoard.boardSpots}`)
                
                 }
        return{turns,turnPointer,fillBoard}

        
         }
    }
  
 

   function player(name,symbol){
       return{name,symbol}
   }

   function clearMarks(){
       let all = document.getElementsByClassName("symbolbox");
       all.innerHTML="";
       [].slice.call(all).forEach(function(val){
           val.innerHTML="";
       });
       console.log("I run")
   }
*/ 
}
