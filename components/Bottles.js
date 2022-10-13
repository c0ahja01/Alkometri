import React from 'react'
import { Picker } from '@react-native-picker/picker';
import { View, Text } from 'react-native';
import StyleSheet from '../Styles'

const Bottles = ({ bottles, setBottlesAmount}) => {
  return (
    <View>
        <Text style={StyleSheet.Wtitle}>Bottles</Text>
        <Picker
            selectedValue={bottles}
            onValueChange={(itemValue, itemIndex) =>
            setBottlesAmount(itemValue)
        }>
        <Picker.Item label="1 bottle" value="1" />
        <Picker.Item label="2 bottles" value="2" />
        <Picker.Item label="3 bottles" value="3" />
        <Picker.Item label="4 bottles" value="4" />
        <Picker.Item label="5 bottles" value="5" />
        <Picker.Item label="6 bottles" value="6" />
        <Picker.Item label="7 bottles" value="7" />
        <Picker.Item label="8 bottles" value="8" />
        <Picker.Item label="9 bottles" value="9" />
        <Picker.Item label="10 bottles" value="10" />
        <Picker.Item label="11 bottle" value="11" />
        <Picker.Item label="12 bottles" value="12" />
        <Picker.Item label="13 bottles" value="13" />
        <Picker.Item label="14 bottles" value="14" />
        <Picker.Item label="15 bottles" value="15" />
        <Picker.Item label="16 bottles" value="16" />
        <Picker.Item label="17 bottles" value="17" />
        <Picker.Item label="18 bottles" value="18" />
        <Picker.Item label="19 bottles" value="19" />
        <Picker.Item label="20 bottles" value="20" />
        <Picker.Item label="21 bottles" value="21" />
        <Picker.Item label="22 bottles" value="22" />
        <Picker.Item label="23 bottles" value="23" />
        <Picker.Item label="24 bottles" value="24" />
      </Picker>
    </View>
  )
}

export default Bottles