import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/appTheme'
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { };

export const Page2Screen = ({ navigation }: Props) => {

  useEffect(() => {
    navigation.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Atras'
    })
  }, [])
  

  return (
    <View style={styles.globarMargin}>
      <Text style={ styles.title } >
        Esta es la pagina 2
      </Text>

      <Button
        title="Ir a pagina 3"
        onPress={() => navigation.navigate('Page3Screen')}
      ></Button>
    </View>
  )
}
