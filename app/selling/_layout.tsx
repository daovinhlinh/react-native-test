//generate stack

import React from 'react';
import { Stack } from 'expo-router'
import { StyleSheet } from 'react-native';
import { fontSize } from '../../styles';
import { colors } from '../../styles/colors';

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Selling",
          headerShown: false
        }}
      />
      <Stack.Screen
        name="listing"
        options={{
          title: "List an Item",
          headerTitleStyle: styles.headerTitle
        }}
      />

    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: fontSize(24),
    color: colors.black,
  },
});