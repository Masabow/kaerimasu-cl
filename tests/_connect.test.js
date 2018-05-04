cordova.plugin.http.post('https://google.com/', {
  id: 12,
  message: 'test'
}, { Authorization: 'OAuth2: token' }, function(response) {
  // prints 200
  console.log(response.status);
  try {
    response.data = JSON.parse(response.data);
    // prints test
    console.log(response.data.message);
  } catch(e) {
    console.error('JSON parsing error');
  }
}, function(response) {
  // prints 403
  console.log(response.status);

  //prints Permission denied
  console.log(response.error);
});