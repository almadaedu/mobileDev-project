import React, { Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { StatusBar } from 'react-native';
import { backgroundColors } from './src/assets/styles/colors';
const Content = () => {
  return (
    <Fragment>
      <StatusBar barStyle={'dark-content'} backgroundColor={backgroundColors.grey} />
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
