var div=document.createElement("div");
div.style.textAlign="center";
div.style.marginTop="100px";

var input=document.createElement("input");
input.setAttribute("type","text");
input.style.width="30%";
input.id="name";

var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Click me";
button.style.margin="5px";
button.style.background="palegreen";

button.addEventListener("click",getdata);

div.append(input,button);
document.body.append(div);

async function getdata(){
    let res=document.getElementById("name").value;
    console.log(res);
   try {
    let res1=await fetch(`https://api.genderize.io?name=${res}`);
    let res2=await res1.json();
     console.log(res2);
    index=res2.length-1;
    console.log(` age:${res2[index].age}`);
  } catch (error) {
   console.log(error);
   }

}


