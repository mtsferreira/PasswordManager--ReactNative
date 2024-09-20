import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#000'
	},
	listHeader: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 32,
		paddingHorizontal: 20,
	},
	listCount: {
		color: '#CCCCCC',
		fontSize: 13
	},
	list: {
		flex: 1,
	},
	listContent: {
		padding: 24,
		paddingBottom: 150
	},
	footer: {
		padding: 24,
	},
});
