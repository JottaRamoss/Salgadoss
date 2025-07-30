// Loader otimizado com fallback
document.addEventListener('DOMContentLoaded', function() {
  const loader = document.querySelector('.loader');
  
  if (loader) {
    loader.style.display = 'flex';
    
    // Evento principal de carregamento
    window.addEventListener('load', function() {
      setTimeout(function() {
        loader.classList.add('loader-hidden');
        
        loader.addEventListener('transitionend', function() {
          loader.style.display = 'none';
        }, { once: true });

        if (typeof AOS !== 'undefined') {
          AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
          });
        }
      }, 1000);
    });
    
    // Fallback de segurança
    setTimeout(function() {
      if (!loader.classList.contains('loader-hidden')) {
        loader.classList.add('loader-hidden');
        loader.style.display = 'none';
      }
    }, 5000);
  }
});

// Menu Mobile
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const nav = document.getElementById('main-nav');
if (mobileMenuBtn && nav) {
  mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuBtn.innerHTML = nav.classList.contains('active') ? 
      '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });

  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
}

// Ano Automático
const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}

// Header Scroll Effect
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (header) {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }
});

// Active Link Navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

if (sections.length && navLinks.length) {
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop - 300) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Variáveis globais
let selectedDrinks = [];
let selectedPackaging = {
  type: "standard",
  name: "Embalagem Padrão",
  price: "Incluso no preço"
};

// Opções de sabores
const flavorOptions = {

};

// Opções de bebidas (com imagens)
const drinkOptions = [
  { 
    id: 1, 
    name: "Coca-Cola 1,5L", 
    price: 12.90,
    image: "img/coca%202l.jpg"
  },
  { 
    id: 2, 
    name: "Guaraná Antarctica 1,5L", 
    price: 10.00,
    image: "img/guarana%202l.webp"
  },
    { 
    id: 1, 
    name: "Coca-Cola Zero 1,5L", 
    price: 12.90,
    image: "img/zero.webp"
  },
  { 
    id: 2, 
    name: "Guaraná Antarctica Zero 1,5L", 
    price: 10.00,
    image: "img/guarana%20zero.jpg"
  },
];

// PRODUTOS COMPLETOS
const products = [
  { 
    id: 1, 
    name: "Coxinha de Frango", 
    prices: { "25un": 15.00, "50un": 30.00, "100un": 55.00 },
    image: "img/frango.webp",
    category: "fritos",
    ingredients: "Frango desfiado, requeijão, farinha de trigo, ovos, temperos naturais"
  },
  { 
    id: 2, 
    name: "Bolinhas de Queijo", 
    prices: { "25un": 15.00, "50un": 30.00, "100un": 55.00 },
    image: "img/bolinha%20de%20queijo.jpg",
    category: "fritos",
    ingredients: "Farinha de trigo, queijo mussarela, leite, ovos, orégano"
  },
  { 
    id: 3, 
    name: "Queijo e Presunto", 
    prices: { "25un": 15.00, "50un": 30.00, "100un": 55.00 },
    image: "img/queijo%20e%20presunto.jpg",
    category: "fritos",
    ingredients: "Farinha de trigo, carne moída, cebola, alho, temperos naturais"
  },
  { 
    id: 4, 
    name: "Queijo Com Alho", 
    prices: { "25un": 15.00, "50un": 30.00, "100un": 55.00 },
    image: "img/queijo%20com%20alho.jpg",
    category: "fritos",
    ingredients: "Farinha de trigo, manteiga, palmito pupunha, creme de leite"
  },
  { 
    id: 5, 
    name: "Calabresa", 
    prices: { "25un": 15.00, "50un": 30.00, "100un": 55.00 },
    image: "img/calabresa.jpg",
    category: "fritos",
    ingredients: "Farinha de trigo, carne moída, tomate, cebola, especiarias árabes"
  },
  { 
    id: 6, 
    name: "Enroladinho de Salsicha", 
    prices: { "25un": 15.00, "50un": 30.00, "100un": 55.00 },
    image: "img/enroladinho.jpg",
    category: "fritos",
    ingredients: "Massa folhada, salsicha premium, ovo para pincelar"
  },
  { 
    id: 7, 
    name: "Churros (Doce De Leite)", 
    prices: { "25un": 15.00, "50un": 30.00, "100un": 55.00 },
    image: "img/churro.webp",
    category: "fritos",
    ingredients: "Bacalhau, batata inglesa, cebola, salsa, ovos"
  },
  { 
    id: 8, 
    name: "Kibe ", 
    prices: { "25un": 15.00, "50un": 30.00, "100un": 55.00 },
    image: "img/quibe.jpg",
    category: "fritos",
    ingredients: "Trigo fino, carne moída, queijo mussarela, hortelã, especiarias"
  },
  { 
    id: 10, 
    name: "Salgados + Coca Cola Lata", 
    prices: { "25un": 24.90, "50un": 39.90, "100un": 69.90 },
    image: "img/combo%201.jpg",
    category: "especiais",
    badge: "combo"
  },
  { 
    id: 9, 
    name: "Salgados + Guaraná Antarctica", 
    prices: { "25un": 24.90, "50un": 39.90, "100un": 69.90 },
    image: "img/combo%202.jpg",
    category: "especiais",
    badge: "combo"
  }
];

// Elementos do DOM
const productsGrid = document.getElementById('products-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const productModal = document.getElementById('product-modal');
const modalOverlay = document.getElementById('modal-overlay');
const closeModal = document.getElementById('close-modal');
const modalProductImage = document.getElementById('modal-product-image');
const modalProductTitle = document.getElementById('modal-product-title');
const modalProductDescription = document.getElementById('modal-product-description');
const addToCartBtn = document.getElementById('add-to-cart-btn');

// Filtro de produtos
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    displayProducts(button.getAttribute('data-filter'));
  });
});

// Exibir produtos
function displayProducts(filter = "all") {
  if (!productsGrid) return;
  
  productsGrid.innerHTML = "";
  
  const filteredProducts = filter === "all" 
    ? products 
    : products.filter(product => product.category === filter);
  
  filteredProducts.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.setAttribute('data-category', product.category);
    card.setAttribute('data-aos', 'zoom-in');
    
    const badge = product.badge 
      ? `<div class="product-badge ${product.badge}">COMBO</div>` 
      : '';
    
    const quantityOptions = Object.keys(product.prices).map(qty => {
      const quantityText = qty.replace("un", " unidades");
      return `
        <div class="quantity-option">
          <input type="radio" name="qty-${product.id}" id="qty-${product.id}-${qty}" 
                 value="${qty}" ${qty === "25un" ? "checked" : ""}>
          <label for="qty-${product.id}-${qty}">
            ${quantityText} - R$ ${product.prices[qty].toFixed(2)}
          </label>
        </div>
      `;
    }).join('');
    
    card.innerHTML = `
      ${badge}
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" 
             onerror="this.src='img/placeholder.jpg'">
        <div class="product-actions">
          <button class="quick-view" data-id="${product.id}">Visualizar</button>
        </div>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <div class="quantity-options">
          ${quantityOptions}
        </div>
        <button class="quick-view" data-id="${product.id}">Detalhes</button>
      </div>`;
      
    productsGrid.appendChild(card);
  });
}

// Modal de produto
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('quick-view') || e.target.closest('.quick-view')) {
    const target = e.target.closest('.quick-view');
    const id = parseInt(target.dataset.id);
    const product = products.find(p => p.id === id);
    
    if (!product || !productModal) return;
    
    modalProductImage.style.backgroundImage = `url(${product.image})`;
    modalProductTitle.textContent = product.name;
    
    const quantityOptions = Object.keys(product.prices).map(qty => {
      const quantityText = qty.replace("un", " unidades");
      return `
        <div class="quantity-option">
          <input type="radio" name="modal-qty-${product.id}" id="modal-qty-${product.id}-${qty}" 
                 value="${qty}" ${qty === "25un" ? "checked" : ""}>
          <label for="modal-qty-${product.id}-${qty}">
            ${quantityText} - R$ ${product.prices[qty].toFixed(2)}
          </label>
        </div>
      `;
    }).join('');
    
    let descriptionHTML = `
      <div class="modal-quantity-options">
        <h4>Selecione a quantidade:</h4>
        ${quantityOptions}
      </div>
      <div class="combo-suggestions">
        <h4>Complete seu pedido:</h4>
        <div class="combo-options">
          <div class="combo-option">
            <h5>Adicionar Bebidas</h5>
            <p>Refrigerantes</p>
            <button class="btn btn-combo" id="btn-drink-options">
              <i class="fas fa-wine-bottle"></i> Ver Opções
            </button>
          </div>
        </div>
      </div>
    `;
    
    if (product.ingredients) {
      descriptionHTML += `<p class="ingredients"><strong>Ingredientes:</strong> ${product.ingredients}</p>`;
    }
    
    if (flavorOptions[id]) {
      descriptionHTML += `
        <div class="flavor-options">
          <h4 class="flavor-title">Escolha o sabor:</h4>
          <div class="flavor-grid">
            ${flavorOptions[id].map(flavor => `
              <div class="flavor-item">
                <input type="radio" name="flavor-${product.id}" id="flavor-${product.id}-${flavor.replace(/\s+/g, '-').toLowerCase()}" 
                       value="${flavor}" ${flavorOptions[id][0] === flavor ? 'checked' : ''}>
                <label for="flavor-${product.id}-${flavor.replace(/\s+/g, '-').toLowerCase()}">
                  ${flavor}
                </label>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
    
    modalProductDescription.innerHTML = descriptionHTML;
    addToCartBtn.setAttribute('data-id', id);
    
    const btnDrinkOptions = document.getElementById('btn-drink-options');
    if (btnDrinkOptions) {
      btnDrinkOptions.addEventListener('click', function(e) {
        e.preventDefault();
        showDrinkOptions();
      });
    }
    
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
});

// Função para mostrar opções de bebidas com imagens
function showDrinkOptions() {
  let drinkOptionsHTML = `
    <div class="drink-selection">
      <h4>Selecione suas bebidas:</h4>
      <div class="drinks-grid">
        ${drinkOptions.map(drink => `
          <div class="drink-option">
            <div class="drink-image-container">
              <img src="${drink.image}" alt="${drink.name}" class="drink-image" loading="lazy" onerror="this.src='img/placeholder.jpg'">
            </div>
            <div class="drink-info">
              <label>
                <input type="checkbox" name="drinks" value="${drink.id}" data-price="${drink.price}">
                ${drink.name} - R$ ${drink.price.toFixed(2)}
              </label>
              <select class="drink-quantity" data-drink-id="${drink.id}">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
        `).join('')}
      </div>
      <button id="confirm-drinks" class="btn btn-primary">
        <i class="fas fa-check"></i> Confirmar Bebidas
      </button>
    </div>
  `;

  const comboSection = document.querySelector('.combo-suggestions');
  if (comboSection) {
    comboSection.innerHTML = drinkOptionsHTML;
    
    document.getElementById('confirm-drinks').addEventListener('click', function() {
      selectedDrinks = [];
      
      document.querySelectorAll('input[name="drinks"]:checked').forEach(input => {
        const drinkId = input.value;
        const drink = drinkOptions.find(d => d.id == drinkId);
        const quantity = parseInt(document.querySelector(`.drink-quantity[data-drink-id="${drinkId}"]`).value);
        
        if (quantity > 0) {
          selectedDrinks.push({
            name: drink.name,
            price: drink.price,
            quantity: quantity,
            total: drink.price * quantity
          });
        }
      });
      
      alert(`${selectedDrinks.length} bebida(s) adicionada(s) ao pedido!`);
      
      const originalContent = `
        <h4>Complete seu pedido:</h4>
        <div class="combo-options">
          <div class="combo-option">
            <h5>Adicionar Bebidas</h5>
            <p>Refrigerantes e Sucos</p>
            <button class="btn btn-combo" id="btn-drink-options">
              <i class="fas fa-wine-bottle"></i> Ver Opções
            </button>
          </div>
        </div>
      `;
      comboSection.innerHTML = originalContent;
      
      document.getElementById('btn-drink-options').addEventListener('click', function(e) {
        e.preventDefault();
        showDrinkOptions();
      });
    });
  }
}

// Fechar modal
function closeProductModal() {
  if (productModal) {
    productModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

if (modalOverlay) modalOverlay.addEventListener('click', closeProductModal);
if (closeModal) closeModal.addEventListener('click', closeProductModal);

// Adicionar ao carrinho
if (addToCartBtn) {
  addToCartBtn.addEventListener('click', function() {
    const productId = parseInt(this.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    const selectedQty = document.querySelector(`input[name="modal-qty-${productId}"]:checked`)?.value || "25un";
    const quantityText = selectedQty.replace("un", " unidades");
    const price = product.prices[selectedQty];
    
    closeProductModal();
    
    let flavor = '';
    if (flavorOptions[productId]) {
      const selectedFlavor = document.querySelector(`input[name="flavor-${productId}"]:checked`);
      flavor = selectedFlavor ? ` (Sabor: ${selectedFlavor.value})` : '';
    }
    
    const select = document.getElementById('order-products');
    if (select) {
      const option = document.createElement('option');
      option.value = `${product.id}-${selectedQty}`;
      option.text = `${product.name} - ${quantityText}${flavor} - R$ ${price.toFixed(2)}`;
      option.selected = true;
      
      Array.from(select.options).forEach(opt => opt.selected = false);
      select.appendChild(option);
      
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Formulário de Pedido
const orderForm = document.getElementById('order-form');
if (orderForm) {
  orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('#order-name')?.value.trim();
    const phone = this.querySelector('#order-phone')?.value.trim();
    const date = this.querySelector('#order-date')?.value;
    const message = this.querySelector('#order-message')?.value.trim();
    const paymentMethod = this.querySelector('input[name="payment"]:checked')?.value || "Não especificado";
    
    const selectedProducts = Array.from(this.querySelector('#order-products')?.selectedOptions || [])
      .map(option => option.text);
    
    if (!name || !phone || !date || selectedProducts.length === 0) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    // Mensagem para WhatsApp
    const messageLines = [
      "🛒 *PEDIDO - SALGADOS* 🍽️",
      "",
      `📌 *Nome:* ${name}`,
      `📞 *Telefone:* ${phone}`,
      `📅 *Data para Entrega:* ${date}`,
      `💳 *Forma de Pagamento:* ${paymentMethod}`,
      "",
      "*Itens do Pedido:*",
      ...selectedProducts.map(item => `✔️ ${item}`),
      "",
      "*Bebidas Adicionais:*",
      ...(selectedDrinks.length > 0 ? 
        selectedDrinks.map(drink => `✔️ ${drink.name} - ${drink.quantity}x (R$ ${drink.price.toFixed(2)} cada)`) : 
        ["Nenhuma bebida selecionada"]),
      "",
      `📝 *Observações:* ${message || 'Nenhuma observação adicional'}`,
      "",
      "Por favor, confirme este pedido."
    ];

    const whatsappMessage = messageLines.join("\n");
    const whatsappUrl = `https://wa.me/5521987558708?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    selectedDrinks = [];
    this.reset();
  });
}

// Mascarar telefone
const phoneInput = document.getElementById('order-phone');
if (phoneInput) {
  phoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    e.target.value = value;
  });
}

// Inicializar produtos
displayProducts();

// Verificar se o Swiper está carregado para depoimentos
if (typeof Swiper !== 'undefined') {
  new Swiper('.testimonials-slider', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
}