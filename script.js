function criptografar() {
    let inputText = document.getElementById("inputText").value;
    let outputText = inputText.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
                               .replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");
    document.getElementById("outputText").value = outputText;
    playSound();

    // classe de animação de embaralhamento de letras
    document.getElementById("outputText").classList.add("shuffle-animation");
    playSound();

    // classe de animação de embaralhamento de letras
    document.getElementById("outputText").classList.add("shuffle-animation");
}

function descriptografar() {
    let inputText = document.getElementById("outputText").value;
    let outputText = inputText.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
                               .replace(/enter/g, "e")
                               .replace(/imes/g, "i")
                               .replace(/ai/g, "a")
                               .replace(/ober/g, "o")
                               .replace(/ufat/g, "u");
    document.getElementById("outputText").value = outputText;
    playSound();
}

function copyText() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado!");
}

function playSound() {
    document.getElementById("blipAudio").play();
}
