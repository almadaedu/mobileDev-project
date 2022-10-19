import React, { Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { StatusBar } from 'react-native';
const Content = () => {
  return (
    <Fragment>
      <StatusBar  />
      <Routes />
    </Fragment>
  );
}

 const App = () => {
  return(
    <NavigationContainer>
      <Content />
    </NavigationContainer>
  )
 }


 export default App
