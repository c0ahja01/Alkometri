import { Alert, Text, Button, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';
import  StyleSheet from './Styles';
import Bottles  from './componets/Bottles';
import Time from './componets/Time';
import Gender from './componets/Gender';

export default function App() {

  const [weight, setWeight]=useState(0)
  const [bottles, setBottlesAmount] = useState(1)
  const [time, setUsedTime] = useState(0)
  const [gender, setGender] = useState('male')
  const [promilles, setPromilles] = useState(0)
  
  const calculate = () => {

    let result = 0
    let burning= weight / 10

    if(weight==0) {
      Alert.alert("Enter weight")
    }

    if(gender==="male") {
      result=((bottles * 0.33) * 8 * 4.5-(burning* time))/(weight * 0.7)
    }else{
        result=((bottles * 0.33) * 8 * 4.5-(burning* time))/(weight * 0.6)
    }

    if(result < 0 ) {
      result = 0
    }

    setPromilles(result)
  }
  
  


  return (
    <>
      <ScrollView style = {StyleSheet.container}>
        <Text style={StyleSheet.UITitle}>Alcometer</Text>
        <Text style={StyleSheet.Wtitle}>Weight</Text>
        <TextInput
          placeholder = " Enter your weight !...." 
          value={weight} onChangeText={text => setWeight(text)} 
          keyboardType = 'num-pad'/>

        <Bottles> bottles={bottles} setBottlesAmount={setBottlesAmount}</Bottles>
        <Time time={time} setUsedTime={setUsedTime} />
        <Gender gender={gender} setGender={setGender} />

          {promilles < 0.5 ?
        <Text style={StyleSheet.result}>{promilles.toFixed(2)}</Text> : 
          promilles > 1 ?
        <Text style={[StyleSheet.result, {color: "#EF4444"}]}>{promilles.toFixed(2)}</Text> :
        <Text style={[StyleSheet.result, {color: "#EAB308"}]}>{promilles.toFixed(2)}</Text>
        }
        <Button title="Calculate" onPress={calculate} />
      </ScrollView>
    </>
  );
}

