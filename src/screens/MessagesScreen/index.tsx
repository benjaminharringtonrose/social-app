import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { MessageThreadButton, RootView } from '../../components';
import { Mock } from '../../constants';

const MessagesScreen: FC = () => {
  return (
    <RootView>
      <FlatList
        contentContainerStyle={{ marginTop: 50 }}
        keyExtractor={(item) => item.id}
        data={Mock.messageThreadData}
        renderItem={({ item }) => {
          return (
            <MessageThreadButton 
              source={{ uri: item.avatarUrl }} 
              name={item.name}
              timestamp={item.timestamp}
            />          
          )
        }}
      />
    </RootView>
  );
};    

export default MessagesScreen;