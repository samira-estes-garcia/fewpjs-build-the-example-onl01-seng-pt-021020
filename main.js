// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
//$("#modal").addClass(".hidden");
let glyphStates = {
  "♡": "♥",
  "♥": "♡",
};

let colorStates = {
  red: "",
  "": "red",
};

document.getElementById("modal").className = "hidden";

let articleHearts = document.querySelectorAll(".like");

function likeCallback(e) {
  let heart = e.target;
  mimicServerCall("bogusUrl")
    //OR: mimicServerCall("bogusUrl", {forceFailure: true})
    .then(function (serverMessage) {
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
      document.getElementById("modal").className = "hidden";
    })
    .catch(function (error) {
      // Basic
      // alert("Something went wrong!");
      // or....
      document.getElementById("modal").className = "";
    });
}

for (let glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}

// $(".like").onClick(mimicServerCall());
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
