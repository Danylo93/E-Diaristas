import React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from '@assets/img/logos/e-diaristas-logo.png';
import { NavigationTheme } from 'ui/themes/app-theme';
import Index from 'pages';

const Stack = createStackNavigator();

const Router: React.FC = () => {
    return (
        <NavigationContainer theme={NavigationTheme}>
            <Stack.Navigator
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerTitle: () => (
                        <Image
                            style={{
                                width: 150,
                                height: 50,
                                resizeMode: 'contain',
                            }}
                            source={Logo}
                        />
                    ),
                }}
            >
                <Stack.Screen name="Index" component={Index} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
