window.addEventListener("load", sidenVises);



function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#burgerknap").addEventListener("click", toggleMenu);
}



function toggleMenu() {

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");
    document.querySelector("#burgerfane").classList.toggle("hidden");


}
