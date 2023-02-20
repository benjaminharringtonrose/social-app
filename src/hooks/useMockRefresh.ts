import { useState } from "react";

export const useMockRefresh = (ms?: number) => {
  const [refreshing, setRefreshing] = useState(false);

  const milliseconds = ms || 1000;

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
    setRefreshing(false);
    }, milliseconds)
  }

  return {
    onRefresh,
    refreshing,
  }
};