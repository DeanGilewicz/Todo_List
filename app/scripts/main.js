var my_server = 'http://tiy-atl-fe-server.herokuapp.com/collections/testtododg4';

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
    $('#all').html(my_todo_list.length);
    count_area();
  });

});

var complete, incomplete;

var count_area = function () {

    $.getJSON(my_server).done( function (status) {

      complete = _.where(status, {finished: "true"});
      var complete_total = complete.length;
      incomplete = _.where(status, {finished: "false"});
      var incomplete_total = incomplete.length;

      $('#completed').html(complete_total);
      $('#incomplete').html(incomplete_total);

    });

};

// adding new tasks to my todo list
var task, contents;

// when add button is clicked - a new item is added to list (array)
$('#Chores').on('submit', function (event) {
  event.preventDefault();

  if($('#input_text').val() === '') {
    alert('Please Enter A Chore');
    return false;
  };

  var item_self = this;

  // Grab the input value from form
  contents = $('#input_text').val();

  // Create a new ToDo instance
  task = new ToDo({ task: contents });

  // Send to our server
  $.ajax({
    type: 'POST',
    content: JSON,
    url: my_server,
    data: task
  }).done( function(data) {

    // Add to my todo_list - push to array
    my_todo_list.push(data);

    // Show our task on the page
    $('#todoList').append(rendered(data));

    // Reset my form
    $(item_self)[0].reset();

    // total counter - changes when tasks are added
    var total_tasks = $('#todoList li').length;
    $('#all').html(total_tasks);
  });

});



var incomplete, completed;

// Manage ToDo items - marking them complete/incomplete
var task_manager;

$('#todoList').on('click', 'li', function (event) {
  event.preventDefault();

  var myID = $(this).attr('id');
  // Find the instance of my task
  task_manager = _.findWhere(my_todo_list, { _id: myID });
  //If it's complete, mark it as complete, else mark it done
  if (task_manager.finished == 'false') {
    task_manager.finished = 'true';
    $(this).addClass('complete');

  } else if(task_manager.finished == 'true') {
    task_manager.finished = 'false';
    $(this).removeClass('complete');

  }

  $.ajax ({
    type: 'PUT',
    url: my_server + "/" + task_manager._id,
    data: task_manager
  }).done(function() {

    count_area();
  });

});


var item_delete;

// when delete button is clicked
$('#todoList').on('click', 'input', function (event) {
  event.preventDefault();
  var self = this;

  // - delete this item from list and server
  var id = $(this).attr('id');

  item_delete = _.findWhere(my_todo_list, { _id: id });

  $.ajax ({
    type: 'DELETE',
    url: my_server + "/" + item_delete._id,
    data: item_delete
  }).done(function () {
    $(self).prev().remove();
    $(self).remove();
  });

  // total counter - changes when tasks are deleted
  var total_tasks = $('#todoList li').length - 1;
  $('#all').html(total_tasks);

});

count_area();

// FILTER - when completed button is clicked - show completed list items only
$('.filters').on('click', '#show_comp', function (event) {
  event.preventDefault();
  $(".complete").css('display', 'block');
  $(".incomplete").css('display', 'none');
  $(".compShow").css('display', 'inline');
  $(".incompShow").css('display', 'none');

});

//FILTER - when incomplete button is clicked - show incomplete list items only
$('.filters').on('click', '#show_incomp', function (event) {
  event.preventDefault();
  $(".complete").css('display', 'none');
  $(".incomplete").css('display', 'block');
  $(".compShow").css('display', 'none');
  $(".incompShow").css('display', 'inline');

});


// FILTER - when all button is clicked - show all list items
$('.filters').on('click', '#show_all', function (event) {
  event.preventDefault();
  $(".complete").css('display', 'block');
  $(".incomplete").css('display', 'block');
  $(".compShow").css('display', 'inline');
  $(".incompShow").css('display', 'inline');

});
