var i = 0;

function run() {
    if (i == 0) {
        i = 1;
        var bar = document.getElementById("bar");
        var w = 0;
        var id = setInterval(frame, 10);

        function frame() {
            if (w >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                w++;
                bar.style.width = w + "%";
                bar.innerHTML = w + "%";
            }
        }
    }
}