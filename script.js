let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload = function (event) {

  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]
      }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  function changeMainID() {
    document.getElementById("main-title").innerHTML = "DOM Toretto Quotes";
  }
  changeMainID();
  // Part 2
  function changeBackgroundColor() {
    document.body.style.backgroundColor = "#FA8072";
  }
  changeBackgroundColor();
  // Part 3
  function removeLast() {
    let favoritethings = document.getElementById("favorite-things");
    favoritethings.removeChild(favoritethings.lastElementChild);
  }
  removeLast();
  // Part 4
  function changeFontSize() {
    let title = document.getElementsByClassName("special-title");
    for (let i = 0; i < title.length; i++) {
      title[i].style.fontSize = "2rem";
    }
  }
  changeFontSize();
  // Part 5
  function removeChicago() {
    let cities = document.getElementById("past-races");
    cities.removeChild(cities.children[3]);
  }
  removeChicago();
  // Part 6
  function addingToPastRaces() {
    let newcity = document.createElement('li');
    newcity.textContent = "New York City";
    document.getElementById("past-races").appendChild(newItem);
  }
  addingToPastRaces();
  // Part 7
  function newBlogPost() {
    const text = document.createElement("p");
    const title = document.createElement("h1");
    const block = document.createElement("div");
    text.textContent = "I jumped off a cliff and then flew to space."
    title.textContent = "New York City"
    block.className = "blog-post purple"
    block.appendChild(title)
    block.appendChild(text)

    let main = document.querySelector('.main')
    main.appendChild(block)
  }
  newBlogPost()
}