import { Text } from 'react-native-paper';
import React from 'react';
import ImageMarquee from './ImageMarquee';
import { brandsData } from '../data';
import { StyleSheet, View } from 'react-native';

const BrandsCarousel = () => {
  return (
    <View>
      <Text style={styles.brandHeading}>Featuring Top Industry Brands</Text>

      <ImageMarquee data={brandsData} />
    </View>
  );
};

const styles = StyleSheet.create({
  brandHeading: {
    textAlign: 'center',
  },
});

export default BrandsCarousel;
