import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import Section from '../../components/Section'
import PhotoCard from '../../components/PhotoCard'
import { fontSize, gradients, heightScale, layoutStyles, widthScale } from '../../styles'
import EditIcons from '../../assets/EditIcons.svg'
import SearchInput from '../../components/SearchInput'
import GradientButton from '../../components/GradientButton'
import SwitchRow from '../../components/SwitchRow'
import Slider from '@react-native-community/slider';
import { colors } from '../../styles/colors'
import * as ImagePicker from 'expo-image-picker';

const PreviewText = memo(({ title, onPress }: { title: string, onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.previewTitle}>{title}</Text>
    </TouchableOpacity>
  )
})

const Listing = () => {
  const [photos, setPhotos] = React.useState<string[]>(Array.from({ length: 6 }, (_, i) => ''))

  const pickImage = async (index: number) => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const newPhotos = [...photos];
      newPhotos[index] = result.assets[0].uri;
      setPhotos(newPhotos);
    }
  };

  const renderPhotoItem = ({ item, index }) => <PhotoCard uri={item} onPress={() => pickImage(index)} />

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Section title="Photos">
        <FlatList
          data={photos}
          renderItem={renderPhotoItem}
          numColumns={3}
          contentContainerStyle={styles.list}
          columnWrapperStyle={styles.colGap}
          scrollEnabled={false}
        />
      </Section>
      <Section
        title='Title'
        icon={
          <EditIcons
            width={heightScale(30)}
            height={heightScale(30)} color="#767879"
          />
        }>
        <TextInput
          placeholder='Tap here to add a title'
          placeholderTextColor={'#C5C5C5'}
        />
      </Section>
      <Section
        title='Description'
        icon={
          <EditIcons
            width={heightScale(30)}
            height={heightScale(30)} color="#767879"
          />
        }>
        <TextInput
          placeholder='Tap here to add a description'
          numberOfLines={5}
          placeholderTextColor={'#C5C5C5'}
          style={styles.description}
          multiline={true}
        />
      </Section>
      <Section title='Searchability' style={styles.rowGap10}>
        <SwitchRow
          title='Allow Local Pickup'
          onChange={() => { }}
          activeTrackColor="#9DDAF0"
          inActiveTrackColor="#B7B7B7"
          activeThumbColor="#3FBFEF"
          inActiveThumbColor="#BFBFBF"
        />
        <SwitchRow
          title='Allow On All Categories'
          onChange={() => { }}
          activeTrackColor="#9DDAF0"
          inActiveTrackColor="#B7B7B7"
          activeThumbColor="#3FBFEF"
          inActiveThumbColor="#BFBFBF"
        />
        <View style={layoutStyles.flexRowBetween}>
          <Text style={styles.title1}>Maximum Distance</Text>
          <Text style={styles.value}>20mi.</Text>
        </View>
        <Slider
          style={{ width: '100%', height: 20 }}
          minimumValue={0}
          maximumValue={20}
          minimumTrackTintColor="#42C1F0"
          maximumTrackTintColor="#E8E8E8"
        />
        <Text style={styles.title1}>Condition</Text>
        <View style={[layoutStyles.flexRowBetween, styles.colGap4]}>
          <GradientButton
            onPress={() => { }}
            text='New'
            colors={gradients.button}
            style={styles.gradientConditionButton}
            textStyle={styles.gradientConditionButtonText}
          />
          <GradientButton
            onPress={() => { }}
            text='Used'
            colors={gradients.button}
            style={styles.gradientConditionButton}
            textStyle={styles.gradientConditionButtonText}
          />
          <GradientButton
            disabled
            onPress={() => { }}
            text='Not Specified'
            colors={gradients.button}
            style={styles.gradientConditionButton}
            textStyle={styles.gradientConditionButtonText}
          />
        </View>
      </Section>
      <Section title='Categories'>
        <View style={styles.mt10}>
          <SearchInput
            onTextChange={() => { }}
            placeholder="Search category filters" />
        </View>
      </Section>
      <Section
        title='Price'
        icon={
          <EditIcons
            width={heightScale(30)}
            height={heightScale(30)} color="#767879"
          />
        }>
        <TextInput
          placeholder='Tap here to add an asking price'
          placeholderTextColor={'#C5C5C5'}
        />
      </Section>
      <Section title='Confirm Listing' postTitle={<PreviewText title='Preview' onPress={() => { }} />}>
        <GradientButton
          onPress={() => { }}
          text='List item'
          colors={gradients.button}
          style={styles.gradientButton}
          textStyle={styles.gradientButtonText}
        />
      </Section>
    </ScrollView>
  )
}

export default Listing

const styles = StyleSheet.create({
  list: {
    gap: widthScale(16),
    paddingHorizontal: widthScale(8),
  },
  colGap: {
    gap: widthScale(19),
  },
  title: {
    fontSize: heightScale(26),
    fontWeight: 'bold',
    marginBottom: heightScale(7),
    lineHeight: heightScale(31),
  },
  container: {
    rowGap: heightScale(10),
    paddingTop: heightScale(10),
  },
  description: {
    fontSize: fontSize(18),
    lineHeight: heightScale(22),
    height: heightScale(110),
    textAlignVertical: 'top',
  },
  mt10: {
    marginTop: heightScale(10)
  },
  previewTitle: {
    fontSize: fontSize(20),
    lineHeight: heightScale(24),
    color: '#3FBFEF',
    textDecorationLine: 'underline'
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
    elevation: 5, // for Android,
    marginTop: heightScale(16)
  },
  gradientButtonText: {
    fontSize: fontSize(24),
    fontWeight: '700',
    lineHeight: heightScale(28),
    color: colors.white
  },
  title1: {
    color: colors.secondaryTitle,
    fontSize: fontSize(20),
    fontWeight: 'bold',
  },
  value: {
    color: colors.gray,
    fontSize: fontSize(18),
  },
  rowGap10: {
    rowGap: heightScale(10),
  },
  gradientConditionButton: {
    height: heightScale(35),
    borderRadius: 16,
    // marginTop: heightScale(16),
    flex: 1,
    overflow: 'hidden'
  },
  gradientConditionButtonText: {
    fontSize: fontSize(18),
    fontWeight: '600',
    lineHeight: heightScale(22),
    color: colors.white
  },
  colGap4: {
    columnGap: widthScale(4)
  }
})