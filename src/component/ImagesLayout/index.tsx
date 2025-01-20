import React, { FC, useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { ImageContainer } from '../ImageContainer';
import { styles } from './styles';
import ImageLayoutProps from '../../types/ImageLayout';
import Spacing from '../../resources/Spacing';


export const ImagesLayout: FC<ImageLayoutProps> = ({
  images,
  onRemoveImagePress,
  containerWidth,
  containerHeight,
  buttonContainerHeight,
}) => {
  const [singleImageSize, setSingleImageSize] = useState(0);

  useEffect(() => {
    if (images.length === 1 && containerWidth && containerHeight) {
      // Calculate available space after considering buttonContainerHeight
      const availableHeight = containerHeight - buttonContainerHeight;

      // Calculate image size as the smaller dimension (width or adjusted height) of the container
      const minDimension = Math.min(containerWidth - Spacing.xl, availableHeight);
      setSingleImageSize(minDimension);
    }
  }, [images, containerWidth, containerHeight, buttonContainerHeight]);

  const getDynamicImageStyle = () => {
    const MAX_IMAGE_WIDTH = images.length > 2 ? 80 : 100;
    const MAX_IMAGE_HEIGHT = images.length > 2 ? 80 : 100;

    if (images.length === 1 && singleImageSize) {
      const dynamicWidth = singleImageSize * 0.5; // 50% of screen width
      const dynamicHeight = dynamicWidth * 0.8; // Adjusting height based on width ratio

      return {
        width: Math.min(dynamicWidth, MAX_IMAGE_WIDTH),
        height: Math.min(dynamicHeight, MAX_IMAGE_HEIGHT),
      };
    }

    // For multiple images, create a square layout where each image fits within the available width and height
    const availableHeight = containerHeight - buttonContainerHeight; // Adjust for spacing
    const imageSize = (containerWidth - Spacing.xl) / images.length;
    const maxSize = Math.min(imageSize, availableHeight * 0.3);

    return {
      width: Math.min(maxSize, MAX_IMAGE_WIDTH),
      height: Math.min(maxSize, MAX_IMAGE_HEIGHT),
    };
  };


  return (
    <View style={[styles.imageLayoutWrapper, { width: containerWidth }]}>
      {images.map((imageUrl, index) => (
        <ImageContainer
          key={index}
          handleRemoveImagePress={onRemoveImagePress}
          imagesLength={images.length}
          imageIndex={index}
        >
          {imageUrl ? (
            <Image
              source={typeof imageUrl !== 'string' ? imageUrl : { uri: imageUrl }}
              style={[styles.image, getDynamicImageStyle()]}
            />
          ) : null}
        </ImageContainer>
      ))}
    </View>
  );
};
