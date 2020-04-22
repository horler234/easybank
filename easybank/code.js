

var myVar;

// duration of the preload
  function preload() {
    myVar = setTimeout(showpage, 3000);
  }


// after the preload
  function showpage() {
    document.getElementById('loader').style.display = "none";
    document.getElementById("mynav").style.display = "block";
    document.getElementById('header').style.display = "block";
    document.getElementById('about').style.display = "block";
    document.getElementById('blog').style.display = "block";
    document.getElementById('footer').style.display = "block";
  }


// mobile responsiveness of the navbar
  function toggleDropdown() {
      let navbarToggle = document.getElementById("navbar-toggle");
      if (navbarToggle.className === 'nav-list') {
          navbarToggle.className += ' responsive';
      } else {
          navbarToggle.className = 'nav-list';
      }
  }
