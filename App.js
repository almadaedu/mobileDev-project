import React, { Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { ScrollView, StatusBar } from 'react-native';
import { backgroundColors } from './src/assets/styles/colors';
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
