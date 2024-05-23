import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Theme from '../../theme/Theme';

export default function Buttons(props: any) {
  return (
    <View>
      <TouchableOpacity onPress={()=>{props.onPress()}}>
        <Text style={[style.button,props.style]}>{props.lebel}</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: Theme.colors.BtnColor,
    padding: Theme.fontSize.size15,
    borderRadius: Theme.fontSize.size30,
    color: Theme.colors.white,
    fontSize: Theme.fontSize.size14,
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
