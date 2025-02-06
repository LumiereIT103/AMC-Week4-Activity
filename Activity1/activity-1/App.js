import React from 'react';
import {StyleSheet, Text, ScrollView, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
         Basic Concept
Both View and div are fundamental layout components used in their respective environments. In HTML and web development, a div is a versatile element that helps structure a webpage, serving as a container for other elements. In React Native, a View functions similarly, allowing developers to structure mobile apps with a flexible layout that holds other components.

Purpose and Use Case
In both contexts, the goal of a View and a div is to provide a way to group and organize other UI elements. This allows developers to arrange elements on a screen or webpage without directly adding content themselves. These containers act as building blocks for more complex layouts and interactions, allowing for easy composition and modification of the user interface.

Flexibility and Layout
One of the key similarities is the flexibility both View and div offer for layout control. In React Native, the View component supports flexible layout systems like Flexbox, making it simple to align items, create responsive designs, and manage the spacing and positioning of child elements. Similarly, div elements can be styled using CSS properties, such as display: flex, to create flexible layouts, grid systems, and responsive designs.

Styling
Both elements are customizable using styles. In HTML, you can apply styles to a div using CSS, including color, borders, padding, margins, and more. In React Native, View is styled using JavaScript objects that mimic CSS properties (like padding, margin, flexDirection, etc.), enabling a similar level of control over the appearance of the container.

Mobile vs. Web Context
A primary difference is that View is used for mobile app development in React Native, whereas div is specific to web development. While they have similar roles in their environments, View components are optimized for the native rendering engines of iOS and Android. In contrast, div is rendered by web browsers, which interpret HTML and CSS to render a webpage.

Platform-Specific Adjustments
Since React Native targets mobile platforms, the View component can have platform-specific behavior. For example, it can leverage mobile-specific properties like touch events, gestures, and native animations. This is something that doesn't directly apply to div in HTML, as the web platform doesn't inherently support such features in the same way.

Responsiveness
Both div and View are designed to be responsive. In web development, div elements can respond to viewport changes, resizing, and device orientation through CSS media queries and Flexbox/Grid layouts. In React Native, View adapts similarly, ensuring that mobile layouts are responsive across different screen sizes and orientations, typically using Flexbox for dynamic layouts.

Event Handling
React Native's View component also has built-in event handling, making it easier to manage interactions like touch gestures or taps on mobile devices. On the web, a div can handle events as well, such as click or hover, through JavaScript event listeners, but these interactions are typically more focused on mouse input rather than touch.

Rendering Behavior
Another notable distinction is the rendering behavior. View components in React Native don’t map directly to any HTML element on the final mobile screen. They are translated into native mobile UI components by React Native's bridge, making them part of the app's native UI. On the other hand, div elements in HTML are directly rendered by the web browser's rendering engine.

Accessibility and Customization
Both View and div support accessibility features, but React Native's View components come with built-in support for accessibility APIs tailored to mobile apps. You can set properties like accessibilityLabel to help screen readers interpret the app's interface. HTML div elements can also be made accessible by adding ARIA roles and attributes, although it generally requires more manual configuration compared to React Native.
        </Text>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },

});

export default App;