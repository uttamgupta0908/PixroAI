import { Text, TextInput, TouchableOpacity, View } from 'react-native';

type PromptInputProps = {
    value: string;
    onChangeText: (text: string) => void;
};

export default function PromptInput({ value, onChangeText }: PromptInputProps) {
    return (
        <View className="p-4 pt-2s">
            <View className="bg-background rounded-xl p-4 mb-4 border-2 border-[#454545]" >
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    placeholder="Describe the scene around your product..."
                    placeholderTextColor="#AAAAAA"
                    multiline
                    numberOfLines={3}
                    className="text-white text-base mb-3"
                    textAlignVertical="top"
                />
                <View className="flex-row justify-between items-center">
                    <Text className="text-secondaryText text-sm"></Text>
                    <TouchableOpacity className=" px-4 py-2 rounded-lg">
                        <Text className="text-green-500 font-medium">Generate</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
}