var task_manager = [];


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


  this.total = function () {
    return task_manager.length;
  };




};


var numbers = [1, 2, 3, 4, 5, 10];

for (var i = 0; i < numbers.length; i++) {
numbers[i] + numbers[i] + 1;
};

// getting 21 but need 25

// status - complete or incomplete
// visible - whether item appears or not

// give each item an id and use underscore sort...


$('When click item').on('click', function(){

  this.comp();
});

$('When clicked add item').on('click', function(){
  add item to task manager - push this item
  this.total();


});


$('When clicked delete item').on('click', function(){
  remove item to task manager - remove this item
  this.total();
});


$('When click item to delete').on('click', function(){

  this.visible();
});

// sum = 0;
// 0
// for (var i = 0; i < numbers.length; i++) {
// sum = sum + numbers[i];
// };
// 25
