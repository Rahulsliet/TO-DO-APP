let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let input=document.querySelector("input");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=input.value;
    let deletebtn=document.createElement("button");
    deletebtn.innerText="Delete";
    deletebtn.classList.add("delete");
    deletebtn.setAttribute("id","btn");
    item.appendChild(deletebtn);
    ul.appendChild(item);
    input.value="";
});
let dels=document.querySelectorAll(".delete");
for(del of dels){
    del.addEventListener("click",function(){
        console.log("clickrf");
    })
}
ul.addEventListener("click", function(event){
    console.dir(event.target.nodeName);
    if(event.target.nodeName=="BUTTON"){
        let item=event.target.parentElement; 
        item.remove();
    }

})
