import React from 'react';
import { Dimensions, StyleSheet, View, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Button, Text } from 'react-native-paper';
import { carouselData } from '../data';

const CAROUSEL_HEIGHT = 494;
const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function MainCarousel() {
  return (
    <View style={styles.carouselWrapper}>
      <Carousel
        loop
        width={SCREEN_WIDTH}
        height={CAROUSEL_HEIGHT}
        snapEnabled
        pagingEnabled
        autoPlayInterval={2000}
        data={carouselData}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.slideImage} resizeMode="cover" />
            <View style={styles.overlay}>
              <View style={styles.overlayContent}>
                <Text style={styles.overlayTitle}>{item.title}</Text>
                <Text style={styles.overlaySubtitle}>{item.subtitle}</Text>
                <View style={styles.overlayButtons}>
                  <Button
                    mode="contained"
                    onPress={() => {}}
                    style={styles.applyButton}
                    labelStyle={[styles.buttonLabel, styles.applyButtonLabel]}>
                    Apply to my room
                  </Button>
                  <Button
                    mode="outlined"
                    onPress={() => {}}
                    style={styles.detailsButton}
                    labelStyle={[styles.buttonLabel, styles.detailsButtonLabel]}>
                    Details
                  </Button>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  carouselWrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 60,
  },
  slide: {
    position: 'relative',
    justifyContent: 'center',
    width: SCREEN_WIDTH - 21,
  },
  slideImage: {
    height: '100%',
    width: 'auto',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: '100%',
    height: '100%',
  },
  overlayContent: {
    marginTop: 'auto',
  },
  overlayTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 300,
    marginBottom: 2,
  },
  overlaySubtitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 300,
    marginBottom: 22,
  },
  overlayButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
  },
  applyButton: {
    backgroundColor: '#F1F0ED',
    borderRadius: 40,
    padding: 0,
  },
  applyButtonLabel: {
    color: '#31312B',
  },
  detailsButton: {
    borderColor: 'rgba(255, 255, 255, 0.32)',
    borderRadius: 40,
  },
  detailsButtonLabel: {
    color: '#fff',
  },
  buttonLabel: {
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 26,
  },
});
