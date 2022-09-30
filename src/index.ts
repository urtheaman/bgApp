import {View, Text} from 'react-native';
import React from 'react';
import BackgroundService from 'react-native-background-actions';
import {useEffect} from 'react/cjs/react.production.min';

const Home = () => {
  useEffect(() => {
    const bgCallback = (taskData) => new Promise((res, rej) => res(console.log('here we go!', taskData)));
    const options = {
      taskName: 'task',
      taskTitle: 'title',
      taskDesc: 'desc',
      taskIcon: {
        name: 'ic_launcher',
        type: 'mipmap',
      },
      color: '#ff00ff',
      linkingURI: 'localhost:3000',
      parameters: {
        delay: 1000,
      },
    };
    await BackgroundService.start(bgCallback, options);
  }, []);

  return (
    <View>
      <Text>BG App</Text>
    </View>
  );
};

export default Home;
