package com.reactlibrary;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class SocialShareModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public SocialShareModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "SocialShare";
    }

    @ReactMethod
    public void sampleMethod(String stringArgument, int numberArgument, Callback callback) {
        // TODO: Implement some actually useful functionality
        callback.invoke("Received numberArgument: " + numberArgument + " stringArgument: " + stringArgument);
    }

    // public static boolean isPackageInstalled(String packagename, Context context) {
    //     PackageManager pm = context.getPackageManager();
    //     try {
    //         pm.getPackageInfo(packagename, PackageManager.GET_ACTIVITIES);
    //         return true;
    //     } catch (PackageManager.NameNotFoundException e) {
    //         return false;
    //     }
    // }
}
