"use strict";

window.addEventListener('load', work);

function work() {
    let div = document.getElementsByClassName('images')[0];
    let images = div.children;

        for (let i = images.length - 1; 0 <= i ; i--) {
            let currentImg = images[i];

            let startX = currentImg.getBoundingClientRect().x;
            let startY = currentImg.getBoundingClientRect().y;

            currentImg.style.left = startX + 'px';
            currentImg.style.top = startY + 'px';
        }

        for (let i = images.length - 1; 0 <= i ; i--) {
            let currentImg = images[i];

        currentImg.style.position = 'absolute';
        }

    let zIndex = 1;

    document.addEventListener('mousedown', eo => {
        let img = eo.target;

        let offsetX = eo.clientX - img.getBoundingClientRect().left;
        let offsetY = eo.clientY - img.getBoundingClientRect().top;
        console.log(offsetX)

        img.style.zIndex = String(zIndex++);

        document.addEventListener('mousemove', move);

        function move(eo) {
            img.style.left = eo.pageX - offsetX + 'px';
            img.style.top = eo.pageY - offsetY + 'px';
        }

        img.onmouseup = function () {
            document.removeEventListener('mousemove', move);
            img.onmouseup = null;
        }
        
    });

    document.addEventListener('dragstart', eo => {
        eo.preventDefault();
    });
}