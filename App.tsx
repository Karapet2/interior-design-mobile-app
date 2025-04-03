import 'react-native-gesture-handler';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import AppBackground from './components/AppBackground';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import MainCarousel from './components/MainCarousel';
import FloatingActionBar from './components/FloatingActionBar';
import { ScrollView, StyleSheet } from 'react-native';
import BrandsCarousel from './components/BrandsCarousel';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <AppBackground>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <Header />
            <ProfileSection />
            <MainCarousel />
            <BrandsCarousel />
          </ScrollView>
          <FloatingActionBar />
        </AppBackground>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 80,
  },
});
