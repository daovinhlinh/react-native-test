import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { heightScale, layoutStyles } from '../styles'
import AddIcon from '../assets/Add.svg'
import { colors } from '../styles/colors'

interface IPhotoCard {
  uri: string
  onPress: () => void
}

const PhotoCard = ({ uri, onPress }: IPhotoCard) => {
  return (
    <TouchableOpacity onPress={onPress} style={[layoutStyles.flex, styles.container]}>
      {uri != '' && <Image source={{ uri }} style={styles.image} resizeMode='cover' />}
      <AddIcon style={styles.icon} />
    </TouchableOpacity>
  )
}

export default PhotoCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background_1,
    borderColor: colors.secondary_2,
    borderRadius: 16,
    height: heightScale(143),
    borderWidth: 3,
    borderStyle: 'dashed',
    marginBottom: heightScale(9),
  },
  icon: {
    position: 'absolute',
    width: heightScale(22),
    height: heightScale(22),
    right: heightScale(-11),
    bottom: heightScale(-9),
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  }
})