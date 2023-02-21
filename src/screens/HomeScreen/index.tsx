import React, { FC } from 'react';
import { FlatList, ListRenderItemInfo, RefreshControl, View } from 'react-native';

import { ContentCard, ItemSeparator, RootView } from '../../components';
import { Mock, Color } from '../../constants';
import { useOnFocusFadeIn, useMockRefresh } from '../../hooks';
import { IContent } from '../../types';

import styles from './styles';

const HomeScreen: FC = () => {
  
  const { FadeIn, animatedStyle } = useOnFocusFadeIn();
  const { onRefresh, refreshing } = useMockRefresh();

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
          contentContainerStyle={styles.flatListContentContainer}
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

