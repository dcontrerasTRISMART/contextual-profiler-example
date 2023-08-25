import {
  getAppUsage,
  getAppsInstalled,
  getDeviceInformation,
  initContextualDataCollection,
  openUsageAccessSettings,
} from 'demo-fivvy-sdk';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';

const customerId = 'customer-id-test';

const DAYS = 30;

// Valores de prueba, no son funcionales en este repositorio.
const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;
const AUTH_API_URL = process.env.AUTH_API_URL;
const SEND_DATA_API_URL = process.env.DATA_API_URL;

interface AppUsage {
  appName: string;
  packageName: string;
  usage: number;
}
export default function App() {
  const [deviceId, setDeviceId] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const handlGetAppsInstalled = () =>
    getAppsInstalled().then(apps => console.log('***** appsIstalled:', apps));
  const handleGetAppUsage = () =>
    getAppUsage(30).then((appUsage: AppUsage[]) =>
      console.log('***** appUsage:', appUsage),
    );
  const getAllPermissions = async () => {
    const appUsage = await getAppUsage(30);

    if (appUsage === null) {
      await openUsageAccessSettings();
    }

    const getApps = await getAppsInstalled();

    if (getApps) {
      console.log(getApps);
    }
  };
  useEffect(() => {
    getAllPermissions();
  }, []);

  // useEffect(() => {
  //   console.log(appStateVisible);
  // }, [appStateVisible]);

  const handleGetDeviceInformation = () =>
    getDeviceInformation().then(deviceInfo => {
      console.log('***** deviceInfo:', deviceInfo);
      setDeviceId(deviceInfo.device_id);
    });
  const showToast = () => {
    ToastAndroid.show('Send information successfuly !', ToastAndroid.SHORT);
  };

  const handleInitContextualDataCollection = async () => {
    setIsLoading(true);
    initContextualDataCollection({
      customerId: customerId,
      apiUsername: API_KEY,
      apiPassword: API_SECRET,
      appUsageDays: DAYS,
      authApiUrl: AUTH_API_URL,
      sendDataApiUrl: SEND_DATA_API_URL,
    })
      .then(data => {
        console.log('***** contextualData:', data);
        showToast();
        // setShowSendDataButton(false);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo_fivvy.png')} />
      <Pressable style={styles.buttonContainer} onPress={handlGetAppsInstalled}>
        <Text style={styles.fivvyButtonStyle}>
          {'Get apps installed'.toUpperCase()}
        </Text>
      </Pressable>
      <Pressable
        style={styles.buttonContainer}
        onPress={openUsageAccessSettings}>
        <Text style={styles.fivvyButtonStyle}>
          {'Set usage apps read permission'.toUpperCase()}
        </Text>
      </Pressable>
      <Pressable style={styles.buttonContainer} onPress={handleGetAppUsage}>
        <Text style={styles.fivvyButtonStyle}>
          {'Get apps usage'.toUpperCase()}
        </Text>
      </Pressable>
      <Pressable
        style={styles.buttonContainer}
        onPress={handleGetDeviceInformation}>
        <Text style={styles.fivvyButtonStyle}>
          {'Get device information'.toUpperCase()}
        </Text>
      </Pressable>
      <View>
        <Text style={styles.deviceId}>{`Your DeviceId: ${deviceId}`}</Text>
      </View>
      {isLoading && <ActivityIndicator color={'#50C7FA'} size={'large'} />}
      <Pressable
        style={styles.buttonContainer}
        onPress={handleInitContextualDataCollection}
        disabled={isLoading}>
        <Text style={styles.fivvyButtonStyle}>{'Send data'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    position: 'relative',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  buttonContainer: {marginVertical: 10, width: '80%', padding: 16},
  companyTitle: {fontSize: 20, fontWeight: '500', color: '#8C8C8C'},
  deviceId: {fontSize: 20, fontWeight: '500', color: '#505050'},
  fivvyButtonStyle: {
    backgroundColor: '#50C7FA',
    borderRadius: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12,
    paddingTop: 12,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
