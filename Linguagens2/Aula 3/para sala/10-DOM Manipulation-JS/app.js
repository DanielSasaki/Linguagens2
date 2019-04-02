

elemento0 = document.getElementById("demo0");
elemento0.onclick = function(e) {
    e.target.innerHTML = "Hello World!";
}

function bgChange(){
    var rndCo1 = 'rgb(' + 100 + ',' + 100 + ',' +100 + ')';
    document.body.style.backgroundColor = rndCo1;
}

elemento1 = document.getElementById("demo1");
elemento1.addEventListener('click',bgChange);

elemento2 = document.getElementById("demo2");
elemento2.addEventListener('click',function() {
    var rndCo1 = 'rgb(' + 200 + ',' + 200 + ',' + 200 + ')';
    document.body.style.backgroundColor = rndCo1;
});