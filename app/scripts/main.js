var my_server = 'http://tiy-atl-fe-server.herokuapp.com/collections/testtododg1';

// ToDo Constructor (Blueprint)
var ToDo = function (options) {
  options = options || {};
  this.task = options.task || '';
  this.finished = 'false';
};


// collection of ToDo's
var my_todo_list;

//Setup my Template
var task_template = $('#script_all_items').html();
var rendered = _.template(task_template);

// Grabbing ALL items and showing on page

$.getJSON(my_server).done( function (data) {

    my_todo_list = data;

  _.each(my_todo_list, function(item) {
    $('#todoList').append(rendered(item));
  });

});


// adding new tasks to my todo list
var task, contents;

// when add button is clicked - a new item is added to list (array)
// at the moment when form is clicked = knows to look for button that has id submit
$('#Chores').on('submit', function (event) {
  event.preventDefault();
  var item_self = this;

  // Grag the task value
  contents = $('#input_text').val();

  // Create a new ToDo instance
  task = new ToDo({ task: contents });

  // Send to our server
  // $.ajax({
  //   type: 'POST',
  //   content: JSON,
  //   url: my_server,
  //   data: task
  // }).done( function(data) {

    // Add to my todo_list - push to array
    my_todo_list.push(data);

    // Show our task on the page
    $('#todoList').append(rendered(data));

    // Reset my form
    $(item_self)[0].reset();

  // });

});


// Manage ToDo items - marking them complete/incomplete
var task_manager;

$('#todoList').on('click', 'li', function (event) {
  event.preventDefault();

  var myID = $(this).attr('id');

  // Find the instance of my task
  task_manager = _.findWhere(my_todo_list, { _id: myID });

  //If it's complete, mark it as complete, else mark it done
  if (task_manager.finished === 'true') {
    task_manager.finished = 'false';
    $(this).removeClass('complete');
  } else {
    task_manager.finished = 'true';
    $(this).addClass('complete');
  }

  // $.ajax ({
  //   type: 'PUT',
  //   url: my_server + "/" + task_manager._id,
  //   data: task_manager
  // });

});


// when delete button is clicked - remove this item from list
// $('When remove btn is clicked').on('click', function() {
//   this.remove();
// });

// $.ajax ({
//   type: 'DELETE',
//   url: my_server + "/" + task_manager._id,
//   data: todo_modifier
// });

// // FILTER - when all button is clicked - show all list items
// $('When item is added').on('click', function() {
//   // show all list items
// });
//
// // FILTER - when completed button is clicked - show completed list items only
// $('When list item is clicked').on('click', function() {
//   this.status();
// });
//
// // FILTER - when incomplete button is clicked - show incomplete list items only
// $('When list item is clicked').on('click', function() {
//   this.selected();
// });



// this.total = function () {
//   return task_manager.length;
// };
