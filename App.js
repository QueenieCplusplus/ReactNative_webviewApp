// 2020, 7/20, pm 4:30-5:00
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// call function without {}
// call class with {}
import KWebView from './webview';
//react-native-webview provides a WebView component that renders web content in a native view.

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
          show a Web View
      </Text>

        <KWebView/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});