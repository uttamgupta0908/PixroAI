import { FlatList, Text, View } from 'react-native';
import TemplateItem from './TemplateItem';

type TemplateGridProps = {
    data: { id: string; image: string; category: string }[];
    selectedId: string | null;
    onTemplateSelect: (id: string) => void;
};

export default function TemplateGrid({ data, selectedId, onTemplateSelect }: TemplateGridProps) {
    const renderItem = ({ item }: { item: any }) => (
        <TemplateItem
            item={item}
            isSelected={item.id === selectedId}
            onPress={() => onTemplateSelect(item.id)}
        />
    );

    return (
        <View className='px-4 pb-6'>
            <View >
                <Text className="text-white text-base font-bold mb-4">Or try suggested templates</Text>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={3}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    contentContainerStyle={{ paddingBottom: 16 }}
                />
            </View>
        </View>
    );
}