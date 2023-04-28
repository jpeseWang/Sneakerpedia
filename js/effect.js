const words = [  "How Virgil Abloh's legacy lives on through collaboration?",  
    "The 10 Most Expensive Sneakers Ever Made", 
    "The Most Popular Sneakers of All Time", 
    "The Rise of Sneaker Culture",  
    "Why Sneakers Matter?"];

let i = 0;
let timer;

function typingEffect() {
  let word = words[i].split("");
  var loopTyping = function() {
    if (word.length > 0) {
      document.getElementById("typing-text").innerHTML += word.shift();
    } else {
      clearTimeout(timer); // clear the timer to prevent the deleting effect from triggering automatically
      deletingEffect();
      return false;
    };
    timer = setTimeout(loopTyping, 80);
  };
  loopTyping();
}

function deletingEffect() {
  let word = words[i].split("");
  var loopDeleting = function() {
    if (word.length > 0) {
      word.pop();
      document.getElementById("typing-text").innerHTML = word.join("");
    } else {
      i++;
      if (i >= words.length) {
        i = 0;
      }
      typingEffect();
      return false;
    };
    timer = setTimeout(loopDeleting, 100);
  };
  loopDeleting();
}

typingEffect();
