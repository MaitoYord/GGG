var wishings = [
  {
    text: 'Jockin the bitches, slappin the hoes',
    image: 'https://i.imgur.com/jUzbezx.png'
  },

  {
    text: 'Get Ya mind clear n straight at any time!',
    image: 'https://i.redd.it/b87cgjcouk611.jpg'
  },

  {
    text: 'Get enough LOOT to say FUCKOFF! ',
    image: 'https://i.insider.com/52124584ecad041839000018?width=750&format=jpeg&auto=webp'
  },

  {
    text: 'Cruisin down the street in any vehicle you ever fukin want',
    image: 'https://i.imgur.com/0XiOZax.png'
  },

  {
    text: 'A woman with perfect criminal record and pure as fuck background! ',
    image: 'https://images.genius.com/346a82ce072613364a7de7b11bbad663.500x500x1.jpg'
  },
  {
    text: 'Forever n Always remember about the Ambitionz az a Ridah!',
    image: 'https://www.snopes.com/tachyon/2017/07/muhammad-ali.jpg'
  },
  {
    text: 'Seeing things in perspective.',
    image: 'https://memestatic.fjcdn.com/large/pictures/ac/69/ac697b_6624683.jpg'
  },
  {
    text: 'Get BIG and ROCK.',
    image: 'https://i.pinimg.com/736x/43/31/f5/4331f593f80d2cb2523efbc941a797a8.jpg'
  },
  {
    text: 'Get BIG and ROCK.',
    image: 'https://i.pinimg.com/736x/43/31/f5/4331f593f80d2cb2523efbc941a797a8.jpg'
  }

];



function randomizator() {
  var randome = Math.floor(Math.random() * wishings.length);
  return wishings[randome];
}

// console.log(randomWish);

var wishing = document.querySelector('.wishing');

var phrase = document.querySelector('.phrase');

var button = document.querySelector('.button');

var image = document.querySelector('.image');


button.addEventListener('click', function() {
  var randomWish = randomizator();
  // phrase.innerHTML = randomWish.text; - вот так, но Я исп метод из стороннней библеотеки, чтобы крсиво было
  smoothly(phrase, 'innerHTML', randomWish.text);
  if (randomWish.text.length > 43) {
    wishing.style.fontSize = "32px";
  } else {
    wishing.style.fontSize = "42px";
  }
  // image.src = randomWish.image;
  smoothly(image, 'src', randomWish.image);
});

for (i = 0; i <= 2; i++){
  smoothly(phrase, 'innerHTML', wishings[i].text);
  smoothly(image, 'src', wishings[i].image);
}

setTimeout(function() { alert("DAMN"); }, 9000);
setTimeout(function() { alert("The button on the right iz CKLIKABLE"); }, 10000);
