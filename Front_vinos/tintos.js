const contenedor$$=document.querySelector(".contenedor_tinto")

const vinosTintos = async () => {
    const vinosTintosApi = await fetch ("http://localhost:5000/tintos");
    const vinosTintosJSON = await vinosTintosApi.json();
    pintarVinosTintos(vinosTintosJSON)
};

const pintarVinosTintos = (array) => {

    for (const vinos of array) {

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


vinosTintos()