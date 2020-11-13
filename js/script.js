const btns = document.querySelectorAll('.art1-btn');
const popup = document.querySelector('.popup');
const popup2 = document.querySelector('.popup2');
const popupbtn3 = document.querySelector('.popup-btn3');
const popupbtn2 = document.querySelector('.popup-btn2');
const popupbtn1 = document.querySelector('.popup-btn1');
const body = document.body;

const remc = () =>{
  popup.classList.remove('popup-active');
  body.classList.remove('disable-scroll');
};

popupbtn1.addEventListener('click', function() {
  remc();
  popup2.classList.add('popup-active2');
  body.classList.add('disable-scroll');
})

popupbtn2.addEventListener('click', function() {
  remc();
})

popupbtn3.addEventListener('click', function() {
  popup2.classList.remove('popup-active2');
})

btns.forEach((btn) =>{
  btn.addEventListener('click', function () {
    popup.classList.add('popup-active');
    body.classList.add('disable-scroll');
  });
})
