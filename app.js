// Melody Restaurant — melodyrestaurant.ch · WEF Davos 2027 Edition

const WEF_MODE = true;
const WEF_YEAR = 2027;
const WEF_DATES = 'January 19–23, 2027';

const IMG = 'https://images.unsplash.com/';
const MENU_DATA = [
  // Starters
  { id: 1, category: 'starters', name: 'Paneer Tikka', price: 21.75, desc: 'Marinated cottage cheese grilled in tandoor with peppers & onions', veg: true, spice: 2, popular: true, img: IMG+'photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 2, category: 'starters', name: 'Chicken Tikka', price: 23.85, desc: 'Tender chicken marinated in yoghurt & spices, char-grilled to perfection', veg: false, spice: 2, popular: true, img: IMG+'photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 3, category: 'starters', name: 'Samosa (2 pcs)', price: 12.75, desc: 'Crispy pastry filled with spiced potatoes & peas, served with chutneys', veg: true, spice: 1, popular: true, img: IMG+'photo-1601050690597-df0568f70950?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 4, category: 'starters', name: 'Seekh Kebab', price: 24.75, desc: 'Minced lamb with herbs & spices, skewered and grilled over charcoal', veg: false, spice: 2, popular: false, img: IMG+'photo-1624374053855-39a5a1a41402?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 5, category: 'starters', name: 'Aloo Tikki', price: 14.25, desc: 'Crispy potato patties with chaat masala, tamarind & mint chutney', veg: true, spice: 1, popular: false, img: IMG+'photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 6, category: 'starters', name: 'Prawn Koliwada', price: 28.35, desc: 'Coastal-style crispy prawns tossed with kokum & coastal spices', veg: false, spice: 3, popular: false, img: IMG+'photo-1559847844-5315695dadae?auto=format&fit=crop&w=480&h=360&q=80' },

  // Mains
  { id: 7, category: 'mains', name: 'Butter Chicken', price: 33.75, desc: 'Succulent chicken in velvety tomato-cream sauce with aromatic spices', veg: false, spice: 1, popular: true, img: IMG+'photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 8, category: 'mains', name: 'Palak Paneer', price: 29.25, desc: 'Fresh cottage cheese cubes in a smooth, spiced spinach gravy', veg: true, spice: 1, popular: true, img: IMG+'photo-1631452180539-96aca7d48617?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 9, category: 'mains', name: 'Dal Makhani', price: 26.25, desc: 'Black lentils slow-cooked overnight with butter & cream', veg: true, spice: 1, popular: true, img: IMG+'photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 10, category: 'mains', name: 'Lamb Rogan Josh', price: 39.75, desc: 'Kashmiri slow-braised lamb with whole spices & Kashmiri chillies', veg: false, spice: 3, popular: false, img: IMG+'photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 11, category: 'mains', name: 'Chicken Vindaloo', price: 35.25, desc: 'Fiery Goan curry with vinegar-marinated chicken & hot chillies', veg: false, spice: 4, popular: false, img: IMG+'photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 12, category: 'mains', name: 'Chana Masala', price: 27.75, desc: 'Hearty chickpeas in tangy tomato-onion gravy with Punjab spices', veg: true, spice: 2, popular: false, img: IMG+'photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 13, category: 'mains', name: 'Prawn Masala', price: 41.25, desc: 'Tiger prawns in rich coastal masala with coconut & curry leaves', veg: false, spice: 2, popular: false, img: IMG+'photo-1574926054530-f6f4c460c5ea?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 14, category: 'mains', name: 'Paneer Makhani', price: 30.75, desc: 'Silky paneer in the same luxurious makhani sauce as butter chicken', veg: true, spice: 1, popular: false, img: IMG+'photo-1604152135912-04a022e23696?auto=format&fit=crop&w=480&h=360&q=80' },

  // Biryani
  { id: 15, category: 'biryani', name: 'Chicken Biryani', price: 36.75, desc: 'Fragrant basmati layered with spiced chicken, fried onions & saffron', veg: false, spice: 2, popular: true, img: IMG+'photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 16, category: 'biryani', name: 'Lamb Biryani', price: 41.25, desc: 'Tender lamb pieces with aged basmati, whole spices & rose water', veg: false, spice: 2, popular: false, img: IMG+'photo-1512058564366-18510be2db19?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 17, category: 'biryani', name: 'Vegetable Biryani', price: 30.75, desc: 'Seasonal vegetables with saffron basmati, nuts & dried fruits', veg: true, spice: 1, popular: false, img: IMG+'photo-1645177628172-a786c5caf2f8?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 18, category: 'biryani', name: 'Prawn Biryani', price: 42.75, desc: 'Coastal-style biryani with spiced tiger prawns & coconut milk', veg: false, spice: 2, popular: false, img: IMG+'photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=480&h=360&q=80' },

  // Breads
  { id: 19, category: 'breads', name: 'Garlic Naan', price: 6.75, desc: 'Fluffy tandoor-baked flatbread with butter & fresh garlic', veg: true, spice: 0, popular: true, img: IMG+'photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 20, category: 'breads', name: 'Plain Naan', price: 5.25, desc: 'Classic soft tandoor naan, perfect for scooping curries', veg: true, spice: 0, popular: false, img: IMG+'photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 21, category: 'breads', name: 'Peshwari Naan', price: 7.50, desc: 'Sweet naan stuffed with almonds, coconut & sultanas', veg: true, spice: 0, popular: false, img: IMG+'photo-1605888969479-e966f67a0b1a?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 22, category: 'breads', name: 'Paratha', price: 6.00, desc: 'Layered whole wheat bread, pan-fried with ghee', veg: true, spice: 0, popular: false, img: IMG+'photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 23, category: 'breads', name: 'Puri (2 pcs)', price: 6.75, desc: 'Deep-fried puffed bread, light and hollow', veg: true, spice: 0, popular: false, img: IMG+'photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=480&h=360&q=80' },

  // Desserts
  { id: 24, category: 'desserts', name: 'Gulab Jamun', price: 11.25, desc: 'Soft milk-solid dumplings soaked in rose & cardamom syrup', veg: true, spice: 0, popular: true, img: IMG+'photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 25, category: 'desserts', name: 'Mango Kulfi', price: 12.75, desc: 'Dense Indian ice cream with real Alphonso mango', veg: true, spice: 0, popular: true, img: IMG+'photo-1590080874088-eec64895b423?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 26, category: 'desserts', name: 'Kheer', price: 10.50, desc: 'Creamy rice pudding with cardamom, saffron & pistachios', veg: true, spice: 0, popular: false, img: IMG+'photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 27, category: 'desserts', name: 'Rasmalai', price: 12.00, desc: 'Soft paneer discs in sweetened saffron-cardamom cream', veg: true, spice: 0, popular: false, img: IMG+'photo-1601849272945-60d5ef97be44?auto=format&fit=crop&w=480&h=360&q=80' },

  // Drinks
  { id: 28, category: 'drinks', name: 'Mango Lassi', price: 9.75, desc: 'Chilled yoghurt drink blended with sweet Alphonso mango', veg: true, spice: 0, popular: true, img: IMG+'photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 29, category: 'drinks', name: 'Rose Lassi', price: 9.00, desc: 'Sweet yoghurt drink with rose water & a touch of cardamom', veg: true, spice: 0, popular: false, img: IMG+'photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 30, category: 'drinks', name: 'Masala Chai', price: 6.75, desc: 'Spiced Indian tea brewed with ginger, cardamom & cinnamon', veg: true, spice: 1, popular: true, img: IMG+'photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 31, category: 'drinks', name: 'Fresh Lime Soda', price: 6.00, desc: 'Sparkling water with fresh lime, mint & a pinch of black salt', veg: true, spice: 0, popular: false, img: IMG+'photo-1544145945-f90425340c7e?auto=format&fit=crop&w=480&h=360&q=80' },
  { id: 32, category: 'drinks', name: 'Kingfisher Beer', price: 11.25, desc: 'India\'s most celebrated lager, crisp and refreshing', veg: true, spice: 0, popular: false, img: IMG+'photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=480&h=360&q=80' },
];

const CATEGORIES = [
  { id: 'all', label: 'All', emoji: '🍽️' },
  { id: 'starters', label: 'Starters', emoji: '🥗' },
  { id: 'mains', label: 'Mains', emoji: '🍛' },
  { id: 'biryani', label: 'Biryani', emoji: '🍚' },
  { id: 'breads', label: 'Breads', emoji: '🫓' },
  { id: 'desserts', label: 'Desserts', emoji: '🍮' },
  { id: 'drinks', label: 'Drinks', emoji: '🥤' },
];

const DELIVERY_FEE = 0; // Complimentary for WEF delegates
const FREE_DELIVERY_THRESHOLD = 0; // Always free
const MIN_ORDER = 250; // WEF minimum order

// Cart operations
function getCart() {
  try { return JSON.parse(localStorage.getItem('melody_cart') || '[]'); } catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem('melody_cart', JSON.stringify(cart));
  updateCartBadge();
}
function addToCart(itemId, qty = 1) {
  const cart = getCart();
  const item = MENU_DATA.find(i => i.id === itemId);
  if (!item) return;
  const existing = cart.find(c => c.id === itemId);
  if (existing) { existing.qty += qty; } else { cart.push({ id: itemId, qty }); }
  saveCart(cart);
  showToast(`${item.name} added to order`);
}
function removeFromCart(itemId) { saveCart(getCart().filter(c => c.id !== itemId)); }
function updateQty(itemId, qty) {
  const cart = getCart();
  const item = cart.find(c => c.id === itemId);
  if (item) { if (qty <= 0) return removeFromCart(itemId); item.qty = qty; saveCart(cart); }
}
function clearCart() { localStorage.removeItem('melody_cart'); updateCartBadge(); }
function getCartCount() { return getCart().reduce((sum, c) => sum + c.qty, 0); }
function getCartTotal() {
  return getCart().reduce((sum, c) => {
    const item = MENU_DATA.find(i => i.id === c.id);
    return sum + (item ? item.price * c.qty : 0);
  }, 0);
}
function getDeliveryFee() { return 0; } // Complimentary delivery

function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge');
  const count = getCartCount();
  badges.forEach(b => { b.textContent = count; b.style.display = count > 0 ? 'flex' : 'none'; });
}

function saveOrder(order) { const orders = getOrders(); orders.unshift(order); localStorage.setItem('melody_orders', JSON.stringify(orders)); }
function getOrders() { try { return JSON.parse(localStorage.getItem('melody_orders') || '[]'); } catch { return []; } }
function getOrder(orderId) { return getOrders().find(o => o.id === orderId); }
function generateOrderId() { return 'ML' + Date.now().toString(36).toUpperCase(); }

function showToast(msg, type = 'success') {
  let toast = document.getElementById('toast');
  if (!toast) { toast = document.createElement('div'); toast.id = 'toast'; document.body.appendChild(toast); }
  toast.className = `toast toast-${type} show`;
  toast.textContent = msg;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
}
function formatPrice(p) { return 'CHF ' + p.toFixed(2); }

document.addEventListener('DOMContentLoaded', () => { updateCartBadge(); });

function spiceLabel(level) {
  const labels = ['', 'Mild', 'Medium', 'Hot', 'Very Hot'];
  const icons = ['', '🌶️', '🌶️🌶️', '🌶️🌶️🌶️', '🌶️🌶️🌶️🌶️'];
  return level > 0 ? `<span class="spice-badge">${icons[level]} ${labels[level]}</span>` : '';
}

// Scroll reveal — wire up after DOM ready
function initScrollReveal() {
  const els = document.querySelectorAll('.scroll-reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.08 });
  els.forEach(el => io.observe(el));
}

// Init on every page
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  initScrollReveal();
});
