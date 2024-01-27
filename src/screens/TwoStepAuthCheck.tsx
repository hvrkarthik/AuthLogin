import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TwoStepAuthCheck = () => {
  const navigation = useNavigation();

  const handleEnableTwoStep = () => {
    const enableTwoStepLink = 'https://example.com/enable-two-step-auth';

    Linking.openURL(enableTwoStepLink).then(() => {
      navigation.navigate('AppPasswordGeneration');
    }).catch((error) => {
      console.error('Error opening URL:', error);
    });
  };

  const isTwoStepEnabled = false;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {isTwoStepEnabled
          ? 'Two-Step Authentication is enabled.'
          : 'Two-Step Authentication is not enabled. Please enable it for added security.'}
      </Text>

      {!isTwoStepEnabled && (
        <TouchableOpacity style={styles.button} onPress={handleEnableTwoStep}>
          <Text style={styles.buttonText}>Enable Two-Step Authentication</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default TwoStepAuthCheck;
