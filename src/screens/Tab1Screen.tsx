import React, { useEffect } from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../themes/appTheme';
export const Tab1Screen = () => {

  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title} >Iconos</Text>
      <Text>
      <Icon name="color-filter-outline" size={30} color="#900" />
      </Text>
    </View>
  );
};
