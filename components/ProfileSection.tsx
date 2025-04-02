import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function ProfileSection() {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profilePictureContainer}>
        <Image style={styles.profilePicture} source={require('../assets/user.jpg')} />
      </View>
      <View>
        <Text style={styles.userName}>Georgia</Text>
        <Text style={styles.slogan}>Let’s start designing</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 36,
    paddingHorizontal: 24,
    gap: 18,
  },
  profilePictureContainer: {
    shadowColor: '#3D84AD',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 9,
    elevation: 5,
  },
  profilePicture: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  userName: {
    color: '#848280',
    fontSize: 24,
    fontWeight: '300',
  },
  slogan: {
    color: '#1D1C19',
    fontSize: 24,
    fontWeight: '300',
    lineHeight: 30,
  },
});
