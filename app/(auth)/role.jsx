import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams, useFocusEffect, router } from 'expo-router'

import DefaultInput from '../../components/inputs/DefaultInput'
import TopNavAction from '../../components/main/TopNavAction'
import ButtonPrimary from '../../components/buttons/ButtonPrimary'

import images from '../../assets/images'

const RoleScreen = () => {

  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState('')

  const accounts = [
    {
      title: 'Player',
      subTitle: 'Lorem Ipsum is simply dummy text.',
      image: images.dummy.player
    },
    {
      title: 'Manager',
      subTitle: 'Lorem Ipsum is simply dummy text.',
      image: images.dummy.manager
    },
    {
      title: 'Admin',
      subTitle: 'Lorem Ipsum is simply dummy text.',
      image: images.dummy.admin
    }
  ]

  return (
    <GestureHandlerRootView>
      <SafeAreaView className="bg-white h-full">
        <TopNavAction title="Role Selection" />
        <ScrollView>
          {accounts.map(account => (
            <TouchableOpacity key={account.title} className="flex flex-row m-4 p-4 border-[1px] border-gray-200 items-center rounded-2xl"> 
              <View className="flex-1">
                <Text>{account.title}</Text>
                <Text>{account.subTitle}</Text>
              </View>
              <Image
                source={account.image}
                className="w-[60px] h-[60px]"
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ButtonPrimary 
          text="Create Account"
          containerProps="mx-4 my-4"
          onPress={() => router.push({
            pathname: '/success',
            params: {
              message: 'Your Account has been created'
            }
          })}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default RoleScreen