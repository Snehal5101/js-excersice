// let btn = document.createElement("button");
// btn.innerHTML="Novel";
// document.body.appendChild(btn);

var a=document.createElement("a");
var linkText =document.createTextNode("Novel");
a.appendChild(linkText);
a.title="Novel";
a.href="./novel.html";
document.body.appendChild(a);

var a1=document.createElement("a");
var linkText1 =document.createTextNode("History");
a1.appendChild(linkText1);
a1.title="History";
a1.href="./History.html";
document.body.appendChild(a1);

var a2=document.createElement("a");
var linkText2 =document.createTextNode("Biography");
a2.appendChild(linkText2);
a2.title="Biography";
a2.href="./biography.html";
document.body.appendChild(a2);

let arrnovel= [{url:"https://cdn.penguin.com.au/covers/original/9780141332499.jpg",title:"The Great Adventures of Sherlock Holmes",author:"Donald Thomas ",price:"\u20B9 550"},{url:"https://i.harperapps.com/covers/9780062024329/y648.jpg",title:"The Alchemist",author:"Paulo Coelho",price:"\u20B9 1135"},{url:"http://ecx.images-amazon.com/images/I/514GAjvGPTL._SY445_QL70_.jpg",title:"A Scandal In Bohemia",author:"Conan Doyle",price:"\u20B9 838"},{url:"https://i.ebayimg.com/images/g/hH0AAOSwhzZeoT58/s-l400.jpg",title:"Inside George Orwell",author:" Gordon Bowker ",price:"\u20B9 1948"}];

for(let i of arrnovel){
document.getElementById("novelpage").innerHTML=arrnovel;
};



