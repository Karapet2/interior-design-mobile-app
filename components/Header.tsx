import React from 'react';
import { View, StyleSheet } from 'react-native';
import MenuIcon from '../assets/svg/menu.svg';

export default function Header() {
  return (
    <View style={styles.header}>
      <MenuIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 8,
    paddingHorizontal: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
