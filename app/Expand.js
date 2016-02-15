function Expand(){
  console.log('Expand: instance');
  var context = null;

  this.init = function(thisContext) {
    console.log('Expand: init');
    context = thisContext;

    this.createButton(context.catchAll, context.exit);

  }.bind(this);

  this.exit = function() {
    console.log('Expand: exit');
    Enabler.exit('catch_all');
  }.bind(this);

}

module.exports = Expand;