import React, { FC } from 'react';
import { FlatList, RefreshControl, ListRenderItemInfo } from 'react-native';

import { MessageThreadButton, RootView } from '../../components';
import { Color, Mock } from '../../constants';
import { useMockRefresh, useOnFocusFadeIn } from '../../hooks';
import { IContent } from '../../types';

const MessagesScreen: FC = () => {

  const { FadeIn, animatedStyle } = useOnFocusFadeIn();
  const { onRefresh, refreshing } = useMockRefresh();

  const renderItem = ({ item }: ListRenderItemInfo<IContent>) => (
    <MessageThreadButton 
      source={{ uri: item.avatarUrl }} 
      name={item.name}
      timestamp={item.timestamp}
    />  
  );
  
  return (
    <RootView>
      <FadeIn style={{ flex: 1 }} animatedStyle={animatedStyle}>
        <FlatList
          contentContainerStyle={{ marginTop: 50 }}
          keyExtractor={(item) => item.id}
          data={Mock.messageThreadData}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl 
              refreshing={refreshing} 
              tintColor={Color.white} 
              progressViewOffset={50} 
              onRefresh={onRefresh}  
            />
          }
        />
      </FadeIn>
    </RootView>
  );
};    

export default MessagesScreen;