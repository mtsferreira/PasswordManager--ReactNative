import { useCallback, useState } from 'react';
import { FlatList, ImageBackground, Text, View } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

// components
import { Button } from '../../components/Button';
import { Card, CardProps } from '../../components/Card';
import { HeaderHome } from '../../components/HeaderHome';

// icons
import backgroundImg from '../../assets/homeImg.png';
import { styles } from './styles';


export function Home() {
	const [data, setData] = useState<CardProps[]>([])

	const { getItem, setItem, removeItem } = useAsyncStorage("@savepass:infos")

	useFocusEffect(
		useCallback(() => {
			handleFetchData()
		}, [handleRemoveAll])
	)

	async function handleFetchData() {
		const response = await getItem()
		const data = response ? JSON.parse(response) : []
		setData(data)
	}

	async function handleRemove(id: string) {
		const updatedData = data.filter((item: CardProps) => item.id !== id)
		await setItem(JSON.stringify(updatedData))
		setData(updatedData)
	}

	async function handleRemoveAll() {
		await removeItem()
		setData([])
	}

	return (
		<View style={styles.container}>
			<ImageBackground source={backgroundImg}>
				<HeaderHome />

				<View style={styles.listHeader}>
					<Text style={styles.title}>Suas infos:</Text>
					<Text style={styles.listCount}>{`${data.length} ao total`}</Text>
				</View>

				<FlatList
					data={data}
					keyExtractor={item => item.id}
					style={styles.list}
					contentContainerStyle={styles.listContent}
					renderItem={({ item }) => (
						<Card data={item} onPress={() => handleRemove(item.id)} />
					)}
				/>

				<View style={styles.footer}>
					<Button title="Limpar lista" onPress={handleRemoveAll} />
				</View>
			</ImageBackground>
		</View>
	)
}
