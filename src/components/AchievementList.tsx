import React, { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from '../graphql/query';
import { GetArticles } from 'graphql/generated/GetArticles';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { MARKS, BLOCKS } from '@contentful/rich-text-types';

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
          <div key={item.title}>
            <p>{item.title}</p>
            <p>{item.description}</p>
            {item.content &&
              documentToReactComponents(item.content.json, options)}
          </div>
        ))}
    </>
  );
};

const options = {
  renderMark: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [MARKS.BOLD]: (text: any) => <h1>{text}</h1>,
    // 動画埋め込み
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [MARKS.CODE]: (embedded: any) => (
      <div dangerouslySetInnerHTML={{ __html: embedded }} />
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      _node: any,
      children:
        | boolean
        | React.ReactChild
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined,
    ) => <p>{children}</p>,
  },
  renderText: (text: string) => text.replace('!', '?'),
};
