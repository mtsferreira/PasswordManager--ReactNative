import React, { useState, useCallback } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { styles } from './styles';

export function HeaderHome() {
	const navigation = useNavigation()
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState<string | null>(null)

	const { getItem, setItem } = useAsyncStorage('@savepass:user')

	useFocusEffect(
		useCallback(() => {
			const loadUserData = async () => {
				const response = await getItem()
				const data = response ? JSON.parse(response) : {}
				setName(data.name || '')
				setAvatar(data.avatar || null)
			}
			loadUserData()
		}, [])
	)

	function handleAdd() {
		navigation.navigate('Form', {})
	}

	function handleProfileEdit() {
		navigation.navigate('User', {})
	}

	return (
		<View style={styles.container}>

			<View style={styles.infos} >
				<TouchableOpacity onPress={handleProfileEdit} style={styles.avatarContainer}>
					{avatar ? (
						<Image source={{ uri: avatar }} style={styles.avatar} />
					) : (
						<FontAwesome name='user' size={40} color='#FFF' />
					)}
				</TouchableOpacity>

				<View>
					<Text style={styles.title}>Olá, {name}</Text>
					<Text style={styles.subtitle}>Sinta-se seguro(a) aqui.</Text>
				</View>

			</View>

			<TouchableOpacity onPress={handleAdd} style={styles.button}>
				<FontAwesome name='plus' size={20} color='#FFF' />
			</TouchableOpacity>
		</View>
	)
}
