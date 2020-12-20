const form = document.querySelector('.form')
const password = document.getElementById('new-password')
const password2 = document.getElementById('new-password2')
const title = document.getElementById('title')
const container = document.querySelector('.container')


console.log(password.value);
function checkLength(input, min) {

    console.log(input);
    if(input.value.length < min) {
        input.style.border = '2px solid red'
        const small = form.querySelector("small");
        small.innerText = `must be at least ${min} characters!`
        
    } else {
        input.style.border = '2px solid black'
        small.innerText = ''
    }

}


function checkPasswordMatch(input1, input2) {

    if(input2.value !== input1.value) {
        input2.style.border = '2px solid red'
        const small = form.querySelectorAll('small');
        small.innerText = `Password don't Match`

        console.log(small);
    } else {
        input2.style.border = '2px solid black'
        small.innerText = ''
        
        container.innerHTML = ''
        container.innerHTML = `
        <h1>Changed Password</h1>
        <p style="font-size:1.3rem;padding-bottom:20px">Your password has been updated! Now get back<br> in the driver seat, racers are waiting for you</p>
        <button class="btn">join a race</button>
        `


    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    

    checkLength(password, 8)
    checkPasswordMatch(password, password2)
})