const contenedor$$=document.querySelector(".contenedor_blanco")


const vinos = async () => {
    const vinosBlancosApi = await fetch ("http://localhost:5000/blancos");
    const vinosBlancosJSON = await vinosBlancosApi.json();
     pintarVinos(vinosBlancosJSON)
   // console.log(vinosBlancosJSON)
}


const pintarVinos = (vinosBlancos) => {

    for (const vinos of vinosBlancos) {

        const ficha$$ = document.createElement("div");
        const nombre$$ = document.createElement("h3")
        const imagen$$ = document.createElement("img");
        const tipoUva$$ = document.createElement("p");

        ficha$$.setAttribute("class", "ficha");
        nombre$$.setAttribute("class", "nombre");
        imagen$$.setAttribute("class", "imagen");
        tipoUva$$.setAttribute("class", "tex_uva");

        nombre$$.innerText = vinos.name;
        imagen$$.src = vinos.photo;
        imagen$$.alt = vinos.name;
        tipoUva$$.innerText = vinos.uva;

        ficha$$.appendChild(nombre$$)
        ficha$$.appendChild(tipoUva$$)
        ficha$$.appendChild(imagen$$)
       

        contenedor$$.appendChild(ficha$$)
        
    }

}

vinos()