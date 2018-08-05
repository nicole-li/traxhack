import React, { Component } from 'react';
import { Text, View, Animated, Easing, StyleSheet, Dimensions, WebView } from 'react-native';
import { Video } from 'expo';
import { StackNavigator } from 'react-navigation';
//Components
//import MapHome from "./components/MapHome.js";
import LiveVideo from "./components/LiveVideo.js";

export default StackNavigator ({
  // MapHome:{
  //   screen:MapHome
  // },
  LiveVideo:{
    screen:LiveVideo
  }
},{initialRouteName: 'LiveVideo'});
