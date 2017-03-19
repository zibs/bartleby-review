$(document).ready(function() {

  var shuffleBartlebys = function () {
    var MAX_HEIGHT = 250
    var MINIMUM_HEIGHT = 75

    // var COLORS = ['#FD97A5', '#FEFEC0', '#9DF8FD', '#BBFED5', '#FB4A64', '#D5B79D', '#E3E4E8', '#FBED67', '#FBC9FC', ]
    // var color = COLORS[Math.floor((Math.random() * COLORS.length))]
    // $(".bartlebys").css({'border-left-color': color})

    $("img").each(function(index) {
      var getHeight = function () {
        return Math.floor((Math.random() * MAX_HEIGHT) + MINIMUM_HEIGHT);
      }

      var getPosition = function () {
        var possibleWidth = $(".bartlebys").outerWidth() - 300
        var possibleHeight = $(".bartlebys").height() - 350
        var left = Math.floor((Math.random() * possibleWidth) + MINIMUM_HEIGHT);
        var height = Math.floor((Math.random() * possibleHeight) + MINIMUM_HEIGHT);

        return {left: left, height: height}
      }
      var height = getHeight()
      var position = getPosition()

      $(this).css({'max-height': height + 'px', left: position.left + 'px', position: 'absolute', top: position.height + "px", opacity: 1})
      $(".bartlebys").css({height: 100 + 'vh'})
      $(".scrollable").css({'max-height': 100 + 'vh'})
    });
  }

  var organizeBartlebys = function() {
    $("img.review").each(function(index) {
      $(this).css({'max-height': 150 + 'px', position: 'relative', left: 0, top: 0})
    });
    $(".bartlebys").css({height: 'inherit'})
    $(".scrollable").css({'max-height': 'inherit'})
  }



  $('.site-title').click(function() {
      shuffleBartlebys()
  })

  $('#site-map').click(function() {
    organizeBartlebys()
  })

  $(window).on('resize', function(event){
    var windowWidth = $(window).width();
    if (windowWidth < 568) {
      organizeBartlebys()
    }
  });

  shuffleBartlebys()

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
