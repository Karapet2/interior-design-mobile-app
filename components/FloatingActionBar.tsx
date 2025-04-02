import React from 'react';
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { IconButton } from 'react-native-paper';
import HomeIcon from '../assets/svg/home.svg';
import StarIcon from '../assets/svg/star.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function FloatingActionBar() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.floatingBarContainer,
        { bottom: Platform.OS === 'ios' ? 20 + insets.bottom : 20 },
      ]}
      pointerEvents="box-none">
      <View style={styles.floatingBar}>
        <TouchableOpacity
          style={[styles.floatingBarButton, styles.floatingBarButtonActive]}
          onPress={() => console.log('Home pressed')}>
          <IconButton icon={HomeIcon} style={styles.floatingBarButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.floatingBarButton}
          onPress={() => console.log('Star pressed')}>
          <IconButton
            icon={StarIcon}
            style={[styles.floatingBarButtonIcon, { width: 28, height: 28 }]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingBarContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
    pointerEvents: 'box-none',
  },
  floatingBar: {
    flexDirection: 'row',
    backgroundColor: '#1D1C19',
    padding: 6,
    borderRadius: 60,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  floatingBarButton: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 38,
    paddingHorizontal: 14,
  },
  floatingBarButtonActive: {
    backgroundColor: '#31312B',
  },
  floatingBarButtonIcon: {
    borderRadius: 0,
    padding: 0,
    width: 18,
    height: 18,
  },
});
