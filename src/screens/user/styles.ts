import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	header: {
		height: 50,
		paddingLeft: 20,
		justifyContent: 'center',
		backgroundColor: 'transparent'
	},
	container: {
		flex: 1,
		padding: 30
	},
	content: {
		margin: 'auto',
		padding: 20,
		width: '100%',
		alignItems: 'center',
	},
	title: {
		fontSize: 15,
		color: '#FFF',
		marginBottom: 20,
	},
	input: {
		height: 56,
		width: '100%',
		borderColor: '#FB9090',
		borderBottomWidth: 2,
		paddingLeft: 22,
		borderRadius: 4,
	},
	avatarContainer: {
		flexDirection: 'row',
		gap: 30,
		alignItems: 'center',
	},
	avatar: {
		width: 70,
		height: 70,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		marginTop: 20,
		borderWidth: 1,
		borderColor: '#FFF',
	},
	buttonAvatar: {
		height: 45,
		width: '70%',
		backgroundColor: '#F7436C',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
		borderRadius: 30,
		borderWidth: 1,
		borderColor: '#FB9090'
	},
	buttonConfirm: {
		height: 45,
		width: '50%',
		backgroundColor: '#7D0778',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 80,
		borderRadius: 30,
	},
});
