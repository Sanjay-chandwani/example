let text = document.querySelector("input[type=text]");
let before = document.querySelector("#before");
let end = document.querySelector("#end");
let ul= document.querySelector("ul");
let add=document.querySelector("button");
let form=document.querySelector("form");



// if(before.checked==true){
	var newtext = document.createElement("input");
before.onchange=()=>{
	newtext.setAttribute("type","text");
	newtext.setAttribute("placeholder","Enter position of the new text");
	form.appendChild(newtext);
	newtext.style.cssText="width:13rem;padding:0.4rem";	
}

add.onclick=function(e)
{  e.preventDefault();

   if(end.checked==true){
     let newli = document.createElement("li");
     newli.innerHTML=text.value;
     ul.appendChild(newli);
   }

   else if(before.checked==true){
   	let indexvalue =newtext.value-1;
    let newli = document.createElement("li");
    newli.innerHTML=text.value;
    let li=ul.children[indexvalue];
    ul.insertBefore(newli,li);

 
   }	
}