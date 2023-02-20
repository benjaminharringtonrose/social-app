import { useState } from "react";

export const useMockRefresh = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    console.log('triggered');
    setRefreshing(true);
    setTimeout(() => {
    setRefreshing(false);
    }, 1000)
  }

  return {
    onRefresh,
    refreshing,
  }
};