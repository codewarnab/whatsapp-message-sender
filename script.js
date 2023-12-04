let number = document.getElementById('number');
let messageInput = document.getElementById('message');
let sendBtn= document.getElementById('sendBtn');
let input_error =document.getElementById("input-error");
let message_error =document.getElementById("message-error");
let style = '';



function setStyle(e){
    style = e.value;
}

function inputValidator(){
    if(number.value.length!=10){
        number.classList.add("error");
        input_error.innerHTML = "please enter a 10 digit number";
        input_error.style.display='block';
        return false;
    }else {
        number.classList.remove("error");
        input_error.style.display='none';
        return true;
        
    }
}

function messageValidator(){

    if(messageInput.value.length<=0){
        messageInput.classList.add("error");
        message_error.style.display='block';
        message_error.innerHTML = "message can't be empty";
        return false;
        
    }else {
        messageInput.classList.remove("error");
        message_error.style.display='none';
        return true;
    }
}

function sendMessage(){
    const isInputValid = inputValidator();
    const isMessageValid = messageValidator();
    let trimmed = messageInput.value.replace(/^\s+|\s+$/g, '');

    if (isInputValid && isMessageValid && trimmed.length > 0) {
        let message = style + trimmed + style; // trim beginning or end spaces
        let api = `https://api.whatsapp.com/send/?phone=${number.value}&text=${message}`
    
        let a = document.createElement('a');
        a.href = api;
        a.setAttribute('target',"_blank"); //for opening in a new tab  
        a.click()

    } else {
        message_error.style.display = 'block';
        message_error.innerHTML = "message cannot be only spaces"
    }
}