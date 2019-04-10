function Agile() {
  this.backlog = [];

  this.addTask = function(Task) {
    this.backlog.push(Task);
  };

  this.addUrgentTask = function(Task) {
    this.backlog.unshift(Task);
  };

  this.getSprint = function(storyPoints) {
    var backlog = this.backlog;
    var sprint = [];

    for (var i = 0; i < backlog.length; i++) {
      var task = backlog[i];

      if (storyPoints >= task.storyPoints) {
        sprint.push(task);
        backlog.splice(i, 1);
        i--;
        storyPoints -= task.storyPoints;
      }
 
    }

    return sprint;
  };
}

function Task(title, storyPoints) {
  this.title = title;
  this.storyPoints = storyPoints;
}

var agile = new Agile();
