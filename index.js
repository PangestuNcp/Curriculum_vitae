// Hamberger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll("nav ul");
navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Footer
const button = document.querySelector(".item .btn");
const content = document.querySelector("footer .content");
button.addEventListener("click", show);
function show() {
  button.classList.toggle("active");
  content.classList.toggle("active");
}
const contact = document.querySelector("nav .contact");
contact.addEventListener("click", show2);
function show2() {
  content.classList.toggle("active");
}

// Detail right about
document.querySelectorAll(".right .info").forEach((add) =>
  add.addEventListener("click", () => {
    if (add.parentNode.classList.contains("active")) {
      add.parentNode.classList.toggle("active");
    } else {
      document
        .querySelectorAll(".right .info")
        .forEach((add) => add.parentNode.classList.remove("active"));
      add.parentNode.classList.add("active");
    }
  })
);

// Porfolio
$.getJSON("/asset/data_porfolio/project.json", function (data) {
  let menu = data.porfolio;
  console.log(menu);
  $.each(menu, function (i, data) {
    console.log(data);
    $("#daftar_menu").append(
      '<div class="card"><img src="asset/data_porfolio' +
        data.gambar +
        '" alt="img" /><div class="detail"><p>' +
        data.tipe +
        " | " +
        data.pelatihan +
        "</p><h3>" +
        data.nama +
        '</h3></div><div class="btn"><form action="' +
        data.code +
        '" method="get" target="_blank"><button type="submit">Detail</button></form><form action="' +
        data.demo +
        '" method="get" target="_blank"><button type="submit" class="transparant">Demo</button></form></div>'
    );
  });
});
