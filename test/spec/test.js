/* global describe, it */

(function () {
  'use strict';

  describe('Todo Object', function() {

    var task, task_list;

    // before each describe statement runs todo = new Todo
    beforeEach(function() {
      task = new ToDo();
    });

    describe('List Items', function() {

      it('should be an instance of todo', function() {
        expect(task).to.be.an.instanceof(ToDo);
      });

      it('should have a task', function() {
        expect(task).to.have.property('task');
      });

      it('should have a finished', function() {
        expect(task).to.have.property('finished');
      });

      it('should be status false by default', function() {
        expect(task.finished).to.equal('false');
      });

    });

  });

})();
