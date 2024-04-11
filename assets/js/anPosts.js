// setting rotation state
let isRote = false;

//moves more, return button up 50px
anime({
  targets: '.move',
  translateY: -50
})


//rotates arrow on click
document.getElementById('extra').addEventListener('click', function(){
anime({
  // targeting the arrow
  targets: '#extra',
  rotate: isRote ? 0: 180,//rotating for 0-180 if false, rotate back if true. 
})
// a toggle for changing the rotation state to true or false 
isRote = !isRote;
})


//moves the menu out when arrow clicked or moves it back depending on current position
document.getElementById('extra').addEventListener('click', function() {
  var optionsContainer = document.querySelector('#options');

  // Check if options are currently hidden
  if (optionsContainer.style.display === "none") {
    optionsContainer.style.display = "flex"; 
    optionsContainer.style.flexDirection = "row";
    anime({
      targets: '.move',
      translateX: [150],
      opacity: [0, 1],
      delay: anime.stagger(100),
    })
  } else {
    anime({
      targets: '.move',
      translateX: [100, 0],
      opacity: [1, 0],
      delay: anime.stagger(100),
      complete: function(anim){
        optionsContainer.style.display = "none";
      }
    })
  }
});

document.querySelector('#back').addEventListener('click', function(){
  location.href = 'index.html';
});