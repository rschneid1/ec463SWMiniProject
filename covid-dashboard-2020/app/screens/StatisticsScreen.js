import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, SafeAreaView, StyleSheet, Text
                                    } from 'react-native';

// https://reactnative.dev/docs/network

const covidDataURL = 'https://api.covid19api.com/summary'

const StatisticsScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect( ()=> {
    fetch(covidDataURL)
      .then((response)=> response.json() )
      .then((json)=> setData(json.Countries))
      .catch((error) => alert(error))
      .finally(setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}> 
      {isLoading ? <ActivityIndicator/> : ( 
        <FlatList data={data} keyExtractor={({ Country }, index) => Country}
          renderItem={ ({item})=>( 
            <Text> {item.Country}: Cases: {item.TotalConfirmed}, Deaths: {item.TotalDeaths} </Text> 
          )}
        />
      )}

      <Button title="Go back" onPress={ ()=> { navigation.goBack() } } />
    </SafeAreaView>
  )
}

export default StatisticsScreen;

const styles = StyleSheet.create({
  container: 
  { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
  },

})