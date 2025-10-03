import { View, Text } from 'react-native';
import { GlobalStyles } from '../constants/GlobalStyles';

export default function Dashboard() {
  return (
    <View className='bg-white flex-1 items-center justify-center'>
      <Text className='text-2xl font-bold mb-2'>Dashboard</Text>
      <Text className='text-base text-gray-700 mb-6'>
        Welcome to the Dashboard!r
      </Text>
      <View className='flex-row w-4/5 space-x-4'>
        <View className='flex-1 h-32 rounded-xl bg-gray-50 items-center justify-center shadow'>
          <Text className='text-lg font-bold text-gray-800'>Container 1</Text>
        </View>
        <View className='flex-1 h-32 rounded-xl bg-gray-500 items-center justify-center shadow'>
          <Text className='text-lg font-bold text-gray-800'>Container 2</Text>
        </View>
      </View>
    </View>
  );
}
