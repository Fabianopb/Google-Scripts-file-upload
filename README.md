# scripts

This script is intended for allowing users to upload identified files to your Google Drive.

_How to use

1. Create a new Google Script project in your Google Drive
2. Inside the project create a script file and a html file and copy the code in here
3. In the server.gs run the function doGet and give permission
4. Deploy the app and copy the URL
5. Now you should provide your URL to whoever you'd like to upload a file to your Google Drive

Notice that the function uploadFiles in server.gs creates a folder in your Google drive root called "Users files"
