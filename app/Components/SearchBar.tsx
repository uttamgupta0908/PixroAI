import { Ionicons } from '@expo/vector-icons';
import { TextInput, View } from 'react-native';

export default function SearchBar() {
    return (
        <View className='p-4'>
            <View className="flex-row items-center bg-card rounded-2xl px-4 py-3  ">
                <Ionicons name="search" size={20} color="#AAAAAA" />
                <TextInput
                    placeholder="Search for keywords 'flowers'..."
                    placeholderTextColor="#AAAAAA"
                    className="ml-3 flex-1 text-white "
                />
            </View>
        </View>
    );
}