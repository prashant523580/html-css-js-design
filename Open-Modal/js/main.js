 var modalBtn = document.getElementById("modal-btn");
 var modal = document.getElementById("modalbox");
 var close = document.getElementsByClassName("close")[0];
 modalBtn.onclick = function() {
     modal.style.display = "block";
 };
 close.onclick = function() {
     modal.style.display = "none";
 };
 window.onclick = function(event) {
     if (event.target == modal) {
         this.modal.style.display = "none";
     }
 };