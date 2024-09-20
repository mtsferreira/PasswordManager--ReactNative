import React, { useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';
import Toast from 'react-native-toast-message';

// components
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Dropdown } from 'react-native-element-dropdown';

// icons
import backgroundImg from '../../assets/formImg.png';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { styles } from './styles';


export function Form() {
	const navigation = useNavigation()
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [site, setSite] = useState("")
	const [password, setPassword] = useState("")

	const { getItem, setItem } = useAsyncStorage("@savepass:infos")

	async function handleNew() {
		if (!name || !email || !site || !password) {
			Toast.show({
				type: 'error',
				text1: 'Atenção!',
				text2: 'Preencha todos os campos. 😠'
			})
			return
		}
		try {
			const id = uuid.v4()

			const newData = { id, name, email, site, password }
			const response = await getItem()
			const previousData = response ? JSON.parse(response) : []
			const data = [...previousData, newData]

			Toast.show({
				type: 'success',
				text1: 'Sucesso!',
				text2: 'informação salva com sucesso. 👋'
			})
			setName('')
			setEmail('')
			setSite('')
			setPassword('')

			await setItem(JSON.stringify(data))

		} catch (error) {
			console.log(error)
			Toast.show({
				type: 'error',
				text1: 'Erro!',
				text2: 'Não foi possível salvar as informações. 😥'
			})
		}
	}

	return (
		<ImageBackground source={backgroundImg} style={styles.background}>
			{/* Header */}
			<View style={styles.header}>
				<TouchableOpacity onPress={() => navigation.goBack()} style={styles.buttonHeader}>
					<FontAwesome name="chevron-left" size={20} color="#FFF"/>
				</TouchableOpacity>

				<Text style={styles.title}>
					Cadastro
				</Text>
			</View>

			{/* content */}
			<View style={styles.form}>
				<Input
					label="Nome:"
					value={name}
					onChangeText={setName}
				/>
				<Input
					label="E-mail ou usuário:"
					autoCapitalize="none"
					value={email}
					onChangeText={setEmail}
				/>
				<View>
					<Text style={styles.selectInputText}>Mídia:</Text>
					<Dropdown
						style={styles.selectInput}
						placeholderStyle={styles.selectInputPlaceholder}
						data={[
							{ label: "Instagram", value: "Instagram" },
							{ label: "Facebook", value: "Facebook" },
							{ label: "YouTube", value: "YouTube" },
							{ label: "TikTok", value: "TikTok" },
							{ label: "LinkedIn", value: "LinkedIn" },
							{ label: "GitHub", value: "GitHub" },
						]}
						search
						labelField="label"
						valueField="value"
						placeholder="Selecione um item..."
						searchPlaceholder="Procurar..."
						value={site}
						onChange={item => {
							setSite(item.value)
						}}
					/>
				</View>

				<Input
					label="Senha:"
					secureTextEntry
					value={password}
					onChangeText={setPassword}
				/>

				<View style={styles.buttonView}>
					<Button
						title="Salvar"
						onPress={handleNew}
					/>
				</View>
			</View>
		</ImageBackground>
	)
}