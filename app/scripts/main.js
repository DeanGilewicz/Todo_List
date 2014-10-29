var my_server = 'http://tiy-atl-fe-server.herokuapp.com/collections/testtododg2';

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

  _.each(my_todo_list, function(items) {
    $('#todoList').append(rendered(items));
  });

});


// adding new tasks to my todo list
var task, contents;

// when add button is clicked - a new item is added to list (array)
// at the moment when form is clicked = knows to look for button that has id submit
$('#Chores').on('submit', function (event) {
  event.preventDefault();
  var item_self = this;

  // Grab the task value
  contents = $('#input_text').val();
  console.log(contents);

  // Create a new ToDo instance
  task = new ToDo({ task: contents });
  console.log(task);

  // Send to our server
  $.ajax({
    type: 'POST',
    content: JSON,
    url: my_server,
    data: task
  }).done( function(data) {

    // Add to my todo_list - push to array
    my_todo_list.push(data);
    console.log(my_todo_list);
    console.log(data);
    // Show our task on the page
    $('#todoList').append(rendered(data));
    console.log(data);
    // Reset my form
    $(item_self)[0].reset();
    console.log(item_self);
  });

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

  $.ajax ({
    type: 'PUT',
    url: my_server + "/" + task_manager._id,
    data: task_manager
  });

});


var item_delete;
// when delete button is clicked
$('#todoList').on('click', 'button', function (event) {
  event.preventDefault();
  var self = this;

  // - delete this item from list and server
  var id = $(this).attr('id');
  console.log(id);

  item_delete = _.findWhere(my_todo_list, { _id: id });
  console.log(my_todo_list);

  $.ajax ({
    type: 'DELETE',
    url: my_server + "/" + item_delete._id,
    data: item_delete
  }).done(function () {
    $(self).prev().remove();
    $(self).remove();
  });

});

// FILTER - when all button is clicked - show all list items
$('#all').on('click', function (event) {
  event.preventDefault();
  // show all list items
});

// FILTER - when completed button is clicked - show completed list items only
$('#complete').on('click', function (event) {
  event.preventDefault();
  // completed list items only
});

//FILTER - when incomplete button is clicked - show incomplete list items only
$('#incomplete').on('click', function (event) {
  event.preventDefault();
  // show incomplete list items only
});



// this.total = function () {
//   return task_manager.length;
// };
