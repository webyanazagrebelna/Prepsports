import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import NotFound from './components/NotFound/NotFound';
import AboutSport from './pages/AboutSport/AboutSport';
import { CurrentSportContextProvider } from './state/CurrentSportContext';
import { IsLoggedContextProvider } from './state/IsLogged';
import { IsBlogPageContextProvider } from './state/isBlogPageContext';
import Blog from './pages/Blog/Blog';
import Layout from './components/Layout/Layout';
import { IsAllowedNotificationsContextProvider } from './state/isAllowedNotifications';
import Terms from './pages/Terms/Terms';
import Privacy from './pages/Privacy/Privacy';
import Contact from './pages/Contact/Contact';
import AboutUs from './pages/AboutUs/AboutUs';
import Faq from './pages/Faq/Faq';
import { UserInfoContextProvider } from './state/userInfo';
import Profile from './pages/Profile/Profile';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Plans from './pages/Plans/Plans';
import Payment from './pages/Payment/Payment';
import ColleagueSearch from './pages/ColleagueSearch/ColleagueSearch';

const App = () => {
  return (
    <IsLoggedContextProvider>
      <IsBlogPageContextProvider>
        <UserInfoContextProvider>
          <IsAllowedNotificationsContextProvider>
            <CurrentSportContextProvider>
              <Router>
                <Layout>
                  <Switch>
                    <Route exact={true} path="/" component={Homepage} />
                    <Route path="/sport/:abbr" component={AboutSport} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/about" component={AboutUs} />
                    <Route path="/terms-of-service" component={Terms} />
                    <Route path="/privacy-policy" component={Privacy} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/faq" component={Faq} />
                    {/* <Route path="/login" component={Login} /> */}
                    <Route path="/register" component={SignUp} />
                    <Route path="/plans" component={Plans} />
                    <Route
                      path="/colleague-search"
                      component={ColleagueSearch}
                    />
                    <PrivateRoute path="/profile" component={Profile} />
                    <PrivateRoute path="/payment" component={Payment} />
                    <Route component={NotFound} />
                  </Switch>
                </Layout>
              </Router>
            </CurrentSportContextProvider>
          </IsAllowedNotificationsContextProvider>
        </UserInfoContextProvider>
      </IsBlogPageContextProvider>
    </IsLoggedContextProvider>
  );
};

export default App;
