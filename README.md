# Playmodoro
<!--<SHORT-PRESENTATION>-->

<!--</SHORT-PRESENTATION>-->

You have to create a Google api key and put it in .env file in the root of the project.

https://developers.google.com/youtube/registering_an_application


## Running the project

```bash
docker compose -f compose-local.yaml up
```

Test the frontend http://localhost:8080
Test the backend http://localhost:8081

## Modifying the frontend

Connect to the frontend container then

```bash
cd /src
npm start
```
Develop the frontend in http://localhost:3000


