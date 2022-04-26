let transform = document.getElementById('transform'); 

let img = document.getElementById('img');

function loop() {
    for (let i = 0; i < 14; i++) {
        setInterval(() => {
            img.src = `../img/opt-transform/image${i}.png`;
        }, 1000);
    }

}

transform.addEventListener('click', () => {
    loop();
});

