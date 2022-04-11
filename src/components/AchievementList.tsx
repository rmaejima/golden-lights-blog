import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from '../utils/graphql/query';

interface Props {}

export const AchievementList: React.VFC<Props> = () => {
  const { loading, error, data } = useQuery(GET_ARTICLES);

  if (loading) return <p>...loading</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      {data.nextJsBlogCollection.items.map((item: { title: string }) => (
        <p key={item.title}>
          {item.title}: {item.title}
        </p>
      ))}
    </>
  );
};
