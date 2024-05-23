import {View, Text, ScrollView} from 'react-native';
import style from './Style';
import {Image} from 'react-native-animatable';
import Theme from '../../theme/Theme';
import InputText from '../../component/inputText/InputText';
import Buttons from '../../component/button/Buttons';
import {useNavigation} from '@react-navigation/native';

export default function SignIn() {
  const nav: any = useNavigation();
  return (
    <ScrollView>
      <View style={style.loginImgContainer}>
        <View style={{alignItems: 'center'}}>
          <Image source={require('../../assets/icon/cup.png')} />
          <View style={style.line} />
        </View>
        <Text style={[style.mainHeading, {fontSize: Theme.fontSize.size16}]}>
          Art Studio
        </Text>
      </View>
      <View style={{marginHorizontal: Theme.fontSize.size20}}>
        <Text style={[style.mainHeading, {fontSize: Theme.fontSize.size16}]}>
          Sign In
        </Text>
        <InputText lebel={'Email'} placeholder={'info@example.com'} />
        <View style={{marginTop: Theme.fontSize.size20}} />
        <InputText lebel={'Password'} placeholder={'Password'} />
        <View style={{marginTop: Theme.fontSize.size30}} />
        <Buttons
          lebel={'Login'}
          onPress={() => {
            nav.navigate('Home');
          }}
        />
        <Text style={style.accountText}>Dont have any account?</Text>
        <Buttons
          onPress={() => {}}
          lebel={'Create an Account'}
          style={{
            backgroundColor: Theme.colors.line,
            color: Theme.colors.black,
          }}
        />
      </View>
    </ScrollView>
  );
}
