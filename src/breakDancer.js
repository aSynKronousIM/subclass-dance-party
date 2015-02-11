var BreakDancer = function(top, left, timeBetweenSteps) {
  ModernDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="breakDancer dancer"><img src="src/images/break-dancer.gif"></span>');
  this.step();
  this.setPosition(top, left);
};

BreakDancer.prototype = Object.create(ModernDancer.prototype);
BreakDancer.prototype.constructor = BreakDancer;

BreakDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  // console.log("this.$node in setPos", this.$node);
  this.$node.css(styleSettings);
};

