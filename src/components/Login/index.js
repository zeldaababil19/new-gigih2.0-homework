import React from 'react';

const Login = (props) => {
  return (
    <button className="btn btn--access-token" onClick={props.handleLogIn} disabled={props.accessToken}>
      {!props.accessToken ? 'Login with Spotify' : !props.userProfile ? '' : `Logged In as ${props.userProfile.display_name}`}
    </button>
  );
};
export default Login;
