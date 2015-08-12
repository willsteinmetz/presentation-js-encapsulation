window.HelloWorld = function() {
  return {
    apiKey: '12345ABCDE',
    secret: 'No one should know this!',
    known: 'Anyone can know what this is',
    init: function() {
      return this.attachBehaviors();
    },
    attachBehaviors: function() {
      return console.log('attaching some behaviors to elements');
    },
    handleSendApiRequest: function() {
      return console.log('sent the API request');
    },
    handleFetchApiData: function(data) {
      return console.log('manipulate some code already on the page');
    }
  };
};

//# sourceMappingURL=encapsulation.js.map
