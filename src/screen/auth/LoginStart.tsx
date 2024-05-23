import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './Style';
import Theme from '../../theme/Theme';
import {useNavigation} from '@react-navigation/native';

export default function LoginStart() {
  const nav: any = useNavigation();
  return (
    <View>
      <View style={style.container}>
        <View style={style.imgContainer}>
          <View style={{alignItems:'center'}}>
          <Image source={require('../../assets/icon/cup.png')} />
          <View style={style.line} />
          </View>
          <Text style={style.mainHeading}>Art Studio</Text>
          <Text style={style.coffeHeading}>Coffee Shop App</Text>
        </View>
        <View style={{marginHorizontal: Theme.fontSize.size20}}>
          <Text style={style.morningText}>Morning begins with Art Studio</Text>
          <TouchableOpacity
            style={style.btn}
            onPress={() => {
              nav.navigate('SignIn');
            }}>
            <Image source={require('../../assets/icon/email.png')} />
            <Text style={style.btnText}>Login With Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
