/* global $ */
$('.removeAll').click(function (e) {
  e.preventDefault()
  $.ajax({
    url: 'http://localhost:8080/webhook',
    type: 'DELETE'
  })
  setInterval(function () {
    window.location = '/'
  }, 10000)
})

$('.remove').click(function (e) {
  e.preventDefault()
  $.ajax({
    url: 'http://localhost:8080/webhook/' + $(this).data('name'),
    type: 'DELETE'
  })
  setInterval(function () {
    window.location = '/'
  }, 10000)
})

$('.create').click(function (e) {
  e.preventDefault($('.body').val())
  $.ajax({
    url: 'http://localhost:8080/webhook/',
    type: 'POST',
    data: {url: $('.url').val(), scheduling: $('.scheduling').val(), body: $('.body').val()}
  })
  setInterval(function () {
    window.location = '/'
  }, 10000)
})
