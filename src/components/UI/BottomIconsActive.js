import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import colors from '../../constants/colors';
import {View} from 'react-native';

const BottomIconsActive = ({name}) => {
  return (
    <View
      style={{
        top: -25,
        backgroundColor: colors.text,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
      }}>
      <Icon
        name={name}
        size={34}
        color={colors.warning}
        style={{marginLeft: 12}}
      />
    </View>
  );
};

export default BottomIconsActive;
