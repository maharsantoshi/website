


const toggleBtn = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = navMenu.querySelectorAll("a");

/* Toggle button click */
toggleBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // 🔥 outside click se bachane ke liye
  navMenu.classList.toggle("active");
});

/* Nav menu ke andar click ho to close na ho */
navMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

/* Link click → menu close */
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

/* 🔥 Outside click → menu close */
document.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

const buttons = document.querySelectorAll('.filter-btns button');
const items = document.querySelectorAll('.item');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {

    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    items.forEach(item => {
      if (filter === 'all') {
        item.style.display = 'block';
      } else {
        if (item.classList.contains(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }
    });

  });
});