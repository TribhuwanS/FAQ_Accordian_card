
const diceBtn = document.querySelector(".button-section");
const adviceNumber = document.querySelector(".advice-number");
const adviceText = document.querySelector(".quotes");
const apiUrl = "https://api.adviceslip.com/advice";

//Button click event
diceBtn.addEventListener("click", () => {
  //Request Data
  fetch(apiUrl, {cache: "no-cache"})
    .then((response) => response.json())
    .then((response) => {
      let data = response.slip;
      let dataId = data.id;
      let dataAdvice = data.advice;
      //Inject to DOM
      adviceNumber.innerHTML = `advice # ${dataId}`;
      adviceText.innerHTML = dataAdvice;
    });
});

   


document.querySelectorAll(".accordion_question_answer").forEach( q =>{
    q.querySelectorAll(".question").forEach(ques =>{    
        ques.addEventListener('click',()=>{
            if(q.classList.contains('active') == true){
                q.classList.remove('active')
            }else{
                document.querySelectorAll(".accordion_question_answer").forEach( y =>{
                    
                    if(y.classList.contains('active') == true && y!=q){
                        y.classList.remove('active')
                    }else{
                        q.classList.add('active')
                        
                    }

                    })
                }

        })
    })
    
})