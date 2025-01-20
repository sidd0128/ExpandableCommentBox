import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface Props {
  handleRemoveImagePress: (index: number) => void;
  imagesLength: number;
  imageIndex: number;
}

export const ImageContainer: FC<Props> = (props) => (
  <View style={styles.imageContainer}>
    <TouchableOpacity
      style={styles.removeImageWrapper}
      onPress={() => props.handleRemoveImagePress(props.imageIndex)}
    >
      <Text style={styles.removeButtonText}>X</Text>
    </TouchableOpacity>
    {props.children}
  </View>
);
