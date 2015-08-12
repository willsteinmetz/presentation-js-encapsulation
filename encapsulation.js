window.HelloWorld = {
  apiKey: '12345ABCDE',
  secret: 'No one should know this!',
  known: 'Anyone can know what this is',
  init: function() {
    return this.attachBehaviors();
  },
  attachBehaviors: function() {
    $('#click-me').on('click', this.handleSendApiRequest);
  },
  handleSendApiRequest: function(e) {
    var button;
    button = this;
    setTimeout(function() {
      return HelloWorld.handleFetchApiData({
        message: "Got the API data"
      }, button);
    }, 500);
  },
  handleFetchApiData: function(data, button) {
    alert(data.message);
    $(button).text('Click me again!');
  }
};

$(function() {
  HelloWorld.init();
  return alert(HelloWorld.known);
});

//# sourceMappingURL=encapsulation.js.map
