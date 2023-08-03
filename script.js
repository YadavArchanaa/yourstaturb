function check(){
    let a=document.getElementById("search");
    let b=document.getElementById("ul");
    
    if(a.style.display !=="none"){
        a.style.display="none";
        b.style.display ="flex";
    }
    else{
        a.style.display="block"; 
        b.style.display ="none"; 
      
    }
}