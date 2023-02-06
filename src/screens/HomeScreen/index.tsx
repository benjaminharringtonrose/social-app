import React, { FC } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';

import { ContentCard, RootView } from '../../components';
import { Size, Mock } from '../../constants';
import { IContent } from '../../types';

const HomeScreen: FC = () => {

  const renderItem = ({ item }: ListRenderItemInfo<IContent>) => (
      <ContentCard 
        id={item.id} 
        avatarUrl={item.avatarUrl} 
        name={item.name} 
        timestamp={item.timestamp} 
        caption={item.caption}
        content={item.content}
        likes={item.likes}
        comments={item.comments}
      />
    );

  return (
    <RootView>
      <FlatList 
        contentContainerStyle={{ paddingVertical: 50 }}
        data={Mock.feedData}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </RootView>
  );
};

export default HomeScreen;

const ItemSeparatorComponent = () => <View style={{ height: Size.gutter }} />