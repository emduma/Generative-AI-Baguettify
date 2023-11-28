
const button = document.querySelector('button');
const input = document.querySelector('input');
const pTag = document.querySelector('p');

button.addEventListener("click", () => {
    getGeneratedText(`Return the sentence or word exactly how it is written, and translate it accurately into French: ${input.value}!`)
        .then(generatedText => {
            pTag.innerText = generatedText.split('!')[1];
        });
});

/* ======================= AUDIO PLAYER ============================== */
