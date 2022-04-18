import CreatePlaylist from '../../pages/createPlaylist';
import LandingPage from '../../pages/landingPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Main = () => {
  const currentAccessToken = useSelector((state) => state.accessToken);

  return (
    <div className="main">
      <Switch>
        <Route exact path="/createplaylist">
          {currentAccessToken ? <CreatePlaylist /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/">
          {currentAccessToken ? <Redirect to="/createplaylist" /> : <LandingPage />}
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Main;
