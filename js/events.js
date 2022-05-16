!function () {
    document.querySelectorAll(".coding .files-container button").forEach(boton =>{
        boton.addEventListener('click',cambiarArchivo);
    })
    function cambiarArchivo(event) {
        if(event.target.classList.contains("active"))
            return;
        let antiguo = event.target.parentNode.parentNode.querySelector(".active");
        antiguo.parentNode.parentNode.parentNode.parentNode.querySelector("pre.show").classList.remove("show")
        event.target.parentNode.parentNode.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
        event.target.parentNode.parentNode.parentNode.parentNode.querySelector("pre[data-label='"+event.target.innerText+"']").classList.add("show")
    }
}();