var debug = require('debug')('express:routes/routes');
var express = require('express');
var router = express.Router();


////////////////////
// Client routing //
////////////////////

// where we send our GET to localhost:port/client
router.get('/', function(req, res) {
  debug('GET');

  var payload = '<div><p>Your language is: ' + req.acceptsLanguages() + '</p><p>You sent a: ' + req.method + '</p></div>';

  res.format({
    'text/plain': function() {
      res.status(200).send(payload);
    },
    'application/json': function() {
      res.status(200).send(payload);
    },
    'text/html': function() {
      res.render('client');
    }
  });

});

// where we send our POST to localhost:port/
router.post('/', function(req, res) {
  debug('POST');

  var payload = '<div><p>Your language is: ' + req.acceptsLanguages() + '</p><p>You sent a: ' + req.method + '</p></div>';

  if (isEmptyObject(req.body)) {
    res.status(501).send('<div><p>No postVar passed!</p></div>');
  }
  payload += '<div><p>Your POST variable value: ' + req.body.postVar + '</p></div>';
  res.status(200).send(payload);
});

// any other unmatched verbs to localhost:port/
router.all('/', function(req, res) {
  debug('ALL');
  res.status(404).send('<div><p>Can\'t process request of type: ' + req.method + '</p></div>');
});

module.exports = router;


/////////////
// HELPERS //
/////////////

// return true if the object is not empty (spaces != null)
function isEmptyObject(obj) {
  return !Object.keys(obj).length;
}
