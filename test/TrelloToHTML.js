// vim:sw=2:ts=2:et: 
var assert = require("assert");
var fs = require('fs')
var _ = require('underscore')
var TrelloReader = require("trello-json-reader");
var TrelloToHTML = require("../trello-json-to-html");

describe('TrelloToHTML.toHTML', function(){
  it('should throw an exception if passed wronged argument.', function(){
    assert.throws(function() {
      TrelloToHTML.toHTML({});
    }, Error);
  });
});

describe('TrelloToHTML.genCardHTML', function(){
  it('should return HTML.', function(){
    fs.readFile('test/data/testdata-TrelloToHTML.json', 'utf8', function(err, data) {
      var d = new TrelloReader.parse(data);
      var html = TrelloToHTML.genCardHTML(d.cards[0]);
      var correct = "<div>\n<h1>Card1 To Do</h1>\n\ncomment2\ncomment1edited\n</div>\n";
      assert.equal(true, _.isString(html));
      assert.equal(correct, html);
    });
  });
});
