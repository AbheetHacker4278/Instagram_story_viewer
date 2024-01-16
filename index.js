// const prompt = require("prompt-sync")();
// console.log("Starting")

// let a = 10;
// console.log(a);

// let b = "Abheet";
// console.log(b);

// {
//     let A = "Abheet";
//     console.log(A);
// }

// {
//     var B = "Seth";
//     console.log(B);
// }
// console.log(B);


// var a = 10;
// var a = 20;

// console.log(a);

// {
//     var a = 10;
//     console.log(a);
// }
// console.log(a);
// var a = 20;
// console.log(a);

// const a = 100;
// a = 10;
// console.log(a);

// {
//     const a = 100;
//     console.log(a);
// }

// var a = 10;
// console.log(a);


// let a;
// console.log(a);

// let a = null;
// console.log(a);

// let a = 10;
// a = "Abheet";
// console.log(a);

// let person = {
//     FirstName: "Abheet",
//     SecondName: "Seth",
//     Age: 18,
// }
// console.log(person.FirstName);
// console.log(person['FirstName']);

// let A = ["Abheet", "Seth", 20 , 7.10];
// // console.log(A[0]);
// // console.log(A[1]);
// // console.log(A[2]);
// // console.log(A[3]);

// A[3] = "Male";
// console.log(A);

// let name = 10;
// console.log(name); //not allowed to take name

// let x = 10;
// console.log(++x);

// let x = 10;
// let a = x++ + ++x + x++;
// console.log(a);


// console.log(9 === "9");

// console.log(1 === true);

// let age = 18;
// let chk = (age < 18) ? "Not elegible" : "Eligible";
// console.log(chk);

// console.log(false || 5 || 1);

// console.log(true & 5 & 1);

// console.log(true & "0");

// let a = 100;
// if(a > 10){
//     console.log("Error");
// }
// else if(a === 100){
//     console.log("Success");
// }
// else{
//     console.log("not error");
// }

// var a = 1;
// switch(a){
//     case 1: console.log("1"); 
//     break;
//     case 2: console.log("2"); 
//     break;
//     case 3: console.log("3"); 
//     break;
//     case 4: console.log("4"); 
//     break;
//     default: console.log("Nahi hai isme :(")
// }

// var result = '';
// for(var i = 0 ; i<10 ; i++){
//     result+=i;
// }
// console.log(result);

// var a = 5;
// for(var i = 0 ; i<=a ; i++){
//     console.log(i);
// }


// var a = 10;
// var i = 0;
// while(i<=a){
//     console.log(i);
//     i = i + 1;
//     i++;
// }

// var a = 5;
// var i = 0;
// do{
//     console.log(i++);
// }
// while(i<=a);


// var a = 5;
// var i = 0;
// do{
//     i = i * 2;
//     console.log(i++);
// }
// while(i<=a);


// let a = 10;
// var k = 1;
// for(var i = 0 ; i<=a ; i++){
//     k = k * 2;
//     console.log(k);
// }


// const prompt = require("prompt-sync")();
// const namee = prompt("What is your name?");

// let chk = (namee == "Abheet")? "Hello Abheet Sir" : "Abbe Kaun Hai Tu , Get out from here.";

// console.log(chk);

// let a = 10;
// var i = 0;
// do{
//     console.log(i++);
// }
// while(i <= a);


// let person = {
//     "Fname":"Abheet",
//     "Lname":"Seth",
//     "Pnum":6356038361,
// }
// console.log(person.Fname);
// console.log(person.Lname);
// console.log(person.Pnum);


// var rectangle = {
//     "l" : 3,
//     "b" : 2,
// }
// // console.log(rectangle.l*rectangle.b);

// rectangle.l  = 30;

// console.log(rectangle);


// function createReactangle(){
//     let reactangle = {
//         length : 20 ,
//         breath : 10,

//         draw : function() {
//             console.log("Hello Dunia :)");
//         }
//     };  
//     return rectangle;
// } 

// let rec = createReactangle();
// console.log(rec);


//factory function
// function createReactangle(){
//     return reactangle = {
//         length : 20 ,
//         breath : 10,

//         draw : function() {
//             console.log("Hello Dunia :)");
//         }
//     };  
// } 
// let rec = createReactangle();
// console.log(rec);

// function onlynumbers() {
//     return numer = {
//         a : 1,
//         b : 10,
//         c : 20,

//         draw(){
//             console.log("Test Function :)");
//         }
//     }
// }
// var numobj = onlynumbers();
// console.log("Factory Function Call: "  ,  numobj);



// function onlynumbers(a , b , c) {
//     return numer = {
//         a,
//         b,
//         c,
//         draw1(){
//             console.log("Test Function1 :)" , a+1 , b+1 , c+1);
//         },
//         draw2(){
//             console.log("Test Function2 :)" , a+2 , b+2 , c+2);
//         },
//         draw3(){
//             console.log("Test Function3 :)" , a+3 , b+3 , c+3);
//         }
//     }
// }
// var numobj = onlynumbers(1,2,3);
// console.log("Factory Function Call: "  ,  numobj.draw1());
// console.log("Factory Function Call: "  ,  numobj.draw2());
// console.log("Factory Function Call: "  ,  numobj.draw3());
// console.log("Factory Function Call: "  ,  numobj.a);
// console.log("Factory Function Call: "  ,  numobj.b);
// console.log("Factory Function Call: "  ,  numobj.c);






// function onlynumbers(){
//     return first = {
//         fst(){
//             var l = 10;
//             var b = 20;
//             console.log("First: " , l * b);
//         },
//         sed(){
//             var l = 10;
//             var b = 20;
//             console.log("second: " , l * b);
//         },
//         thd(){
//             var l = 10;
//             var b = 20;
//             console.log("Third: " , l * b);
//         },
//     }
// }
// let numobj = onlynumbers();
// console.log(numobj.fst());
// console.log(numobj.sed());
// console.log(numobj.thd());


// let fun = {
//     l:10,
//     b:20,
//     draw(){
//         console.log("Hello Abheet" + this.l + this.b);
//     }
// }
// console.log(fun.draw());


// function Rectangle() {
//     this.length = 10;
//     this.breath = 20;
//     this.draw = function() {
//         console.log("Hello Abheet");
//     }
// } 

// let rectangeobject = new Rectangle();
// console.log(rectangeobject);
// console.log(rectangeobject.draw());


// //constructor function
// function Roww(){
//     this.length = 10;
//     this.breath = 20;
//     this.draw = function() {
//         console.log("Hello Abheet" + " " + this.length + " " + this.breath);
//     }
// }
// let rectangeobject = new Roww();
// console.log(rectangeobject);
// console.log(rectangeobject.draw());


//Anothor way for creating an object with new keyword
// let obj = new Object();
// obj.length = 10;
// obj.breadth = 20;
// obj.draw = function(){
//     console.log("Hello Abheet" + " " + this.length + " " + this.breadth);
// }
// console.log(obj.length);
// console.log(obj.breadth);
// console.log(obj.draw());

// let a = {
//     l:10,
//     b:20,
// }
// a.c = 30;
// console.log(a.l + " " + a.b + " " + a.c)
// delete a.c;
// console.log(a.l + " " + a.b + " " + a.c)

// function Rectangle(){
    // this.length = 10;
    // this.breadth = 20;
    // this.draw = function(){
    //     console.log("Abheet Seth" + " " + this.breadth + " "+ this.length);
    // }
// }
// let rectangeobject = new Rectangle();
// console.log(rectangeobject.constructor);

// let Object = new Function(

//     'length','breadth',
//     `this.length = 10;
//     this.breadth = 20;
//     this.draw = function(){
//         console.log("Abheet Seth" + " " + this.breadth + " "+ this.length);
//     }`
// );
// let rect = new Object(10 , 20);
// console.log(rect);

// let a = {val : 10}
// let b = a;
// a.val++;
// console.log(a.val);
// console.log(b.val);

// let a = 10;
// let b = a;
// a++;
// console.log(a);
// console.log(b);

// let a = {val:10};
// function inc(a){
//     a.val++;
// }
// inc(a);
// console.log(a.val);

// let a = {
//     x : 10,
//     y : 20,
// }
// for(let key in a){
//     console.log(key , a[key]);
// }



// let a = {
//     x : 10,
//     y : 20,
// }
// for(let key of Object.keys(a)){
//     console.log(key , a[key]);
// }


// let a = {
//     x : 10,
//     y : 20,
// }
// for(let key of Object.entries(a)){
//     console.log(key);
// }


// let obj1 = {
//     l : 10,
//     b : 20,
// }

// let obj2 = {};

// for(let key in obj1){
//     obj2[key] = obj1[key];
// }

// for(let key in obj2){
//     console.log(obj2[key]);
// }



// let obj1 = {
//     l : 10,
//     b : 20,
// }
// let obj2 = Object.assign({}, obj1);
// for(let key in obj2){
//     console.log(obj2[key]);
// }


// let obj1 = {
//     l : 10,
//     b : 20,
// }
// let obj2 = {...obj1};
// for(let key in obj2){
//     console.log(obj2[key]);
// }

//Math

// console.log(Math.random());

// console.log(Math.PI);

// console.log(Math.round(1.5));

// console.log(Math.max(3,2,4,1));

// console.log(Math.abs(-10));

//strings

// let Fname = 'Abheet';

// let Lname = new String('Seth');

// console.log(typeof Fname , typeof Lname);

// console.log(Fname.length);
// console.log(Fname[0]);
// console.log(Fname.includes('Abh'));
// console.log(Fname.startsWith('Abh'));
// console.log(Fname.endsWith('eet'));
// console.log(Fname.indexOf('A'));
// Fname.toUpperCase();
// console.log(Fname);

// // let nam = '   Abheet  ';
// // nam.trim();
// // console.log(nam);

// Fname.replace('Abh' , 'hola');
// console.log(Fname);

// let message = 'This is My first Javascript file';
// let words = message.split(' ');
// console.log(words);


// let fname = "This is my \n first \n Javascript file";
// console.log(fname);

// let fname1 = 
// `This is
// My Name
// Abheet Seth
// CSE CSDF`;
// console.log(fname1);

// let fname = "Abheet Seth";
// let Name = `Hello ${fname}
// How are you :)`;
// console.log(Name);

// let date = new Date();
// console.log(date);

// let date2 = new Date('Aug 6 2023 04:40');
// console.log(date2);

//                   year , month , day , hour
// let date3 = new Date(2004 , 7 , 26 , 12);
// console.log(date3);

// date3.setFullYear(1998);
// console.log(date3);

// let date = new Date('2004,Aug,26,12');

// console.log(date.getFullYear());

// let array = [1,2,3,4];
// console.log(array);
// array.push(5);
// console.log(array);

// array.unshift(0);
// console.log(array);

// array.splice(2 , 0 , 'a' , 'b' , 'c');
// console.log(array);

// console.log(array.indexOf('a'));

// let fnd = array.includes('0 b') ? "Hai Bhai" : "Nahi Hai bhai";
// console.log(fnd);


// let arr = [
//     {num1:1 , fname : "Abheet"},
//     {num2:2 , lname : "seth"}
// ];
// // console.log(arr);

// // let fnd = arr.find(function(arr){
// //     return arr.fname == 'Abheet';
// // })
// // console.log(fnd);

// let fnd = arr.find(arr => arr.lname == 'seth');
// console.log(fnd);

// let arr = [1 , 2 , 3 , 4 , 5];
// arr.pop();//remove last element from array.
// arr.shift();//remove first element from array.
// for(let i in arr){
//     console.log(arr[i]);
// }
// console.log("\n");
// arr.splice(1 , 1);//first element is index of array , second element is number of element to be removed
// for(let i in arr){
//     console.log(arr[i]);
// }
// while(arr.length > 0){
//     arr.pop();
// }
// console.log(arr);

// arr.splice(0 , arr.length);
// console.log(arr);

// arr.length = 0;
// console.log(arr);

// let array1 = [1 , 2 , 3 , 4];
// let array2 = [5 , 6 , 7 , 8];
// // let array3 = [];
// // for(let i = 0 ; i<array1.length ; i++){
// //     array3.push(array1[i]);
// //     array3.push(array2[i]);
// // }
// // array3.sort();
// // console.log(array3);

// let combined = array1.concat(array2);
// console.log(combined);

// let newbrk = combined.slice(2 , 4);
// console.log(newbrk);

// let comb = [...array1 , ...array2];
// console.log(comb);

// array1.forEach(function(arr){
//     console.log(arr);
// })

// array1.forEach(arr => console.log(arr));

// let number = [1,2,3,4,5,6];
// let jn = number.join(' - ');
// console.log(jn);

// let Name = "My name is Abheet Seth";
// let splt = Name.split(' ');
// console.log(splt); 

// let arr = [5 , 9 , 1 , 0 , 4];
// arr.sort();
// console.log(arr);

// let arry = [-1 , 0 , -3 , 1 , 6 , 9 , -10];

// var filtered = arry.filter(function(arry){
//     return arry > 0;
// })
// console.log(filtered);


// var Filtered = arry.filter(arry => arry>0);
// console.log(Filtered);

// let val = arr.map(function(arr){
//     return 'students_number' + arr;
// })
// console.log(val);

// let vali = arr.map(arr => 'students_number' + arr)
// console.log(vali);

// let arro = [10 , 20 , 30 , 40 , 50];
// let ar = arro.map(arro => 'students_number' + arro);
// console.log(ar);

// let arr = [1 , -1 , 0 , -4 , 10];
// let filtered = arr.filter(function(arr){
//     return arr>=0;
// })
// let items = filtered.map(function(arr){
//     return {items: arr};
// })
// console.log(items);



// let arr = [1 , -1 , 0 , -4 , 10];
// let items = arr.filter(function(arr){return arr>=0;}).map(function(arr){
//     return {items: arr};
// })
// console.log(items);


// function printcount(Name){
//     console.log(`Hello ${Name}`);
// }
// let inpt = prompt("Enter Your Name: ");
// printcount(inpt);

// function filternumber(num){
//     let arr = [];
//     for(let i = 0 ; i<num ; i++){
//         arr.push(prompt(`Enter Number${i+1}: `));
//     }
//     let filtered = arr.filter(function(arr){
//         return arr > 0;
//     })
//     console.log(filtered);
//     console.log(arguments);
// }

// let Number = prompt("Enter number: ");
// filternumber(Number); 

// function dynamicsum(a){
//     var totalsum = 0;
//     for(let i of arguments){
//         totalsum = totalsum + i;
//     }
//     return totalsum;
// }
// console.log(dynamicsum(1 , 2 , 3 , 4 , 5));

// function prnt(...args){
//     console.log(args);
// }
// prnt(1 , 2 , 3 , 4 , 5);

// let objname = new Object();
// objname.fname = "Abheet";
// objname.lname = "Seth";

// function fullName(){
//     return `${objname.fname} , ${objname.lname}`;
// }
// console.log(fullName());

// let objname = new Object();
// objname.fname = "Abheet";
// objname.lname = "Seth";

// function fullName(){
//     console.log(`${objname.fname} , ${objname.lname}`);
// }
// fullName();

// function dynamicsum(...args){
//     var totalsum = 0;
//     for(let i of arguments){
//         totalsum += args;
//     }
//     return totalsum;
// }
// console.log(dynamicsum(1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10));

// function totalsum(a = 10 , b = 20 , c){
//     return (a + b + c);
// }
// console.log(totalsum(undefined , undefined , 30));

// let objj = {
//     fname : "Abheet",
//     lname : "Seth",
//     get fullname(){
//         return `${this.fname} ${this.lname}`;
//     },
//     set fullname(value){
//         let parts = value.split(' ');
//         this.fname = parts[0];
//         this.lname = parts[1];
//     }
// }
// objj.fullname = 'Ram Sita';
// console.log(objj.fullname);
// console.log(objj.fname);
// console.log(objj.lname);

// let objj = {
//     fname : "Abheet",
//     lname : "Seth",
//     get fullname(){
//         return `${this.fname} ${this.lname}`;
//     },
//     set fullname(value){
//         let parts = value.split(' ');
//         this.fname = parts[0];
//         this.lname = parts[1];
//     }
// }
// objj.fullname = 'Ram Sita';

// try{
//     objj.fullname = 0;
// }
// catch{
//     alert('Bhai tera code error dee raha hai!!');
// }

// console.log(objj.fullname);

// let objj = {
//     fname : "Abheet",
//     lname : "Seth",
//     get fullname(){
//         return `${this.fname} ${this.lname}`;
//     },
//     set fullname(value){
//         if(typeof value !== String){
//             throw new Error("Bhai tera code error dee raha hai!!");
//         }
//         let parts = value.split(' ');
//         this.fname = parts[0];
//         this.lname = parts[1];
//     }
// }
// try{
//     objj.fullname = 0;
// }
// catch(e){
//     alert(e);
// }
// console.log(objj.fullname);

// let obj = {
//     fname : "Abheet",
//     lname : "Seth",
//     get fullname(){
//         return `${this.fname} ${this.lname}`;
//     },
//     set fullname(value){
//         if(typeof value != String){
//             throw new Error("Bhai tera code error dee");
//         }
//         let parts = value.split(' ');
//         this.fname = parts[0];
//         this.lname = parts[1];
//     }
// }
// obj.fullname = 0;
// try{
//     obj.fullname = 0;
// }
// catch(e){
//     alert(e); 
// }



// function addevent(){
//     console.log("HELLO DUNIA !!!!");
// }
// document.addEventListener('click' , addevent);
// document.removeEventListener('click' , addevent);


// const cont = document.querySelector('#wrapper');
// cont.addEventListener('click' , function(event){
//     console.log(event);
// })

// let mydiv = document.createElement('div');

// function paraEvents(event){
//     if(event.target.textContent == "This is Para 1"){
//         event.target.style.backgroundColor = 'pink';
//         console.log(event.target.textContent);
//     }
//     else{
//         console.log(event.target.textContent);
//     }
// }

// mydiv.addEventListener('click' , paraEvents);

// for(let i = 1 ; i<=100 ; i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is Para ' + i;

//     mydiv.appendChild(element);
// }
// document.body.appendChild(mydiv);

// let element = document.querySelector('.wrapper');

// element.addEventListener('click' , function(event){
//     if(event.target.nodeName == 'SPAN'){
//         console.log("This is Span Abheet");
//     }
//     else{
//         console.log("This is para Abheet");
//     }
// });

// let obj = {
//     fname : "Abheet",
//     lname : "Seth",
//     get fullname(){
//         return `${this.fname} , ${this.lname}`;
//     },
//     set fullname(value){
//         let parts = value.split(" ");
//         this.fname = parts[0];
//         this.lname = parts[1];
//     }
// }

// obj.fullname = 'Abheet Seth';
// console.log(obj.fullname);

// var variable = document.querySelector('h1');

// var add = document.querySelector('#btn1');

// var rem = document.querySelector('#btn2');


// var check = 0;
// add.addEventListener('click' , function(){
//     if(check == 0){
//         variable.textContent = "Namaste Dunia";
//         variable.style.color = 'orange';
//         btn1.textContent = 'Remove';
//         check = 1;
//     }
//     else{
//         variable.textContent = "Hello World";
//         variable.style.color = 'orange';
//         btn1.textContent = 'Change';
//         check = 0;
//     }
// })


// let imgg = document.querySelector('.ciontaiun');
// let ico = document.querySelector('i');

// imgg.addEventListener('dblclick' , function(){
//     ico.style.transform = 'translate(10% , -10%) scale(1)';
//     ico.style.opacity = 0.8;
//     setTimeout(function(){
//         ico.style.opacity = 0;
//     } , 3000)
//     setTimeout(function(){
//         ico.style.transform = 'translate(10% , -10%) scale(0)';
//     } , 3000)
// })

// let dark = document.querySelector('.ri-moon-fill');
// let bright = document.querySelector('.ri-moon-line');

// let the  = document.querySelector('.theme');


// bright.addEventListener('click' , function(){
//     dark.style.opacity = 1;
//     bright.style.opacity = 0;
//     the.style.backgroundColor = '#111';
// })

// dark.addEventListener('click' , function(){
//     dark.style.opacity = 0;
//     bright.style.opacity = 1;
//     the.style.backgroundColor = '#fff';
// })

// let btnn = document.querySelector('.btn');
// let txtt = document.querySelector('.txt');

// let cnt = 0;
// btnn.addEventListener('click' , function(){
//     if(cnt == 0){
//         txtt.innerHTML = 'Friends';
//         btnn.innerHTML = 'Remove';
//         cnt = 1;
//     }
//     else{
//         txtt.innerHTML = 'UnFriends';
//         btnn.innerHTML = 'Add Friends';
//         cnt = 0;
//     }
// })

// var ondbl = document.querySelector('.box');

// var love = document.querySelector('.icone');

// ondbl.addEventListener('dblclick' , function(){
//     love.style.transform = 'translate(-50% , -50%) scale(1)';
//     love.style.opacity = 0.4;
//     setTimeout(function(){
//         love.style.transform = 'translate(-50% , -50%) scale(0)';
//     } , 2000)
// })

// var arr = [
//     {dp:"https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" , story: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"},
//     {dp:"https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" , story: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"},
//     {dp:"https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" , story: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"},
//     {dp:"https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" , story: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"},
// ];
// var storia = document.querySelector("#storia");
// var clutter = "";
// arr.forEach(function(arr , idx){
//     clutter += `<div class="story">
//     <img id="${idx}" src="${arr.dp}" alt="">
//     </div>`
// })

// storia.innerHTML = clutter;

// storia.addEventListener('click' , function(click){
//     document.querySelector('.full_screen').style.backgroundImage = `url('${arr[click.target.id].story}')`;
//     document.querySelector('.full_screen').style.display = "block";
//     setTimeout(function(){
//         document.querySelector('.full_screen').style.display = "none";
//     },3000)
// })


// let fragment = document.createDocumentFragment();

// var choose = document.querySelector('.test');
// var buttn = document.querySelector('button');


// buttn.addEventListener('click' , function(){
//         var element = document.createElement('p');
//         element.textContent = "Hello Dunia Means World!!!!";
//         choose.appendChild(element);
// });

// document.body.appendChild(fragment);


// var eve = document.querySelector('.clik');

// eve.addEventListener('click' , function(){
//     console.log('clik clicked');
//     setTimeout(function(){
//         eve.style.display = 'none';
//     } , 0)
// })


// var meraPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("inside the promise");
//     } , 3000);
//     resolve(2004);
// })
// console.log("first");
// var meraPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("inside the promise");
//     } , 3000);
//     reject(new Error("Error hai Bhai!!!!"));
// })
// console.log("first");


// var meraPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("inside the promise");
//     } , 3000);
//     resolve(2004);
//     // reject(new Error("Error hai Bhai!!!!"));
// })

// meraPromise.then(value => {console.log(value)});

// meraPromise.catch(error => {console.log("Received an Error Bro!!!")});


// async function abcd(){
//     return 7;
// }


// async function ext(){
//     let gujwether = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve("Gujarat mai garmi hai...");
//         },10000);
//     })
//     let rajwether = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve("Rajasthan mai pani hai...");
//         },20000);
//     })  
//     return [await gujwether , await rajwether];  
// }

// async function utility(){
//     let apifetch = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let content = await apifetch.json();
//     console.log(content);
// }
// utility();


// async function helper(){
//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'Abheet',
//           body: 'Abhi ban rahi hai',
//           userId: 2004,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     }

//     let contents = await fetch('https://jsonplaceholder.typicode.com/posts' , options);   
//     let response = await contents.json();
//     return response; 
// }

// console.log(helper());


// function solve(){
//     let namee = "xyz";

//     function inner(){
//         console.log(namee);
//     }

//     return inner();
// }

// let a = solve();
// console.log(a); 

// function printsum(arr){
//     let total_sum = 0
//     for(let i of arr){
//         total_sum += i;
//     }
//     return total_sum;
// }
// var arr = [1 , 2 , 3 , 4]
// console.log(printsum(arr))

// console.log(Math.round(0.47421981));

// let newobj = {
//     fname:"Abheet",
//     lname:"Seth",
//     age:19,
// }
// console.log(newobj.fname , newobj.lname , newobj.age);

// let age = 2
// let Age = (age >= 18) ? "Adult" : "Baccha";
// console.log(Age);

// var a = 10;
// var i = 0;
// do{
//     console.log(i);
//     i++;
// }
// while(i <= a)



// function multiobj() {
//     var rec1 = {
//         draw: function () {
//             console.log("Hello world from rec1");
//         }
//     }
//     var rec2 = {
//         draw: function () {
//             console.log("Hello world from rec2");
//         }
//     }
//     var rec3 = {
//         draw: function () {
//             console.log("Hello world from rec3");
//         }
//     }
//     return {
//         rec1: rec1,
//         rec2: rec2,
//         rec3: rec3,
//     };
// }
// var objects = multiobj();
// console.log(objects.rec1.draw(),
// objects.rec2.draw(),
// objects.rec3.draw());

// function Rectangle(){
//     this.A = 10,
//     this.B = 20
// }
// var rect = new Rectangle();
// rect.a = 10
// rect.b = 20
// console.log(rect.a + rect.b);

// let object = new Function(
//     'fname' , 'lname',
//     `this.fanme = "Abheet";
//     this.lame = "Seth";
//     this.draw = function(){
//         console.log("Abheet seth");
//     }`
// );
// let Obj = new object("Abheet" , "Seth")
// console.log(Obj);
// console.log(Obj.draw());

// let mydiv = document.querySelector('.boxi');
// function paraEvents(eventi){
//     console.log("I clicked on para!!!");
//     setTimeout(function(){
//         mydiv.style.color = "orange";
//     } , 2000);
//     setTimeout(function(){
//         mydiv.style.color = "green";
//     } , 4000);
// }
// for(let i = 1 ; i<=100 ; i++){
//     let element = document.createElement('p');
//     let txt = document.createTextNode('this is para:- '+ i);
//     element.appendChild(txt);
//     mydiv.appendChild(element);
//     element.addEventListener('click' , paraEvents);
// }
// document.body.appendChild(mydiv);

// let b = document.querySelector('.btn');
// function btnEvents(event){
//     console.log("I clicked on btn");
// }
// b.addEventListener('click' , btnEvents);



// let prms = new Promise(function(resolve, reject){
//     setInterval(function(){
//         console.log("nahi resolve hoo gaya hai bhai");
//     } , 3000);
//     reject(2004);
// })
// prms.then(() => {
//     let prms2 = new Promise(function(resolve, reject){
//         resolve("abb theek hai bhai");
//     })
// })
                                                                                                                                                
// async function fun(){
//     let gujwether = new Promise(function (resolve, reject){
//         setTimeout(function(){
//             resolve("gujarat wether");
//         } , 0)
//     });
//     let mahwether = new Promise(function (resolve, reject){
//         setTimeout(function(){
//             resolve("maharashtra wether");
//         } , 1000)
//     });
//     return [await gujwether , await mahwether];
// }

// let namee = "xyz";
// function solve(){
//     console.log(namee);
// }
// solve();

// let btnn = document.querySelector(".btn");
// let btn = document.querySelector(".b");
// let respon = document.querySelector("#resp");
// let c = 0;
// btnn.addEventListener("click" , function(){
//     if(c == 0){
//         respon.innerHTML = "Friends";
//         respon.style.color = 'green';
//         btn.innerHTML = "remove Friend";
//         c = 1;
//     }
//     else{
//         respon.innerHTML = "Stranger";
//         respon.style.color = 'red';
//         btn.innerHTML = "Add Friend";
//         c = 0;
//     }
// })


// let selt = document.querySelector('.container');

// let effect = document.querySelector('.ri-heart-3-fill');
// selt.addEventListener("dblclick", function(){
//     effect.style.opacity = 1;
//     effect.style.transform = 'translate(-0%,-90%)scale(1)';
//     setTimeout(function(){
//         effect.style.opacity = 0;
//         effect.style.transform = 'translate(-0%,-90%)scale(0)';
//     } , 3000)
// })



var arr = [
    {dp:"https://images.unsplash.com/photo-1705162005861-607698ffbaa3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , stry:"https://images.unsplash.com/photo-1687441266692-de2df8197665?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1673305752346-30d13951edc5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , stry:"https://images.unsplash.com/photo-1690642143805-34aa01fdbba8?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1696458513767-2f9c8c5727b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , stry:"https://images.unsplash.com/photo-1469460340997-2f854421e72f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1540316264016-aeb7538f4d6f?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , stry:"https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
];

var clutter = "";
arr.forEach((elem , idx)=>{
    clutter += `
    <div class="stry">
        <img id = "${idx}" src="${elem.dp}" alt="">            
    </div>`
})
let storiya = document.querySelector(".storia");
storiya.innerHTML = clutter;

storiya.addEventListener("click",(dets)=>{
    let fu = document.querySelector(".full");
    fu.style.display = "block";
    fu.style.backgroundImage =  `url(${arr[dets.target.id].stry})`
    setTimeout(()=>{
        fu.style.display = "none";
    } , 3000);

})