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
    $target = $(e.currentTarget)
    $target.prop 'disabled', true
    console.log 'sent the API request'
    setTimeout(->
      handleFetchApiData(
        message: "Got the data!"
        $target
      )
    , 500)

  handleFetchApiData = (data, $target) ->
    console.log 'manipulate some code already on the page'
    alert data.message
    $target.text 'API request successful'

  init: init
  known: ->
    known

$ ->
  HelloWorld.init()
