// src/components/Header.tsx
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

type HeaderProps = {
    activeTab?: string; // optional: if controlled externally
    onTabPress?: (id: string) => void;
};

export default function Header({ activeTab: externalActiveTab, onTabPress }: HeaderProps) {
    // Use internal state if not controlled from outside
    const [internalActiveTab, setInternalActiveTab] = useState('photography');
    const [pressedTab, setPressedTab] = useState<string | null>(null);

    const activeTab = externalActiveTab ?? internalActiveTab;
    const setActiveTab = onTabPress ?? setInternalActiveTab;

    const navItems = [
        { id: 'home', label: 'Home', icon: 'home', color: '#00FF7F' },
        { id: 'videos', label: 'Videos', icon: 'videocam', color: '#00BFFF' },
        { id: 'photography', label: 'Photography', icon: 'camera', color: '#FF00FF' },
        { id: 'inaction', label: 'In action', icon: 'sparkles', color: '#FFD700' },
        { id: 'commercial', label: 'Commercial', icon: 'star', color: '#FF69B4' },
        { id: 'ar', label: 'AR A', icon: 'cube', color: '#FF8C00' },
    ];

    const handlePress = (id: string) => {
        // Immediate visual feedback
        setPressedTab(id);
        setTimeout(() => setPressedTab(null), 150); // fade out after 150ms

        // Update active tab
        setActiveTab(id);
    };

    return (
        <View className=" w-full bg-card ">
            <View className=" px-4 pb-2 flex-row items-center justify-between">
                <TouchableOpacity >
                    <AntDesign name="left" size={24} color="#FFFFFF" />
                </TouchableOpacity>
                <Text className="text-white text-xl font-bold">Photography</Text>
                <TouchableOpacity className="w-10 h-10 rounded-full bg-surface justify-center items-center">
                    <Text className="text-white font-semibold">U</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="px-4 py-3"
            >
                {navItems.map((item) => {
                    const isActive = activeTab === item.id;
                    const isPressed = pressedTab === item.id;

                    // Highlight if active OR just pressed
                    const isHighlighted = isActive || isPressed;

                    return (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => handlePress(item.id)}
                            className={`flex items-center justify-center px-4 py-2 mx-1 rounded-xl ${isHighlighted
                                ? 'bg-primary/20 border border-primary'
                                : 'bg-card'
                                }`}
                        >
                            <Ionicons
                                name={item.icon as any}
                                size={20}
                                color={isActive ? '#4CAF50' : item.color}
                            />
                            <Text
                                className={`text-xs mt-1 ${isHighlighted ? 'text-white font-medium' : 'text-gray-300'
                                    }`}
                            >
                                {item.label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
}