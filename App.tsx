import React from 'react';
import {WebView} from 'react-native-webview';
import {SafeAreaView} from 'react-native';
function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        style={{flex: 1}}
        // source={{uri: 'http://tech.bizofficer.com/'}}
        source={{uri: 'http://customer.bizofficer.com/'}}
      />
    </SafeAreaView>
  );
}

export default App;
