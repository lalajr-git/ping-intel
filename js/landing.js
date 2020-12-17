const typeWriter = function (textElement, words, wait = 1000) {
    this.textElement = textElement;
    this.words = words;
    this.text = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

//Type Method
typeWriter.prototype.type = function () {
    //Current index of word
    const currIndex = this.wordIndex % this.words.length;
    //Get full text of the current word
    const fullText = this.words[currIndex];

    //Check if deleting
    if (this.isDeleting) {
        //Remove character
        this.text = fullText.substring(0, this.text.length - 1);
    } else {
        //Add character
        this.text = fullText.substring(0, this.text.length + 1);
    }

    //Insert text into span element
    this.textElement.innerHTML = `<span class="cursor-effect">${this.text}</span>`;

    //Initial Type Speed
    let typeSpeed = 200;

    if (this.isDeleting) {
        typeSpeed /= 2;
    }

    //If the word is complete
    if (!this.isDeleting && this.text === fullText) {
        //Pause after completion
        typeSpeed = this.wait;
        //Also set delete to true
        this.isDeleting = true;
    } else if (this.isDeleting && this.text === '') {
        this.isDeleting = false;
        //Move to the next word
        this.wordIndex++;
        //Briefly pause before start typing again
        typeSpeed = 200;
    }

    setTimeout(() => this.type(), typeSpeed);
}

//Init on DOM Load
document.addEventListener('DOMContentLoaded', init);
//Init App
function init() {
    const textElement = document.querySelector('.intro');
    const words = JSON.parse(textElement.getAttribute('data-words'));
    const wait = textElement.getAttribute('data-wait');

    //Init TypeWriter
    new typeWriter(textElement, words, wait);
}