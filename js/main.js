$(document).ready(function() {
  var MAX_HEIGHT = 150
  var MINIMUM_HEIGHT = 75

  $("img").each(function(index) {
    var getHeight = function () {
      return Math.floor((Math.random() * MAX_HEIGHT) + MINIMUM_HEIGHT);
    }

    var getPosition = function () {
      var possibleWidth = $(".bartlebys").width() - 300
      var possibleHeight = $(".bartlebys").height() // - 300
      console.log(possibleWidth);
      console.log(possibleHeight);
      var width = Math.floor((Math.random() * possibleWidth) + MINIMUM_HEIGHT);
      var height = Math.floor((Math.random() * possibleHeight) + MINIMUM_HEIGHT);

      return {width: width, height: height}
    }
    var height = getHeight()
    var position = getPosition()
    console.log(position);
    $(this).css({'max-height': height + 'px', left: position.width + 'px', position: 'absolute', top: position.height + "px"})
    // console.log(index + ": " + $( this ).attr('style'));
  });
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
