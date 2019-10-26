package com.socialshare.core;

import android.content.Context;
import android.content.pm.PackageManager;

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
    public void isAppInstalled(String packageName, Callback callback) {
        boolean isInstalled = isPackageInstalled(packageName, this.reactContext);
        callback.invoke(isInstalled);
    }

    private boolean isPackageInstalled(String packageName, Context context) {
        PackageManager pm = context.getPackageManager();
        try {
            pm.getPackageInfo(packageName, PackageManager.GET_ACTIVITIES);
            return true;
        } catch (PackageManager.NameNotFoundException e) {
            return false;
        }
    }
}
