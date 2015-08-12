window.HelloWorld = do ->
  apiKey = '12345ABCDE'
  secret = 'No one should know this!'
  known = 'Anyone can know what this is'

  init = ->
    attachBehaviors()

  attachBehaviors = ->
    $('#click-me').on 'click', handleSendApiRequest
    return

  handleSendApiRequest = (e) ->
    console.log 'sent the API request'

  handleFetchApiData = (data) ->
    console.log 'manipulate some code already on the page'

  init: init

$ ->
  HelloWorld.init()
