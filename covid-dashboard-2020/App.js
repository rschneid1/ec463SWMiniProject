import React from 'react';
import { NavigationContainer }  from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen    from './app/screens/WelcomeScreen';
import Dashboard        from './app/screens/Dashboard';
import CovidTest        from './app/screens/CovidTest';
import StatisticsScreen from './app/screens/StatisticsScreen';
import AdminDashboard   from './app/screens/AdminDashboard';

// https://reactnavigation.org/docs
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false }}>
        <Stack.Screen name="Welcome"        component={WelcomeScreen}     />
        <Stack.Screen name="Dashboard"      component={Dashboard}         />
        <Stack.Screen name="CovidTest"      component={CovidTest}         />
		    <Stack.Screen name="Statistics"     component={StatisticsScreen}  />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard}    />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
