/* global describe, it */

(function () {
  'use strict';

  describe('Todo Object', function() {

    var todo;

    // before each describe statement runs todo = new Todo
    beforeEach(function(){
      todo = new Todo;
    });

    describe('List Items', function() {

      it('should be an instance of todo', function() {
        expect(todo).to.be.an.instanceof(Todo);
      });

      it('should have a name', function() {
        expect(todo).to.have.property('name');
      });

      it('should have an id', function() {
        expect(todo).to.have.property('id');
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

        if(options.status = true) {
          todo.comp();
          this.status = false;
          expect(todo.status).to.equal(false);
        } else {
          todo.comp();
          this.status = true;
          expect(todo.status).to.equal(true);
        };

      });

      it('should show total items', function(){
        expect(todo.total).to.equal('todo.length');
      });

      it('should hide item when clicked', function() {
        expect(todo.display).to.equal('show');
        todo.delete();
        expect(todo.display).to.equal('hide');
      });


    });

  });

})();
