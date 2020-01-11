package com.socialshare.instagram;

import android.content.Intent;
import android.net.Uri;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class InstagramModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public InstagramModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "InstagramShare";
    }

    @ReactMethod
    public void shareVideo(String fileUri, Promise promise) {
        String mime = "video/*";
        createInstagramIntent(mime, fileUri);
    }

    @ReactMethod
    public void sharePhoto(String fileUri, Promise promise) {
        String mime = "image/*";
        createInstagramIntent(mime, fileUri);
    }

    private void createInstagramIntent(String type, String fileUri){
        // Create the new Intent using the 'Send' action.
        Intent share = new Intent(Intent.ACTION_SEND);
        // Set the MIME type
        share.setType(type);

        // Create the URI from the media
        Uri uri = Uri.parse(fileUri);

        // Add the URI to the Intent.
        share.putExtra(Intent.EXTRA_STREAM, uri);
        share.setPackage("com.instagram.android");
        share.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        // Broadcast the Intent.
        this.reactContext.startActivity(share);
    }
}
