var num1 = 6;
var num2 = 8;
var num3 = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " " + "is" + num3);

var num4 = 8;
var num5 = 6;
var num6 = num4 - num5;
document.write(" <br><br>" + "Subtraction of " + num4 + " and " + num5 + " " + "is " + num6);

var num7 = 44;
var num8 = 8;
var num9 = num7 * num8;
document.write("<br><br>" + "Multipl of " + num7 + " and " + num8 + " " + "is " + num9);

var num10 = 22;
var num11 = 2;
var num12 = num10 / num11;
document.write("<br><br>" + "Division of " + num10 + " and " + num11 + " " + "is " + num12);

var num13 = 44;
var num14 = 8;
var num15 = num13 % num14;
document.write("<br><br>" + "Reminder of " + num13 + " and " + num14 + " " + "is " + num15);

document.write(" <br><br>" + "=====================================");

var myNum = 78;
document.write(" <br><br>" +  " Value after variable declaration is:" + " " + myNum); 

document.write(" <br><br>" + "=====================================");

var num16 = 20;
document.write("<br><br>" +  " " + " Initial value : " + " " + num16);

num16 = ++num16;

document.write("<br><br> " + " " + "Value after increment is" + " " + num16);

num16 = num16+7;
document.write("<br><br> " + " " + "Value after addition is" + " " + num16);

num16 = num16-8;

document.write("<br><br> " + " " + "Value after decrement is" + " " + num16);

num16 = num16 % 3;

document.write("<br><br> " + " " + "The remainder" + " " + num16);


document.write(" <br><br>" + "=====================================");

var ticket = 600;
var totTicket = 5;
var sumTicket = ticket*totTicket;

document.write("<br><br> " + " " + "Total Cost to buy 5 tickets to a movie is " + " " + sumTicket + " PKR ");

document.write(" <br><br>" + "=====================================");

document.write("<h1>Table of 7</h1>");

var d = 1;
var e = 7;

for (i=1; i<=10; i++){
    k= e*i;
    document.write("<br>"  + e + "  x " +  i + " = " + k );
}

document.write(" <br><br>" + "=====================================");

document.write("<h2>The Temperature Converter</h2>");

var temp = 25;
var temp1 = 70
var tempC = (25 * 9/5)+32;
var tempf = (70 - 32) * 5/9;  

document.write("<br>" + temp + "<sup>o</sup>" + " C   " + " is " + tempC + "<sup>o</sup>" + " F");

document.write("<br>" + temp1 + "<sup>o</sup>" + " F   " + " is " + tempf + "<sup>o</sup>" + " C");

document.write(" <br><br>" + "=====================================");

document.write("<br> <h1>Shopping Cart</h1>");

var priceItem1 = 650;
var qtyItem1 = 3;
var priceItem2 = 100;
var qtyItem2 = 7;
var shipCharge = 100;

var totalPriceItem1 = priceItem1 * qtyItem1;
var totalPriceItem2 = priceItem2 * qtyItem2;
var totalCost = totalPriceItem1 + totalPriceItem2+shipCharge;

document.write("<br>" + "Price of item 1 is " + priceItem1 + "<br>" + " Quanitity of item 1 is " + qtyItem1 + "<br>" + "Price of Item 2 is " + priceItem2 + "<br>" + " Quanitity of Item 2 is " + qtyItem2 + "<br>" + " Shipping Charges " + shipCharge + "<br>"+"<br>"+"<br>" + "Total Cost of your Order is " + totalCost );

document.write(" <br><br>" + "=====================================");

document.write("<br>" + " <h1>Marks Sheet</h1>");

var totalMarks = 980;
var marksObtained = 804;
var percentage = (804/980)* 100;

document.write("Total Marks: " + totalMarks + "<br>" + "Marks Obtained: " + marksObtained  + "<br>" + " Percentage: " + percentage);

document.write(" <br><br>" + "=====================================");

document.write("<br>" + " <h1>Currency in PKR</h1>");

var dollar = 10;
var sRiyals = 25;
var totalCurrency = (dollar * 104.80) + (sRiyals * 28);

document.write("<br>" + " Total Currency in PKR: " +   totalCurrency);

document.write(" <br><br>" + "=====================================");

document.write("<br>" + " <h1>Math Expression</h1>");

var addNum = 5;
addNum1 = (addNum * 10) / 2;

document.write(" The number is " + addNum1);

document.write(" <br><br>" + "=====================================");

document.write("<br>" + " <h1>Age Calculator</h1>");

var currentYear = 2020;
var birthYear = 1990;
var currentAge = currentYear - birthYear;

document.write("<br>" + "Current Year:" + " " + currentYear + "<br>" + "Birth Year:" + birthYear + "<br>"  + "Your Age is: " + currentAge );

document.write(" <br><br>" + "=====================================");

document.write("<br>" + " <h1>The Geometrizer</h1>");

var radiusCircle = 20;
var circumfrence = (2 * 3.142) * 20;
var circleArea = (3.142 * 20) * 20 ;

document.write("Radius of a circle: " + radiusCircle + "<br>" + "The circumference is: " + circumfrence + "<br>"  + "The area is: " + circleArea );

document.write(" <br><br>" + "=====================================");

document.write("<br>" + " <h1>The Lifetime Supply Calculator</h1>");

var favoriteSnack = " Spiced Chips ";
var currentAge = 40;
var maximumAge = 65;
var estimatedAmountOfSnack = 2;
var restOfLife = (maximumAge - currentAge) * estimatedAmountOfSnack;

document.write("Favourite Snack: " + favoriteSnack +("<br>") + "Current Age: " + currentAge + "<br>" + "Estimated Maximum Age : " + maximumAge + "<br>" + "Amount of snacks per day " + estimatedAmountOfSnack +"<br> " + "You will need " + restOfLife + favoriteSnack + "to last you untill the ripe old age of " + maximumAge);  




