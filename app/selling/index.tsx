import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { fontSize, gradients, heightScale, layoutStyles, SCREEN_WIDTH, widthScale } from '../../styles';
import GradientButton from '../../components/GradientButton';
import { Route, TabBar, TabBarProps, TabView } from 'react-native-tab-view';
import ListingTab from '../../components/ListingTab';
import { Link } from 'expo-router';
import { colors } from '../../styles/colors';

const initialLayout = {
  width: SCREEN_WIDTH
}

export enum SellingRoute {
  active = 'active',
  task = 'task',
  previous = 'previous'
}

type CustomRoute = Route & { count: number }

const Selling = () => {
  //Tabview
  const [index, setIndex] = React.useState(0);
  const routes = [
    { key: SellingRoute.active, title: 'Active', count: 9 },
    { key: SellingRoute.task, title: 'Tasks', count: 0 },
    { key: SellingRoute.previous, title: 'Previous', count: 0 },
  ];

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'active':
      case 'task':
      case 'previous':
        return <ListingTab type={route.key} />;
      default:
        return <View style={{ flex: 1, backgroundColor: 'red' }} />;
    }
  };


  const renderTabBar = (props: TabBarProps<Route>) => (
    <TabBar
      {...props}
      indicatorStyle={styles.tabbarIndicator}
      style={styles.tabbar}
      tabStyle={styles.tabStyle}
      gap={0}
      scrollEnabled={false}
      renderLabel={renderLabel}
      indicatorContainerStyle={{ marginTop: 6 }}
    />
  )

  const renderLabel = ({ focused, route }: { focused: boolean, route: CustomRoute }) => {
    return (
      <View style={styles.tabLabel}>
        <Text style={styles.tabLabelCount}>{route.count}</Text>
        <Text style={styles.tabLabelTitle}>{route.title}</Text>
      </View>
    )
  }

  return (
    <View style={styles.flex}>
      <LinearGradient
        // Background Linear Gradient
        colors={gradients.background}
        style={styles.background}
      />
      <View style={styles.body}>
        <Link href={{
          pathname: '/selling/listing',
        }} style={layoutStyles.alignSelfCenter}>
          <View>
            <LinearGradient
              colors={gradients.button}
              style={[layoutStyles.center, styles.gradientButton]}
            >
              <Text style={styles.gradientButtonText}>List an item</Text>
            </LinearGradient>
          </View>
        </Link>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
          lazy
          animationEnabled={false}
        />
      </View>
    </View>
  )
}

export default Selling

const styles = StyleSheet.create({
  background: {
    height: heightScale(112)
  },
  flex: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: heightScale(14)
  },
  gradientButton: {
    alignSelf: 'center',
    height: heightScale(43),
    width: widthScale(248),
    borderRadius: 12,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.2,
    elevation: 5, // for Android
  },
  gradientButtonText: {
    fontSize: fontSize(24),
    fontWeight: '700',
    lineHeight: heightScale(28),
    color: colors.white
  },
  tabLabel: {
    alignItems: 'center',
  },
  tabLabelCount: {
    fontSize: fontSize(37),
    fontWeight: '700',
    lineHeight: heightScale(44),
    color: colors.primaryTitle
  },
  tabbar: {
    // height: heightScale(48),
    justifyContent: 'center',
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0,
  },
  tabbarIndicator: {
    // backgroundColor: ColorsComon.v3_primary_200,
    height: 3,
    backgroundColor: '#2BBEF3',
    borderRadius: 12,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.2,
  },
  tabLabelTitle: {
    fontSize: fontSize(16),
    fontWeight: '600',
    lineHeight: heightScale(19),
    color: '#5C5C5C'
  },
  tabStyle: {
    // width: widthScale(SCREEN_WIDTH / 3),
    padding: 0,
    marginBottom: heightScale(8),
  }
})