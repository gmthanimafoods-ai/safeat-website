const products=[
{name:'Sambar Powder',price:199,cat:'Spices'},
{name:'Turmeric Powder',price:149,cat:'Spices'},
{name:'Rice Powder',price:99,cat:'Rice Powders'},
{name:'Idiyappam Rice Flour',price:119,cat:'Rice Powders'},
{name:'Coconut Oil',price:249,cat:'Coconut Oil'},
{name:'Wheat Flour',price:89,cat:'Flours'},
{name:'Chilli Powder',price:169,cat:'Spices'},
{name:'Roasted Rice Powder',price:129,cat:'Rice Powders'}
];
let cart=JSON.parse(localStorage.getItem('safeatCart')||'[]');
function render(list=products){document.getElementById('grid').innerHTML=list.map((p,i)=>`<article class="card"><div class="product-img">${p.name}</div><h3>${p.name}</h3><div class="price">₹${p.price}</div><button class="add" onclick="add(${products.indexOf(p)})">Add to Cart</button></article>`).join('')}
function add(i){cart.push(products[i]);save();openCart()}
function save(){localStorage.setItem('safeatCart',JSON.stringify(cart));renderCart()}
function renderCart(){document.getElementById('count').textContent=cart.length;document.getElementById('total').textContent=cart.reduce((s,p)=>s+p.price,0);document.getElementById('cartItems').innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-row"><span>${p.name}</span><b>₹${p.price} <button onclick="removeItem(${i})">×</button></b></div>`).join(''):'<p>Your cart is empty.</p>'}
function removeItem(i){cart.splice(i,1);save()}
function toggleCart(){document.getElementById('cartPanel').classList.toggle('open');document.getElementById('shade').classList.toggle('open')}
function openCart(){document.getElementById('cartPanel').classList.add('open');document.getElementById('shade').classList.add('open')}
function filter(cat){render(cat==='All'?products:products.filter(p=>p.cat===cat));document.getElementById('shop').scrollIntoView({behavior:'smooth'})}
function checkout(){alert('Checkout is ready to connect to your payment/order system.')}
render();renderCart();
