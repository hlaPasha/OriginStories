const subForm= document.getElementById("subForm");


// 1- First Event -- alert window in subscribe section when press subscribe button --
subForm.addEventListener( "submit", (e) =>
{
    e.preventDefault();
    alert("you have successfully subscribed");
});

// 2- Second Event -- Resize cards in humans section when mouse over& out
function bigCard(x) {
    x.style.width="24rem";
   }
  function normalCard(x) {
    x.style.width ="18rem";
  }

// 3- Third Event -- alert window after loading the home page when
function loadPage()
{
  alert("Thank You for visiting Origin Sotries");
}

// 4- Fourth Event
elm.ondblclick = function(){alert("you've double clicked to the human");}

// 5- Fifth Event 
function upperCase() {
  const x = document.getElementById("fullname");
 x.value = x.value.toUpperCase();
}







