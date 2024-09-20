import { StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 100,
		backgroundColor: '#00000040',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		paddingHorizontal: 20,
	},
	infos: {
		flexDirection: 'row',
		gap: 15,
		alignItems: 'center',
	},
	button: {
		height: 56,
		width: 56,
		borderRadius: 50,
		borderColor: '#E3E3E3',
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		color: '#FFF',
		fontSize: 22
	},
	subtitle: {
		color: '#FFF',
		fontSize: 15
	},
	avatar: {
		width: 70,
		height: 70,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
	},
	avatarContainer: {
		width: 70,
		height: 70,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
	}
})
