import React, { useState , useRef} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  Text,
} from 'react-native';
import styles from './styles';
import useComponentSize from '../../hook/useComponentSize';
import CommentBox from '../../component/CommentBox';

const ChatScreen = () => {
  const [messages, setMessages] = useState<
    { id: number; text: string; images?: string[]; sender: 'left' | 'right' }[]
  >([
    { id: 1, text: 'Hello!', sender: 'left' },
  ]);
  const scrollViewRef = useRef<ScrollView>(null);
  const [inputValue, setInputValue] = useState('');
  const [size, onLayout] = useComponentSize();
  const containerHeight = size?.height;
  const containerWidth = size?.width;

  const onCommentSubmit = (value: { text: string; images?: string[] }) => {
    const newMessage = {
      id: messages.length + 1,
      text: value.text,
      images: value.images,
      sender: 'right',
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputValue('');
    // Scroll to bottom
  setTimeout(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, 100);
  };
  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.chatContainer}
        keyboardShouldPersistTaps="handled"
      >
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageWrapper,
              message.sender === 'right' ? styles.rightMessage : styles.leftMessage,
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
            {message.images && message.images.length > 0 && (
              <View style={styles.imageContainer}>
                {message.images.map((img, index) => (
            <Image key={index} source={{ uri: img }} style={styles.image} />
                ))}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      >
        <View style={styles.commentInputBoxWrapper} onLayout={onLayout}>
          <CommentBox
            value={inputValue}
            onSubmit={onCommentSubmit}
            containerHeight={containerHeight}
            containerWidth={containerWidth}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatScreen;
