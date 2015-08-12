window.HelloWorld = (function() {
  var apiKey, attachBehaviors, handleFetchApiData, handleSendApiRequest, init, known, secret;
  apiKey = '12345ABCDE';
  secret = 'No one should know this!';
  known = 'Anyone can know what this is';
  init = function() {
    return attachBehaviors();
  };
  attachBehaviors = function() {
    return console.log('attaching some behaviors to elements');
  };
  handleSendApiRequest = function() {
    return console.log('sent the API request');
  };
  return handleFetchApiData = function(data) {
    return console.log('manipulate some code already on the page');
  };
})();

//# sourceMappingURL=encapsulation.js.map
