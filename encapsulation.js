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
    var $target;
    $target = $(e.currentTarget);
    $target.prop('disabled', true);
    console.log('sent the API request');
    return setTimeout(function() {
      return handleFetchApiData({
        message: "Got the data!"
      }, $target);
    }, 500);
  };
  handleFetchApiData = function(data, $target) {
    console.log('manipulate some code already on the page');
    alert(data.message);
    return $target.text('API request successful');
  };
  return {
    init: init
  };
})();

$(function() {
  return HelloWorld.init();
});

//# sourceMappingURL=encapsulation.js.map
