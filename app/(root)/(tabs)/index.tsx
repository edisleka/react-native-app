import { Text, View } from 'react-native'
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text className='font-bold my-10 text-3xl font-rubik'>
        Welcome to ReState
      </Text>
    </View>
  )
}
