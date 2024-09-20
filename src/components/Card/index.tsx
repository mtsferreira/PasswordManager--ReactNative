import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';

export type CardProps = {
	id: string;
	name: string;
	email: string;
	site: string;
	password: string;
}
type Props = {
	data: CardProps;
	onPress: () => void;
}

export function Card({ data, onPress }: Props) {
	const [isVisible, setIsVisible] = useState(false);

	function toggleIsVisible() {
		setIsVisible(prevState => !prevState);
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={toggleIsVisible}>
				<MaterialIcons
					name={isVisible ? "visibility" : "visibility-off"}
					size={25}
					color="#FFF"
				/>
			</TouchableOpacity>

			<View style={styles.content}>
				<View>
					<Text style={styles.title} numberOfLines={1}>
						{data.name}
					</Text>
					<Text style={styles.site} numberOfLines={1}>
						{data.site}
					</Text>

					{isVisible
						?
						<Text style={styles.password} numberOfLines={1}>
							{data.password}
						</Text>
						:
						<Text style={styles.email} numberOfLines={1}>
							{data.email}
						</Text>
					}
				</View>
			</View>

			<TouchableOpacity
				style={styles.button}
				onPress={onPress}
			>
				<MaterialIcons
					name="delete"
					size={22}
					color="#CD2929"
				/>
			</TouchableOpacity>
		</View>
	);
}