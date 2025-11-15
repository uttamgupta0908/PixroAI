// src/components/MonochromeGrid.tsx
import { FlatList, Text, View } from 'react-native';
import TemplateItem from './TemplateItem'; // Reuse the same item component

type MonochromeGridProps = {
    data: { id: string; image: string; category: string }[];
};

export default function MonochromeGrid({ data }: MonochromeGridProps) {
    const renderItem = ({ item }: { item: any }) => (
        <TemplateItem
            item={item}
            isSelected={false} // Monochrome section has no selection (per Figma)
            onPress={() => { }}  // No-op or future action (e.g., preview)
        />
    );

    return (
        <View className='px-4 pb-6'>
            <View >
                <Text className="text-white text-lg font-bold mb-4">Monochrome</Text>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={3}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    contentContainerStyle={{ paddingBottom: 16 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}