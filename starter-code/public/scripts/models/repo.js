'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?

  /* This method has an anonymous function that has a callback as a parameter. Inside the function the get method is used on the /github/user/repos route.  The data retrieved is then set as a parameter in the repos.all method unless there is an error in which case console.error in invoked. Afterwards, the callback is invoked. This method is called in aboutController.index. DONE*/

  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
