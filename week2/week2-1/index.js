const topBtn = document.querySelector('.top-btn');

document.addEventListener('scroll', () => {
  console.log(scrollY, window.innerHeight, scrollY / window.innerHeight);
  topBtn.style.opacity = scrollY / window.innerHeight;
})