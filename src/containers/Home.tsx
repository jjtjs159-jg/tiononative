import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { BrandedHeader } from 'components/headers';
import 'react-native-gesture-handler';
import Main from './Main/Index';
import Sign from './Sign/Index';

const Stack = createStackNavigator();
const { Screen, Navigator } = Stack;

const Home: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name="Main"
                    component={Main}
                    options={{
                        header: (props) => <BrandedHeader {...props} />
                    }}
                />
                <Screen
                    name="Sign"
                    component={Sign}
                />
            </Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}

export default Home;