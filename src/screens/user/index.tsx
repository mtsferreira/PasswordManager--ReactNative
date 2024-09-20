import React, { useState, useCallback } from 'react';
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

// components
import { Button } from '../../components/Button';
import * as ImagePicker from 'expo-image-picker';

//icons
import backgroundImg from '../../assets/userImg.jpg';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { styles } from './styles';

export function User() {
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

    async function handleUser() {
        if (!name) {
            Toast.show({
                type: 'info',
                text1: 'Atenção!',
                text2: 'Necessário preencher o nome. 😕'
            })
        } else {
            const userData = { name, avatar }
            await setItem(JSON.stringify(userData))

            Toast.show({
                type: 'success',
                text1: 'Sucesso!',
                text2: 'Informações atualizadas. 👋'
            })
        }
    }

    async function pickImage() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })
        if (!result.canceled) {
            setAvatar(result.assets[0].uri)
        }
    }

    return (
        <ImageBackground source={backgroundImg} style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome name="chevron-left" size={25} color="#FFF" />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Editar Perfil...</Text>

                <TextInput
                    style={styles.input}
                    placeholder='Digite seu nome...'
                    placeholderTextColor='#DDD'
                    maxLength={15}
                    value={name}
                    onChangeText={setName}
                />

                <View style={styles.avatarContainer}>
                    <Button title='Selecionar uma imagem...' onPress={pickImage} style={styles.buttonAvatar} />

                    {avatar ? (
                        <>
                        <TouchableOpacity onPress={() => setAvatar('')}>
                            <Image source={{ uri: avatar }} style={styles.avatar} />
                        </TouchableOpacity> 
                        </>
                    ) : (
                        <View style={styles.avatar}>
                            <FontAwesome name='user' size={40} color='#FFF' />
                        </View>
                    )}
                </View>

                <Button style={styles.buttonConfirm} title='Salvar' onPress={handleUser} />
            </View>
        </ImageBackground>
    )
}
