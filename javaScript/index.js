const subForm= document.getElementById("subForm");


// 1- First Event -- get humans basic info when click on button 
function droubiInfo() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("droubi").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "txt/droubi.txt", true);
  xhttp.send();
}
function barakatInfo() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("barakat").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "/txt/barakat.txt", true);
  xhttp.send();
}
function khayyamInfo()
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("khayyam").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "/txt/khayyam.txt", true);
  xhttp.send();
}


// 2- Second Event alert window in subscribe section when press subscribe button --

subForm.addEventListener( "submit", (e) =>
{
    e.preventDefault();
    alert("you have successfully subscribed");
});
//  3- Third Event-- Resize cards in humans section when mouse over& out
function bigCard(x) {
    x.style.width="24rem";
   }
  function normalCard(x) {
    x.style.width ="18rem";
  }


// 4- Fourth Event -- change the color of Humans headline when you double click

function redColored() {
  document.getElementById("elm").focus();

}

//5- Fifth Event 
function upperCase() {
  const x = document.getElementById("fullname");
 x.value = x.value.toUpperCase();
}

// 6- sixth Event -- alert window after loading the home page when
function loadPage()
{
  alert("Thank You for visiting Origin Sotries");
}

