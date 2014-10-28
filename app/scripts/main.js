var Todo = function (options) {
  options = options || {};
  this.name = options.name || " ";
  this.number = options.number || 0;
  this.status = options.status || false;
  this.visible = options.visible || true;
  this.comp = function() {
    if(this.status === false) {
      this.status = true;
    } else if(this.status === true) {
      this.status = false;
    }
  };

  this.visible = function () {
    $(this).remove();
  };

// this.total = function () {
//
//   _.each ()
//   todo.length;// add up the number of items (use number property)
// };

};

// status - complete or incomplete
// visible - whether item appears or not

// give each item an id and use underscore sort...


// $('When click item').on('click', function(){
//
//   this.comp();
// });
//
// $('When add new item or delete item').on('click', function(){
//
//   this.total();
// });
//
//
// $('When click item to delete').on('click', function(){
//
//   this.visible();
// });
