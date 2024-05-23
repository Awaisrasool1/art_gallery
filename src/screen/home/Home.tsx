import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import Theme from '../../theme/Theme';
import Slider from '../../component/slider/Slider';
import {homeCategories, homeSilder1} from '../../listOfData/ListOfData';
import {DrawerActions, useNavigation} from '@react-navigation/native';

export default function Home() {
  const nav: any = useNavigation();
  const [onFocus, setonFocus] = useState(false);
  const OnFocus = () => {
    setonFocus(true);
  };
  const onBlur = () => {
    setonFocus(false);
  };
  return (
    <ScrollView style={style.Container}>
      <View style={[onFocus && {opacity: 0.5, backgroundColor: 'black'}]}>
        <View style={style.marginTop}>
          <View style={[style.flexRow]}>
            <View>
              <Text style={style.morningText}>Good Morning</Text>
              <Text
                style={[
                  style.morningText,
                  {fontWeight: '700', marginLeft: Theme.fontSize.size5},
                ]}>
                awais rasool
              </Text>
            </View>
            <View style={[style.flexRow, {gap: Theme.fontSize.size10}]}>
              <TouchableOpacity>
                <Image source={require('../../assets/icon/shopping.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  nav.navigate('');
                }}>
                <Image source={require('../../assets/icon/threeLine.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: Theme.fontSize.size20}}>
            <TextInput
              style={[style.input, onFocus && {backgroundColor: 'white'}]}
              placeholder="Search beverages or foods"
              onFocus={OnFocus}
              onBlur={onBlur}
            />
          </View>
          <View>
            <Slider data={homeSilder1} />
          </View>
          <View>
            <Text style={style.categoritext}>Categories</Text>
            <Slider data={homeCategories} type={'Categories'} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
