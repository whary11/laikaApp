/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  ImageBackground,
  Text,
  StatusBar,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import { Header } from 'react-native-elements'
// import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.topBox}>
          <Text style={styles.title} >
            Laika App
          </Text>
        </View>
      </View>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row-reverse',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    alignItems: 'stretch',
    color: '#6951ae',
    fontSize: 30

  },
  topBox: {
    flex: 4,
    flexDirection: 'row',
    // backgroundColor: 'lightgray',
    justifyContent: 'center',
    marginTop: -680,
    alignItems: 'center',
  },
});

export default App;
