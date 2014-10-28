/* global describe, it */

(function () {
  'use strict';

  describe('Todo Object', function() {

    var todo;

    // before each describe statement runs todo = new Todo
    beforeEach(function() {
      todo = new Todo();
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

      it('should have a visible', function() {
        expect(todo).to.have.property('visible');
      });



      it('should be status false by default', function() {
        expect(todo.status).to.equal(false);
      });

      it('should change status when selected', function() {
        expect(todo.status).to.equal(false);
        todo.comp();
        expect(todo.status).to.equal(true);
        todo.comp();
        expect(todo.status).to.equal(false);
      });


      it('should delete item when clicked', function() {
        expect(todo.visible).to.equal(true);
        todo.delete();
        expect(todo.visible).to.equal(false);
      });

      // it('should show total nunmber of items', function(){
      //   todo.total();
      //   expect(todo.total).to.equal();
      // });

    });

  });

})();
