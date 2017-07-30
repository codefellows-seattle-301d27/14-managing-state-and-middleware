'use strict';
var app = app || {};

(function(module) {
  const adminView = {
    initAdminPage : () => {
      let template = Handlebars.compile($('#author-template').text());
        // COMMENT:DONE What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
        //numWordsByAuthor() is called which returns an array of objects that have authorname property
        //and an numWords property representing total number of words written by that author
        //we call the array method forEach() on that array of objects we then pass each object
        //into our Handlebars compiler function and append them to the 'author-stats' DOM element
        //in the blog-stats sections we then directly append the total amount of articles and
        //the total number of words
        //initAdminPage() is called right after this codeblock
      app.Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));
      $('#blog-stats .articles').text(app.Article.all.length);
      $('#blog-stats .words').text(app.Article.numWordsAll());
    }
  };

  app.Article.fetchAll(adminView.initAdminPage);
  module.adminView = adminView;
})(app);
