function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
  }
function statusChangeCallback(response) {
    console.log('Facebook login status changed.');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
          console.log('Successfully logged in with Facebook');
           FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
    }
}
function changeUser(response) {
    //Add code to change name and image
    console.log("text");
   $("p.facebookLogin").hide();
   $("h1#name").text(response.name);
   $("img#photo").attr("src",response.picture.data.url);
}

function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }
