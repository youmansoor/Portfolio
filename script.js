$(document).ready(function() {
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    const target = this.hash;
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 700);
  });
});
$(document).ready(function() {
  const titles = [
    "Front-end Developer",
    "WordPress Developer",
    "Responsive Web Developer",
    "UI/UX Designer"
  ];

  let index = 0;
  const $text = $('#changing-text');

  function changeTitle() {
    index = (index + 1) % titles.length;
    $text.fadeOut(400, function() {
      $text.text(titles[index]).fadeIn(400);
    });
  }

  // Change title every 3 seconds
  setInterval(changeTitle, 3000);

  // Smooth scroll code (optional, keep it if you want)
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    const target = this.hash;
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 700);
  });
});
$(document).ready(function () {
  $('.nav-links a, .back-to-top').on('click', function (e) {
    e.preventDefault();
    const target = this.hash;
    if (target) {
      $('html, body').animate({
        scrollTop: $(target).offset().top - 60 // offset for navbar height
      }, 600);
    }
  });
});
