var ModernDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

ModernDancer.prototype = Object.create(Dancer.prototype);

//update constructor
ModernDancer.prototype.constructor = ModernDancer;

//add new methods to makeBD.prototype
ModernDancer.prototype.step = function(){  
  var self = this;
  Dancer.prototype.step.call(self);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  self.$node.toggle();
};