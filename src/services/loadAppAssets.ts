import { DB } from '@/services/db'
import { Alert } from 'react-native'

export const loadAppAssets = async (): Promise<void> => {
  try {
    await DB.init()
  } catch (error) {
    Alert.alert('Ошибка инициализации приложения')
  }

}
