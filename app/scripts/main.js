var Todo = function (options){
  options = options || {};
  this.name = options.name;
  this.id = options.id;
  this.status = options.status || true;
  this.visible = options.visible;
  this.comp = function() {
    this.status = 'true';
  };

};


$('Not sure').on('click', function(){

  this.comp();
});

// status - complete or incomplete
// visible - whether item appears or not
