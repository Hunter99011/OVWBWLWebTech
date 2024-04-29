$(document).ready(function(){
    const htmlCodeButton = document.querySelector('#HTMLCodeButton');
    htmlCodeButton.addEventListener("click", () => {
        alert("<p><b>ME Geik PTI</b></p>");
    });

    const textButton = document.querySelector('#textButton');
    textButton.addEventListener("click", () => {
        alert("HTML Kód...");
    });

    const valueButton = document.querySelector('#ValueButton');
    valueButton.addEventListener("click", () => {
        let nameinputval = $(".nameinput").val();
        alert(nameinputval);
    });
});