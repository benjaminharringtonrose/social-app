import React, { FC } from 'react';
import { FlatList, ListRenderItemInfo, RefreshControl, View } from 'react-native';

import { ContentCard, ItemSeparator, RootView } from '../../components';
import { Mock, Color } from '../../constants';
import { useMockRefresh, useAnimatedTransition } from '../../hooks';
import { IContent } from '../../types';

import styles from './styles';

const HomeScreen: FC = () => {
  
  const { AnimatedTransition, animatedStyle } = useAnimatedTransition({ animationType: 'fadeInFadeOut' });
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
      <AnimatedTransition animatedStyle={animatedStyle}>
        <FlatList
          contentContainerStyle={styles.flatListContentContainer}
          keyExtractor={(item) => item.id}
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
      </AnimatedTransition>
    </RootView>
  );
};

export default HomeScreen;

