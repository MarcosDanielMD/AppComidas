import * as React from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import ComidasTipicas from './ComidasTipicas';
import Doces from './doces';
import ComidaFestas from './ComidaFestas';

const Tab = createBottomTabNavigator();

export default function Rotasnavbar(){
return(
  <Tab.Navigator>
      <Tab.Screen
        name="Doces"
        component={Doces}
        options={{
          tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="food-bank" size={size} color={color} />          
              ),
        }}
      />
      <Tab.Screen
        name="ComidasTipicas"
        component={ComidasTipicas}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food-steak" size={size} color={color} />         
             ),
        }}
      />
       <Tab.Screen
        name="Comidas de Festas"
        component={ComidaFestas}
        options={{
          tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="food-bank" size={size} color={color} />          
              ),
        }}
      />
  </Tab.Navigator>
)
}