const face = document.getElementsByClassName("face")[0];
const instructionBox = document.getElementById('instruction');
const jokeSetupBox = document.getElementById("joke_setup");
const jokePunchlineBox = document.getElementById("joke_punchline");
const curtains = Array.from(document.getElementsByClassName("face-bar"));

let jokes = [];
let currentJoke = {};

let status = {
    instructionShowing: true,
    setupShowing: false,
    punchlineShowing: false
}

fetch( '../api/jokes' ).then( res => res.json() ).then( data => {
    jokes = data;
} )

window.addEventListener("keypress", e => {
  e.preventDefault();
  if (e.keyCode === 13) {

      if ( status.instructionShowing || status.punchlineShowing ) {
          // Shut
          curtains.forEach(bar => {
              bar.classList.add("shut");
              bar.classList.remove("open");
          });

          setTimeout( () => {

              currentJoke = jokes[ Math.round(Math.random() * jokes.length) ];

              instructionBox.textContent = '';
              status.instructionShowing = false;
              // Open
              curtains.forEach(bar => {
                  bar.classList.add("open");
                  bar.classList.remove("shut");
              });

              jokeSetupBox.textContent = currentJoke.setup;
              status.setupShowing = true;

              jokePunchlineBox.textContent = '';
              status.punchlineShowing = false;

          }, 2000 );

      } else {
          jokePunchlineBox.textContent = currentJoke.punchline;
          status.punchlineShowing = true;
      }

      /* Fetch
      window.setTimeout(function() {
        fetch("../api/jokes", {
          headers: { Accept: "application/json" }
        })
          .then(res => res.json())
          .then(data => {
            let joke = data[Math];
            jokeBox.textContent = joke;
            // Open
            curtains.forEach(bar => {
              bar.classList.add("open");
              bar.classList.remove("shut");
            });
          });
      }, 2000);
       */
  }
});