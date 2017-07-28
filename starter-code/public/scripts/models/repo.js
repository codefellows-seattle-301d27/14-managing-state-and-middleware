'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  //Done! COMMENT: What is this function doing? Where is it called?
  // Does it call any other functions, and if so, in what file(s) do those function(s) live?
  //This function is used to get all the repos from Github and filters the repos with a particular attribute.
 // It is called in aboutController.js.
 // It is calling Console.error and .then, .with and the .filter functions.
 //It also has a callback function which is passed as an argument.
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
