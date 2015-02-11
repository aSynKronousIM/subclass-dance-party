// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // console.log("this.$node in step", this.$node);
  var self = this;
  // this.step.bind(self);
  // makerDancer.step.bind(self);
  setTimeout(function() {
    // console.log("are we stepping");
    self.step();
  }, self.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  // console.log("this.$node in setPos", this.$node);
  this.$node.css(styleSettings);
};

 // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random defaulht point within the body


//makeDancer.prototype.$node = $('<span class="dancer"></span>');
