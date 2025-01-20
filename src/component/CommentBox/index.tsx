import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
  Keyboard,
  ScrollView,
  TextInput,
  View,
  Animated,
  Platform,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'react-native';
import styles from './styles';
import CommentBoxProps from './types/CommentBox';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useImagePicker } from '../../hook/imagePicker';
import useGetKeyboardHeight from '../../hook/useGetKeyboardHeight';
import { ImagesLayout } from '../ImagesLayout';
import Button from '../Button';
import Icon from 'react-native-vector-icons/FontAwesome';

const CommentBox = ({
  maxLength,
  value,
  onInputChange,
  containerHeight = 100,
  containerWidth,
  onSubmit,
}: CommentBoxProps) => {
  const [inputValue, setInputValue] = useState(value || '');
  const { isKeyboardVisible } = useGetKeyboardHeight();
  const { selectedImageFile, showPhotoGalleryPicker, setSelectedImageFile } = useImagePicker();
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [textInputHeight, setTextInputHeight] = useState(36);
  const [imagesLayoutHeight, setImagesLayoutHeight] = useState(50);
  const height = useRef(new Animated.Value(1)).current;
  const [isExpanded, setIsExpanded] = useState(false);
  const [buttonContainerHeight, setButtonContainerHeight] = useState(0);

  const deviceHeight = Dimensions.get('window').height;

  const imageLayoutHeightValue = selectedImages.length > 0 ? imagesLayoutHeight : 0;
  const maxTextInputHeight = isExpanded
  ? deviceHeight - (imageLayoutHeightValue + buttonContainerHeight + 100) // Account for padding/margins
  : deviceHeight * (Platform.OS === 'ios' ? 0.11 : 0.14);

  const parentContainerExpandedHeight = containerHeight + textInputHeight + imageLayoutHeightValue + buttonContainerHeight;

  const maxTextLength = isExpanded ? 1000 : 250;
  const animationDuration = 400;

  useEffect(() => {
    setInputValue(value || '');
  }, [value]);

  useEffect(() => {
    if (selectedImageFile && selectedImageFile.uri) {
      setSelectedImages((prevImages) => {
        if (prevImages.length < 3) {
          return [...prevImages, selectedImageFile.uri];
        } else {
          const updatedImages = [...prevImages];
          updatedImages[2] = selectedImageFile.uri;
          return updatedImages;
        }
      });
    }
  }, [selectedImageFile]);

  const handleKeyboardVisibility = useCallback(() => {
    if (isKeyboardVisible && isExpanded) {
      setIsExpanded(false);
      Animated.timing(height, {
        toValue: 1,
        duration: animationDuration / 2,
        useNativeDriver: false,
      }).start();
    }
  }, [isKeyboardVisible, isExpanded, height]);

  useEffect(() => {
    handleKeyboardVisibility();
  }, [isKeyboardVisible, handleKeyboardVisibility]);

  const handleChangeText = (text: string) => {
    setInputValue(text);
    onInputChange?.(text);
  };

  const onPressSubmit = () => {
    const commentObj = { text: inputValue, images: selectedImages };
    handleSwipeDown();
    setInputValue('');
    setSelectedImages([]);
    setSelectedImageFile({});
    onSubmit(commentObj);
  };


  const handleImageRemove = (index: number) => {
    Keyboard.dismiss();
    setSelectedImages((prevImages) => prevImages.filter((_, idx) => idx !== index));
  };

  const handleSwipeUp = () => {
    setIsExpanded(true);
    Animated.timing(height, {
      toValue: parentContainerExpandedHeight,
      duration: animationDuration,
      useNativeDriver: false,
    }).start();
  };

  const handleSwipeDown = () => {
    setIsExpanded(false);
    Animated.timing(height, {
      toValue: 1,
      duration: animationDuration,
      useNativeDriver: false,
    }).start();
  };

  return (
    <GestureRecognizer onSwipeUp={handleSwipeUp} onSwipeDown={handleSwipeDown}>
      <KeyboardAvoidingView
        style={styles.parentContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.handlebar} />
        <Animated.View style={[styles.childContainer, { minHeight: height }]}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.textInputContainer}>
              <View
                style={[styles.textImageWrapper, { maxHeight: maxTextInputHeight }]}
              >
                <ScrollView bounces={false}>
                  <TextInput
                    value={inputValue}
                    style={styles.input}
                    placeholder="Please enter your message here"
                    placeholderTextColor="gray"
                    multiline
                    textAlignVertical="top"
                    onChangeText={handleChangeText}
                    onContentSizeChange={(e) =>
                      setTextInputHeight(e.nativeEvent.contentSize.height)
                    }
                    maxLength={maxLength || maxTextLength}
                  />
                </ScrollView>
              </View>
              {selectedImages.length > 0 ? (
                <View
                  style={styles.imagePlaceholder}
                  onLayout={(e) => setImagesLayoutHeight(e.nativeEvent.layout.height)}
                >
                  <ImagesLayout
                    images={selectedImages}
                    onRemoveImagePress={handleImageRemove}
                    containerWidth={containerWidth}
                    containerHeight={containerHeight}
                    buttonContainerHeight={buttonContainerHeight}
                  />
                </View>
              ) : null}
            </View>
          </TouchableWithoutFeedback>
          <View
            style={styles.buttonContainer}
            onLayout={(e) => setButtonContainerHeight(e.nativeEvent.layout.height)}
          >
            <TouchableOpacity onPress={showPhotoGalleryPicker}>
              <Icon
                name="picture-o"
                size={24}
                color="gray"
                style={styles.vectorIcon}
              />
            </TouchableOpacity>
            <Button label="Send" isEnabled={!!inputValue.length} onPress={onPressSubmit} />
          </View>
        </Animated.View>
        <View style={styles.bottomHandlebarContainer} />
      </KeyboardAvoidingView>
    </GestureRecognizer>
  );
};

export default CommentBox;
