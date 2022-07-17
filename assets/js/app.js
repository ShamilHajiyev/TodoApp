let input = document.querySelector('#task-input');
let btn = document.querySelector('#add')
let task = document.querySelector('#result')
let warning = document.querySelector('#alert');

btn.addEventListener('click', function(){
    if(input.value === ''){
        warning.innerHTML = ' task is empty!';
    }
    else{
        let text =
        `<div class="task"><span>${input.value}</span> <input type="checkbox" oninput="Done(event)"> <i id="btn-delete" onclick="Delete(event)" class="fa-solid fa-x"></i>
        </div>`
        task.innerHTML += text;
        input.value = '';
        warning.innerHTML = '';
    }
})

function Done(e) {
    if(e.target.checked){
        e.target.previousElementSibling.style.textDecoration = 'line-through';
    }
    else{
        e.target.previousElementSibling.style.textDecoration = 'none';
    }
}



function Delete(e){
    e.target.parentElement.style.display = 'none';
}

let cap_input = document.querySelector('#input');
let cap_btn = document.querySelector('#cap')
let cap_result = document.querySelector('#cap-result')

cap_btn.addEventListener('click', function(){
    cap_result.innerHTML = cap_input.value.charAt(0).toUpperCase() + cap_input.value.slice(1)
})