import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams, useFocusEffect, router } from 'expo-router'

import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import AntDesign from '@expo/vector-icons/AntDesign'

import DefaultInput from '../../components/inputs/DefaultInput'
import TopNavAction from '../../components/main/TopNavAction'
import ButtonPrimary from '../../components/buttons/ButtonPrimary'
import ButtonSecondary from '../../components/buttons/ButtonSecondary'

import images from '../../assets/images'

const PlayerStatsScreen = () => {

  const { player_image, player_name } = useLocalSearchParams()

  const weeks = [
    {
      week: 1,
      points: 42.75
    },
    {
      week: 2,
      points: -10.25
    },
    {
      week: 3,
      points: 0
    },
    {
      week: 4,
      points: 91.5
    },
    {
      week: 5,
      points: -12.75
    },
    {
      week: 6,
      points: 15.25
    },
    {
      week: 7,
      points: 27.75
    },
    {
      week: 8,
      points: 30.5
    },
    {
      week: 9,
      points: -19.25
    },
    {
      week: 10,
      points: 45.75
    }
  ]

  return (
    <GestureHandlerRootView>
      <SafeAreaView className="bg-white h-full">
        <ScrollView>
          <Text className="pb-2.5 font-medium text-gray-600 mx-4 mt-4">Players</Text>
          <View className="mx-4 mb-3 flex flex-row items-center justify-between">
            <View className="bg-[#F0F0F1] my-1 rounded-2xl px-4 py-2.5 flex flex-row space-x-2.5 items-center w-full">
              <Image
                source={player_image}
                className="w-[50] h-[50]"
              />
              <Text className="text-lg flex-1">{player_name}</Text>
              <TouchableOpacity className="bg-white h-[34] w-[34] flex items-center justify-center rounded-lg" onPress={() => router.back()}>
                <AntDesign name="close" size={18} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          
          <View className="flex flex-row mx-4 my-4">
            <View className="flex-1">
              <Text className="text-xs">Current Points</Text>
              <Text className="text-lg text-blue-400 font-semibold">53 points</Text>
            </View>
            <View className="flex-1">
              <Text className="text-xs">Weight:</Text>
              <Text className="text-lg text-blue-400 font-semibold">111.5 KG</Text>
            </View>
            <View className="flex-1">
              <Text className="text-xs">Weight Change:</Text>
              <Text className="text-lg text-green-400 font-semibold">-6 KG</Text>
            </View>
          </View>
          
          <View className="flex flex-row mx-4 my-2.5">
            <Text className="flex-1 font-bold text-xl">Points Breakdown</Text>
          </View>

          <View className="bg-[#EFF1F7] mx-4 rounded-2xl py-4">
            <View className="flex flex-row mx-4 my-2">
              <View className="flex-1">
                <Text className="text-xs">Standard Points</Text>
                <Text className="text-lg font-semibold">21 points</Text>
              </View>
              <View className="flex-1">
                <Text className="text-xs">Bonus Points</Text>
                <Text className="text-lg font-semibold">32 points</Text>
              </View>
              <View className="flex-1">
                <Text className="text-xs">Lifetime Points</Text>
                <Text className="text-lg font-semibold">53 points</Text>
              </View>
            </View>

            <View className="rounded-2xl mx-4 my-2 overflow-hidden">
              {weeks.map(wk => (
                <View key={wk.week} className="flex flex-row">
                  <Text className="flex-1 bg-[#F5F5F5] px-4 py-2.5">Week {wk.week}</Text>
                  <Text className="flex-1 bg-white px-4 py-2.5">{wk.points}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default PlayerStatsScreen