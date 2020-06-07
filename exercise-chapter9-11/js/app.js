
//1
var city = [
    "Karachi" , " Lahore" , "Islamabad"
];

var cities = prompt(" Enter city Name" , 'city Name');

    if (cities === "Karachi"){
        document.getElementById('welcom').innerText;
    }
//2
    var gender1 = 'male';
    var gender2 = 'female';

    var gender3 = prompt("Please Enet your Gender?");
        if (gender3 === gender1) {
            document.getElementById('gender').innerText;
        }   else if (gender3 === gender2){
            document.getElementById(gender2).innerText;
        }
    //3    
    var signalColor =['red', 'yellow', 'green'];
    var trafficSignal = prompt('Which traffic signal color you want to know?');
    if (trafficSignal === 'red'){
        document.write('Must Stop ');
    }else if (trafficSignal ===  'yellow'){
            document.write("Ready to move");
    
        } else if (trafficSignal==='green'){
        document.write('Move now');
        }

        //4

        var fule = 'ltrs';
        var carfule = prompt('How much Fule left in tank');
        if(carfule < 0.25 + fule){
            document.write("Please refill fule in your car");
        }
//a
 var a = 4; 
 if (++a === 5){
 alert("given condition for variable a is true"); 
}
//b
var b = 82; 
if (b++ === 83){
alert("given condition for variable a is false"); 
}       
//c-i    
var c = 12; 
if (c++ === 13){
alert("condition 1 is false"); 
}  
//c-ii
if (c===13){
    alert('condition 2 is false');
}
//c-iii
if( ++c < 14 ){
    alert('condition 3 is true');
}
//c-iv
if(c===14){
    alert('condition 4 is true');
}
//d
var materialCost = 20000;
var labourCost = 2000;
var totalCost = materialCost + labourCost;
    if(totalCost===labourCost + materialCost){
        alert('true');
    }
    else{
        alert('false');
    }
//f
if('car < cat'){
    alert('cat is smaller than car');
}
//6
function marksheet(){
    var math = document.getElementById('mathMarks').Value;
    var urdu = document.getElementById('udurMarks').value;
    var eng = document.getElementById('englishMarks').value;
    var markObtained = document.getElementById('tm');
    var percentage = document.getElementById('per');
    var grade = document.getElementById('div');
    var remarks = document.getElementById('rem');
    //calculating total marks
    tm =  math + urdu + eng;
    //calculating percentage
    per = tm/300*100;
    //assigning grads
    if(percentage >= 80){
        div.innerHTML="A-1 Grade";
    }else if (percentage >= 70){
            div.innerHTML="Grde A";
    }else if (percentage >= 60){
            div.innerHTML = "Grade B";     
    }else (percentage < 60);
            div.innerHTML = 'Fail';
    
        //writing remarks
        if(percentage >= 80){
            rem.innerHTML="Excellent";
        }else if (percentage >= 70){
                rem.innerHTML="Good";
        }else if (percentage >= 60){
                rem.innerHTML = "you need to improve";     
        }else (percentage < 60);
                rem.innerHTML = 'Sorry';
        }
        

        //==========================================================
        //7 Guess number

        alert('Are you ready to Play Game');

        alert;

        var guess;  
        var answer = 4;
        
        for (i = 1; i <= 10; i++){
            guess=prompt('Gusess a number form 1 to 10');
            if(answer == guess ){
                alert('Bingo, correct answer');
                break;
                if(answer >  guess || answer < guess ){
                   // alert('close enough to correct answer')
                }
            }else
            prompt('Number?');
         }
//=========8 Number Division by 3 ============      

var a = 2;
var b = 5;
var c = 8;
var d = a+b+c;
if (d  %  3 === 0){
}   
document.write('<br>' +  d + 'divisiable by 3');

//================ #9 even and odd numbers============================

var oddEven = +prompt('Enter number to know odd or even');

if(oddEven > 100 ){
    document.write('Please Enter Number up to 100 only');
}
if (oddEven % 2 === 0 ){
    document.write('<br>' + oddEven + 'Even Number');
    }else {
        document.write('<br>' + oddEven + ' ' +  'Odd Number');
    } 


    //======================= # 10 Temperature input =======================
        
    var outtemp = ('Enter Temperature 40 to 10 degree');
    var tmep = 40;
    var temp1 = 30;
    var temp2 = 20;
    var temp3 = 10;
    
    if (temp >= 40){
        document.write('It is too hot outside');
    }
    if(temp2 >= 30){
        document.write('The Weather is normal today');
    }
    if(temp3 >= 10){
        document.write("OMG! Today's weather is so Cool");
    }

    //=========================== # 11 The Calculator=======================

            