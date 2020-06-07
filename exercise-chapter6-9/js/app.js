document.write("<h1>Exercise Math Expression - Chapter 6 to 9 </h1>");

var a = 10;

document.write("The value of a is: " + a);

document.write("<br>" + "================================");

var a = 10;
a = ++a;
document.write("<br>" + "<br>" + "Now the value of ++a is " + a);
document.write("<br>" + "================================");
a = ++a;
// a = 12
document.write("<br>" + "<br>" + "Now the value of ++a is " + a);
document.write("<br>" + "================================");

a = --a;
//a = 11
document.write("<br>" + "<br>" + "Now the value of --a is " + a);
document.write("<br>" + "================================");

a = --a;

document.write("<br>" + "<br>" + "Now the value of a-- is " + a);

document.write("<br>" + "================================");

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

document.write("<br>" + "Question # 2 --> "  +  " " + result);        
document.write("<br>" + "================================");
document.write("<h4>Explaination </h4>");
document.write("At first stage --a, is equal to 2 and a is pre-decrement, therefore a = 1");

document.write("<br><br>" + "At second stage --a - --b, = 1");

document.write("<br><br>" + "At third stage --a - --b + ++b, = 2");

document.write("<br><br> " + "At fourth stage --a - --b + ++b + b--, = 3");

document.write("<br>" + "================================");
var i = prompt("Enter Your Name");
document.write("<br>" + "Greetings, Mr. " + i);

document.write("<br>" + "================================");


var x = +prompt("Enter Number");
var y;
for (i = 1; i<= 10; i++) {
   if (Number.isNaN(x)){
        var z=5;
        y = i * z;
        document.write("<br>" + z +' x ' + i + " = " + y);    
    }else{
        y = i * x;
        document.write("<br>" + x + ' x' + i + "=" + y);
    }
}


document.write("<h1>Printing Marks Sheet </h1>");
document.write( "================================" + "<br>");


// var totalMarks = 300;
// var totalMarksObtained = obtainedMarksSub1 + obtainedMarksSub2 +            obtainedMarksSub3;

// var percentage = (totalMarks / totalMarksObtained) * 100;

var record = document.getElementById('record');
record.addEventListener("click", displayDetails);
var row = 1;

function displayDetails(){
    var sub1= document.getElementById("sub1").value;
    var sub2= document.getElementById('sub2').value;
    var sub3= document.getElementById('sub3').value;
    var mark1= document.getElementById('mark1').value;
    var mark2= document.getElementById('mark2').value;
    var mark3= document.getElementById('mark3').value;

    if (!sub1||!sub2||!sub3||!mark1||!mark2||!mark3){
        alert("Complete all Fields");
        return;
    }
    var display = document.getElementById('display');
    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);

    cell1.outerHTML = sub1;
    cell2.innerHTML = sub2;
    cell3.innerHTML = sub3;
    cell4.innerHTML = mark1;
    cell5.innerHTML = mark2;
    cell6.innerHTML = mark3;

    row++;
}

