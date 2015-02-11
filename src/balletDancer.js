var BalletDancer = function(top, left, timeBetweenSteps) {
  ClassyDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<div class="balletDancer dancer"><img src="src/images/ballet.png" width="200" height="200"></div>');
  this.step();
  this.setPosition(top, left);
};

BalletDancer.prototype = Object.create(ClassyDancer.prototype);
BalletDancer.prototype.constructor = BalletDancer;

BalletDancer.prototype.step = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  }

  this.$node.css(styleSettings);
}
