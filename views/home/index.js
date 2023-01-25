import { FlatList } from "react-native";
import React, { useState } from "react";
import { EXPLORE_POSTS } from "../../queries";
import { useQuery } from "@apollo/client";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import VideoPlayer from "../../components/player";
import { WINDOW_HEIGHT } from "../../utils";

export default function Home() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const bottomTabHeight = useBottomTabBarHeight();
  const { loading, error, data } = useQuery(EXPLORE_POSTS, {
    variables: {
      request: {
        limit: 5,
        sources: ["lenstube-bytes"],
        publicationTypes: ["POST"],
        sortCriteria: "CURATED_PROFILES",
      },
    },
  });

  const pageInfo = data?.explorePublications?.pageInfo;
  const videos = data?.explorePublications?.items;

  return (
    <FlatList
      data={videos}
      pagingEnabled
      renderItem={({ item, index }) => (
        <VideoPlayer data={item} isActive={activeVideoIndex === index} />
      )}
      onScroll={(e) => {
        const index = Math.round(
          e.nativeEvent.contentOffset.y / (WINDOW_HEIGHT - bottomTabHeight)
        );
        setActiveVideoIndex(index);
      }}
    />
  );
}
