const productos = [
  {
    nombre: "Xtandi 40mg",
    precio: "$80,000.00",
    descripcion: "Enzalutamida 40mg",
    descripcion: "Caja con 120 cápsulas",
    descripcion: "Laboratorio:Astellas",
    imagen: "https://dstamaria.com/cdn/shop/products/xtandi-40.png?v=1740597947&width=493"
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
  {
    nombre: "Paracetamol 500mg",
    precio: "$30.00",
    descripcion: "Caja con 20 tabletas",
    imagen: "https://via.placeholder.com/200x150?text=Paracetamol"
  },
  {
    nombre: "Losartán 50mg",
    precio: "$60.00",
    descripcion: "Caja con 30 tabletas",
    imagen: "https://via.placeholder.com/200x150?text=Losartán"
  },
  {
    nombre: "Amoxicilina 500mg",
    precio: "$55.00",
    descripcion: "Caja con 21 cápsulas",
    imagen: "https://via.placeholder.com/200x150?text=Amoxicilina"
  },
  {
    nombre: "Metformina 850mg",
    precio: "$45.00",
    descripcion: "Caja con 28 tabletas",
    imagen: "https://via.placeholder.com/200x150?text=Metformina"
  },
  {
    nombre: "Vitamina C 1000mg",
    precio: "$50.00",
    descripcion: "Caja con 10 tabletas efervescentes",
    imagen: "https://via.placeholder.com/200x150?text=Vitamina+C"
  }
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
  const numeroWhatsApp = "5213328070507"; // Cambia esto por tu número real
  const mensaje = encodeURIComponent(`Hola, me gustaría solicitar cotización del producto: ${nombreProducto}`);
  const url = `https://wa.me/${5213328070507}?text=${mensaje}`;
  window.open(url, '_blank');
}

document.getElementById("buscador").addEventListener("input", e => {
  const texto = e.target.value.toLowerCase();
  const filtrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(texto) ||
    p.descripcion.toLowerCase().includes(texto)
  );
  renderizarProductos(filtrados);
});

renderizarProductos(productos);
