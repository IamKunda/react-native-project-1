import React ,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function App() {

  //Setup useState Variable and Function
  const [clickedTimes, setClickedTimes] = useState(0);
//Function that gets Called when user clicks the button
  function handleButtonClicks(){
    var temp = clickedTimes;//temp is just a temporal variable that gets the current number of times user has clicked the button
    temp=temp+1;
    setClickedTimes(temp);
  }
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {
          //Heading
        }
        <Text>This is a Simple React Native App!</Text>
        <StatusBar />{
          // StatusBar adds a status bar so that our app covers the whole Screen
        }

        <View>
          <Button
            title='Click Me'
            onPress={handleButtonClicks}
          />
        </View>
        <View>
          <Text>You've clicked the button { clickedTimes} times.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //Styles for the Main Container aka the whole Screen
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    borderColor: 'black',
  },
  //Styles for the Sub Container
  subContainer:{
    backgroundColor: 'lime',
    height: '30%',
    width: '80%',
    alignItems: 'center',//Move everything to center(from left to right)
    justifyContent: 'center',//Move everything to the center from top to bottom
  },
});
