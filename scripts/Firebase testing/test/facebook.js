window.fbAsyncInit = function() {
    window.FB.init({
      appId            : '271440897632520',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v7.0'
    });

    window.FB.login(function(response) {
      if (response.authResponse) {
      console.log('Welcome!  Fetching your information.... ');
      FB.api('/me', function(response) {
        console.log('Good to see you, ' + response.name + '.');
      });
      } else {
      console.log('User cancelled login or did not fully authorize.');
      }

      window.FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        // The user is logged in and has authenticated your
        // app, and response.authResponse supplies
        // the user's ID, a valid access token, a signed
        // request, and the time the access token 
        // and signed request each expire.
        var uid = response.authResponse.userID;
        var accessToken = response.authResponse.accessToken;
        console.log("AccessToken ", accessToken)
      } else if (response.status === 'not_authorized') {
        // The user hasn't authorized your application.  They
        // must click the Login button, or you must call FB.login
        // in response to a user gesture, to launch a login dialog.
        console.log("not authorized")
      } else {
        // The user isn't logged in to Facebook. You can launch a
        // login dialog with a user gesture, but the user may have
        // to log in to Facebook before authorizing your application.
        console.log("else")
      }
    });
    });
};