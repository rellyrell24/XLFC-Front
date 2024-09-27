import { View, Text, Image } from 'react-native'
import { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import DefaultInput from '../../components/inputs/DefaultInput'
import ButtonPrimary from '../../components/buttons/ButtonPrimary'

import images from '../../assets/images'

const LoginScreen = () => {

  const [email, setEmail] = useState('sarah_colin@gmail.com')
  const [password, setPassword] = useState('1234567')

  return (
    <SafeAreaView className="bg-white">
      <View className="h-full flex flex-col justify-center">
        <Image 
          source={images.logo}
          className="w-[135] h-[123] mx-auto"
        />
        <Text className="text-[26px] font-semibold text-center mt-4 mb-8">Welcome to the XLFC App!</Text>
        <DefaultInput 
          label="Email"
          style="mx-4 my-3"
          text={email}
          setText={setEmail}
          leftView={
            <Image 
              source={images.inputs.person}
              className="w-[20] h-[31]"
              resizeMode="cover"
            />
          }
        />
        <DefaultInput 
          label="Password"
          style="mx-4 my-3"
          text={password}
          setText={setPassword}
          secureTextEntry={true}
          leftView={
            <Image 
              source={images.inputs.lock}
              className="w-[20] h-[31]"
              resizeMode="cover"
            />
          }
          rightView={
            <Image 
              source={images.inputs.eye}
              className="w-[20] h-[31]"
              resizeMode="contain"
            />
          }
        />
        <View className="flex items-end px-4"><Text className="underline text-gray-400">Forgot Password?</Text></View>
        <ButtonPrimary 
          text="Login"
          containerProps="mx-4 my-6"
        />
        <View className="flex flex-row items-center mx-auto space-x-4 mt-4">
          <Image source={images.feedback.leftBar} className="w-[90] h-[1]" />
          <Text>Or continue with</Text>
          <Image source={images.feedback.rightBar} className="w-[90] h-[1]" />
        </View>
        <ButtonPrimary 
          text="Continue with Google"
          containerProps="mx-4 my-6"
          backgroundColor="white"
          textColor="black"
          borderColor="#D0D5DD"
          fontSize={16}
          leftView={
            <Image
              source={images.socials.google}
              className="w-[28] h-[28]"
            />
          }
        />
        <Text className="text-center">Don't have an account? <Text className="text-primary underline font-semibold">Register Now</Text></Text>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen