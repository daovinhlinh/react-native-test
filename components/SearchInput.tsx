import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import SearchIcon from '../assets/Search.svg'
import { heightScale, layoutStyles, widthScale } from '../styles'
import { colors } from '../styles/colors'

interface ISearchInput {
  placeholder?: string
  onTextChange: (text: string) => void
}

const SearchInput = ({ placeholder, onTextChange }: ISearchInput) => {
  return (
    <View style={[layoutStyles.flexRowCenter, styles.container]}>
      <SearchIcon color={colors.gray_2} />
      <TextInput
        placeholder={placeholder}
        onChangeText={onTextChange}
        style={styles.input}
      />
    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background_2,
    borderRadius: 10,
    paddingHorizontal: widthScale(8),
    paddingVertical: heightScale(10),
    columnGap: widthScale(6)
  },
  input: {
    padding: 0
  }
})