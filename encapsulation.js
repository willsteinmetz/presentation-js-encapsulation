window.HelloWorld = (function() {
  var apiKey, attachBehaviors, handleFetchApiData, handleSendApiRequest, init, known, secret;
  apiKey = '12345ABCDE';
  secret = 'No one should know this!';
  known = 'Anyone can know what this is';
  init = function() {
    return attachBehaviors();
  };
  attachBehaviors = function() {
    $('#click-me').on('click', handleSendApiRequest);
  };
  handleSendApiRequest = function(e) {
    return console.log('sent the API request');
  };
  handleFetchApiData = function(data) {
    return console.log('manipulate some code already on the page');
  };
  return {
    init: init
  };
})();

$(function() {
  return HelloWorld.init();
});

//# sourceMappingURL=encapsulation.js.map
