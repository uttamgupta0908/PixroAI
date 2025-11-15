import { AntDesign } from '@expo/vector-icons';
import { Image, TouchableOpacity, View } from 'react-native';

type TemplateItemProps = {
    item: { id: string; image: string; category: string };
    isSelected: boolean;
    onPress: () => void;
};

export default function TemplateItem({ item, isSelected, onPress }: TemplateItemProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="flex-1 rounded-xl overflow-hidden mb-4 mx-1 bg-card"
        >
            <View className="relative">
                <Image
                    source={{ uri: item.image }}
                    className="w-full h-32"
                    resizeMode="cover"
                />
                {isSelected && (
                    <View className="absolute top-2 right-2 bg-primary rounded-full p-1">
                        <AntDesign name="check" size={16} color="black" />
                    </View>
                )}
            </View>
            {/* <View className="py-2 px-2">
                <Text className="text-white text-sm font-medium">{item.category}</Text>
            </View> */}
        </TouchableOpacity>
    );
}