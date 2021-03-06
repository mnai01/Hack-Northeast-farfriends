import { act } from 'react-dom/test-utils';

export default (state, action) => {
  switch (action.type) {
    case `POST-AUTHENTICATE`:
      return {
        ...state,
        auth: action.auth,
        loginError: action.loginError,
        currentUser: action.payload,
      };
    case `POST-REGISTER`:
      return {
        ...state,
        RegisterError: action.RegisterError,
        loginError: action.loginError,
        auth: action.auth,
        token: action.payload,
      };
    // case `POST-LOGIN-ERROR`:
    //   return { ...state, loginError: action.loginError, auth: action.auth };
    case `GET-RECENTLY-LOGGED-ON`:
      return { ...state, loginError: action.loginError, auth: action.auth };
    case 'GET-LANDING-INFO':
      return {
        ...state,
        RecentlyOnline: action.payload.mostRecent,
        RecentlyJoined: action.payload.newMemebers,
        TotalOnline: action.payload.noOnline,
        LandingPageLoaded: action.loaded,
      };
  }
};
