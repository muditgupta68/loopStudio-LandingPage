let nameVal = document.querySelector("#name");
let phone = document.querySelector("#phoneNum");
let message = document.querySelector('#message');
let submit = document.querySelector('#submit');

const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.menu');
let items = document.querySelectorAll('.list-items')


phone.addEventListener("input",(e)=>{
    let value = e.target.value;
    
    if(isNaN(value)||value.length>10){
        
        e.target.value = null;
        submit.disabled = true; 
        crossPut();
    }
    else if(value.length<10&&value.length>0){
        
        e.target.classList.add('error');
        submit.disabled = true; 
        crossPut();
    }
    else if(value.length==0){
        
        submit.disabled = true;
        e.target.classList.remove('error');
        crossPut();
    }
    else if(value.length==10){
        
        e.target.classList.remove('error');
        submit.disabled = false; 
        crossPop();
    }
    if(nameVal.value==""){
        crossPut();
        submit.disabled=true;
    }
    if(message.value==""){
        crossPut();
        submit.disabled=true;
    }
    
})

message.addEventListener("input",(e)=>{
    let value = e.target.value;

    if(value.length>0){
        submit.disabled = false;
        crossPop();
    }
    else if(value.length==0){
        submit.disabled = true;
        crossPut();
    }
})

nameVal.addEventListener("input",(e)=>{
    let value = e.target.value;
    
    if(value.length>25||value.length==0){
        
        e.target.classList.add('error');
        submit.disabled = true; 
        crossPut();
    }
    else{
        
        e.target.classList.remove('error');
        submit.disabled = false; 
        crossPop();
    }
    if(phone.value==""){
        crossPut();
        submit.disabled=true;
    }
    if(message.value==""){
        crossPut();
        submit.disabled=true;
    }
    
     
})

menuBtn.addEventListener('click',()=>{
    toggle();
})

items.forEach((ele) => {
    ele.addEventListener('click',()=>{
        if(menuBtn.classList.contains('open')){
            toggle();
        }
    });
});


function toggle(){
    
    menuBtn.classList.toggle('open');
    menuItems.classList.toggle('open');
}

function crossPut(){
    submit.classList.add('crossCursor');
}

function crossPop(){
    submit.classList.remove('crossCursor');
}
function condition(){
    if(nameVal.value==""){
        crossPut();
        submit.disabled=true;
    }
    if(phone.value==""){
        crossPut();
        submit.disabled=true;
    }
    console.log(phone.value)
    if(message.value==""){
        crossPut();
        submit.disabled=true;
    }
}

condition();
