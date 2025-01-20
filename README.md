# Chat Screen with CommentBox and Image Handling

## Overview
This project is a React Native application featuring a `ChatScreen` component, which allows users to send text and image messages in a chat-like interface. It includes a reusable `CommentBox` component with advanced functionalities, such as handling text input, selecting images, and swipe gestures for expanding and collapsing the input box. The project emphasizes modularity and performance optimization by separating logic, styles, and components into dedicated files and hooks.

## Features
1. **Chat Functionality**: Users can send text and images in a chat interface.
2. **Image Selection**: Images can be selected from the device gallery using `react-native-image-picker`.
3. **Expandable Input Box**: The input area expands and collapses based on swipe gestures and keyboard interactions.
4. **Dynamic Layouts**: The UI adapts dynamically to the number of images selected and the device dimensions.
5. **Modular Code Structure**: Logic and styles are separated for reusability and maintainability.

---

## File Structure

### 1. **ChatScreen Component** (`ChatScreen.tsx`)
The main screen of the application manages:
- **Messages State**: Stores chat messages (text and images).
- **CommentBox Integration**: Handles user input and image selection.
- **ScrollView Ref**: Automatically scrolls to the latest message upon submission.

### 2. **CommentBox Component** (`CommentBox.tsx`)
A reusable component for handling user input with the following features:
- **Multiline Text Input**: Supports expanding text input.
- **Image Layout**: Displays selected images dynamically.
- **Swipe Gestures**: Expands or collapses the input area with `react-native-swipe-gestures`.
- **Keyboard Avoidance**: Adjusts for keyboard visibility using a custom hook.
- **Dynamic Animations**: Uses `Animated` for smooth height transitions.

### 3. **ImagesLayout Component** (`ImagesLayout.tsx`)
Manages the layout of selected images:
- **Dynamic Image Sizing**: Adjusts image dimensions based on the container size.
- **Remove Button**: Allows users to remove selected images.

### 4. **ImageContainer Component** (`ImageContainer.tsx`)
A wrapper for individual images with a close button to remove them.

### 5. **Hooks**
- **`useImagePicker`**: Encapsulates logic for selecting images from the gallery using `react-native-image-picker`.
- **`useGetKeyboardHeight`**: Tracks keyboard visibility and height.

### 6. **Styles**
- Separate styles files (e.g., `styles.ts`) for each component.
- Uses flexbox and dynamic sizing for responsive design.

---

## Code Breakdown

### ChatScreen Component
- **State Management**: Stores messages and dynamically updates the chat interface.
- **Event Handling**: Passes text and images to `CommentBox` for processing.
- **Scroll Behavior**: Automatically scrolls to the latest message using a `ref`.

### CommentBox Component
- **Input Management**: Uses controlled components (`TextInput`) for user text input.
- **Image Handling**: Integrates image selection and removal functionality.
- **Expandable Design**: Adjusts height dynamically based on user actions (e.g., keyboard visibility, swipe gestures).

### ImagesLayout Component
- **Dynamic Layout**: Creates responsive grids or single-image layouts based on the number of images selected.
- **Image Sizing**: Calculates optimal image dimensions for the current container size.

### useImagePicker Hook
Encapsulates the logic for image selection:
- Configures options for the image picker.
- Handles the selection and storage of image files.

### useGetKeyboardHeight Hook
Tracks the visibility and height of the keyboard:
- Updates the UI to avoid overlapping with the keyboard.

---

## Performance Optimization
1. **Separation of Concerns**:
   - Logic (e.g., hooks) and UI (e.g., components) are decoupled for clarity and reusability.
2. **Dynamic Animations**:
   - Uses `Animated` for smooth transitions, reducing UI jank.
3. **Optimized Rendering**:
   - Prevents unnecessary re-renders by managing dependencies effectively in `useEffect`.
4. **Lazy Image Loading**:
   - Loads images dynamically and calculates their dimensions for better performance.
5. **Controlled Input**:
   - Limits input text length and dynamically adjusts text box height to improve responsiveness.

---

## How to Use
1. **Installation**:
   - Clone the repository.
   - Run `npm install` or `yarn install` to install dependencies.
2. **Run the App**:
   - Use `npx react-native run-android` or `npx react-native run-ios`.
3. **Testing**:
   - Interact with the chat interface to send messages and images.
   - Swipe up/down on the `CommentBox` to expand or collapse it.

---

## Dependencies
- `react-native`: For building the mobile application.
- `react-native-image-picker`: For image selection.
- `react-native-swipe-gestures`: For swipe detection.
- `react-native-vector-icons`: For icons.
- `react-native-animated`: For smooth animations.

---

## Conclusion
This project demonstrates how to build a modular, scalable, and performant React Native chat interface with advanced features. By separating logic, UI, and styles, it ensures maintainability and reusability across components.

