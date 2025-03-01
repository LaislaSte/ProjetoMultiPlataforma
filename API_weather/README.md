# API WEATHER

![image](https://github.com/user-attachments/assets/4ee863fe-acfe-4590-a788-77e13cbc6737)

> Support for POST and GET requests

## Resource Information
* Response Formats: JSON
* Requires Authentication? NO.

## How do I run the project?
1. Create a project firebase with realtime database (tutorial: https://firebase.google.com/docs/database/web/start)
2. Copy informations about your realtime database
3. Create a .env file in the /src directory
4. Fill in the following fields:
   
| VARIABLE            | DESCRIPTION                               |
|---------------------|-------------------------------------------|
| API_KEY             | firebase information                      |
| AUTH_DOMAIN         | firebase information                      |
| PROJECT_ID          | firebase information                      |
| STORAGE BUCKET      | firebase information                      |
| MESSAGING_SENDER_ID | firebase information                      |
| APP_ID              | firebase information                      |
| DB_URL              | firebase information                      |
| PORT                | Port server running                       |
| CORS_ORIGIN         | ALLOW ORIGINS (EX:http://localhost:3001/) |

5. run "node app.js" in /src folder

## How can I do a request to the API?
   
#### URL: http://localhost:{{PORT}} or http://localhost:3004

| Request | Endpoint     |
|---------|--------------|
| GET     | /listWeather |
| POST    | /addWeather  |

Content-type: x-www-form-urlencoded

Parameters required on body:
| Key         | value |
|-------------|-------|
| humidity    |  int  |
| temperature |  int  |

![image](https://github.com/user-attachments/assets/58957b0a-3f21-4a94-91ba-8e6958d688bb)

### Messages about updates on the server via webSocket:

![image](https://github.com/user-attachments/assets/d013a6b5-e081-4c5e-bf85-dae82c93c10b)




