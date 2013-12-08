var authorize = require('../../../helpers/authenticate');
module.exports = function(req, res) {
  authorize.login(req, function(err, response) {
    response.instructions = "base64 encode the username:token and send it in the Token: header with all requests for authentication.";
    res.json(response);
  });
}