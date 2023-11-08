import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/appTheme'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any> { };

export const Page3Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globarMargin}>
      <Text style={ styles.title } >
        Esta es la pagina 3
      </Text>
      <Button
        title="Regresar"
        onPress={() => navigation.pop()}
      />
      <Button
        title="Ir a la pagina 1"
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}
