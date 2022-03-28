import React from 'react';
import { Text } from 'react-native';
import NoteFeed from '../components/NoteFeed';
import { useQuery, gql } from '@apollo/client';

import Loading from '../components/Loading';

const GET_NOTES = gql`
  query notes {
    notes {
      id
      createdAt
      content
      favoriteCount
      # author {
      #   username
      #   id
      #   avatar
      # }
      # favoritedBy
    }
  }
`;

const Feed = (props) => {
  const { loading, error, data } = useQuery(GET_NOTES);
  // if the data is loading, our app will display a loading indicator
  if (loading) return <Loading />;
  // if there is an error fetching the data, display an error message
  if (error)
    return <Text>Error loading notes {console.log('error ', error)}</Text>;
  // if the query is successful and there are notes, return the feed of notes

  return <NoteFeed notes={data.notes} navigation={props.navigation} />;
};

Feed.navigationOptions = { title: 'Feed' };

export default Feed;
