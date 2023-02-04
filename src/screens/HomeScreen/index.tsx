import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { ContentCard, RootView } from '../../components';

const HomeScreen: FC = () => {
  return (
    <RootView>
      <ScrollView contentContainerStyle={{ marginTop: 100 }}>
        <ContentCard />
      </ScrollView>
    </RootView>
  );
};

export default HomeScreen;