const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const list = document.querySelectorAll('.navbar-links li');


list.forEach(li => li.addEventListener('click', (event) => {
  if(li.className == '' || li.className == 'active-li') {
    checkClass();
    li.className = 'active-li';
    navbarLinks.classList.toggle('active')
  }
})
)

checkClass = () => {
  list.forEach(li => li.className === 'active-li' ? li.className = '' : null)
}

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
