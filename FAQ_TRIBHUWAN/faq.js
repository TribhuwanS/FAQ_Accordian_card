document.querySelectorAll(".accordion_question_answer").forEach( q =>{
    q.querySelectorAll(".question").forEach(ques =>{    
        ques.addEventListener('click',()=>{
            if(q.classList.contains('active') == true){
                q.classList.remove('active')
            }else{
                document.querySelectorAll(".accordion_question_answer").forEach( y =>{
                    
                    if(y.classList.contains('active') == true){
                        y.classList.remove('active')
                    }else{
                        q.classList.add('active')
                        
                    }

                    })
                }

        })
    })
    
})