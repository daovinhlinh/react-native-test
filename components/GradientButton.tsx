import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { heightScale } from '../styles'
import { colors } from '../styles/colors'

interface IGradientButton {
  style?: any
  colors: string[]
  text: string
  textStyle?: any
  disabled?: boolean
  onPress: () => void
}

const GradientButton = ({ style, colors: gradientColor, text, textStyle, disabled, onPress }: IGradientButton) => {
  return (
    <TouchableOpacity onPress={onPress} style={[{ overflow: 'hidden' }, style]}>
      <LinearGradient
        colors={disabled ? [colors.disabled, colors.disabled] : gradientColor}
        style={[styles.button]}>
        <Text style={textStyle}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default GradientButton

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }
})