let flag=false;

const display= x =>{
    if (flag){
        clr();
    }
    document.getElementById('textarea').value+= x;
}

const clr= () =>{
    flag=false;
    document.getElementById('textarea').value = '';
}

const calculate= ()=>{
    flag = true;
    let displayvalue=document.getElementById('textarea').value;
    let answer = eval(displayvalue);
    document.getElementById('textarea').value= answer;
}
document.getElementById("textarea").disable='true';