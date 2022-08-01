const subForm= document.getElementById("subForm");


//First Event -- alert window in subscribe section when press subscribe button --
subForm.addEventListener( "submit", (e) =>
{
    e.preventDefault();
    alert("you have successfully subscribed");
});



//Second Event -- Resize cards in humans section when mouse over& out
function bigCard(x) {
    x.style.width="24rem";
   }
  function normalCard(x) {
    x.style.width ="18rem";
  }
// Third Event -- 



/*
function humans3Func()
{
    let newWin = window.open("Sami Drubi", "Sami Drubi", "width=200,height=200");

newWin.document.write("Hello, world!");
}
function humans2Func()
{
   alert("Hello, world!");
}
*/
