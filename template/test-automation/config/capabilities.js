const capabilities = {

     ANDROID_STAGING_APP_LOCATION: 'your_local_storage_path/test-automation/app/android/stage.apk',
     ANDROID_PROD_APP_LOCATION: 'your_local_storage_path/test-automation/app/android/prod.apk',
     IOS_STAGING_APP_LOCATION: 'your_local_storage_path/test-automation/app/ios/staging.ipa',
     IOS_PROD_APP_LOCATION: 'your_local_storage_path/test-automation/app/ios/prod.ipa',
     BUILDNAME: 'ProjectName-'+new Date().toDateString(),

     LT_ANDROID_SINGLE_DEVICE_NAME: 'Pixel 9',
     LT_ANDROID_SINGLE_OSVERSION: '14.0',
     LT_PARALLEL_ANDROID_DEVICE_ONE_NAME: 'Galaxy S24 Ultra',
     LT_PARALLEL_ANDROID_ONE_OSVERSION: '14.0',
     LT_PARALLEL_ANDROID_DEVICE_TWO_NAME: 'Galaxy S23 Ultra',
     LT_PARALLEL_ANDROID_TWO_OSVERSION: '13.0',
     LT_PARALLEL_ANDROID_DEVICE_THREE_NAME: 'Pixel 9',
     LT_PARALLEL_ANDROID_THREE_OSVERSION: '14.0',
   
     LOCAL_ANDROID_DEVICE_NAME: 'Pixel 8 Pro',
     LOCAL_ANDROID_OSVERSION: '14.0',
     LOCAL_ANDROID_DEVICE_NAME_TWO: 'Pixel 8',
     LOCAL_ANDROID_OSVERSION_TWO: '14.0',

     LOCAL_IOS_DEVICE_NAME : 'iPhone 14',
     LOCAL_IOS_OSVERSION:'16.0',
  
     LT_IOS_SINGLE_DEVICE_NAME: 'iPhone 15 Pro',
     LT_IOS_SINGLE_OSVERSION: '17.0',
     LT_PARALLEL_IOS_DEVICE_ONE_NAME: 'iPhone 15 Pro',
     LT_PARALLEL_IOS_DEVICE_ONE_OSVERSION: '17.0',
     LT_PARALLEL_IOS_DEVICE_TWO_NAME: 'iPhone 14',
     LT_PARALLEL_IOS_DEVICE_TWO_OSVERSION: '16.0'
};

module.exports = capabilities;