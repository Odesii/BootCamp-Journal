var textWrapper = document.querySelector('.animate');
// replaces the text inside the main element with a span ignoring whitespace and give it a class
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.animate .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration:1050,
    delay: (el, i) => 70*i
  }).add({
    targets: '.animate',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  document.getElementById('sayBtn').addEventListener('click', function() {
    var optionsContainer = document.querySelector('#options');
  
    // Check if options are currently hidden
    if (optionsContainer.style.display === "none") {
      optionsContainer.style.display = "flex"; 
      optionsContainer.style.flexDirection = "column";// Make the container visible
      anime({
        targets: '.move',
        translateY: [0, 20],
        opacity: [0, 1],
        delay: anime.stagger(100),
      })

    } else {
      anime({
        targets: '.move',
        translateY: [20, 0],
        opacity: [1, 0],
        delay: anime.stagger(100),
        complete: function(anim){
          optionsContainer.style.display = "none";
        }
      })
    }
  });

  document.querySelector('#previous').addEventListener('click', function() {
    location.href = 'posts.html';
  });

  document.querySelector('#find').addEventListener('click', function(){
    location.href = 'about.html';
  });