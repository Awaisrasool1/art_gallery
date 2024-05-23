import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const style = StyleSheet.create({
  Container: {
    backgroundColor: Theme.colors.white,
    height: '100%',
  },
  morningText: {
    fontSize: Theme.fontSize.size15,
    fontWeight: '400',
    color: Theme.colors.black,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  marginTop: {
    marginTop: Theme.fontSize.size40,
    marginHorizontal: Theme.fontSize.size20,
  },
  input: {
    borderRadius: Theme.fontSize.size20,
    backgroundColor: '#efefef',
    paddingLeft:Theme.fontSize.size10,
    
  },
  categoritext:{
    fontSize: Theme.fontSize.size15,
    fontWeight: '700',
    color: Theme.colors.black,
    marginVertical:Theme.fontSize.size10,
    marginTop:Theme.fontSize.size25
  }
});

export default style;
