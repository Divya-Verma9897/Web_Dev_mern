let li=document.getElementById("Img");
li.onmouseover  =function(){
    if(li.src.includes("Blackwhite.jpg")){
        li.src="colorflower.jpg";
    }
    else{
        li.src="Blackwhite.jpg";
    }
};