let input=document.getElementById('inputBox')
let buttons=document.querySelectorAll('button');

let string="";
let arr=Array.from(buttons);

arr.forEach(button=>{
    button.addEventListener('click',(e)=>{  //e is the  event object passed to the callback function
        if(e.target.innerHTML=='='){
            string=eval(string);  //eval is an in built function in js which calculates the result
            input.value=string;
        }

        else if(e.target.innerHTML=='AC')
        {
            string="";
            input.value=string;
        }

        else if(e.target.innerHTML=='DEL')
        {
            string=string.substring(0,string.length-1);
            input.value=string;
        }

        else
        {
            string+=e.target.innerHTML;
            input.value=string;
        }
    })
});