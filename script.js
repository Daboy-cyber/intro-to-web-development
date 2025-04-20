function changeBackgroundColor(color){
    let section = document.getElementById('coding-journey');
    section.style.backgroundColor = color;
}

document.getElementById('intro').addEventListener('click', () => changeBackgroundColor("#2CA02C"));

document.getElementById('react').addEventListener('click', () => changeBackgroundColor("#FF7F0E"));

document.getElementById('backend').addEventListener('click', () => changeBackgroundColor("#9467BD"));
 
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString('en-US', options);
document.getElementById('date').innerText = formattedDate;
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = targetElement.offsetTop - navbarHeight;
  
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
  
