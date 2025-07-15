const productos = [
  {
    nombre: "Paracetamol 500mg",
    precio: "$25.00",
    descripcion: "Caja con 20 tabletas",
    imagen: "https://via.placeholder.com/200x150?text=Paracetamol"
  },
  {
    nombre: "Ibuprofeno 400mg",
    precio: "$35.00",
    descripcion: "Caja con 24 cápsulas",
    imagen: "https://via.placeholder.com/200x150?text=Ibuprofeno"
  },
  {
    nombre: "Omeprazol 20mg",
    precio: "$40.00",
    descripcion: "Caja con 14 cápsulas",
    imagen: "https://via.placeholder.com/200x150?text=Omeprazol"
  },
  // Agrega más productos aquí
];

const contenedor = document.getElementById("catalogo");

function renderizarProductos(lista) {
  contenedor.innerHTML = "";
  lista.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <h2>${p.nombre}</h2>
      <p>${p.descripcion}</p>
      <p><strong>${p.precio}</strong></p>
      <button onclick="cotizar('${p.nombre}')">Solicitar cotización</button>
    `;
    contenedor.appendChild(card);
  });
}

function cotizar(nombreProducto) {
  alert(`Solicitud de cotización para: ${nombreProducto}`);
}

document.getElementById("buscador").addEventListener("input", e => {
  const texto = e.target.value.toLowerCase();
  const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(texto));
  renderizarProductos(filtrados);
});

renderizarProductos(productos);
