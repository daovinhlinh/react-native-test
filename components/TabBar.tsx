import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign, Feather } from '@expo/vector-icons';
import TabBarButton from './TabBarButton';
import { heightScale, widthScale } from '../styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../styles/colors';

const TabBar = ({ state, descriptors, navigation }) => {
  const primaryColor = colors.primaryTitle;
  const greyColor = colors.gray_3;

  const { bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.tabbar, { paddingBottom: bottom }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        if (['_sitemap', '+not-found'].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            // style={styles.tabbarItem}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? primaryColor : greyColor}
            label={label}
          />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: heightScale(7),
    columnGap: widthScale(37),
    borderTopColor: '#2CBFF3',
    borderTopWidth: 2.5,
  }
})

export default TabBar