$(document).ready(function() {

  var shuffleBartlebys = function () {
    var MAX_HEIGHT = 250
    var MINIMUM_HEIGHT = 75

    $("img").each(function(index) {
      var getHeight = function () {
        return Math.floor((Math.random() * MAX_HEIGHT) + MINIMUM_HEIGHT);
      }

      var getPosition = function () {
        var possibleWidth = $(".bartlebys").width() - 200
        var possibleHeight = $(".bartlebys").height() - 200
        var width = Math.floor((Math.random() * possibleWidth) + MINIMUM_HEIGHT);
        var height = Math.floor((Math.random() * possibleHeight) + MINIMUM_HEIGHT);

        return {width: width, height: height}
      }
      var height = getHeight()
      var position = getPosition()
      $(this).css({'max-height': height + 'px', left: position.width + 'px', position: 'absolute', top: position.height + "px", 'opacity': 1})

    });
  }

  shuffleBartlebys()
  $('.site-title').click(function() {
      shuffleBartlebys()
  })
});


$(document).ready(function() {
  $( ".draggable" ).draggable({
    stack: ".draggable"
  });
})


// $(".element")
//       .draggable()
//       .click(function(){
//             if ( $(this).is('.ui-draggable-dragging') ) {
//                   return;
//             }
//             // click action here
//       });
