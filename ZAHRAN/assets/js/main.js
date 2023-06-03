//////////////////// active link //////////////////
let links = document.querySelectorAll(".main-nav-links .link");

links.forEach(link => {
     link.addEventListener("click", function() {
        links.forEach(li => li.classList.remove('active'));
        this.classList.add("active");
     });
});

/////////////////////////////////////////////////////

/////////////// language dropdown ////////////////////
var lang = document.getElementsByClassName('lang');
var langDropdown = document.getElementById("lang-dropdown")

langDropdown.classList.toggle("hidden");
function dropdown() {
    if (langDropdown.classList.contains('hidden')) {
        langDropdown.classList.remove('hidden');
        langDropdown.classList.toggle("show");
      }
      else {
        langDropdown.classList.remove('show');
        langDropdown.classList.toggle("hidden");
      }
  }

//////////////////////////////////////////////////

window.onscroll = function() {
    if (window.scrollY >= 60 || window.pageYOffset >= 60) {
      document.getElementsByClassName("header")[0].classList.add('changeBackColor');
    } else {
      document.getElementsByClassName("header")[0].classList.remove('changeBackColor');
    }
  };

////////////// Hamburger Menu ////////////////////
const mainNav = document.querySelector('.main-nav-links');
const closeMenu = document.querySelector('.mainClose');
const openMenu = document.querySelector('.openClose');
const menu_items = document.querySelectorAll('.main-nav-links li a');


menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function ShowMenu(){
    mainNav.style.display = 'flex';
    mainNav.style.top = '0';
}

function CloseMenu(){
    mainNav.style.top = '-100%';
}
///////////////////////////////////////////////////////

///////////////////////// Chat ///////////////////////

let chatIcon = document.getElementsByClassName('chatIcon');
let chatBox = document.getElementById('chatBox');

function showChatBox() {
    if(chatBox.style.display != 'none'){
        chatBox.style.display = 'none';
    }
    else {
        chatBox.style.display = 'block';
    }
}

///////////// arrow up&down //////////////////////

// let arrowDown = document.getElementsByClassName('arrowDown');

// function arrowUpDown() {
//    arrowDown.style.transform = `rotate(180deg)`;
// }

/////////////////////////////////////////////////////

////////////////// change-content-add //////////////
let secondContent = document.getElementById("second-content");
let firstContent = document.getElementById("first-content");

secondContent.classList.toggle("hidden");
function changeContent() {
  event.preventDefault();
    if (secondContent.classList.contains('hidden')) {
        setTimeout(() => {
          
        secondContent.classList.remove('hidden');
        secondContent.classList.add('show');
        firstContent.classList.toggle("hidden");

        }, 1000);
      }
  }
///////////////////////////////////////////////////