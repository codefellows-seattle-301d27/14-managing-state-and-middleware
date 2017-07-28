'use strict';
var app = app || {};

(function(module) {
  function Article(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  Article.all = [];

  // REVIEW: We no longer need our prototype toHtml() method. This functionality has been relocated to the view.
  //         As a result, Article.prototype.toHtml has been deleted.

  // REVIEW: With ES6 arrow functions, if the function only has one parameter, you don't need parentheses.
  //         This is similar to saying Article.loadAll = function(rows).
// COMMENT:DONE What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?

  //The Article.loadAll method is passing in rows as a parameter, calling the .sort() array method
  //on the passed in articles (aka rows) to order them by date by subtracting one date from another (date 'b' - date 'a').
  //The function then calls the .map array method on the rows array,
  //passes them into the Article constructor function and returns them to the Article.all array.
  //Article.loadAll is called inside the Article.fetchAll method
  Article.loadAll = rows => {
    rows.sort((a,b) => (new Date(b.publishedOn)) - (new Date(a.publishedOn)));
    Article.all = rows.map(ele => new Article(ele));
  };

  // COMMENT:DONE What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?

//Article.fetchAll has a callback function as a parameter,it uses the $.get() method on the '/articles' route
//Takes the result of the call and passes it to Article.loadAll as a parameter, calls the
//Article.loadAll method and then invokes the callback
//Article.fetchAll is called on adminView.index to initialize the page and called on
//articleController, which updates needs to use fetchAll to populate the articles in the DOM
  Article.fetchAll = callback => {
    $.get('/articles')
    .then(
      results => {
        Article.loadAll(results);
        callback();
      }
    )
  };

  // REVIEW: We have a new method to query our DB for a specific record, based on varying criteria
  Article.findWhere = function(field, value, callback) {
    $.get('/articles/find', {field: field, val: value})
    .then(callback)
  };

  // REVIEW: A new method for gathering all of the categories
  Article.allCategories = function(callback) {
    $.get('/categories', callback);
  };

  Article.numWordsAll = () => {
    return Article.all.map(article => article.body.match(/\b\w+/g).length)
                      .reduce((a, b) => a + b)
  };

  Article.allAuthors = () => {
    return Article.all.map(article => article.author)
                      .reduce((names, name) => {
                        if (names.indexOf(name) === -1) names.push(name);
                        return names;
                      }, []);
  };

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?

/* Inside .numWordsByAuthor method the .allAuthors method is called which returns an array of unique
 author names. On that array we call .map() and pass in the author name property as a parameter.
 Inside this .map() we will be setting up an object with a name and numWords property. We set the
 value of numWords by calling the .filter() method on the Article.all array. This filter method checks
 the author value at each instance to see if it matches the current author property in the
 Articles.all.filter() loop. The .map() method then takes the body property of each article and returns
 an array of matched elements and calls .length() on them to get the number of elements(words) in the array.
Then .reduce() is called on the resulting array which returns an integer value equal to the number of words
in the array. The object is then returned.

*/
  Article.numWordsByAuthor = () => {
    return Article.allAuthors().map(author => {
      return {
        name: author,
        numWords: Article.all.filter(a => a.author === author)
                             .map(a => a.body.match(/\b\w+/g).length)
                             .reduce((a, b) => a + b)
      }
    })
  };

  Article.stats = () => {
    return {
      numArticles: Article.all.length,
      numWords: Article.numWordsAll(),
      Authors: Article.allAuthors(),
    }
  };

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  Article.truncateTable = callback => {
    $.ajax({
      url: '/articles',
      method: 'DELETE',
    })
    .then(console.log)
    .then(callback);
  };

  Article.prototype.insertRecord = function(callback) {
    $.post('/articles', {author: this.author, authorUrl: this.authorUrl, body: this.body, category: this.category, publishedOn: this.publishedOn, title: this.title})
    .then(console.log)
    .then(callback);
  };

  Article.prototype.deleteRecord = function(callback) {
    $.ajax({
      url: `/articles/${this.article_id}`,
      method: 'DELETE'
    })
    .then(console.log)
    .then(callback);
  };

  Article.prototype.updateRecord = function(callback) {
    $.ajax({
      url: `/articles/${this.article_id}`,
      method: 'PUT',
      data: {
        author: this.author,
        authorUrl: this.authorUrl,
        body: this.body,
        category: this.category,
        publishedOn: this.publishedOn,
        title: this.title,
        author_id: this.author_id
      }
    })
    .then(console.log)
    .then(callback);
  };

  module.Article = Article;
})(app);
