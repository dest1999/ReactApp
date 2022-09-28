import React from 'react';
import './App.css';
import {NavbarPanel} from './components/navbar';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from './context/theme-provider';
import { Box, CssBaseline } from '@mui/material';
import './components/style.css';

import { Homepage } from './pages/home-page';
import { Profile } from './pages/profile-page';
import { Chats } from './pages/chats-page';
import { Chat } from './components/chatContainer';
import { GistsList } from './pages/gists-page';
import { PageNotFound } from './pages/page-not-found';
import { getChatList } from './store/selectors/chats';
import { useSelector } from 'react-redux';
import { withAuth } from './hocs/withAuth';
import { CHATS_ROUTE, GISTS_ROUTE, HOME_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, SIGN_IN_ROUTE } from './constants/path';
import { SignIn } from './pages/sign-in';
import { Registration } from './pages/registration';

function App() {

  const chatList = useSelector(getChatList);

  return (
    
      <BrowserRouter>
        <CssBaseline />
          <ThemeProvider>
            <Box>
              <div className="App">
                <NavbarPanel />
                <Switch>

                <Route exact path={SIGN_IN_ROUTE} component={SignIn} />

                <Route exact path={REGISTRATION_ROUTE} component={Registration} />

                <Route exact path={PROFILE_ROUTE} component={withAuth(Profile)} />

                <Route exact path={CHATS_ROUTE} component={withAuth(Chats)} />

                <Route exact path={HOME_ROUTE} component={withAuth(Homepage)} />
                
                <Route exact path={GISTS_ROUTE} component={GistsList} />

                <Route
                  path="/:name?"
                  render = {({ match }) => {

                    const { name } = match.params;
                    const chat = chatList.find((el) => el.name === name);
                    if (!chat) {return <PageNotFound />}

                    return <Chat {...chat} />
                  }}
                />

                <Redirect to={SIGN_IN_ROUTE} />

              </Switch>
              </div>
            </Box>
          
            
            </ThemeProvider>
      </BrowserRouter>
    
    
      
  );
}

export default App;
