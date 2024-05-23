import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Theme from '../../theme/Theme';

export default function InputText(props: any) {
  const [focusFlag, setFocusFlag] = useState(false);
  const onFocus = () => {
    setFocusFlag(true);
  };
  const onBlur = () => {
    setFocusFlag(false);
  };
  return (
    <View>
      <Text style={style.lebel}>{props.lebel}</Text>
      <TextInput
        style={[focusFlag ? style.inputFocus : style.input]}
        placeholder={props.placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </View>
  );
}

const style = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    fontSize: Theme.fontSize.size13,
    fontWeight: '600',
  },
  inputFocus: {
    borderBottomWidth: 1,
    fontSize: Theme.fontSize.size13,
    fontWeight: '600',
    borderColor: Theme.colors.BtnColor,
  },
  lebel: {
    marginTop: Theme.fontSize.size20,
    fontSize: Theme.fontSize.size14,
    color: Theme.colors.disable,
    fontWeight: '500',
    height: Theme.fontSize.size20,
  },
});
