import { Image, StyleSheet, Button, View } from "react-native"
import { useEffect, useCallback } from 'react'
import { useLocalSearchParams, useFocusEffect, router } from 'expo-router'

const HomeScreen = () => {

  useFocusEffect(
    useCallback(() => {
      router.replace('/login')
    }, [])
  )

  return (
    <View></View>
  )
}

export default HomeScreen