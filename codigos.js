const botonmenu=document.getElementById("btnmenu");
const vermenu=document.getElementById("ulmenu");

const enlace1=document.getElementById("enlace1");
const enlace2=document.getElementById("enlace2");
const ocultarmenu=document.getElementById("ulmenu");



function irrarriba(pxPantalla){
    window.addEventListener("scroll",()=>
    {

        var scroll=document.documentElement.scrollTop;
        var botonarriba=document.getElementById("btnarriba");

        if(scroll>pxPantalla)
        {
            botonarriba.style.right=20+"px";
            
        }
        else{botonarriba.style.right=-100+"px";}
    })
}

irrarriba(500);




botonmenu.addEventListener("click",()=>{

vermenu.classList.toggle("mostrar_menu");

vermenu.classList.replace("ocultar_menu","mostrar_menu");
}

)

enlace1.addEventListener("click", ()=>{
   

    ocultarmenu.classList.replace("mostrar_menu","ocultar_menu");
}
)
enlace2.addEventListener("click", ()=>{
   

    ocultarmenu.classList.replace("mostrar_menu","ocultar_menu");
}
)
enlace3.addEventListener("click", ()=>{
   

    ocultarmenu.classList.replace("mostrar_menu","ocultar_menu");
}
)
enlace4.addEventListener("click", ()=>{
   

    ocultarmenu.classList.replace("mostrar_menu","ocultar_menu");
}
)
enlace5.addEventListener("click", ()=>{
   

    ocultarmenu.classList.replace("mostrar_menu","ocultar_menu");
}
)
enlace6.addEventListener("click", ()=>{
   

    ocultarmenu.classList.replace("mostrar_menu","ocultar_menu");
}
)








