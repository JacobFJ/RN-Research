/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * Install - ext install EditorConfig
 * @format
 * @flow strict-local
 */
import React from "react";
import { Button } from "react-native";

const App = () => {
  function insecurePasswordGenerator() {
    var suffix = Math.random();
    var password = "myPassword" + suffix;
    return password;
  }
  return <Button title="test" onPress={insecurePasswordGenerator} />;
};

export default App;
