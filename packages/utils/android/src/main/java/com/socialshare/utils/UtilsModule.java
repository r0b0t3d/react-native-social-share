package com.socialshare.utils;

import android.content.Context;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.support.v4.content.FileProvider;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.File;

public class UtilsModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public UtilsModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "ShareUtils";
    }

    @ReactMethod
    public void isAppInstalled(String packageName, Promise promise) {
        boolean isInstalled = isPackageInstalled(packageName, this.reactContext);
        promise.resolve(isInstalled);
    }

    @ReactMethod
    public void uriForFile(String path, Promise promise) {
        Uri uriForFile = FileProvider.getUriForFile(getCurrentActivity(),
                this.getReactApplicationContext().getPackageName() + "socialshare.provider", new File(path));
        promise.resolve(uriForFile.toString());
    }

    private boolean isPackageInstalled(String packageName, Context context) {
        PackageManager pm = context.getPackageManager();
        try {
            pm.getPackageInfo(packageName, 0);
            return pm.getApplicationInfo(packageName, 0).enabled;
        } catch (PackageManager.NameNotFoundException e) {
            return false;
        }
    }
}
