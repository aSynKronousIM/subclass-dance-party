var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
    var oldStep = this.step();
    console.log("oldStep is ", oldStep);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  console.log(this.$node);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

//update constructor
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

//add new methods to makeBD.prototype
makeBlinkyDancer.prototype.step = function(){  //remove param later
  var self = this;
  // call the old version of step at the beginning of any call to this new version of step
  //oldStep.call(self, self.timeBetweenSteps);
  //ALTERNATIVE
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

//makeBlinkyDancer.prototype.oldStep = this.step;

var blinkyDancer = new makeBlinkyDancer();
console.log("blinkyDancer is ", blinkyDancer);
var timeBetweenSteps = 100;
var clock;
clock = sinon.useFakeTimers();
blinkyDancer = makeBlinkyDancer(10, 20, timeBetweenSteps);


