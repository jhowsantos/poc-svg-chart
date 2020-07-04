import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-svg';
import {PieChart} from 'react-native-svg-charts';

const Home = () => {
  const data = [10, 20, 35, 50];

  const randomColor = () =>
    ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(
      0,
      7,
    );
  const pieData = data.map((value, index) => ({
    value,
    key: `${index}-${value}`,
    svg: {
      fill: randomColor(),
      onPress: () => console.log('press', index),
    },
  }));

  const Label = ({slices}) => {
    return slices.map((slice, index) => {
      const {pieCentroid, data} = slice;
      return (
        <Text
          key={`label-${index}`}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill="black"
          textAnchor={'middle'}
          alignmentBaseline={'middle'}
          fontSize={18}>
          {data.value}%
        </Text>
      );
    });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <PieChart style={{height: 300}} data={pieData}>
        <Label />
      </PieChart>
    </View>
  );
};

export default Home;
