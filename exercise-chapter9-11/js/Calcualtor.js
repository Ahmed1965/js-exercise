

function calculator(){
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    var opr = document.getElementById('opr').value;
    console.log(n1,n2,opr);

    if(opr === '+'){
        var x = document.getElementById('result').value = n1 + n2;
        console.log(x);

    }
    
    if(opr === '-'){
        document.getElementById('result').value = n1 - n2;
    }
    
    if(opr === '*'){
        document.getElementById('result').value = n1 * n2;
    }
    
    if(opr === '/'){
        document.getElementById('result').value = n1 / n2;
    }
    
    if(opr === '%'){
        document.getElementById('result').value = n1 % n2;
    }
    

    
}
