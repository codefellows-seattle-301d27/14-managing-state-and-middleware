'use strict';
var app = app || {};

(function(module) {
  const adminView = {
    initAdminPage : () => {
      let template = Handlebars.compile($('#author-template').text());
        //Done! COMMENT: What is this function doing? Where is it called?
        //Does it call any other functions, and if so, in what file(s) do those function(s) live?
        //This function is used to append the author stats and blog stats to the admin.html page.
        //It calls the numWordsByAuthor and numWordsAll functions that lives in article.js
      app.Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));
      $('#blog-stats .articles').text(app.Article.all.length);
      $('#blog-stats .words').text(app.Article.numWordsAll());
    }
  };

  app.Article.fetchAll(adminView.initAdminPage);
  module.adminView = adminView;
})(app);
