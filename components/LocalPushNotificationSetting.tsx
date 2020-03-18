import {AppState, PushNotificationIOS} from 'react-native';
import PushNotification from 'react-native-push-notification';

const PushNotificationSetting = {
  reminderPushDate: new Date(),
  reminderMessage: '',
  checkInPushDate: new Date(),
  checkInMessage: '',
};

const _handleAppStateChange = nextAppState => {
  if (nextAppState === 'active') {
    _registerLocalNotification();
  }
};

const _unregisterLocalNotification = () => {
  PushNotification.setApplicationIconBadgeNumber(0);
  PushNotification.cancelAllLocalNotifications();
};
const _registerLocalNotification = () => {
  //delete current push notification setting
  _unregisterLocalNotification();
  console.log('reminderMessage :', PushNotificationSetting.reminderMessage);
  console.log('checkInMessage :', PushNotificationSetting.checkInMessage);
  //For reminder
  PushNotification.localNotificationSchedule({
    userInfo: {id: 'reminder'},
    title: 'One Moon',
    message: PushNotificationSetting.reminderMessage,
    playSound: false,
    date: PushNotificationSetting.reminderPushDate,
    // Trigger each month, week, day, hour, minute, time
    repeatType: 'hour', //TODO it should be 'day' in production
    repeatTime: 1,
  });
  console.log(
    'Set up check in push notification reminderMessage=:',
    PushNotificationSetting.reminderMessage,
    ' date=',
    PushNotificationSetting.reminderPushDate.toLocaleString(undefined, {}),
  );
  //For check-in
  PushNotification.localNotificationSchedule({
    userInfo: {id: 'check-in'},
    title: 'One Moon',
    message: PushNotificationSetting.checkInMessage,
    playSound: false,
    date: PushNotificationSetting.checkInPushDate,
    // Trigger each month, week, day, hour, minute, time
    repeatType: 'minute', //TODO it should be 'day' in production
    repeatTime: 1,
  });
  console.log(
    'Set up check in push notification checkInMessage=:',
    PushNotificationSetting.checkInMessage,
    ' date=',
    PushNotificationSetting.checkInPushDate.toLocaleString(),
  );
};

export default {
  confirm: () => {
    console.log('confirm :');
    PushNotification.configure({
      onNotification: function(notification) {
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      popInitialNotification: true, // default: true
      requestPermissions: true, //(optional) default: true
    });
  },
  register: (
    reminderPushHour,
    reminderPushMin,
    reminderPushSec,
    reminderMessage,
    checkInPushHour,
    checkInPushMin,
    checkInPushSec,
    checkInMessage,
  ) => {
    PushNotificationSetting.reminderPushDate = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      reminderPushHour,
      reminderPushMin,
      reminderPushSec, //second is always 0
    );
    PushNotificationSetting.checkInPushDate = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      checkInPushHour,
      checkInPushMin,
      checkInPushSec, //second is always 0
    );
    PushNotificationSetting.reminderMessage = reminderMessage;
    PushNotificationSetting.checkInMessage = checkInMessage;

    _registerLocalNotification();

    //When a user close or open this app
    AppState.addEventListener('change', nextAppState =>
      _handleAppStateChange(nextAppState),
    );
  },
  unregister: () => {
    AppState.removeEventListener('change', _handleAppStateChange);
    _unregisterLocalNotification();
  },
  completeTodayTask: () => {
    //If it is before reminder time, cancel today's reminder push notification
    if (
      new Date().getTime() > PushNotificationSetting.reminderPushDate.getTime()
    ) {
      return;
    }
    //Reschedule reminder push notification
    _unregisterLocalNotification();
    //Start tomorrow
    const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);
    PushNotificationSetting.reminderPushDate = new Date(
      tomorrow.getFullYear(),
      tomorrow.getMonth(),
      tomorrow.getDate(),
      PushNotificationSetting.reminderPushDate.getHours(),
      PushNotificationSetting.reminderPushDate.getMinutes(),
      PushNotificationSetting.reminderPushDate.getSeconds(),
    );

    PushNotification.configure({
      onNotification: function(notification) {
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      popInitialNotification: true, // default: true
      requestPermissions: true, //(optional) default: true
    });

    _registerLocalNotification();

    //When a user close or open this app
    AppState.addEventListener('change', nextAppState =>
      _handleAppStateChange(nextAppState),
    );
  },
};
