function onClick(element) {
    // this is a function that i used to make the images clickable and show them in a bigger size when clicked on
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  function calculate() {
      // Get the value of the input field with id="numb" and put it in a variable. 
      // this is a function that i used to calculate the user's protein and calorie intake
          let weight = document.getElementById("weight").value;
          let height = document.getElementById("height").value;
          let bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * 25);
          let protein = weight * 2.2 * 0.825;
          let calories = bmr * 1.725;
          document.getElementById("result").innerHTML = "You need " + protein.toFixed(2) + " grams of protein and " + calories.toFixed(2) + " calories to bulk.";
  }
  
  // Change style of navbar on scroll
  window.onscroll = function() {myFunction()}; // this is a function that i used to make the navbar change its style when the user scrolls down the page
  function myFunction() {
    // Get the navbar and the offset position of the navbar
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
      } else {
          navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
      }
  }
  
  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
    // Get the navbar
    // Get the element with id="navDemo" and change its class name
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
      } else {
          x.className = x.className.replace(" w3-show", "");
      }
  }