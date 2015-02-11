$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction =  window[dancerMakerFunctionName];
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * ((Math.random() * 0.5) + 0.3),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $(".lineUpBottom").on("click", function(event){
    $('breakDancer').stop();
    var numDancers = $('.dancer').length;
    $('.dancer').each(function(index, elem) {
      $(elem).animate({ "top": "75%",
        "left": Math.floor((index + 1)/(numDancers + 1) * screen.width) + "px"}, 2000);
    });
  });

  $(".lineUpLeft").on("click", function(event){
    $('breakDancer').stop();
    $('.breakDancer').each(function(item, elem) {
      cancelAnimationFrame(myReq);
    });

    var numDancers = $('.dancer').length;
    $('.dancer').each(function(index, elem) {
      $(elem).animate({ "top": Math.floor((index + 1)/(numDancers + 1) * screen.height) + "px",
        "left": "15%"}, 2000);
    });
  });

  var myReq;


  $(".revolve").on("click", function() {
    var $dancers = $('.breakDancer');
    $dancers.each(function(index, elem) {
    var position = $(elem).position();
    var angle = 0, lastTime = null;
    function animate(time) {
      if (lastTime != null)
        angle += (time - lastTime) * 0.001;
      lastTime = time;
      elem.style.top = (position.top + (Math.sin(angle) * 50)) + "px";
      elem.style.left = (position.left + (Math.cos(angle) * 200)) + "px";
      myReq = requestAnimationFrame(animate);
      }
      myReq = requestAnimationFrame(animate);
    });
  });

  $('.free-dance').on('click', function() {
    var $dancers = $('.dancer');
    $dancers.each(function(index, elem) {
      var topPos = $("body").height() * ((Math.random() * 0.5) + 0.3);
      var leftPos = $("body").width() * Math.random();
      $(elem).animate({"top": topPos, "left": leftPos}, 2000);
      //Dancer.prototype.setPosition.call(elem, topPos, leftPos);
    });
  });

  $('.dancer').filter('.balletDancer').on('mouseenter', function(event) {
    $(this).css({
      "-ms-transform": "rotate(180deg)",
    "-webkit-transform": "rotate(180deg)",
    "transform": "rotate(180deg)"
    });
  });

});


