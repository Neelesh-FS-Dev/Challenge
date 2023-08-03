/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

const dataSource = Array.from({length: 20}, (_, index) =>
  (index + 1).toString(),
);
export const Demo = () => {
  const ref = React.useRef();
  const [index, setIndex] = React.useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 100,
      }}>
      <ScrollPicker
        wrapperBackground="#fff"
        ref={ref}
        wrapperHeight={150}
        itemHeight={40}
        dataSource={dataSource}
        selectedIndex={index}
      />
    </View>
  );
};
