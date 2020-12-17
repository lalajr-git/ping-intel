const countdown = document.querySelector('.countdown');

//Set the launch date
const launchDate = new Date('Jan 9, 2021 18:00:00').getTime();

//Update every second
const interval = setInterval(() => {
    //Get todays date and time in ms
    const now = new Date().getTime();

    //Distance from now to the launch date
    const remTime = launchDate - now;

    //Time calculations
    const days = Math.floor(remTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remTime % (1000 * 60)) / 1000);

    //Display Results
    countdown.innerHTML = `
        <div>${days}<span>DAYS</span></div>
        <div>${hours}<span>HOURS</span></div>
        <div>${minutes}<span>MINUTES</span></div>
        <div>${seconds}<span>SECONDS</span></div>
    `;

    //If launch date is passed
    if (remTime < 0) {
        clearInterval(interval); //Stops the countdown
        //Style and Output
        countdown.style.color = '#ffffff';
        countdown.innerHTML = 'We are finally live now!';
    }

}, 1000);

const TypeWriter = function(textElement, words, wait=3000){
    this.textElement = textElement;
    this.words = words;
    this.text = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

//Type Method
TypeWriter.prototype.type = function(){
    //Current index of word
    const currIndex = this.wordIndex % this.words.length;
    //Get full text of the current word
    const fullText = this.words[currIndex];
    
    //Check if deleting
    if(this.isDeleting){
        //Remove character
        this.text = fullText.substring(0, this.text.length - 1);
    } else{
        //Add character
        this.text = fullText.substring(0, this.text.length + 1);
    }

    //Insert text into span element
    this.textElement.innerHTML = `<span class="cursor-effect">${this.text}</span>`;

    //Initial Type Speed
    let typeSpeed = 300;

    if(this.isDeleting){
        typeSpeed /= 2;
    }

    //If the word is complete
    if(!this.isDeleting && this.text === fullText){
        //Pause after completion
        typeSpeed = this.wait;
        //Also set delete to true
        this.isDeleting = true;
    } else if(this.isDeleting && this.text === ''){
        this.isDeleting = false;
        //Move to the next word
        this.wordIndex++;
        //Briefly pause before start typing again
        typeSpeed = 500;
    }

    setTimeout(()=>this.type(), typeSpeed);
}

//Init on DOM Load
document.addEventListener('DOMContentLoaded', init);
//Init App
function init(){
    const textElement = document.querySelector('.type-text');
    const words = JSON.parse(textElement.getAttribute('data-words'));
    const wait = textElement.getAttribute('data-wait');

    //Init TypeWriter
    new TypeWriter(textElement, words, wait);
}