import "../src/styles/main.scss";
import { ApolloProvider } from "@apollo/client";
import Router from 'next/router';
import NProgress from 'nprogress';
import { SearchProvider } from '../src/components/use-search';
import { SearchProvider2 } from '../src/components/use-search2';
import client from "../src/components/ApolloClient";
import { AppProvider } from "../src/components/context/AppContext";
import { AuthContextProvider } from '../src/components/login-function/auth-context';
NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  
  return <AuthContextProvider><AppProvider><SearchProvider2 client={client}><SearchProvider client={client}><ApolloProvider client={client}><Component {...pageProps}  /></ApolloProvider></SearchProvider></SearchProvider2></AppProvider></AuthContextProvider>



}

export default MyApp