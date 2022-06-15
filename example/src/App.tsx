import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import SmartScrollContainer from 'native-smart-scroll-container';

const modes = [
  {
    name: 'Auto',
    value: undefined,
  },
  {
    name: 'Enabled',
    value: true,
  },
  {
    name: 'Disabled',
    value: false,
  },
];

const App = () => {
  const [activeMode, setActiveMode] = useState(0);
  const [scrollEnabled, setScrollEnabled] = useState(modes[activeMode].value);

  useEffect(() => {
    setScrollEnabled(modes[activeMode].value);
  }, [activeMode]);

  const [size, setSize] = useState(300);
  const [horizontal, setHorizontal] = useState(false);

  const renderContentFill = (backgroundColor) => {
    return (
      <View
        style={{
          width: horizontal ? size : 200,
          height: horizontal ? 200 : size,
          backgroundColor,
        }}
      />
    );
  };

  const handleTextChange = (text) => {
    const isNumberOrEmptyString = /^\d+$|^$/;

    if (isNumberOrEmptyString.test(text)) {
      setSize(parseInt(text || 0));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.contentItemOptionLabel}>
          Mode: {modes[activeMode].name}
        </Text>

        <Text style={styles.contentItemOptionLabel}>
          Content Item {horizontal ? 'Width' : 'Height'}: {size}
        </Text>

        <TextInput
          placeholder="Set New Content Item Size"
          style={styles.textInput}
          onChangeText={handleTextChange}
        />
      </View>

      <SmartScrollContainer
        scrollEnabled={scrollEnabled}
        horizontal={horizontal}
      >
        {renderContentFill('red')}
        {renderContentFill('green')}
      </SmartScrollContainer>

      <View style={styles.wrapper}>
        <Button
          title="Toggle Direction"
          onPress={() => setHorizontal((prev) => !prev)}
        />

        <View style={styles.spacer} />

        <Button
          title="Toggle Mode"
          onPress={() => setActiveMode((activeMode + 1) % 3)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    padding: 10,
  },
  spacer: {
    height: 6,
  },
  contentItemOptionLabel: {
    paddingVertical: 3,
  },
  textInput: {
    fontSize: 16,
    marginTop: 6,
    padding: 8,
    borderWidth: 1,
    borderRadius: 2,
  },
});

export default App;
