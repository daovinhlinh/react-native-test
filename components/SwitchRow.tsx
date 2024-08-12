import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { memo, useState } from 'react'
import { fontSize, layoutStyles } from '../styles'

interface ISwitchRow {
  title: string
  onChange: (value: boolean) => void
  activeTrackColor?: string
  inActiveTrackColor?: string
  activeThumbColor?: string
  inActiveThumbColor?: string
}

const SwitchRow = ({ title, onChange, activeThumbColor, activeTrackColor, inActiveTrackColor, inActiveThumbColor }: ISwitchRow) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    onChange(!isEnabled)
    setIsEnabled(previousState => !previousState)
  };

  return (
    <View style={layoutStyles.flexRowBetween}>
      <Text style={styles.text}>{title}</Text>
      <Switch
        trackColor={{ false: inActiveTrackColor, true: activeTrackColor }}
        thumbColor={isEnabled ? activeThumbColor : inActiveThumbColor}
        value={isEnabled} onValueChange={toggleSwitch} />
    </View>
  )
}

export default memo(SwitchRow)

const styles = StyleSheet.create({
  text: {
    fontSize: fontSize(19),
    color: '#42C1F0'
  }
})