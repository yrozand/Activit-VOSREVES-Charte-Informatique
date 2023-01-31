function imprimer_page(){
    document.getElementById("impression").style="visibility:hidden";
    window.print();
    document.getElementById("impression").style="visibility:visible";
}
