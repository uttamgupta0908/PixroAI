import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './Components/Header';
import MonochromeGrid from './Components/MonochromeGrid';
import PromptInput from './Components/PromptInput';
import SearchBar from './Components/SearchBar';
import TemplateGrid from './Components/TemplateGrid';
import { monochromeData, templateData } from './data/mockData';

export default function App() {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null);
  const [promptText, setPromptText] = useState('');

  return (

    <SafeAreaProvider >
      <SafeAreaView className=" bg-background ">
        <StatusBar />
        <ScrollView >
          <Header />
          <SearchBar />
          <PromptInput
            value={promptText}
            onChangeText={setPromptText}
          />

          <TemplateGrid
            data={templateData}
            selectedId={selectedTemplateId}
            onTemplateSelect={setSelectedTemplateId}
          />
          <MonochromeGrid data={monochromeData} />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}