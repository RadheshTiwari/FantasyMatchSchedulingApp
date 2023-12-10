import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';


import {connect, useDispatch} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import PreloginNavigator from './preLoginNavigator';
import { navigationRef } from './navigation-utilities';
const AppNavigator = props => {

  const [loading, setLoading] = useState(false);


  return (
    <NavigationContainer ref={navigationRef} >
        <PreloginNavigator />
        </NavigationContainer>
  );
};



export default AppNavigator;

const styles = StyleSheet.create({});

