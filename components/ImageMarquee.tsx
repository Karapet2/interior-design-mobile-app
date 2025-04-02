import React, { useEffect, useState } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  View,
  LayoutChangeEvent,
  Image,
  ImageStyle,
} from 'react-native';

interface ImageMarqueeItem {
  image: any;
}

interface ImageMarqueeProps {
  data: ImageMarqueeItem[];
  speed?: number;
  spacing?: number;
  imageStyle?: ImageStyle;
  imageWidth?: number;
  imageHeight?: number;
}

const ImageMarquee = ({
  data,
  speed = 100,
  spacing = 20,
  imageStyle,
  imageWidth = 100,
  imageHeight = 60,
}: ImageMarqueeProps) => {
  const [contentWidth, setContentWidth] = useState(0);
  const scrollAnim = React.useRef(new Animated.Value(0)).current;
  const doubledData = [...data, ...data];

  useEffect(() => {
    if (contentWidth === 0) return;

    const itemTotalWidth = imageWidth + spacing;
    const totalContentWidth = data.length * itemTotalWidth;
    const duration = (totalContentWidth * 2) / speed;

    const animation = Animated.loop(
      Animated.timing(scrollAnim, {
        toValue: -totalContentWidth,
        duration: duration * 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );

    animation.start();
    return () => animation.stop();
  }, [contentWidth, speed, data.length]);

  const handleLayout = (event: LayoutChangeEvent) => {
    const width = event.nativeEvent.layout.width;
    setContentWidth(width);
  };

  return (
    <View style={[styles.container, { height: imageHeight + 10 }]}>
      <Animated.View
        style={[styles.content, { transform: [{ translateX: scrollAnim }] }]}
        onLayout={handleLayout}>
        {doubledData.map((item, index) => (
          <View
            key={`marquee-img-${index}`}
            style={[styles.imageContainer, { marginRight: spacing }]}>
            <Image
              source={item.image}
              style={[styles.image, { width: imageWidth, height: imageHeight }, imageStyle]}
              resizeMode="contain"
            />
          </View>
        ))}
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    flexDirection: 'row',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 4,
  },
});

export default ImageMarquee;
