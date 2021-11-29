import React, { FC, useState } from 'react'
import { StyleSheet, View, Image, Button, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { Camera } from 'expo-camera'

import { Color } from '@/consts/themes'

import { IPhotoPickerProps as IProps } from './types'

const askPermissions = async (): Promise<boolean> => {
  const { status } = await Camera.getCameraPermissionsAsync()

  if (status !== 'granted') {
    Alert.alert('Ошибка', 'Отсутствуют права на использование камеры')

    return false
  }

  return true
}

export const PhotoPicker: FC<IProps> = ({ onPick }) => {
  const [image, setImage] = useState<null | string>(null)

  const handleTakePhoto = async (): Promise<any> => {
    const hasPermissions = await askPermissions()

    if (!hasPermissions) {
      return
    }

    const img: ImagePicker.ImagePickerResult = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [16, 9]
    })

    if (!img.cancelled) {
      setImage(img.uri)
      onPick(img.uri)
    }
  }

  return (
    <View style={styles.view}>
      <Button title='Сделать фото' onPress={handleTakePhoto} color={Color.PRIMARY_600} />
      {image && <Image style={styles.image} source={{ uri: image }} />}
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginBottom: 16
  },
  image: {
    height: 200,
    width: '100%',
    marginTop: 16
  }
})
