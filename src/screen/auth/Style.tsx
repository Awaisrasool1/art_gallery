import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const style = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.white,
    height: '100%',
  },
  imgContainer: {
    marginTop: Theme.fontSize.size50,
    alignItems: 'center',
  },
  line: {
    height: Theme.fontSize.size5,
    backgroundColor: Theme.colors.line,
    width: Theme.fontSize.size50,
    marginVertical: Theme.fontSize.size5,
    borderRadius: Theme.fontSize.size5,
  },
  mainHeading: {
    fontSize: Theme.fontSize.size18,
    fontWeight: '700',
    color: Theme.colors.black,
  },
  coffeHeading: {
    fontSize: Theme.fontSize.size12,
    fontWeight: '400',
    color: Theme.colors.black,
    marginTop: Theme.fontSize.size10,
  },
  morningText: {
    fontSize: Theme.fontSize.size16,
    fontWeight: '700',
    color: Theme.colors.black,
    textAlign: 'center',
    marginTop: Theme.fontSize.size30,
  },
  btn: {
    marginTop: Theme.fontSize.size20,
    flexDirection: 'row',
    backgroundColor: Theme.colors.BtnColor,
    padding: Theme.fontSize.size15,
    borderRadius: Theme.fontSize.size30,
    justifyContent: 'center',
    gap: Theme.fontSize.size20,
  },
  btnText: {
    color: Theme.colors.white,
    fontSize: Theme.fontSize.size14,
    fontWeight: '700',
  },
  loginImgContainer: {
    alignItems: 'center',
    marginVertical: Theme.fontSize.size20,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: Theme.fontSize.size15,
  },
  accountText: {
    fontSize: Theme.fontSize.size13,
    fontWeight: '500',
    color: Theme.colors.disable,
    textAlign: 'center',
    marginVertical: Theme.fontSize.size20,
  },
});

export default style;
