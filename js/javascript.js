var button = document.getElementById("Top_btn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function Go_to_top() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
