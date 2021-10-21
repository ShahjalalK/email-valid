const form = document.querySelector('.form')
const signUp = document.querySelector('.sign-up')
signUp.innerHTML = `Sign me up`

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validate()
})

function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate(){  
    const email = document.querySelector('.email').value
    const result = document.querySelector('.result')    
if(validateEmail(email)){
    document.querySelector('.email').value = '' 
    spinnerTime()   
        const init = setInterval(() => {
            result.innerHTML = `<i class="fas fa-check"></i> done!`
            clearInterval(init)
        }, 500);
        setTimeout(() => {
            signUp.innerHTML = `Sign me up <i class="fas fa-check"></i>`                        
        }, 500)  
    
}else{  
    spinnerTime()  
  const notInit = setInterval(() => {
    result.innerHTML = `${email} <span class="danger">please input the valid email!<span/>`
    clearInterval(notInit)
  }, 500);
  setTimeout(() => {
    signUp.innerHTML = `Sign me up <i class="fas fa-times"></i>`                        
}, 500)   
}
}


function spinnerTime(){
    signUp.innerHTML = `<img src="spinner.gif" alt=""> Sign me up`    
}


