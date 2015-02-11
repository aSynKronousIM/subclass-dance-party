var BellyDancer = function(top, left, timeBetweenSteps) {
  ClassyDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="bellyDancer dancer"><img src="src/images/hippo.gif"></span>');
  this.step();
  this.setPosition(top, left);
};

BellyDancer.prototype = Object.create(ClassyDancer.prototype);
BellyDancer.prototype.constructor = BellyDancer;

BellyDancer.prototype.step = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  }

  this.$node.css(styleSettings);
}
