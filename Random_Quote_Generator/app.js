const quote = document.querySelector('.card-text ');
const btn = document.querySelector('.mybutton');
const author = document.querySelector('.author');
const sound = document.querySelector('.sound');
const copy = document.querySelector('.copy');
const twitter = document.querySelector('.twitter');


function randomQuote() {
    btn.classList.add('loading');
    btn.innerText = 'Loading Quote....';
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result)
        quote.innerText = result.content;
        author.innerText = result.author;
        btn.innerText = 'New Quote';
        btn.classList.remove('loading');
    });
}


sound.addEventListener('click', function(e) {
    //for reading web contents
    e.preventDefault();
    let utterance = new SpeechSynthesisUtterance(`${ quote.innerText} by ${ author.innerText}`);
    speechSynthesis.speak(utterance);


});

copy.addEventListener('click', function(e) {
    //copy contents of quote
    e.preventDefault();
    navigator.clipboard.writeText(quote.innerHTML);

});

twitter.addEventListener('click', function(e) {
    //copy contents of quote
    e.preventDefault();

    let twitterurl = `https://twitter.com/?lang=en?url=${ quote.innerText}`
    window.open(twitterurl, "_blank");
});



btn.addEventListener('click', randomQuote);