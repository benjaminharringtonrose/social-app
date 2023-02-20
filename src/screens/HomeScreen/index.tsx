import React, { FC, useState } from 'react';
import { FlatList, ListRenderItemInfo, RefreshControl, View } from 'react-native';
import Reanimated from 'react-native-reanimated';

import { ContentCard, RootView } from '../../components';
import { Size, Mock, Color } from '../../constants';
import { useOnFocusFadeIn } from '../../hooks';
import { IContent } from '../../types';

const HomeScreen: FC = () => {
  const [refreshing, setRefreshing] = useState(false);

  const { FadeIn, animatedStyle } = useOnFocusFadeIn();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
    setRefreshing(false);
    }, 1000)
  }

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
      <FadeIn animatedStyle={animatedStyle}>
        <FlatList
          contentContainerStyle={{ paddingVertical: 50 }}
          data={Mock.feedData}
          renderItem={renderItem}
          ItemSeparatorComponent={ItemSeparator}
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

export default HomeScreen;

const ItemSeparator = () => <View style={{ height: Size.gutter }} />