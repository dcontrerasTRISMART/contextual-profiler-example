Getting started
Fivvy SDK offers a comprehensive and efficient solution for collecting valuable information about your users. With this powerful tool, you will be able to gather relevant data that will allow you to conduct in-depth analysis and gain a clear understanding of your users' behavior, preferences, and needs.
See the full API for more methods.

Installation
Please read this entire section.

npm

npm install demo-fivvy-sdk --save



yarn

yarn add demo-fivvy-sdk



Android

Permissions

AndroidManifest
Necesary to add this xmlns:tools insde the tag manifest on AndroidManifest insde android/app/src/main folder.

<manifest xmlns:tools="http://schemas.android.com/tools">


Need to add these permissions in the AndroidManifest inside android/app/src/main folder.

<uses-permission  android:name="android.permission.INTERNET" />
<uses-permission  android:name="android.permission.PACKAGE_USAGE_STATS"  tools:ignore="ProtectedPermissions" />



Integration in App
On android you must request permissions beforehand

Get user permission to check the app's usage

import { getAppUsage, openUsageAccessSettings } from  'demo-fivvy-sdk';
         
    const getAllPermissions = async () => {
      const appUsage = await getAppUsage(30);
      if (appUsage === null) {
        const haveAccess = await openUsageAccessSettings();
      }
    };




Example of use inside a view

    useEffect(() => {
        getAllPermissions();
  }, []);
    



or

   const handleTapPermissionButton = () => getAllPermissions();



Send data to Fivvy's analytics service

  const handleInitContextualDataCollection = async () => {
    const data = await initContextualDataCollection({
      customerId: customerId, // Represents an identifier of the current user
      apiKey: API_KEY, // ApiKey of Fivvy's API
      apiSecret: API_SECRET, // ApiSecrey of Fivvy's API
      appUsageDays: DAYS, // Integer that represents the last days to recollect the app usage information of the user
      authApiUrl: AUTH_API_URL, // URL of the Fivvy's Auth API 
      sendDataApiUrl: SEND_DATA_API_URL // URL of the Fivvy's Analytics Data API 
    })



API

All the information about the package and how to use functions.


initContextualDataCollection({customerId, apiKey, apiSecret, appUsageDays, authApiUrl, sendDataApiUrl}): Promise - Initiates data collection, sending it to the Fivvy's Analytics Data API.

getDeviceInformation(): Promise - returns the device hardware information of the customer.

openUsageAccessSettings() -  Open settings view to grant app usage permission.

getAppUsage(days:  number): Promise<IAppUsage[]> - returns  null if the user doesnt brings access to the App Usage or an IAppUsage Array for the all used aplications.

getAppsInstalled():  Promise<IInstalledApps[]> - returns  an IInstalledApps Array for all the installed aplications of the user.


Example
You can find an example app/showcase here

Getting the installed apps
Recovery of applications installed on the user's device.

getAppsInstalled().then(data =>  console.log('Installed apps:', data));
//  expected output
  Installed Apps: [{"name": "Camera", "packageName": "com.android.camera2"}, {"name": "Chrome", "packageName": "com.android.chrome"}, {"name": "Settings", "packageName": "com.android.settings"}, {"name": "Play Store", "packageName": "com.android.vending"}, {"name": "Drive", "packageName": "com.google.android.apps.docs"}, {"name": "Maps", "packageName": "com.google.android.apps.maps"}, {"name": "Messages", "packageName": "com.google.android.apps.messaging"}, {"name": "Photos", "packageName": "com.google.android.apps.photos"}, {"name": "YT Music", "packageName": "com.google.android.apps.youtube.music"}, {"name": "Calendar", "packageName": "com.google.android.calendar"}, {"name": "Contacts", "packageName": "com.google.android.contacts"}, {"name": "Clock", "packageName": "com.google.android.deskclock"}, {"name": "Phone", "packageName": "com.google.android.dialer"}, {"name": "Gmail", "packageName": "com.google.android.gm"}, {"name": "YouTube", "packageName": "com.google.android.youtube"}, {"name": "TMoble", "packageName": "com.android.stk"}, {"name": "Files", "packageName": "com.google.android.documentsui"}, {"name": "Voice Search", "packageName": "com.google.android.googlequicksearchbox"}, {"name": "Google", "packageName": "com.google.android.googlequicksearchbox"}] 




Terms of use
All content here is the property of Fivvy, it should not be used without their permission.
