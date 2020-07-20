// 2020, 7/20, pm 4- 4:30
import React from 'react';
// expo install react-native-webview
import { WebView } from 'react-native-webview';
export default function KWebView() {
  return (
       <WebView
        source={{
          uri: 'https://www.google.com/'
        }}
        style={{ marginTop: 0 }}
      />);
}

//react-native-webview provides a WebView component that renders web content in a native view.



