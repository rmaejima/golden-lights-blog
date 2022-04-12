import React, { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from '../graphql/query';
import { GetArticles } from 'graphql/generated/GetArticles';

export const AchievementList: React.VFC = () => {
  const { loading, error, data } = useQuery<GetArticles>(GET_ARTICLES);
  const items = useMemo(() => {
    if (!data || !data.nextJsBlogCollection) {
      return undefined;
    }
    const notUndefinedData = data.nextJsBlogCollection.items.filter(
      (item): item is Exclude<typeof item, null> =>
        item !== (undefined || null),
    );
    return notUndefinedData;
  }, [data]);

  if (loading) return <p>...loading</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      {items &&
        items.map((item) => (
          <p key={item.title}>
            {item.title}: {item && item.title}
          </p>
        ))}
    </>
  );
};
