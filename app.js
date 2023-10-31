var MenuItems = document.getElementById('MenuItems');
MenuItems.style.maxHeight = '0px';
function menutoggle() {
  if(MenuItems.style.maxHeight == '0px'){
    MenuItems.style.maxHeight= '200px';
  }else{
    MenuItems.style.maxHeight= '0px';
  }
}
// ===========================
var ProductsImg = document.getElementById('products-img');
var SmallImg = document.getElementsByClassName('small-img');

for (var i = 0; i < SmallImg.length; i++) {
  SmallImg[i].onclick = function() {
    ProductsImg.src = this.src;
  };
}

// login
var loginForm = document.getElementById('loginForm');
var regForm = document.getElementById('regForm');
var Indicator = document.getElementById('Indicator');

// login
// register
function register() {
  regForm.style.transform = "translateX(0px)";
  loginForm.style.transform = "translateX(0px)";
  Indicator.style.transform = "translateX(150px)";
}

function login() {
  regForm.style.transform = "translateX(300px)";
  loginForm.style.transform = "translateX(300px)";
  Indicator.style.transform = "translateX(40px)";
}