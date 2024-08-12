import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { fontSize, heightScale, layoutStyles, widthScale } from '../styles'
import { SvgXml } from 'react-native-svg'
import EditIcon from '../assets/EditIcon.svg'
import EditIcons from '../assets/EditIcons.svg'
import { SellingRoute } from '../app/selling'
import { colors } from '../styles/colors'

const ListingItem = ({ type }: { type: SellingRoute }) => {
  return (
    <View>
      <View style={layoutStyles.flexRow}>
        <Image source={require('../assets/PSP.png')} style={styles.image} resizeMode='cover' />
        <View style={styles.content}>
          <Text style={styles.itemBoldText}>PlayStation Remote Player</Text>
          <Text style={styles.itemBoldText}>$410 <Text style={styles.itemNormalText}>or best offer</Text></Text>
          {type === SellingRoute.active ? <View style={[layoutStyles.flexRowBetween, styles.mt20]}>
            <View style={layoutStyles.center}>
              <Text style={styles.itemCount}>6</Text>
              <Text style={styles.itemSmallText}>Open Chats</Text>
            </View>
            <View style={layoutStyles.center}>
              <Text style={styles.itemCount}>6</Text>
              <Text style={styles.itemSmallText}>Message Requests</Text>
            </View>
          </View> : <>
            <Text style={styles.itemBoldText}>7 <Text style={styles.itemNormalText}>Open Chats</Text></Text>
            <Text style={styles.itemStatus}>Unlisted</Text>
          </>
          }
        </View>
        <TouchableOpacity style={styles.button}>
          {
            type === SellingRoute.active ? <EditIcons color='#46C0EF' /> : <EditIcon color='#46C0EF' />
          }
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />
    </View>
  )
}

export default memo(ListingItem)

const styles = StyleSheet.create({
  image: {
    width: widthScale(84),
    height: widthScale(110),
    borderRadius: 14
  },
  content: {
    marginLeft: widthScale(16),
    paddingVertical: heightScale(5),
    rowGap: heightScale(2),
    flex: 1,
  },
  itemBoldText: {
    fontSize: fontSize(15),
    fontWeight: '600',
    lineHeight: heightScale(16),
    color: colors.black,
  },
  itemNormalText: {
    fontSize: fontSize(15),
    fontWeight: '400',
    lineHeight: heightScale(18),
  },
  ml16: {
    marginLeft: widthScale(16)
  },
  itemStatus: {
    fontSize: fontSize(18),
    fontWeight: '600',
    lineHeight: heightScale(22),
    color: colors.primary_2,
    alignSelf: 'flex-end',
    marginTop: heightScale(26)
  },
  button: {
    ...layoutStyles.center,
    width: heightScale(25),
    height: heightScale(25),
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.primary_3
  },
  separator: {
    width: '83%',
    height: 1,
    backgroundColor: colors.gray_1,
    marginTop: heightScale(11),
    alignSelf: 'center'
  },
  itemCount: {
    fontSize: fontSize(20),
    fontWeight: '600',
    lineHeight: heightScale(22),
    color: colors.primary_4,
    marginBottom: heightScale(4)
  },
  itemSmallText: {
    fontSize: fontSize(12),
    fontWeight: '400',
    lineHeight: heightScale(14),
    color: colors.black,
  },
  mt20: {
    marginTop: heightScale(20)
  }
})