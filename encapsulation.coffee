window.HelloWorld =
  apiKey: '12345ABCDE',
  secret: 'No one should know this!',
  known: 'Anyone can know what this is',

  init: ->
    @attachBehaviors()

  attachBehaviors: ->
    $('#click-me').on 'click', @handleSendApiRequest
    return

  handleSendApiRequest: (e) ->
    button = @
    setTimeout(->
      HelloWorld.handleFetchApiData(
        message: "Got the API data"
        button
      )
    500)
    return

  handleFetchApiData: (data, button) ->
    alert data.message
    $(button).text 'Click me again!'
    return

$ ->
  HelloWorld.init()
  alert HelloWorld.known
