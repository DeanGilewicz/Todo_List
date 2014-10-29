var task_manager = [];

var Todo = function (options) {
  options = options || {};
  this.name = options.name || " ";
  this.number = options.number || 0;
  this.status = options.status || false; // status - complete or incomplete
  this.selected = function() {
    if(this.status === false) {
      this.status = true;
    } else if(this.status === true) {
      this.status = false;
    }
  };
  this.total = function () {
    // push each item into task_manager array
    // return task manager.length

    return task_manager.length;
  };
  // this.add_item =
  // this.remove_item =
};


var items_template = $('script').html();
var rendered = _.template(items_template);

var add_item = function() {
  var input = $('text input field').val();
  if (input === '') {
    return;
  } else {
  var item = new Todo({
    name: input,
    status: $(this).status
  });
};

  $('where html will be displayed').append(rendered(item));
  $('text input field').val('');

};

// when add button is clicked - a new item is added to list (array)
$('When add btn is clicked').on('click', function() {
  add.item();
});

// when delete button is clicked - remove this item from list
$('When remove btn is clicked').on('click', function() {
  this.remove();
});


// when actual item is clicked, change status of item (complete to uncomplete or vice versa)
$('When actual list item is clicked').on('click', function() {
  this.selected();
});

// when all button is clicked - show all list items
$('When item is added').on('click', function() {
  // show all list items
});

// when completed button is clicked - show completed list items only
$('When list item is clicked').on('click', function() {
  this.status();
});

// when incomplete button is clicked - show incomplete list items only
$('When list item is clicked').on('click', function() {
  this.selected();
});


//
// $('When clicked add item').on('click', function(){
//   add item to task manager - push this item
//   this.total();
//
//
// });
//
//
// $('When clicked delete item').on('click', function(){
//   remove item to task manager - remove this item
//   this.total();
// });
//
//
// $('When click item to delete').on('click', function(){
//
//   this.visible();
// });
//
// $('#btnNew').on('click', function(event){
//   event.preventDefault();
//   add_item();
// });
//
// ('').on('click', 'li', function(event){
//   event.preventDefault();
//   $('.').css('display' , 'block');
// });
//
// // sum = 0;
// // 0
// // for (var i = 0; i < numbers.length; i++) {
// // sum = sum + numbers[i];
// // };
// // 25
