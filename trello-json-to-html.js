// vim:sw=2:ts=2:et:
/*
 * (c) 2013 Yasuki Ikeuchi, http://github.com/ikeyasu/trello-json-reader
 */
// Note: YUIDoc syntax: http://yui.github.com/yuidoc/syntax/index.html
// Note: Evernote Markup langulage(ENML): http://dev.evernote.com/start/core/enml.php

(function(){
  // Save a reference to the global object.
  var root = this;

  // Require Underscore, if we're on the server, and it's not already present.
  var _ = root._;
  if (!_ && (typeof require !== 'undefined')) _ = require('underscore');

  // Require Mustache , if we're on the server, and it's not already present.
  var Mustache = root.Mustache;
  if (!Mustache && (typeof require !== 'undefined')) Mustache = require('mustache');

  // Require TrelloReader, if we're on the server, and it's not already present.
  var TrelloReader = root.TrelloReader;
  if (!TrelloReader && (typeof require !== 'undefined')) TrelloReader = require('trello-json-reader');

  // Require fs, if we're on the server, and it's not already present.
  var fs = root.fs;
  if (!fs && (typeof require !== 'undefined')) fs = require('fs');

  /**
   * The top-level namespace.
   * @class TrelloToHTML
   */
  var TrelloToHTML;
  if (typeof exports !== 'undefined') {
    // 'exports' is a global object for server-side js
    TrelloToHTML = exports;
  } else {
    TrelloToHTML = root.TrelloToHTML = {};
  }
  TrelloToHTML.VERSION = "0.0.1";

  /**
   * Convert TrelloToHTML.Data object to HTML string.
   * @method toHTML
   * @return String html
   */
  var toHTML = TrelloToHTML.toHTML = function(data) {
    if (!(data instanceof TrelloReader.Data))
      throw new Error(data.toString() + " is not instance of TrelloReader.Data.");
    return "";
  };

  var genCardHTML = TrelloToHTML.genCardHTML = function(card, template) {
    if (template == undefined)
      template = fs.readFileSync('./template/card.html');
    var html = Mustache.to_html(template.toString(), card);
    return html;
  };

}).call(this);
