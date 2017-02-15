$(document).ready(function() {
  var MAX_HEIGHT = 150
  var MINIMUM_HEIGHT = 75

  var getHeight = function () {
    return Math.floor((Math.random() * MAX_HEIGHT) + MINIMUM_HEIGHT);
  }

  var getPosition = function () {
    var possibleWidth = $(".bartlebys").width()
    var possibleHeight = $(".bartlebys").height()

    var width = Math.floor((Math.random() * possibleWidth) + MINIMUM_HEIGHT);
    var height = Math.floor((Math.random() * possibleHeight) + MINIMUM_HEIGHT);

    return {width: width, height: height}
  }

  $("img").each(function(index) {
    var height = getHeight()
    var position = getPosition()
    console.log(position);
    $(this).css({'max-height': height + 'px', left: position.width + 'px', position: 'absolute', top: position.height + "px"})
    // console.log(index + ": " + $( this ).attr('style'));
  });
});
