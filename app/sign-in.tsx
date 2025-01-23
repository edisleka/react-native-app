import React from 'react'
import images from '@/constants/images'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constants/icons'

const SignIn = () => {
  const handleLogin = () => {}

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <Image
          source={images.onboarding}
          resizeMode='contain'
          className='w-full h-4/6'
        />
        <View className='px-10'>
          <Text className='text-base text-center uppercase font-rubik text-black-200'>
            Welcome to ReState
          </Text>
          <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>
            Let's Get You Closer to {'\n'}
            <Text className='text-primary-300'>Your Ideal Home</Text>
          </Text>
          <Text className='text-lg font-rubik text-black-200 text-center  mt-12'>
            Login to ReState with Goggle
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className='bg-white shadow-md rounded-full shadow-zinc-300 w-full py-4 mt-5'
          >
            <View className='flex flex-row justify-center items-center'>
              <Image
                source={icons.google}
                resizeMode='contain'
                className='w-5 h-5'
              />
              <Text className='text-lg font-rubik-medium text-black-300 ml-2'>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default SignIn
