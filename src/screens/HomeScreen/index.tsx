import React, { FC, useCallback } from 'react';
import { FlatList, ListRenderItemInfo, RefreshControl } from 'react-native';

import { ContentCard, ItemSeparator, RootView } from '../../components';
import { Mock, Color } from '../../constants';
import { useMockRefresh } from '../../hooks';
import { IContent } from '../../types';

import styles from './styles';

const HomeScreen: FC = () => {
  const { onRefresh, refreshing } = useMockRefresh(5000);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<IContent>) => (
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
    ),
    [],
  );

  return (
    <RootView>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        keyExtractor={(item) => item.id}
        data={Mock.feedData}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
        refreshControl={<RefreshControl refreshing={refreshing} tintColor={Color.white} progressViewOffset={50} onRefresh={onRefresh} />}
      />
    </RootView>
  );
};

export default HomeScreen;
