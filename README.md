# Getting started
  
Fivvy SDK offers a comprehensive and efficient solution for collecting valuable information about your users. With this powerful tool, you will be able to gather relevant data that will allow you to conduct in-depth analysis and gain a clear understanding of your users' behavior, preferences, and needs.


See the full [API](#api) for more methods.

## Installation
_Please read this entire section._

### npm

```
npm install demo-fivvy-sdk --save
```

### yarn

```
yarn add demo-fivvy-sdk
```
## Android 
#### Permissions

### AndroidManifest 
Necesary to add this **xmlns:tools** insde the tag **manifest** on AndroidManifest insde *android/app/src/main* folder.
```xml
<manifest xmlns:tools="http://schemas.android.com/tools">
```

Need to add these permissions in the AndroidManifest inside *android/app/src/main* folder. 

```xml
<uses-permission  android:name="android.permission.INTERNET" />
<uses-permission  android:name="android.permission.PACKAGE_USAGE_STATS"  tools:ignore="ProtectedPermissions" />

<queries>
    <!-- Most Popular -->
    <package android:name="com.whatsapp"/> <!-- WhatsApp Messenger -->
    <package android:name="com.facebook.katana"/> <!-- Facebook -->
    <package android:name="com.google.android.youtube"/> <!-- YouTube -->
    <package android:name="com.instagram.android"/> <!-- Instagram -->
    <package android:name="com.tiktok.musically.go"/> <!-- TikTok -->
    <package android:name="com.facebook.orca"/> <!-- Messenger -->
    <package android:name="com.google.android.gm"/> <!-- Gmail -->
    <package android:name="com.android.chrome"/> <!-- Google Chrome -->
    <!-- Banking -->
    <package android:name="com.mercadopago.android"/> <!-- Mercado Pago -->
    <package android:name="com.uala.app"/> <!-- Ualá -->
    <package android:name="com.brubankbank.app"/> <!-- Brubank -->
    <package android:name="com.wilibank.app"/> <!-- Wilobank -->
    <package android:name="com.rebanking.app"/> <!-- Rebanking -->
    <package android:name="com.bind.app"/> <!-- BIND -->
    <package android:name="com.invertironline.app"/> <!-- Invertir Online -->
    <package android:name="com.balanz.inversiones.app"/> <!-- Balanz -->
    <!-- Isurance -->
    <package android:name="com.sancorseguros.app"/> <!-- Sancor Seguros -->
    <package android:name="com.lasegunda.app"/> <!-- La Segunda -->
    <package android:name="com.scristobal.app"/> <!-- San Cristóbal Seguros -->
    <package android:name="com.mercantilandina.app"/> <!-- Mercantil Andina -->
    <package android:name="com.chubb.app"/> <!-- Chubb -->
    <package android:name="com.zurich.app"/> <!-- Zurich -->
    <package android:name="com.mapfre.app"/> <!-- Mapfre -->
    <package android:name="com.sura.app"/> <!-- Sura -->
    <!-- Travel -->
    <package android:name="com.google.android.apps.maps"/> <!-- Google Maps -->
    <package android:name="com.booking.android"/> <!-- Booking -->
    <package android:name="com.tripadvisor.tripadvisor"/> <!-- TripAdvisor -->
    <package android:name="com.skyscanner.travel"/> <!-- Skyscanner -->
    <package android:name="com.airbnb.android"/> <!-- Airbnb -->
    <package android:name="com.ubercab"/> <!-- Uber -->
    <package android:name="com.kayak.android"/> <!-- Kayak -->
    <package android:name="com.hostelworld.android"/> <!-- Hostelworld -->
    <!-- Social Network -->
    <package android:name="com.twitter.android"/> <!-- Twitter -->
    <package android:name="com.snapchat.android"/> <!-- Snapchat -->
    <package android:name="com.linkedin.android"/> <!-- Linkedin -->
    <package android:name="com.pinterest"/> <!-- Pinteres -->
    <package android:name="com.skype.raider"/> <!-- Skype -->
    <package android:name="com.viber.voip"/> <!-- Viber -->
    <package android:name="org.telegram.messenger"/> <!-- Telegram -->
    <package android:name="com.tencent.mm"/> <!-- WeChat -->
    <!-- Communication -->
    <package android:name="signal.org"/> <!-- Signal -->
    <package android:name="com.google.android.apps.tachyon"/> <!-- Google Duo -->
    <package android:name="com.discordapp.app"/> <!-- Discord -->
    <package android:name="com.zoom.videomeetings"/> <!-- Zoom -->
    <package android:name="com.linecorp.line"/> <!-- Line -->
    <package android:name="com.kakao.talk"/> <!-- KakaoTalk -->
    <package android:name="imo.im"/> <!-- IMO -->
    <package android:name="com.google.android.apps.googlevoice"/> <!-- Google Voice -->
    <!-- Tools -->
    <package android:name="com.google.android.keep"/> <!-- Google Keep -->
    <package android:name="com.evernote"/> <!-- Evernote -->
    <package android:name="com.microsoft.office.onenote"/> <!-- Microsoft OneNote -->
    <package android:name="com.todoist"/> <!-- Todoist -->
    <package android:name="com.wunderlist"/> <!-- Wunderlist -->
    <package android:name="com.ticktick.task"/> <!-- TickTick -->
    <package android:name="com.google.android.calendar"/> <!-- Google Calendar -->
    <package android:name="com.microsoft.todos"/> <!-- Microsoft To Do -->
    <!-- Games -->
    <package android:name="com.garena.game.freefire.br"/> <!-- Garena Free Fire -->
    <package android:name="com.kiloo.subwaysurf"/> <!-- Subway Surfers -->
    <package android:name="com.innersloth.io"/> <!-- Among Us! -->
    <package android:name="com.mojang.minecraftpe"/> <!-- Minecraft -->
    <package android:name="com.roblox.client"/> <!-- Roblox -->
    <package android:name="com.tencent.ig"/> <!-- PUBG Mobile -->
    <package android:name="com.king.candycrushsaga"/> <!-- Candy Crush Saga -->
    <package android:name="com.supercell.clashroyale"/> <!-- Clash Royale -->
    <!-- Real State -->
    <package android:name="com.mercadolibre.android"/> <!-- Mercado Libre -->
    <package android:name="com.zonaprop"/> <!-- Zonaprop -->
    <package android:name="com.properati.app"/> <!-- Properati -->
    <package android:name="com.oirealtor.app"/> <!-- Oi Realtor -->
    <package android:name="com.argenprop.android"/> <!-- Argenprop -->
    <package android:name="com.inmuebles24.android"/> <!-- Inmuebles24 -->
    <package android:name="com.tuhogar.app"/> <!-- Tu Hogar -->
    <package android:name="com.yvende.app"/> <!-- Ya Vende -->
    <!-- Security -->
    <package android:name="com.avast.android.mobilesecurity"/> <!-- Avast Antivirus & Security -->
    <package android:name="com.lookout"/> <!-- Lookout Security and Antivirus -->
    <package android:name="org.malwarebytes.antimalware"/> <!-- Malwarebytes Mobile Security -->
    <package android:name="com.noxgroup.app.cleaner"/> <!-- Nox Cleaner - Clean, Antivirus -->
    <package android:name="org.torproject.android"/> <!-- Orbot: Tor for Android -->
    <package android:name="org.thoughtcrime.securesms"/> <!-- Signal Private Messenger -->
    <package android:name="phonecleaner.androidmaster.cleanupspace.phone.booster"/> <!-- Phone Cleaner -->
    <package android:name="com.avg.cleaner"/> <!-- AVG Cleaner -->
    <package android:name="com.avast.android.cleaner"/> <!-- Avast Cleaner -->
    <package android:name="com.piriform.ccleaner"/> <!-- CCleaner -->
    <!-- TRADITIONAL BANKING -->
    <package android:name="com.santander.rio.app"/> <!-- Banco Santander Rio -->
    <package android:name="com.bancogalicia.mobile"/> <!-- Banco Galicia -->
    <package android:name="com.bbva.personas.android"/> <!-- BBVA -->
    <package android:name="com.citibank.argentina.app"/> <!-- CITI -->
    <package android:name="com.icbc.argentina.app"/> <!-- ICBC -->
    <package android:name="com.hsbc.mobile"/> <!-- HSBC -->
    <package android:name="com.macro.banco.macro.app"/> <!-- Banco Macro -->
    <package android:name="com.bancopatagonia.app"/> <!-- Patagonia -->
    <package android:name="com.bancoprovincia.app"/> <!-- Banco Provincia -->
    <package android:name="com.google.android.apps.nbu.paisa"/> <!-- Google Pay -->
  </queries>


```
## Integration in App
On android you must request permissions beforehand
### Get user permission to check the app's usage
We recommend create a logic with [AsyncStorage](https://github.com/react-native-async-storage/async-storage) to remember if the user doesn't want to give access to this perm.
```js
import { getAppUsage, openUsageAccessSettings } from  'demo-fivvy-sdk';
         
    const getAllPermissions = async () => {
      const appUsage = await getAppUsage(30);
      if (appUsage === null) {
        const haveAccess = await openUsageAccessSettings();
      }
    };

```
#### Example of use inside a view

```js
    useEffect(() => {
        getAllPermissions();
  }, []);
    
```
#### or
```js
   const handleTapPermissionButton = () => getAllPermissions();
```

## Send data to Fivvy's analytics service
This function will allow your app to send the information of each user to the Fivvy Analytic's API. You must add on some view or loading component that can send the data at least 1 time a day.

Every time this useEffect run, the data will be send to the Fyvvy's API.
```js
  useEffect(() => {
    const contextualConfigObj = {
      customerId: customerId, // Represents an identifier of the current user
      apiKey: API_KEY, // ApiKey of Fivvy's API
      apiSecret: API_SECRET, // ApiSecrey of Fivvy's API
      appUsageDays: DAYS, // Integer that represents the last days to recollect the app usage information of the user
      authApiUrl: AUTH_API_URL, // URL of the Fivvy's Auth API 
      sendDataApiUrl: SEND_DATA_API_URL // URL of the Fivvy's Analytics Data API 
    }
    await initContextualDataCollection(contextualConfigObj);
},[])
```


# API
#### All the information about the package and how to use functions.
|   Methods	|  Params value 	|  Return value 	| Description  	|
|---	|---	|---	|---	|
|   `initContextualDataCollection`	|   `Object` {customerId: `String`, apiKey: `String`, apiSecret: `String`, appUsageDays: `Int`, authApiUrl: `String`, sendDataApiUrl: `String`}	|   `ContextualData`{} 	|   Initiates data collection, sending it to the Fivvy's Analytics Data API.	
|   `getDeviceInformation`	|   **Empty**	|   `Promise<IHardwareAttributes>`	|   Returns the device hardware information of the customer.	|
|   `getAppUsage`	|   `Int` days. Represent the last **days** to get the usage of each app.	|   `Promise<IAppUsage[]> | null`	|   Returns  **null** if the user doesnt brings access to the App Usage or an **IAppUsage Array** for the all used aplications.	|
|   `getAppsInstalled`	|   **Empty**	|   `Promise<IInstalledApps[]>`	|   Returns  an **IInstalledApps Array** for all the queries in AndroidManifest that user had install in his phone.	|
|   `openUsageAccessSettings`	|   **Empty**	|   `Boolean`	|    Open settings view to grant app usage permission.	|


## Example
You can find an example app/showcase [here](https://gitlab.com/savvyapp/sdk_mobile_react_native/-/tree/sdk-react-native/example)
### Getting the installed apps
Recovery of applications installed on the user's device.
```js
getAppsInstalled().then(data =>  console.log('Installed apps:', data));
//  expected output
  Installed Apps: [{"name": "Camera", "packageName": "com.android.camera2"}, {"name": "Chrome", "packageName": "com.android.chrome"}, {"name": "Settings", "packageName": "com.android.settings"}, {"name": "Play Store", "packageName": "com.android.vending"}, {"name": "Drive", "packageName": "com.google.android.apps.docs"}, {"name": "Maps", "packageName": "com.google.android.apps.maps"}, {"name": "Messages", "packageName": "com.google.android.apps.messaging"}, {"name": "Photos", "packageName": "com.google.android.apps.photos"}, {"name": "YT Music", "packageName": "com.google.android.apps.youtube.music"}, {"name": "Calendar", "packageName": "com.google.android.calendar"}, {"name": "Contacts", "packageName": "com.google.android.contacts"}, {"name": "Clock", "packageName": "com.google.android.deskclock"}, {"name": "Phone", "packageName": "com.google.android.dialer"}, {"name": "Gmail", "packageName": "com.google.android.gm"}, {"name": "YouTube", "packageName": "com.google.android.youtube"}, {"name": "TMoble", "packageName": "com.android.stk"}, {"name": "Files", "packageName": "com.google.android.documentsui"}, {"name": "Voice Search", "packageName": "com.google.android.googlequicksearchbox"}, {"name": "Google", "packageName": "com.google.android.googlequicksearchbox"}] 

```






## Terms of use
All content here is the property of Fivvy, it should not be used without their permission.






