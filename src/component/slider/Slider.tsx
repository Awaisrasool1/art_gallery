import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Theme from '../../theme/Theme';

export default function Slider(props: any) {
  const render_item = ({item}: any) => {
    return (
      <>
        {props.type == 'Categories' ? (
          <TouchableOpacity style={style.categorieContainer}>
            <View style={style.row}>
              <Image source={item.img} />
              <Text style={style.categorieName}>{item.name}</Text>
            </View>
            <View>
              <Text style={style.nemusName}>
                {item.manus}
                {'  '}
                <Text style={{color: Theme.colors.BtnColor}}>Manus</Text>
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={style.container}>
            <Image source={item.img} style={style.img} resizeMode="contain" />
            <Text style={style.name}>{item.name}</Text>
            <Text style={style.name}>Rs: {item.price}</Text>
          </View>
        )}
      </>
    );
  };
  return (
    <View>
      <FlatList
        data={props.data}
        renderItem={render_item}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.BtnColor,
    margin: Theme.fontSize.size10,
    marginTop: Theme.fontSize.size100,
    height: Theme.fontSize.size245,
    borderRadius: Theme.fontSize.size30,
  },
  img: {
    width: 250,
    height: 250,
    marginTop: -Theme.fontSize.size80,
  },
  name: {
    fontSize: Theme.fontSize.size16,
    fontWeight: '600',
    color: Theme.colors.white,
    marginLeft: Theme.fontSize.size20,
    marginTop: Theme.fontSize.size10,
  },
  categorieContainer: {
    width: Theme.fontSize.size200,
    height: Theme.fontSize.size65,
    elevation: Theme.fontSize.size3,
    backgroundColor: Theme.colors.white,
    margin: Theme.fontSize.size10,
    borderRadius: Theme.fontSize.size10,
  },
  row: {
    flexDirection: 'row',
    gap: Theme.fontSize.size20,
    alignItems: 'center',
    marginLeft: Theme.fontSize.size20,
    marginTop: Theme.fontSize.size10,
  },
  categorieName: {
    fontSize: Theme.fontSize.size16,
    fontWeight: '600',
    color: Theme.colors.black,
  },
  nemusName: {
    fontSize: Theme.fontSize.size14,
    fontWeight: '500',
    color: Theme.colors.black,
    marginLeft: Theme.fontSize.size65,
  },
});
