
const pintarCarrito = ()=> {

    carritoCompra.innerHTML = "";
    carritoCompra.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="tituloHeader">Carrito</h1>
    `;
    carritoCompra.append(modalHeader);
    
    const modalClose = document.createElement("h1");
    modalClose.className = "modal-close";
    modalClose.innerText = "✖️";

    modalClose.addEventListener("click", () =>{
        carritoCompra.style.display = "none";
    });
    
    modalHeader.append(modalClose);

    carrito.forEach((product) => {
        let prodEnCarrito = document.createElement("div");
        prodEnCarrito.className = "prod-carrito";
        prodEnCarrito.innerHTML = `
        <img src="${product.img}">         
        <h3>${product.modelo}</h3>
        <p>${product.precio}$</p>
        <p>Cantidad: ${product.cantidad}</p>
        `;
        carritoCompra.append(prodEnCarrito);

        let eliminar = document.createElement("span");
        eliminar.className = "eliminar";
        eliminar.innerText = "🗑️";
        prodEnCarrito.append(eliminar);
        
        eliminar.addEventListener("click", eliminarProd);


        const totalCompraUni = document.createElement("div");
        totalCompraUni.className = 'total-compra-uni';
        totalCompraUni.innerHTML=`$${product.precio * product.cantidad}`;
    
        prodEnCarrito.append(totalCompraUni);

    });

    const total = carrito.reduce((acc, pr) => acc + pr.precio * pr.cantidad, 0);

    const totalCompra = document.createElement("div");
    totalCompra.className = 'total-compra';
    totalCompra.innerHTML=`Total a pagar :$${total}`;

    carritoCompra.append(totalCompra);

};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProd = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId)=>{
        return carritoId !== foundId;
    });

    pintarCarrito();
    saveInLocal();
};