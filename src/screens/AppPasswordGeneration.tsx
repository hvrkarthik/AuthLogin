import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';

const AppPasswordGeneration = () => {
  const webViewRef = useRef<any>();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const injectJavaScript = `
    // Your JavaScript code to automatically fill in information
    // For example, you can identify elements by their IDs and set values
    document.getElementById('username').value = 'your_username';
    document.getElementById('appPasswordName').value = 'your_app_password_name';
    document.getElementById('generateButton').click();
  `;

  const onGenerateAppPassword = () => {
    setLoading(true);

    webViewRef.current.injectJavaScript(injectJavaScript);
  };

  const onLoadEnd = () => {
    setLoading(false);
  };

  const navigateToDashboard = () => {
    navigation.navigate('DashboardScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Password Generation</Text>
      <Text style={styles.instructions}>Follow the steps below to generate your App Password:</Text>
      <View style={styles.webviewContainer}>
        {loading && <ActivityIndicator style={styles.loader} size="large" color="#3498db" />}
        <WebView
          ref={webViewRef}
          source={{ uri: 'https://example.com/app-password-generation' }}
          onLoadEnd={onLoadEnd}
        />
      </View>
      <TouchableOpacity
        style={[styles.generateButton, loading && styles.generateButtonDisabled]}
        onPress={onGenerateAppPassword}
        disabled={loading}
      >
        <Text style={styles.generateButtonText}>
          {loading ? 'Generating App Password...' : 'Generate App Password'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navigateToDashboardButton}
        onPress={navigateToDashboard}
      >
        <Text style={styles.navigateToDashboardButtonText}>Go to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#3498db',
  },
  instructions: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  webviewContainer: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 10,
    borderColor: '#3498db',
    borderWidth: 2,
  },
  loader: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  generateButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    marginVertical: 20,
  },
  generateButtonDisabled: {
    backgroundColor: '#bdc3c7',
  },
  generateButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  navigateToDashboardButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 5,
    marginVertical: 20,
  },
  navigateToDashboardButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default AppPasswordGeneration;
