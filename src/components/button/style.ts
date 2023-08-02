import {StyleSheet, ViewStyle} from 'react-native';

type Style = {
  wrapperCustom: ViewStyle;
  primary: ViewStyle;
  secondary: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  wrapperCustom: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  primary: {
    borderRadius: 45,
    borderWidth: 1.7,
    backgroundColor: '#452C55',
  },

  secondary: {
    borderRadius: 45,
    borderWidth: 1.7,
    backgroundColor: '#6231AD',
  },
});

export default styles;
