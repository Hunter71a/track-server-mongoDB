# track-server-mongoDB
Middleware that connects a react-native GPS tracking app to a mongoDB instance with user authentication and track storage.

Steps to make operational:
1) replace the user_name and password in the connection string
2) start an instance of "ngrok http 3030" to tunnel to database and connect react-native app
3) at command line start server with "npm run dev"
4) within react-native Tracks app replace baseURL from "http://2f956db87d9d.ngrok.io" to your connection URL
5) run tracks through expo and connect to phone by QR code
6) create custom tracks as you walk or hike
