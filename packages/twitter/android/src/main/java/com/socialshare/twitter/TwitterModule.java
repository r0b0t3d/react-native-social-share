package com.socialshare.twitter;

import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.util.Log;

import androidx.core.content.FileProvider;

import com.facebook.react.BuildConfig;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReadableMap;
import com.twitter.sdk.android.core.DefaultLogger;
import com.twitter.sdk.android.core.Twitter;
import com.twitter.sdk.android.core.TwitterAuthConfig;
import com.twitter.sdk.android.core.TwitterConfig;
import com.twitter.sdk.android.tweetcomposer.TweetComposer;

import java.io.File;

public class TwitterModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public TwitterModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
        String consumerKey = getMetadata("com.twitter.sdk.android.CONSUMER_KEY");
        String consumerSecret = getMetadata("com.twitter.sdk.android.CONSUMER_SECRET");
        TwitterConfig config = new TwitterConfig.Builder(reactContext)
                .logger(new DefaultLogger(Log.DEBUG))
                .twitterAuthConfig(new TwitterAuthConfig(consumerKey, consumerSecret))
                .debug(BuildConfig.DEBUG)
                .build();
        Twitter.initialize(config);
    }

    @Override
    public String getName() {
        return "TwitterShare";
    }

    @ReactMethod
    public void shareLink(String link, String description, Promise promise) {
        TweetComposer.Builder builder = new TweetComposer.Builder(reactContext)
                .text(description + " " + link);
        Intent i = builder.createIntent();
        i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        reactContext.startActivity(i);
        promise.resolve(true);
    }

    @ReactMethod
    public void sharePhoto(String filePath, String hashtag, Promise promise) {
        filePath = filePath.replace("file://", "");
        Uri uriForFile = FileProvider.getUriForFile(getCurrentActivity(),
                this.getReactApplicationContext().getPackageName() + ".socialshare.provider", new File(filePath));
        TweetComposer.Builder builder = new TweetComposer.Builder(reactContext)
                .image(uriForFile)
                .text(hashtag);
        Intent i = builder.createIntent();
        i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        reactContext.startActivity(i);
        promise.resolve(true);
    }

    private String getMetadata(String name) {
        try {
            ApplicationInfo applicationInfo = reactContext.getPackageManager()
                    .getApplicationInfo(reactContext.getPackageName(), PackageManager.GET_META_DATA);
            return applicationInfo.metaData.getString(name);
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
            return "";
        }
    }
}
