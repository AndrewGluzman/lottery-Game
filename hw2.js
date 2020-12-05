window.onload = () => {

    viewevents();
}

function viewevents() {

    let playerArr = [];
    let randomArr=lottoNums().sort(function(a, b){return a-b});
    let playResult ="";

    //dissables start game until user inputs 6 numbers
    document.querySelector("#start").disabled = true;

//add numbers to display
    document.querySelector("#addNum").addEventListener("click", () => {
        document.querySelector("#user-list").innerHTML = "";
        let uput = document.querySelector("#userInp").value


        // Cheking USER INPUT if numbers are not the same
        inputCheck(uput, playerArr);


        //creates list on display
        document.querySelector("#userInp").value = "";
        playerArr.sort(function(a, b){return a-b});
        playerArr.forEach(element => {
            document.querySelector("#user-list").innerHTML += ` ${element}`
        });

    })


    //User click on button then crreation + compare of arrays is begining.
    document.querySelector("#start").addEventListener("click", () => {
        lottoEngine(playerArr)
        setTimeout(() => {

            document.querySelector("#result").innerHTML = playResult;
            if(playResult=="You Winner!!!"){
                document.querySelector("#result").style="color:rgb(37, 248, 29)"
            }
            else{
                document.querySelector("#result").style="color:rgb(255, 105, 105)"

            }

        }, 1000);
        // Random Array and User array a been compared and give Answear
        runningCounter();
        //enables add button
        document.querySelector("#addNum").disabled = false;



    })

    // Lotto number generator.
    function lottoNums() {

        let arrWinNum = [];
        let temp = Math.floor((Math.random() * 20) + 1)
        arrWinNum.push(temp)

        while (arrWinNum.length < 6) {
            temp = Math.floor((Math.random() * 20) + 1)

            let state = 1
            do {
                state = 1;
                for (let i = 0; i < arrWinNum.length; i++) {

                    if (temp == arrWinNum[i]) {
                        state = 0;
                        temp = Math.floor((Math.random() * 20) + 1)

                        break;
                    }
                    if (i == arrWinNum.length - 1 && state == 1) {
                        arrWinNum.push(temp)
                        break;
                    }
                }
            } while (state = 0);
        }
        console.log(arrWinNum)
        return arrWinNum;
    }
 


    function lottoEngine(arr) {
        randomArr 
        let playerNums = arr;
        let state = 0;
        playResult = "You Winner!!!";
        for (let i = 0; i < randomArr.length; i++) {
            for (let c = 0; c < playerNums.length; c++) {
                if (randomArr[i] == playerNums[c]) {
                    state++;
                }

            }
        }
        if (state == 6) {
            document.querySelector("#start").disabled = true;
           

            
        } else {
            document.querySelector("#start").disabled = true;
            playResult = "You LOOOSER!";

        }
        
    }

    function inputCheck(uput, playerArr) {
        let dupl = true;
        let range = true;
        for (let i = 0; i < playerArr.length; i++) {

            if (playerArr[i] == uput) {
                alert("it wil not work");
                dupl = false;
                break
            }
        }

        if (uput < 1 || uput > 20) {
            range = false;
            alert("DIFERENT NUMERS BETWEEN 1 AND 20 STUPID!!!")
        }

        if (range == true && dupl == true) {
            playerArr.push(uput);
        }


        if (playerArr.length == 6) {
            document.querySelector("#addNum").disabled = true
            document.querySelector("#start").disabled = false;
            console.log(randomArr)

        }

    }

    function runningCounter(){

        let num1 = 0;
        let num2 = 10;
        let num3 = 13;
        let num4 = 11;
        let num5 = 10;
        let num6 = 7;
        let state = 0;

        let counterNums=[num1,num2,num3,num4,num5,num6]

        let stopInterval=setInterval(()=>{

            for (let i = 0; i < counterNums.length; i++) {
               
                if (state==6) {
                    clearInterval(stopInterval)
                    break;
                }
               
               
                if (counterNums[i]<99) {
                    document.querySelector("#result-num").innerHTML = `${counterNums[0]} ${counterNums[1]} ${counterNums[2]} ${counterNums[3]} ${counterNums[4]} ${counterNums[5]}  `                     
                    counterNums[i]++;
                }                

                else{
                    state++;
                    document.querySelector("#result-num").innerHTML = `${randomArr[0]}, ${randomArr[1]}, ${randomArr[2]}, ${randomArr[3]}, ${randomArr[4]}, ${randomArr[5]},   `                      
                    
                }
            }

        },10)
        
    }

document.querySelector("#reset").addEventListener("click",()=>{

    location.reload()
})


}