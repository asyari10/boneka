 // toggle class active
 const navbarNav =document.querySelector('.navbar-nav');
 document.querySelector('#hamburger-menu').
 onclick = () => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
 };
 // Toggle class active untuk Shopping cart
 const shoppingCart = document.querySelector('.shopping-cart');
 document.querySelector('#shopping-cart-button').onclick = (e) => {
   shoppingCart.classList.toggle('active');
   e.preventDefault();
 };

 const hm = document.querySelector('#hamburger-menu');
 const sc = document.querySelector('#shopping-cart-button');

 document.addEventListener ('click', function(e) {
   if(!hm.contains(e.target)&& !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
   }

   if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
      shoppingCart.classList.remove('active');
   }

 });

 // modal box
 const itemDetailModal = document.querySelector('#item-detail-modal');
 const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
   btn.onclick = (e) => {
      itemDetailModal.style.display = 'flex';
      e.preventDefault();
    };
})



 //klik tombol close modal
 document.querySelector('.modal .close-icon').onclick = (e) => {
   itemDetailModal.style.display = 'none';
   e.preventDefault();
 };

 //klik diluar modal
 window.onclick = (e) => {
   if (e.target === itemDetailModal) {
      itemDetailModal.style.display = 'none';
   }
 };
 