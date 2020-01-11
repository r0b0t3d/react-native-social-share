package com.socialshare.utils;

import android.content.Context;
import android.net.Uri;

import androidx.core.content.FileProvider;

import java.io.File;

public class FileUtils {
    public static Uri uriForFile(Context context, String filePath) {
        if (filePath.startsWith("content://")) {
            return Uri.parse(filePath);
        } else {
            filePath = filePath.replace("file://", "");
            return FileProvider.getUriForFile(context,
                    context.getPackageName() + ".socialshare.provider", new File(filePath));
        }
    }
}
