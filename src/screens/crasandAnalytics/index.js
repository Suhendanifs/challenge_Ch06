import React, {useEffect, useState} from 'react';
import {View, Button, TouchableOpacity, Text, Alert} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';
import analytics from '@react-native-firebase/analytics';
import messaging from '@react-native-firebase/messaging';
import axios from 'axios';
import {firebaseService} from '../../helpres/index';

export default function crasandAnalytic() {
  useEffect(() => {
    crashlytics().log('App mounted.');
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);

  return (
    <View>
      <Button title="Test Crash" onPress={() => crashlytics().crash()} />
      <TouchableOpacity
        title="Add To cart"
        onPress={async () => {
          await analytics().logEvent('Lob', {
            id: 3745092,
            item: 'Still One',
            description: ['round neck', 'long sleeved'],
            size: 'XL',
          });
          console.log(await messaging().getToken());
        }}>
        <Text>analytics</Text>
      </TouchableOpacity>
    </View>
  );
}
