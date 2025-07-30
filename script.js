document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.getElementById('burgerIcon');
    const mobileMenu = document.getElementById('mobileMenu');
    burgerIcon.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    const mobileLinks = document.querySelectorAll('.mobile-menu .menu');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerIcon.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});


const answer=document.getElementsByClassName('answer');
const QuestionBtn=document.getElementsByClassName('question-btn');
const ArrowBtn=document.getElementsByClassName('arrow-btn');

for(let i=0;i<QuestionBtn.length;i++){
    QuestionBtn[i].addEventListener('click',function(){
        let index = Array.from(QuestionBtn).indexOf(this);

    if (answer[index].classList.contains('active')) {
      answer[index].classList.remove('active');
      ArrowBtn[index].classList.remove('rotated');
    } 
    else {
      answer[index].classList.add('active');
      ArrowBtn[index].classList.add('rotated');
    }
    })
}







  const modal = document.getElementById("modal");
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.getElementById("closeModal");

  openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });




const hearts = document.querySelectorAll('.mask-icon');
const counts = document.querySelectorAll('.cout-like');

hearts.forEach((heart, index) => {
  let liked = false;

  heart.addEventListener('click', () => {
    liked = !liked;

    if (liked) {
      heart.style.maskImage = "url('heart-solid-full.svg')";
      heart.style.webkitMaskImage = "url('heart-solid-full.svg')";
      heart.style.backgroundColor = "#e53935";

      counts[index].textContent = parseInt(counts[index].textContent) + 1;
    } else {
      heart.style.maskImage = "url('heart-regular-full.svg')";
      heart.style.webkitMaskImage = "url('heart-regular-full.svg')";
      heart.style.backgroundColor = "#999999";

      counts[index].textContent = parseInt(counts[index].textContent) - 1;
    }
  });
});
