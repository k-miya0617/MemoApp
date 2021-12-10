import React from 'react';
import {
  View, Text, TextInput, StyleSheet, Alert, TouchableOpacity,
} from 'react-native';

import AppBar from '../components/AppBar';
import Button from '../components/Button';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input} value="Email Address" />
        <TextInput style={styles.input} value="Password" />
        <Button label="submit" onPress={() => { Alert.alert('Hello'); }} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registerd?</Text>
          <TouchableOpacity>
            <Text style={styles.fotterLink}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    fontWeight: 'bold',
    borderColor: '#dddddd',
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
  },
  footerText: {
    marginRight: 8,
    fontSize: 14,
    lineHeight: 24,
  },
  fotterLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },
});
