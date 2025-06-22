//Javascript is the programming language of the web.It can update and change both HTML and css.
//It can calculate,manipulate and validate data
// document.getElementById("demo").innerHTML="My First Javascript"
// function myFunction(){
//     document.getElementById("demo").innerHTML="Paragraph changed";
// }
// document.getElementById("demo").innerHTML="Hello World";
// document.write(5+6)
// window.alert(5+6)
// console.log(5+6)
// let x,y,z;
// x=5;
// y=6;
// z=x+y;
// document.getElementById("demo").innerHTML=z;
// document.getElementById("demo").innerHTML="Hello Dolly"
// function myFunction(){
    // document.getElementById("demo1").innerHTML="Hello Dolly!"
    // document.getElementById("demo2").innerHTML="How are you?"
    // document.getElementById("demo").innerHTML=10.50
    // document.getElementById("demo").innerHTML='John Doe'
// }
// document.getElementById("demo").innerHTML=5*10
// document.getElementById("demo").innerHTML="john"+" "+"Doe"
// let x,y;
// x=5+6;
// y=x*10;
// document.getElementById("demo").innerHTML=y
// var x,y;
// x=5+6;
// y=x*10;
// document.getElementById("demo").innerHTML=y;
// let lastname,lastName
// lastName="Doe"
// lastName="Peterson"
// document.getElementById("demo").innerHTML=lastName
// document.getElementById("myH").innerHTML="My first Page"
// document.getElementById("myP").innerHTML="My first paragraph"
// let x=5
// let y=x+2
// document.getElementById("demo").innerHTML=y
// document.getElementById("myH").innerHTML="JavaScript Comments"
// document.getElementById("myP").innerHTML="My first paragraph"
// document.getElementById("myP").innerHTML="My first paragraph"
// document.getElementById("myP").innerHTML="My first paragraph."
// var x=5
// var y=6
// var z=x+y
// document.getElementById("demo").innerHTML="The value of z is: "+z
// let x=5
// let y=6
// let z=x+y
// document.getElementById("demo").innerHTML="The value of z is: "+z
// const price1=5
// const price2=6
// let total=price1+price2
// document.getElementById("demo").innerHTML="The total is : " +total
// const pi=3.14
// let person="john Doe"
// let answer="Yes I am!"
// document.getElementById("demo").innerHTML=pi+"<br>"+person+"<br>"+answer
// let carName="Volvo"
// document.getElementById("demo").innerHTML=carName;
// let person="John Doe",carName="Volvo",price=200
// document.getElementById("demo").innerHTML=carName
// var carName="Volvo"
// var carName;
// document.getElementById("demo").innerHTML=carName
// let x=5+2+3
// document.getElementById("demo").innerHTML=x
// let x="John"+" "+"Doe"
// document.getElementById("demo").innerHTML=x
// let x="5"+ 2+ 3
// document.getElementById("demo").innerHTML=x
// let $$$=2
// let $myMoney=5
// document.getElementById("demo").innerHTML=$$$+$myMoney
// let x=10
// document.getElementById("demo").innerHTML=x
// let x=5
// let y=2
// let z=x/y
// document.getElementById("demo").innerHTML="The sum of x+y is "+z
// let x=5+5
// let y="5"+5
// let z="Hello"+5
// document.getElementById("demo").innerHTML=x+"<br>"+y+"<br>"+z
// let x=5
// document.getElementById("demo").innerHTML=Math.pow(x,2)
// document.getElementById("demo").innerHTML=100+50*3
// let x=10
// x*=5
// document.getElementById("demo").innerHTML="Value of x is : "+x
// let length=16
// let weight=7.5
// let color="Yellow"
// let lastName="Johnson"
// let x=true
// let y=false
// const person={firstName:"John",lastName:"Doe"}
// const cars=["Saab","Volvo","BMW"]
// const date=new Date("2022-03-25")
// let x=16+"Volvo"
// document.getElementById("demo").innerHTML=x
// let x
// x=5
// x="John"
// document.getElementById("demo").innerHTML=x
// let answer1="It's alright"
// let answer2="He is called 'Johnny'"
// let answer3='He is called "JOhny"'
// document.getElementById("demo").innerHTML=
// answer1+"<br>"+
// answer2+"<br>"+
// answer3;
// let x1=34.00
// let x2=34
// let x3=3.14
// document.getElementById("demo").innerHTML=x1+"<br>"+x2+"<br>"+x3
// let y=123e5
// let z=123e-5
// // document.getElementById("demo")
// let x=BigInt("123456789012345678901234567890")
// document.getElementById("demo").innerHTML=x
// const cars=["Saab","Volvo","BMW"]
// document.getElementById("demo").innerHTML=cars[0]
// const person={
//     firstName:"John",
//     lastName:"Doe",
//     age:50,
//     eyeColor:"blue"
// }
// document.getElementById("demo").innerHTML=person.firstName+"is"+person.age+"years old"

// function myFunction(p1,p2){
//   return p1*p2;
// }
// let result=myFunction(4,3);
// document.getElementById("demo").innerHTML=result;
// let x=myFunction(4,3)
// document.getElementById("demo").innerHTML=x

// function myFunction(a,b){
//     return a*b;
// }
// function toCelsius(fahrenheit){
//     return(5/9)*(fahrenheit-32)
// }
// let value=toCelsius(77)
// document.getElementById("demo").innerHTML=value

// const person={
//     firstname:"John",
//     lastname:"Doe",
//     age:50,
//     eyecolor:"blue"
// }
// document.getElementById("demo").innerHTML=person["firstname"]+ "is"+person["age"]+"years old"

// const myObj={
//   firstName:"John",
//   lastName:"Doe",
//   myCars:{
//     car1:"Ford",
//     car2:"BMW",
//     car3:"Fiat"
//   }
// }
// document.getElementById("demo").innerHTML=myObj.myCars.car2;

// var str="hello world"
// var count=0
// for(var i=0;i<str.length;i++){
//   var ch=str[i]
//   if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){
//     count++
//   }
// }
// console.log("Vowels",count)

// var str="javascript"
// var rev=""

// for (var i=str.length-1;i>=0;i--){
//   rev +=str[i]
// }
// console.log("Reversed",rev)


// var n=100
// var sum=0
// for(var i=1;i<=n;i++){
//   sum+=i
// }
// console.log("sum",sum)

// var num=153
// var temp=num;
// var sum=0

// while(num>0){
//   var digit=num%10
//   sum+=digit*digit*digit
//   num=Math.floor(num/10)
// }
// if(sum==temp){
//   console.log("Armstrong number")
// }
// else{
//   console.log("Not Armtrong")
// }

// function check(){
//   var n=document.getElementById("num").value
//   var result=(n%2==0)?"even":"odd"
//   document.getElementById("result").innerText=result
// }
//////Basics---------------------------------------------------------------
////---Add two number
// let a=5
// let b=7
// let sum=a+b
// console.log("Sum: ",sum)


//--Even or odd
// let num=10
// if(num%2===0){
//     console.log("Even")
// }
// else{
//     console.log("Odd")
// }

//-find largest of three number
// let a=10,b=25,c=15
// let largest=a
// if (b>largest){
//   largest=b
// }
// if(c>largest){
//   largest=c
// }
// console.log("Largest:",largest)

//print1 to 5 using loop
// for(let i=0;i<=5;i++){
//   console.log(i)
// }

//reverse a string
// let str="hello"
// let reversed=""
// for(let i=str.length-1;i>=0;i--){
//   reversed +=str[i]
// }
// console.log("Revrsed:",reversed)

// let num=7
// let isPrime=true
// if(num<=1)isPrime=false
// for(let i=2;i<=Math.sqrt(num);i++){
//     if(num % i===0){
//         isPrime=false
//         break
//     }
// }
// console.log(isPrime?"Prime":"Not Prime")

// factorial of number
// let num=5
// let fact=1
// for(let i=1;i<=num;i++){
//     fact*=i
// }
// console.log("Factorial:",fact)

////---count vowels in a string
// let str="javascript"
// let count=0
// let vowels="aeiou"

// for(let i=0;i<str.length;i++){
//     if(vowels.includes(str[i])){
//         count++;
//     }
// }
// console.log("vowels count",count)

// // --------sum of digits of a number
// let num=1234
// let sum=0
// while(num>0){
//     sum +=num%10
//     num=Math.floor(num/10)
// }
// console.log("Sum of digits :",sum)

// //--------string palindrom
// let str="madam"
// let reversed=""
// for(let i=str.length-1;i>=0;i--){
//     reversed += str[i]
// }
// if(str===reversed){
//     console.log("palindrom")
// }
// else{
//     console.log("Not a Palindrom")
// }

//-------sum of alleven number from 1-20
// let sum=0
// for(let i=1;i<=20;i++){
//     if(i%2===0){
//         sum+=i
//     }
// }
// console.log("Sun of even numbers from 1 to 20:",sum)

// // -----fibonacci series
// let n=7
// let a=0,b=1
// console.log("Fibonacci:")
// for(let i=0;i<n;i++){
//     console.log(a)
//     let next=a+b
//     a=b
//     b=next
// }


// // find the maximum Number in an array
// let arr=[10,5,8,21,3]
// let max=arr[0]
// for(let i=1;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
// }
// console.log("Max: ",max)

// // ----sum of all elements in an array
// let arr=[1,2,3,4,5]
// let sum=0
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i]
// }
// console.log("Sum:",sum)

// // -----count even number in an array
// let arr=[2.7,4,9,6]
// let count=0
// for(let i=0;i<arr.length;i++){
//     if (arr[i]%2===0){
//         count++
//     }
// }
// console.log("Even number count:",count)

// // ----Reverse an Array(without built-in methoda)
// let arr=[1,2,3,4,5]
// let reversed=[]
// for(let i=arr.length-1;i>=0;i--){
//     reversed.push(arr[i])
// }
// console.log("Reversed:",reversed)


// // check if array is sorted
// let arr=[1,2,3,5,6]
// let isSorted=true
// for(let i=1;i<arr.length;i++){
//     if(arr[i]<arr[i-1]){
//         isSorted=false
//         break
//     }
// }
// console.log(isSorted?"Sorted":"Not Sorted")

// //--- count number of words in a sentence
// let sentence="Javascript is fun to learn"
// let words=sentence.split(" ")
// console.log("word count:",words.length)


// // covert a string to uppercase
// let str="hello"
// let result=""

// for(let i=0;i<str.length;i++){
//     let code=str.charCodeAt(i)
//     if(code>=97&& code<=122){
//         result += String.fromCharCode(code-32)
//     }else{
//         result += str[i]
//     }
// }
// console.log("Uppercase:",result)


// // count occurrence of each character
// let str="apple"
// let count={}
// for (let i=0;i<str.length;i++){
//     let char=str[i]
//     count[char]=(count[char]||0)+1
// }
// console.log(count)

////Duplicates from an array (without set)
// let arr=[1,2,2,3,4,4,5]
// let unique=[]
// for(let i=0;i<arr.length;i++){
//     if(!unique.includes(arr[i])){
//         unique.push(arr[i])
//     }
// }
// console.log("unique values:",unique)


// //find second largest Number
// let arr=[10,40,20,30]
// let first=-Infinity,second=-Infinity
// for(let num of arr){
//     if(num>first){
//         second=first
//         first=num
//     }else if(num>second&& num!==first){
//         second=num
//     }
// }
// console.log("Second largest",second)

// // -----find all odd numbers in an array
// let arr=[1,2,3,4,5]
// let odd=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2!==0){
//         odd.push(arr[i])
//     }
// }
// console.log("odd numbers:",odd)

// //`````Sort an array
// let arr=[5,2,8,1]
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length-1-i;j++){
//         if(arr[j]>arr[j+1]){
//             let temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//         }
//     }
// }
// console.log("sorted array:",arr)

// // //-----remove all spaces from a string
// let str="Hello World Javascript";
// let noSpaces=""
// for (let i=0;i<str.length;i++){
//     if(str[i]!==""){
//         noSpaces += str[i]
//     }
// }
// console.log("Without spaces:",noSpaces)

// // replace all vowels with*
// let str="javascript"
// let result=""

// for(let i=0;i<str.length;i++){
//     if("seiou".includes(str[i])){
//         result +="*"
//     }
//     else{
//         result += str[i]
//     }
// }
// console.log("After replace:",result)

// // Capitalize the first letter of each word
// let str="javascript is fun"
// let words=str.split(" ")
// for (let i=0;i<words.length;i++){
//     words[i]=words[i][0].toUpperCase()+words[i].slice(1)
// }
// let capitalized=words.john("")
// console.log("Capitized: ",capitalized)


// // check if two string are anagrams

// let str1="listen"
// let str2="silent"

// function isAnagram(a,b){
//     let sortedA=a.split('').sort().join('')
//     let sortedB=b.split('').sort().join('')
//     return sortedA===sortedB
// }
// console.log(isAnagram(str1,str2)?"Anagram":"Not Anagram")

// // ---check if a number is a perfect number
// let num=25
// let sqrt=Math.sqrt(num)
// if(sqrt===Math.floor(sqrt)){
//     console.log("Person squre")
// }
// else{
//     console.log("Not a perfect squre")
// }

//Number is an armstrong Number

// let num=153
// let temp=num
// let sum=0
// while(temp>0){
//     let digit=temp%10
//     sum +=digit**3
//     temp=Math.floor(temp/10)
// }
// console.log(sum===num?"Armstrong":"Not Armstrong")

// // find GCD of two Number
// let a=20,b=8
// while(b!=0){
//     let temp=bb=a%b
//     b=a%b
//     a=temp
// }
// console.log("GCD:",a)

// // multiplication Table
// let num=5
// for(let i=1;i<=10;i++){
//     console.log(`${num} x ${i}=${num*i}`)
// }

// // count number of digits in a number
// let num=12345
// let count=0
// while(num>0){
//     num=Math.floor(num/10)
//     count++
// }
// console.log("Digits:",count)

// print all prime numbers from 1 to 50
// for(let num=2;num<=50;num++){
//     let isPrime=true
//     for(let i=2;i<=Math.sqrt(num);i++)
//     {
//         if(num%i===0){
//             isPrime=false
//             break
//         }
//     }
//     if(isPrime){
//         console.log(num)
//     }
// }

// check if number is a Palindrim
// let num=121
// let original=num
// let reversed=0
// while (num>0){
//     let digit=num%10
//     reversed=reversed*10+digit
//     num=Math.floor(num/10)
// }
// console.log(original===reversed?"Palindrom":"Not Palindrom")

// // check if string contains only alphabets
// let str="Javascript123"
// let onlyLetters=/^[A-Za-z]+$/.test(str)
// console.log(onlyLetters?"only letters":"Has non-letters")


// //reversed words in a sentence
// let sentence="Javascript is fun"
// let words=sentence.split(" ")
// let reversed=words.reverse().join(" ")
// console.log("Reversed words: ",reversed)

// // swap two variable
// let a=5,b=10
// a=a+b
// b=a-b
// a=a-b
// console.log("a=",a,"b=",b)

// // check if a year is aleap year
// let year=2024
// if((year%4===0&& year %100!==0)||year%400===0){
//     console.log("leapYear");
// }else{
//     console.log("Not a leap year")
// }

// // ````check if a character is a vowel or consonat
// let char='e'
// if("aeiou".includes(char.toLowerCase())){
//     console.log("vowel")
// }else{
//     console.log("Consonant")
// }

// // number is PromiseRejectionEvent,negative, or Zero
// let num=-15
// if(num>0){
//     console.log("Positive")
// }
// else if(num<0){
//     console.log("Negative")
// }
// else {
//     console.log("Zero")
// }

// // Generate Random Number Between 1 and 100
// let random=Math.floor(Math.random()*100)+1
// console.log("Random number:",random)

// // print a right-Angled Triangle
// let n=5
// for(let i=1;i,i<=n;i++){
//     let row=" "
//     for(letj=1;j<=i;j++){
//         row +="*"
//     }
//     console.log(row)
// }

// print pyramid of number
// let n=5
// for(let i=1;i<=n;i++){
//     let row=""
//     for(let j=1;j<=i;j++){
//         row +=j+" "
//     }
//     console.log(row)
// }

// // find power of NUmber
// let base=2,exponent=4
// let result=1
// for(let i=0;i<exponent;i++){
//     result*=base
// }
// console.log("Result:",result)

// // find sum of all multiple of 3 or below 100
// let sum=0
// for(let i=1;i<100;i++){
//     if(i%3===0||i%5===0){
//         sum += i
//     }
// }
// console.log("Sum of multiples of 3 or 5:",sum)

// // count ocuurrence of a word in a sentence
// let sentence="the cat and the dog chased the rat"
// let word="The"
// let words=sentence.split(" ")
// let count=0

// for(let w of words){
//     if(w===word)count++
// }
// console.log(`'${word} appears ${count} times`)

// // reverse a number
// let num=12345
// let reversed=0
// while(num>0){
//     let digit=num%10
//     reversed=reversed*10+digit
//     num=Math.floor(num/10)
// }
// console.log("Reversed Number:",reversed)

// let num=9
// if(num%2===0){
//     console.log("Even")
// }
// else{
//     console.log("Odd")
// }
   
// let n=10
// let sum=0
// for(let i=1;i<=n;i++){
//     sum +=i
// }
// console.log("Sum:",sum)

// let arr=[10,20,30,40]
// let sum=0
// for (let i=0;i<arr.length;i++){
//     sum+=arr[i]
// }
// let avg=sum/arr.length;
// console.log("Average:",avg)

// let arr=[3,9,12,5,25]
// let limit=10
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>limit){
//         console.log(arr[i])
//     }
// }
