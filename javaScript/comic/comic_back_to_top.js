const backToTop = document.getElementById('backToTop');
const triggerSection = document.getElementById('project');
const triggerOffset = triggerSection.offsetTop;

window.addEventListener('scroll', () => {
  if (window.pageYOffset > triggerOffset) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
