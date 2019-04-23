import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './Components/screen/LoginScreen';


const Routes = createStackNavigator({
      LoginScreen:{screen:LoginScreen}
    })



    export default  createAppContainer(Routes) ;