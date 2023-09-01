
const tarjetas = document.getElementById("tarjetas");
const verCarrito = document.getElementById("vercarrito");
const carritoCompra = document.getElementById("carrito-compra")


let carrito = JSON.parse(localStorage.getItem("compra")) || [];


product.forEach((producto) => {

    let tarjeta = document.createElement("div");
    tarjeta.className = "card";
    tarjeta.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.modelo}</h3>
    <p>${producto.precio}$</p>
    `;

    tarjetas.append(tarjeta);

    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "comprar";

    tarjeta.append(comprar);

    comprar.addEventListener("click", () => {

        const check = carrito.some((checkId) => checkId.id === producto.id);

        if(check){
            carrito.map((prod) =>{
                if(prod.id === producto.id){
                    prod.cantidad++;
                }
            })
        }else{
            carrito.push({
                id: producto.id,
                modelo: producto.modelo,
                precio: producto.precio,
                img: producto.img,
                cantidad: producto.cantidad,
            });
        }
        saveInLocal();
    });
});
const saveInLocal = ()=>{
    localStorage.setItem("compra", JSON.stringify(carrito));
};

