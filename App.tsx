import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootNav from './src/navigation/RootNav';
import {Provider as PaperProvider} from 'react-native-paper';
import {ArticlesContextProvider} from './src/storage/articlesContext';
import theme from './src/style/style';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <ArticlesContextProvider>
        <NavigationContainer>
          <RootNav />
        </NavigationContainer>
      </ArticlesContextProvider>
    </PaperProvider>
  );
};

export default App;
