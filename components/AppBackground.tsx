import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Asset } from 'expo-asset';
import { SafeAreaView } from 'react-native-safe-area-context';

const backgroundImage = Asset.fromModule(require('../assets/bg.png')).uri;

export default function AppBackground({ children }: { children: React.ReactNode }) {
  return (
    <ImageBackground source={{ uri: backgroundImage }} resizeMode="cover" style={styles.background}>
      <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
});
