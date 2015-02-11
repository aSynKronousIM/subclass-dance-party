var ClassyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
}

ClassyDancer.prototype = Object.create(Dancer.prototype);
ClassyDancer.prototype.constructor = ClassyDancer;

ClassyDancer.prototype.step = function() {
  var self = this;

  Dancer.prototype.step.call(self);
  self.$node.toggle();
}