'use strict';
var app = app || {};

(function(module) {
  const articleController = {};

  // COMMENT:DONE What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?

  //articleController.index is passing in the context object to the method
  //articleView.index which uses the ctx.articles property. It calls the
  //articleView.index method, which is located in articleView.js
  articleController.index = (ctx) => app.articleView.index(ctx.articles);

  // REVIEW: Middleware for grabbing one article by ID:
  articleController.loadById = (ctx, next) => {
    let articleData = article => {
      ctx.articles = article;
      next();
    };

    // COMMENT:DONE What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?

    //The custom findWhere function is called which makes a $.get() request at the route `/articles/find`,
    //findWhere() is then passed a field of `article_id`, given a value of article_id from the context object,
    //and then articleData is called which is a function within the articleController.loadById function that
    //takes one article and sets it to the ctx.articles property.

    app.Article.findWhere('article_id', ctx.params.article_id, articleData);
  };

  // REVIEW: Middleware for loading up articles by a certain author:
  articleController.loadByAuthor = (ctx, next) => {
    let authorData = articlesByAuthor => {
      ctx.articles = articlesByAuthor;
      next();
    };

    app.Article.findWhere('author', ctx.params.authorName.replace('+', ' '), authorData);
  };

  // REVIEW: Middleware for grabbing all articles with a certain category:
  articleController.loadByCategory = (ctx, next) => {
    let categoryData = articlesInCategory => {
      ctx.articles = articlesInCategory;
      next();
    };

    app.Article.findWhere('category', ctx.params.categoryName, categoryData);
  };

  // REVIEW: Middleware for grabbing ALL articles:
  articleController.loadAll = (ctx, next) => {
    let articleData =  () => {
      ctx.articles = app.Article.all;
      next();
    };

    if (app.Article.all.length) {
      ctx.articles = app.Article.all;
      next();
    } else {
      app.Article.fetchAll(articleData);
    }
  };

  module.articleController = articleController;
})(app);
