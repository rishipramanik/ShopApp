import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import colors from '../../constants/colors';

const BottomIconsInactive = ({name}) => {
  return <Icon name={name} size={24} color={colors.buttonDisabled} />;
};

export default BottomIconsInactive;
