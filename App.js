import React, { useState } from 'react';
import { TouchableHighlight, StyleSheet, Text, TextInput, View } from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogined, setIsLogined] = useState(false);

  const inputChangeHandler = (value, name) => {
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }

  const login = () => {
    if ((username === 'codemagic') && (password === 'nevercode')) {
      setIsLogined(true);
    } else {
      setIsLogined(false);
    }
  }

  return (
    <View style={LOCAL_STYLES.wrapper} testID="app-root" accessibilityLabel="app-root">
      <View style={LOCAL_STYLES.inputContainer}>
        <TextInput name="username" accessibilityLabel="username" style={LOCAL_STYLES.input} onChangeText={(text) => inputChangeHandler(text, "username")} />
      </View>

      <View style={LOCAL_STYLES.inputContainer}>
        <TextInput name="password" accessibilityLabel="password" secureTextEntry={true} style={LOCAL_STYLES.input} onChangeText={(text) => inputChangeHandler(text, "password")} />
      </View>

      <Text accessibilityLabel="loginstatus">{isLogined ? "success" : "fail"}</Text>

      <TouchableHighlight style={LOCAL_STYLES.buttonContainer} accessibilityLabel="login" onPress={login}>
        <Text style={{ color: 'white' }}>Login</Text>
      </TouchableHighlight>
    </View>
  );
}

const LOCAL_STYLES = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  inputContainer: {
    borderBottomColor: '#AFAFAF',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderBottomWidth: 1,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    borderColor: 'blue',
    borderWidth: 1
  },
  buttonContainer: {
    height: 45,
    width: 250,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: "#00b5ec"
  }
});

export default App;