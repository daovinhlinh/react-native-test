import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo } from 'react'
import { SellingRoute } from '../app/selling'
import { fontSize, heightScale, layoutStyles, widthScale } from '../styles'
import ListingItem from './ListingItem'
import { colors } from '../styles/colors'

const ListingTab = ({ type }: { type: SellingRoute }) => {
  const getType = useMemo(() => {
    switch (type) {
      case SellingRoute.active:
        return 'Active'
      case SellingRoute.task:
        return 'Tasks'
      case SellingRoute.previous:
        return 'Previous'
      default:
        return 'Active'
    }
  }, [])

  const renderItem = ({ item }) => <ListingItem type={type} />
  const renderSeparator = () => <View style={styles.separator} />
  const renderFooter = () => <Text style={styles.footerText}>Status: </Text>

  return (
    <View style={styles.container}>
      <View style={layoutStyles.flexRowBetween}>
        <Text style={styles.label}>{getType} Listings</Text>
        <TouchableOpacity style={styles.outlineBtn}>
          <Text style={styles.outlineBtnText}>Filter</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={renderItem}
        style={styles.list}
        ItemSeparatorComponent={renderSeparator}
        ListFooterComponent={renderFooter}
      />
    </View>
  )
}

export default ListingTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: heightScale(9),
    paddingHorizontal: widthScale(20),
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    backgroundColor: colors.white,
    marginTop: heightScale(18)
  },
  label: {
    fontSize: fontSize(26),
    fontWeight: '600',
    lineHeight: heightScale(31),
    color: colors.black,
  },
  outlineBtn: {
    borderWidth: 1,
    borderColor: colors.primary_2,
    borderRadius: 20,
    paddingVertical: heightScale(6),
    paddingHorizontal: widthScale(20)
  },
  outlineBtnText: {
    fontSize: fontSize(13),
    fontWeight: '400',
    lineHeight: heightScale(15),
    color: colors.primary_2
  },
  list: {
    marginTop: heightScale(24)
  },
  separator: {
    height: heightScale(16)
  },
  footerText: {
    fontSize: fontSize(16),
    fontWeight: '600',
    lineHeight: heightScale(19),
    color: colors.black,
    textAlign: 'center',
    marginTop: heightScale(8)
  }
})