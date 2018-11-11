import Router from 'next/router';
import * as action from '../redux/actionIndex';
import { getCookie } from './cookie';

// // checks if the page is being loaded on the server, and if so, get auth token from the cookie:
export default function({ctx}) {
  const isServer = !!ctx;

  if(isServer) {
    if(ctx.req.headers.cookie) {
      ctx.reduxStore.dispatch(action.reauthenticate(getCookie('token', ctx.req)));
    }
  }else{
    console.log(ctx);
    
  }
  // } else {
  //   const token = ctx.reduxStore.getState().color.token;

  //   if(token && (ctx.pathname === '/signin' || ctx.pathname === '/signup')) {
  //     setTimeout(function() {
  //       Router.push('/');
  //     }, 0);
  //   }
  // }

  

}

