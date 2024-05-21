const header = document.querySelector("header");

window.addEventLister("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-bx');
    navmenu.classList.toggle('open');
};

function submitOrder() {
    var orderText = document.getElementById("orderInput").value;

    if (orderText.trim() !== "") {       
        console.log("Order submitted:", orderText);
        document.getElementById("orderInput").value = "";
    }
}

document.getElementById("orderInput").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        submitOrder();
    }
});
