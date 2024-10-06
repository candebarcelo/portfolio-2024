// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();

//         const section = document.querySelector(this.getAttribute('href'));

//         window.scrollTo({
//             top: section.offsetTop,
//             behavior: 'smooth'
//         });
//     });
// });





// const footer = document.querySelector('footer');

// footer.addEventListener('mouseover', function() {})





// Animate function
function stepAnimateText(element, animation, delay){

    var text = $(element).text();
    var curr = '';
  
    for (var i=0; i < text.length; i++){
      var character = text.charAt(i);
      $(element).html(curr+'<span class="'+animation+'" style="-webkit-animation-delay: '+i*delay+'s; animation-delay: '+i*delay+'s">'+character +"</span>");
      curr = $(element).html();
    }
}
  
// Init on load
stepAnimateText('.bouncy-letters','MoveUpDown', 0.05);

// Buttons
$('.bouncy-letters').on('mouseover', function(){
    // var delay = $('select').val();
    stepAnimateText('.bouncy-letters','MoveUpDown', 0.05);
    return false;
});
// $('.button.button-bounceindown').click(function(){
//     var delay = $('select').val();
//     stepAnimateText('.fade','bounceInDown',delay);
//     return false;
// });
// $('.fade-container').click(function(){
//     var delay = $('select').val();
//     stepAnimateText('.fade','bounceInDown',delay);
//     return false;
// });