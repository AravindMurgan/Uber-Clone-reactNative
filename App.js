import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store/store';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
			<SafeAreaProvider>
				<View style={styles.container}>
					<HomeScreen />
				</View>
			</SafeAreaProvider>
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
