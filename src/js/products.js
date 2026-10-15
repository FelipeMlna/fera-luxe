// Lista de Productos de FÉRA LUXE
const products = [
    {
        id: 1,
        name: "Pulsera Tejida, 7 balines #6",
        price: 30000,
        image: "src/assets/img1.jpeg",
        description: "Elegante pulsera tejida a mano con 7 balines de alta calidad en Rodio #6. Resistente y con un acabado brillante único."
    },
    {
        id: 2,
        name: "Pulsera Tejida, 4 balines #5",
        price: 20000,
        image: "src/assets/img2.jpeg",
        description: "Diseño minimalista y sofisticado. Confeccionada con 4 balines en Rodio #5 y tejido ajustable."
    },
    {
        id: 3,
        name: "Pulsera Tejida, 10 #5",
        price: 25000,
        image: "src/assets/img3.jpeg",
        description: "Pulsera con 10 balines en Rodio #5, ideal para combinar con otros accesorios y resaltar tu estilo."
    },
    {
        id: 4,
        name: "Pulsera Full balines #5",
        price: 60000,
        image: "src/assets/img4.jpeg",
        description: "Diseño de lujo con cobertura completa de balines en Rodio #5. Máximo brillo y distinción."
    },
    {
        id: 5,
        name: "Pulsera Neopreno, 11 balines #5",
        price: 35000,
        image: "src/assets/img5.jpeg",
        description: "Moderna pulsera en neopreno de alta durabilidad adornada con 11 balines en Rodio #5."
    },
    {
        id: 6,
        name: "Combo 2 Pulseras Tejidas",
        price: 35000,
        image: "src/assets/img6.jpeg",
        description: "Dúo exclusivo de pulseras tejidas complementarias para un look versátil y moderno."
    },
    {
        id: 7,
        name: "Pulsera 7 nudos, 6 balines #4",
        price: 20000,
        image: "src/assets/img7.jpeg",
        description: "Tradicional pulsera de protección de 7 nudos enriquecida con 6 balines en Rodio #4."
    },
    {
        id: 8,
        name: "Pulsera Tejida 2 carriles de 40 balines #5",
        price: 100000,
        image: "src/assets/img8.jpeg",
        description: "Pieza de alta gama con doble carril y 40 balines en Rodio #5. Elaboración artesanal prémium."
    },
    {
        id: 9,
        name: "Pulsera Neopreno, 17 balines #4",
        price: 40000,
        image: "src/assets/img9.jpeg",
        description: "Pulsera de neopreno con 17 balines en Rodio #4. Estilo deportivo y elegante a la vez."
    },
    {
        id: 10,
        name: "Pulsera San Benito, 6 balines #5",
        price: 25000,
        image: "src/assets/img10.jpg",
        description: "Hermosa pulsera con medalla de San Benito flanqueada por 6 balines en Rodio #5."
    },
    {
        id: 11,
        name: "Pulsera San Benito, 6 balines #5",
        price: 25000,
        image: "src/assets/img11.jpg",
        description: "Edición especial con medalla de San Benito y balines de Rodio #5 de alta durabilidad."
    },
    {
        id: 12,
        name: "Pulsera 3 Carriles",
        price: 110000,
        image: "src/assets/img12.jpeg",
        description: "Pulsera de lujo con estructura de 3 carriles. Una obra de arte de la joyería artesanal en FÉRA LUXE."
    },
    {
        id: 13,
        name: "Anillos de lujo",
        price: 20000,
        image: "src/assets/img13.jpeg",
        description: "Anillos Tejidos. Lleva el diseño que quieras por el mismo precio."
    }
    ,
     {
        id: 14,
        name: "Pulsera Tejida herraje RX - Rolex",
        price: 35000,
        image: "src/assets/img14",
        description: "Pulsera RX, 6 balines en Rodio #5 y neopreno ."
    }
    ,
    {
        id: 15,
        name: "Pulsera Tejida herraje Tio Rico",
        price: 110000,
        image: "src/assets/img15.jpeg",
        description: "Pulsera Tio Rico de 3 carriles en Rodio #5."
    }
    ,
    {
        id: 16,
        name: "Pulsera Tejida herraje Virgen de Guadalupe",
        price: 35000,
        image: "src/assets/img16.jpeg",
        description: "Pulsera Tejida herraje Virgen de Guadalupe, 4 balines en Rodio #5 y neopreno."
    }
    ,
    {
        id: 17,
        name: "Pulsera Tejida herraje Fortuna",
        price: 25000,
        image: "src/assets/img17.jpeg",
        description: "Pulsera Tejida herraje Fortuna, 2 balines en Rodio #5."
    }
    ,
    {
        id: 18,
        name: "Pulsera Tejida herraje Virgen de Guadalupe",
        price: 25000,
        image: "src/assets/img18.webp",
        description: "Pulsera Tejida hilo rojo, herraje Virgen de Guadalupe, 2 balines en Rodio #5."
    }
    ,
    {
        id: 19,
        name: "Pulsera Tejida, balines diamantados y lisos",
        price: 30000,
        image: "src/assets/img19.jpeg",
        description: "Pulsera Tejida, hilo lila, 2 balines diamantados #5, 4 balines lisos #5 y 1 balin diamantado #6."
    }
    ,
    {
        id: 20,
        name: "Pulsera 7 nudos",
        price: 25000,
        image: "src/assets/img20.jpg",
        description: "Pulsera 7 nudos, 6 balines lisos #4, dije San Miguel Arcangel."
    }
];

let cart = [];
let currentPage = 1;
const itemsPerPage = 6; // 6 productos por página

// Elementos DOM
const productGrid = document.getElementById('product-grid');
const paginationContainer = document.getElementById('pagination-container');
const cartToggle = document.getElementById('cart-toggle');
const closeCartBtn = document.getElementById('close-cart');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');
const checkoutForm = document.getElementById('checkout-form');
const checkoutBtn = document.getElementById('checkout-btn');

// Crear modal de detalles si no existe (con object-fit: contain para que no se recorte la foto)
let productModal = document.getElementById('product-detail-modal');
if (!productModal) {
    productModal = document.createElement('div');
    productModal.id = 'product-detail-modal';
    productModal.className = 'product-modal-overlay';
    productModal.style.cssText = 'display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 1000; justify-content: center; align-items: center; padding: 1rem;';
    productModal.innerHTML = `
        <div class="product-modal-content" style="background: #111; padding: 2rem; border-radius: 8px; max-width: 480px; width: 100%; position: relative; color: #fff; border: 1px solid #d4af37; text-align: center;">
            <button id="close-product-modal" style="position: absolute; top: 10px; right: 15px; background: none; border: none; color: #fff; font-size: 2rem; cursor: pointer;">&times;</button>
            <img id="modal-product-img" src="" alt="" style="width: 100%; max-height: 320px; object-fit: contain; background: #000; border-radius: 6px; margin-bottom: 1rem;">
            <h3 id="modal-product-title" style="font-family: 'Playfair Display', serif; font-size: 1.3rem; margin-bottom: 0.5rem; color: #d4af37;"></h3>
            <p id="modal-product-price" style="font-size: 1.2rem; font-weight: bold; margin-bottom: 0.8rem; color: #fff;"></p>
            <p id="modal-product-desc" style="font-size: 0.9rem; color: #bbb; margin-bottom: 1.2rem; line-height: 1.4;"></p>
            <button id="modal-add-to-cart" class="btn btn-primary" style="width: 100%; padding: 0.8rem; background: #d4af37; border: none; color: #000; font-weight: bold; cursor: pointer; border-radius: 4px;">AGREGAR AL CARRITO</button>
        </div>
    `;
    document.body.appendChild(productModal);
}

let activeProductId = null;

// Renderizar catálogo
function renderCatalog() {
    if (!productGrid) return;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    productGrid.innerHTML = '';

    currentProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image-container" style="cursor: pointer;" data-id="${product.id}">
                <img src="${product.image}" alt="${product.name}" class="product-img">
            </div>
            <div class="product-info">
                <h3 class="product-title" style="cursor: pointer;" data-id="${product.id}">${product.name}</h3>
                <p class="product-price">$${product.price.toLocaleString()} COP</p>
                <button class="btn btn-primary add-to-cart-btn" data-id="${product.id}">AGREGAR AL CARRITO</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });

    // Eventos para abrir modal
    document.querySelectorAll('.product-image-container, .product-title').forEach(el => {
        el.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            openProductModal(id);
        });
    });

    // Eventos para agregar al carrito
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            addToCart(id);
        });
    });

    renderPaginationControls();
}

// Renderizar controles de paginación
function renderPaginationControls() {
    if (!paginationContainer) return;

    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(products.length / itemsPerPage);

    if (totalPages <= 1) return;

    // Botón Anterior
    const prevBtn = document.createElement('button');
    prevBtn.className = 'btn btn-secondary';
    prevBtn.innerText = '« Anterior';
    prevBtn.disabled = currentPage === 1;
    prevBtn.style.opacity = currentPage === 1 ? '0.4' : '1';
    prevBtn.style.cursor = currentPage === 1 ? 'not-allowed' : 'pointer';
    prevBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderCatalog();
            document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
        }
    };
    paginationContainer.appendChild(prevBtn);

    // Números
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `btn ${i === currentPage ? 'btn-primary' : 'btn-secondary'}`;
        pageBtn.innerText = i;
        pageBtn.style.padding = '0.4rem 0.8rem';
        pageBtn.style.cursor = 'pointer';
        if (i === currentPage) {
            pageBtn.style.backgroundColor = '#d4af37';
            pageBtn.style.color = '#000';
        }
        pageBtn.onclick = () => {
            currentPage = i;
            renderCatalog();
            document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
        };
        paginationContainer.appendChild(pageBtn);
    }

    // Botón Siguiente
    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn btn-secondary';
    nextBtn.innerText = 'Siguiente »';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.style.opacity = currentPage === totalPages ? '0.4' : '1';
    nextBtn.style.cursor = currentPage === totalPages ? 'not-allowed' : 'pointer';
    nextBtn.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderCatalog();
            document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
        }
    };
    paginationContainer.appendChild(nextBtn);
}

// Modal
function openProductModal(id) {
    const p = products.find(prod => prod.id === id);
    if (!p) return;

    activeProductId = p.id;
    document.getElementById('modal-product-img').src = p.image;
    document.getElementById('modal-product-title').innerText = p.name;
    document.getElementById('modal-product-price').innerText = `$${p.price.toLocaleString()} COP`;
    document.getElementById('modal-product-desc').innerText = p.description;

    productModal.style.display = 'flex';
}

document.getElementById('close-product-modal').onclick = () => productModal.style.display = 'none';
productModal.onclick = (e) => { if (e.target === productModal) productModal.style.display = 'none'; };

document.getElementById('modal-add-to-cart').onclick = () => {
    if (activeProductId) {
        addToCart(activeProductId);
        productModal.style.display = 'none';
    }
};

// Carrito
function addToCart(id) {
    const prod = products.find(p => p.id === id);
    const inCart = cart.find(item => item.id === id);

    if (inCart) {
        inCart.quantity += 1;
    } else {
        cart.push({ ...prod, quantity: 1 });
    }
    updateCartUI();
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.innerText = totalCount;

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="empty-msg">Tu carrito está vacío.</p>`;
        if (cartTotalPrice) cartTotalPrice.innerText = "$0 COP";
        return;
    }

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.style.cssText = 'display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 1px solid #333;';
        itemEl.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 45px; height: 45px; object-fit: cover; border-radius: 4px;">
            <div style="flex-grow: 1; margin-left: 10px;">
                <h4 style="font-size: 0.85rem; margin: 0; color: #fff;">${item.name}</h4>
                <p style="margin: 0; font-size: 0.8rem; color: #d4af37;">$${item.price.toLocaleString()} x ${item.quantity}</p>
            </div>
            <button onclick="window.removeFromCart(${item.id})" style="background: none; border: none; color: #ff4d4d; cursor: pointer; font-size: 1.2rem;">&times;</button>
        `;
        cartItemsContainer.appendChild(itemEl);
    });

    if (cartTotalPrice) cartTotalPrice.innerText = `$${total.toLocaleString()} COP`;
}

window.removeFromCart = function(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
};

if (cartToggle && cartSidebar && cartOverlay) {
    cartToggle.onclick = () => {
        cartSidebar.classList.add('open');
        cartOverlay.classList.add('open');
    };
    if (closeCartBtn) {
        closeCartBtn.onclick = () => {
            cartSidebar.classList.remove('open');
            cartOverlay.classList.remove('open');
        };
    }
    cartOverlay.onclick = () => {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('open');
    };
}

if (checkoutBtn) {
    checkoutBtn.onclick = () => {
        if (cart.length === 0) {
            alert("Tu carrito está vacío.");
            return;
        }
        document.getElementById('checkout-modal').style.display = 'flex';
    };
}

if (checkoutForm) {
    checkoutForm.onsubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('checkout-name').value;
        const phone = document.getElementById('checkout-phone').value;
        const idDoc = document.getElementById('checkout-id').value;
        const address = document.getElementById('checkout-address').value;
        const city = document.getElementById('checkout-city').value;
        const housing = document.getElementById('checkout-housing').value;

        let message = `*NUEVO PEDIDO - FÉRA LUXE*%0A%0A`;
        message += `*Cliente:* ${name}%0A`;
        message += `*Teléfono:* ${phone}%0A`;
        message += `*Documento:* ${idDoc}%0A`;
        message += `*Dirección:* ${address}, ${housing} (${city})%0A%0A`;
        message += `*Productos:*%0A`;

        let total = 0;
        cart.forEach(item => {
            const subtotal = item.price * item.quantity;
            total += subtotal;
            message += `- ${item.name} (x${item.quantity}): $${subtotal.toLocaleString()} COP%0A`;
        });

        message += `%0A*TOTAL A PAGAR: $${total.toLocaleString()} COP*`;

        const whatsappNumber = "573000000000";
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };
}

// Ejecutar inmediatamente al cargar la página
renderCatalog();
