// codigo principal de javascript codigo fuente logico de analisis

// Codigo de javascript
console.log("Cod. Javascript");
//preloar 
var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 1000);
}
function showPage() {
    document.getElementById("loader_bg").style.display = "none";
    document.getElementById("mybody").style.display = "block";
}  



// Codigo de jquery
$(document).ready(function(){
    console.log("Cod. Jquery");
    $('#btnMenu').click(function(){
        $('.menu_items').toggleClass('show');
    });
});

