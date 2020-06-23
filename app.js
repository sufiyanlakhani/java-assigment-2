chap 21 to 25
var fname = prompt("enter your first name")
var lname = prompt("enter your last name")
var fullName = fname + " " + lname
alert(fullName)


var fav = prompt("What is your favorite phone?")
var pho = ("My favorite phone is:" + " " + fav)
var length ="lenght of string is:"+" "+ fav.length
alert(pho)
alert(length)

var pak = ("Pakistani")
document.write("String:" + " " + pak + "<br>" + "<br>")
document.write ("index of n is:" + " " + pak.indexOf("n"))

var hello = ("Hello World")
document.write("String:" + " " + hello + "<br>" + "<br>")
document.write ("Last index of 'i' is:" + " " + hello.lastIndexOf("l"))

var watan = ("Pakistani")
document.write("String:" + " " + watan + "<br>" + "<br>")
document.write ("Character at index 3 is:" + " " + watan.charAt("3"))

var hyd = "Hyderabad"
var rep = hyd.replace("Hyder","Islam")
document.write(rep)

var para = "Ali and Sami are best friends They play cricket and football together"
var result = para.replace(/and/g,"&")
document.write(result)

var str = "472"
var no = parseInt(str) 
document.write("value:" + " " + str + "<br>" + "<br>")
document.write("type:" + " " + typeof(str) + "<br>" + "<br>")
document.write("value:" + " " + no + "<br>" + "<br>")
document.write("type:" + " " + typeof(no) + "<br>" + "<br>")

var give = prompt("enter something")
var me = give.toUpperCase()
alert(me)

var input = prompt("inter something")
var output = input.toLowerCase()
alert(output) 

function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
 document.write(sentence.join(" "));
 return sentence;
 }
 titleCase(prompt("enter anything"));


var number = "35.36"
var stri = number.replace(".","")
document.write(stri)
 
var bake = prompt("Welcome to ABC bakery. What do you want to order Sir/Ma'am?")
bake = bake.toLowerCase()    
var savour = ["cake" , "apple pie" , "cookie" , "chips" , "patties"];
for (var i=0; i<savour.length; i++) {
if (savour[i] === bake) {alert("We have it at our bakery")      
     break
} else {alert("We donot have it at our bakery " ) 
break
}}
 

var special = prompt("Enter username");
if (special === "@" || "." || "," || "!") {alert(" Enter a valid username. ")
    
} else {  alert ("Username confirm") 
}

var university = "University of Karachi";
var ar = university.split("") 
document.write (ar)

var myString = prompt("Enter anything");
document.write ("User input:" +" " + myString + "<br>" + "<br>" )
document.write ("Last character of input:" +" " + myString[myString.length-1])

var occ = "The quick brown fox jumps over the lazy dog" 
alert    (occ.match(/the/g)).length

chap 25 to 30
var num = prompt("Enter any positive integer")
document.write ("number:" + " " + num + "<br>" + "<br>" )
document.write ("round off value:" + " " + Math.round(num) + "<br>" + "<br>" )
document.write ("floor value:" + " " + Math.floor(num) + "<br>" + "<br>" )
document.write ("ceil value:" + " " + Math.ceil(num))


var neg = prompt("Enter any negative floating point")
document.write ("number:" + " " + neg + "<br>" + "<br>" )
document.write ("round off value:" + " " + Math.round(neg) + "<br>" + "<br>" )
document.write ("floor value:" + " " + Math.floor(neg) + "<br>" + "<br>" )
document.write ("ceil value:" + " " + Math.ceil(neg))

var absol = prompt("Enter any value")
document.write ("The absolute value of" + " " + absol + " "  + "is " + Math.abs(absol) + "<br>" + "<br>" )


var dice = Math.random() * 6 + 1;
var dior = Math.floor(dice);
document.write ("Random dice value :" + " " + dior)


var toss = Math.random() * 2 ;
var floor = Math.floor(toss);
if (floor === 0 ) {

    document.write (floor + "<br>" + "Random coin value: Heads" )
    
} else {
    document.write (floor + "<br>" + "Random coin value: tails" )
}

var ran = Math.floor(Math.random() * 100) + 1;
document.write ("random number between 1- 100:" + " " + ran)





var special = prompt("Enter any number between 1 - 10 ")
if (special == 9) {
    alert("Congratulations")
    
} else {
    alert("Try again")
}

chap 31 to 35
var n = new Date(); 
alert(n)

var months= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
var now = new Date();
var day = now.getMonth();   
var that = months[day]
alert("Current month is:" + " " + that)     

var daynames = ["Sunday","Monday","Tuesday","wednessday","Thursday","Friday","Saturday"];
var now = new Date();
var day = now.getDay();
var that = daynames[day];
alert("Today is :" + " " + that.slice(0,3));

var daynames = ["Sunday","Monday","Tuesday","wednessday","Thursday","Friday","Saturday"];
var now = new Date();
var day = now.getDay();
var that = daynames[day];
if (that === ("Saturday" || "Sunday")){
    alert('Fun day')
}
else{
    alert(that)
}
 


var now = new Date();
var date = now.getDate();
if(date  === 15){
     alert(first fifteen day of month)
 }
 else {
     alert(last fifteen days of month)
 }
   
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime =  ampm;
    return strTime;
  }
  alert(formatAMPM(new Date));


var actualDate = new Date()
var eoYear = new Date(actualDate.getFullYear(),12,0)
alert (eoYear)

35 to 38

function abc(){
    var a = new Date()
    alert(a)
}
abc()


function agecalc(){
var dob = new Date("April 24, 2020")
var dobmili = dob.getTime();
var today = new Date();
var todaymili = today.getTime()
var diff = todaymili - dobmili;
var accuage = Math.floor(diff/(1000*60*60*24))
document.write(accuage + " " + "days have passed since 1st Ramadan ,2020");
}

agecalc();




function whole(){
var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName + " " + lastName;
alert(fullName)
}

whole()


function add() {
    var value1= +prompt("Enter your first value")
    var value2= +prompt("Enter your second value")
    var Result = value1 + value2
    alert (Result)
}

add()


function calc(){
        var num1 = +prompt("Enter your first value")
var opr = prompt("Enter operator")
var num2 = +prompt("Enter your second value")
    if (opr === "+") {
        alert (num1 + num2)
    }
   else if (opr === "-")
    {alert (num1 - num2)}

else if (opr === "*")
    {alert (num1 * num2)}

else if (opr === "/")
    {alert (num1 / num2)}

    else {
        alert ("Wrong operator")
    }
}
calc()

function angle(){
var base = +prompt ("Enter value for base")
var perp = +prompt ("Enter value for perpendicular")
var hyp = (base * base) + (perp * perp)
alert ("The value of hypotenuse is:" + " " +  hyp)
}
angle()