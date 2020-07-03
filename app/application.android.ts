@JavaProxy("org.myApp.Application")
class Application extends android.app.Application {
    public onCreate(): void {
        super.onCreate();

        // At this point modules have already been initialized

        // Enter custom initialization code here
    }

    public attachBaseContext(baseContext: android.content.Context) {
        super.attachBaseContext(baseContext);

        // This code enables MultiDex support for the application (if needed)
        androidx.multidex.MultiDex.install(this);
    }
}

