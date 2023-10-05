import { Alert, Platform } from 'react-native';

export const useAlert = () => {
  const showAlert = (title: string, message: string) => {
    if (Platform.OS === 'web') {
      window.alert(`${title}\n${message}`);
      return;
    }

    Alert.alert(title, message);
  };

  return {
    showAlert,
  };
};
