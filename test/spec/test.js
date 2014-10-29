/* global describe, it */

(function () {
  'use strict';

  describe('Todo Object', function() {

    var todo, task_list;

    // before each describe statement runs todo = new Todo
    beforeEach(function() {
      todo = new Todo();
      task_list = [];
    });

    describe('List Items', function() {

      it('should be an instance of todo', function() {
        expect(todo).to.be.an.instanceof(Todo);
      });

      it('should have a name', function() {
        expect(todo).to.have.property('name');
      });

      it('should have a number', function() {
        expect(todo).to.have.property('number');
      });

      it('should have a status', function() {
        expect(todo).to.have.property('status');
      });



      it('should be status false by default', function() {
        expect(todo.status).to.equal(false);
      });

      it('should change status when selected', function() {
        expect(todo.status).to.equal(false);
        todo.selected();
        expect(todo.status).to.equal(true);
        todo.selected();
        expect(todo.status).to.equal(false);
      });


      it('should delete item when clicked', function() {
        expect(todo.visible).to.equal(true);
        todo.delete();
        expect(todo.visible).to.equal(false);
      });

      it('should delete add item when clicked', function() {
        expect(todo.visible).to.equal(true);
        todo.delete();
        expect(todo.visible).to.equal(false);
      });

      // it('should list another todo when one is added', function() {
      //   expect(task_list.length).to.equal(0);
      //   task_list.add(todo);
      //   expect(task_list.length).to.equal(1);
      // });

      // it('should show total nunmber of items', function(){
      //   todo.total();
      //   expect(todo.total).to.equal();
      // });

    });

  });

})();
