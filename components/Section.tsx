import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontSize, heightScale, layoutStyles, widthScale } from '../styles'
import { colors } from '../styles/colors'

interface ISection {
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
  postTitle?: React.ReactNode
  style?: any
}

const Section = ({ title, icon, postTitle, children, style }: ISection) => {
  return (
    <View style={[styles.container, style]}>
      <View style={layoutStyles.flexRowBetween}>
        <View style={layoutStyles.flexRow}>
          <Text style={styles.title}>{title}</Text>
          {icon}
        </View>
        {postTitle}
      </View>
      {children}
    </View>
  )
}


export default Section

const styles = StyleSheet.create({
  title: {
    fontSize: fontSize(26),
    fontWeight: 'bold',
    marginBottom: heightScale(7),
    lineHeight: heightScale(31),
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: 14,
    paddingTop: heightScale(6),
    paddingHorizontal: widthScale(16),
    paddingBottom: heightScale(16),
  }
})