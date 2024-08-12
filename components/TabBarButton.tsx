import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { SvgXml } from 'react-native-svg'
import svg from '../assets/icons';
import HomeIcon from '../assets/Home.svg';
import MessagesIcon from '../assets/Messages.svg';
import BuyingIcon from '../assets/Buying.svg';
import SellingIcon from '../assets/Sellings.svg';

const getIcon = (routeName) => {
  switch (routeName) {
    case 'index':
      return HomeIcon
    case 'buying':
      return BuyingIcon
    case 'selling':
      return SellingIcon
    case 'Profile':
      return MessagesIcon
    default:
      return HomeIcon
  }
}

const TabBarButton = (props) => {
  const { isFocused, label, routeName, color } = props;

  const Icon = getIcon(routeName)

  return (
    <Pressable {...props} style={styles.container}>
      {/* <View style={{ width: 35}}> */}
      <Icon color={color} width={35} height={35} />
      {/* </View> */}

      <Text style={{
        color,
        fontSize: 11
      }}>
        {label}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4
  }
})

export default TabBarButton