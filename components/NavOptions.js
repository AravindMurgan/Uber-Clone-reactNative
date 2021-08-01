import React from 'react';
import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';


const data = [
	{
		id: '123',
		title: 'Get a ride',
		image: 'https://links.papareact.com/3pn',
		screen: 'MapScreen',
	},
	{
		id: '456',
		title: 'Order food',
		image: 'https://links.papareact.com/28w',
		screen: 'EatsScreen',
	},
];

const NavOptions = () => {
	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<TouchableOpacity style={tw `p-2 pl-8 pb-8 bg-gray-200 m-2 w-40`}>
					<View>
						<Image
							style={{ width: 120, height: 120, resizeMode: 'contain' }}
							source={{ uri: item.image }}
						/>
						<Text style={tw `mt-2 text-lg font-semibold text-black`}>
							{item.title}
						</Text>
						<Icon
							style={tw `rounded-full bg-black w-10 p-2 mt-4`}
							name='arrowright'
							color='white'
							type='antdesign'
						/>
					</View>
				</TouchableOpacity>
			)}
			horizontal
		/>
	);
};

export default NavOptions;

const styles = StyleSheet.create({});
