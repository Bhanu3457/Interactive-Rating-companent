const buttons = document.querySelectorAll(".list__item");
const submit = document.querySelector(".submit");
const rating = document.querySelector("#userrating");
const card = document.querySelector(".card");
const success = document.querySelector("#thankyou");
const btn = document.querySelector("#rateagain")
let value;
function clear(){
rating.innerHTML='';
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    rating.innerHTML = button.innerHTML;
  });
});

Userfed = () => {
  
  if(!rating.innerHTML){
    alert("Select something");
  }
  else{
    card.style.display = "none";
  success.style.display = "block";
  }
}
/*submit.addEventListener("click", () => {
  card.style.display = "none";
  success.style.display = "block";
});*/
 
revfed = () => {
  clear();
  success.style.display = "none";
  card.style.display = "block";
}

/*btn.addEventListener("click", () =>{
  success.style.display = "none";
  card.style.display = "block";
  
})*/


