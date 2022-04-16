import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authToken } from "../../redux/actions";
import { requestAuth } from "../../libs/auth";

const LandingPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.accessToken);

  useEffect(() => {
    if (!isLoggedIn && window.location.hash) {
      const hash = window.location.hash.split("#")[1];
      const params = new URLSearchParams(hash);

      const state = params.get("state");
      const storedState = localStorage.getItem("spotify_auth_state");

      const accessToken = params.get("access_token");
      dispatch(authToken(accessToken));

      const expiresInMilisecond = params.get("expires_in") * 1000;
      setTimeout(() => {
        dispatch(authToken(""));
        alert("Your access token is expired. Please log in again.");
      }, expiresInMilisecond);

      if (accessToken && (state === null || state !== storedState)) {
        alert("There was an error during the authentication");
      } else {
        localStorage.removeItem("spotify_auth_state");
      }
    }
  }, []);

  return (
    <main className="main">
      <button className="btn btn--access-token" onClick={requestAuth}>
        Login with Spotify
      </button>
    </main>
  );
};

export default LandingPage;
