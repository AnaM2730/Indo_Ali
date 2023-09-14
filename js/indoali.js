var button = document.getElementById('meu-botao');
var imageContainer = document.getElementById("imageContainer");

button.addEventListener("click", () => {
    audio.play();
    button.style.zIndex = 0;
    setTimeout(() => {
        imageContainer.style.opacity = 1;
    }, 100);
});