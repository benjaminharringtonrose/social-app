import React, { FC, useState } from 'react';
import { FlatList, ListRenderItemInfo, RefreshControl, View } from 'react-native';
import Reanimated from 'react-native-reanimated';

import { ContentCard, RootView } from '../../components';
import { Size, Mock, Color } from '../../constants';
import { useOnFocusFadeIn } from '../../hooks';
import { IContent } from '../../types';

const HomeScreen: FC = () => {
  const [refreshing, setRefreshing] = useState(false);

  const opacity = useOnFocusFadeIn();

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
      <Reanimated.View style={opacity}>
        <FlatList
          contentContainerStyle={{ paddingVertical: 50 }}
          data={Mock.feedData}
          renderItem={renderItem}
          ItemSeparatorComponent={ItemSeparatorComponent}
          refreshControl={
            <RefreshControl 
              refreshing={refreshing} 
              tintColor={Color.white} 
              progressViewOffset={50} 
              onRefresh={onRefresh}  
            />
          }
        />
      </Reanimated.View>

    </RootView>
  );
};

export default HomeScreen;

const ItemSeparatorComponent = () => <View style={{ height: Size.gutter }} />