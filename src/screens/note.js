import React from 'react';
import { Text, View } from 'react-native';

const NoteScreen = (props) => {
  const id = props.navigation.getParam('id');

  return (
    <View style={{ pading: 10 }}>
      <Text>This is a Note ID {id}</Text>
    </View>
  );
};

export default NoteScreen;
