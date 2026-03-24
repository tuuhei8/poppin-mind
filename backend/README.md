# Poppin Mind — Backend

Description of current backend functionality.

---

## Setup for development

1. Within terminal navigate to poppin-mind/backend and run npm install
2. Add a .env file
3. Within the .env file add PORT=3000 (or another port number if you prefer, adjust vite.config.js accordingly)
4. Set up a mongo database for development and testing, then add MONGODB_URI=link_to_db_here to .env

In the app.js file the statement 'app.use(express.static('dist'))' is, for the time being, commented out. If uncommented it serves the frontend production build from 'dist'.

### Templates for documents

This backend uses three mongoose schemas to handle three collections of documents within a MongoDB database,
services, prices and qualifications.

Templates for setting up a new database, details may be adjusted as the development progresses:

Notice: if copying and pasting to mongo's web interface make sure that the last field of the document does NOT have a puctuation mark at the end, only add punctuation in between fields.

1. Template for a service document (you can copy the necessary fields into a new document, id should be set automatically by mongo)

    ```js
    {
      "_id": "included for the sake of example, do not copy/paste this field",
      "icon": "",
      "title": "",
      "desc": "",
      "link": ""
    }
    ```

2. Template for a price document (you can copy the necessary fields into a new document, id should be set automatically by mongo)

    ```js
    {
      "_id": "included for the sake of example, do not copy/paste this field",
      "onlineSession": { "price": "", "duration": "" },
      "inPersonSession": { "price": "", "duration": "" },
      "introductoryCall": { "price": "", "duration": "" }
    }
    ```

3. Template for a qualification document (you can copy the necessary fields into a new document, id should be set automatically by mongo):

    ```js
      {
        "_id": "included for the sake of example, do not copy/paste this field",
        "icon": "",
        "title": "",
        "desc": ""
      }
    ```

## Endpoints

There are six endpoints currently available:

1. /api/services

2. /api/services/:id

3. /api/qualifications

4. /api/qualifications/:id

5. /api/prices

6. /api/prices/:id

All of the above endpoints can be tested with the test files found in the "rest-tests" folder (requires REST Client plugin for Visual Studio Code)

Notice: by default mongo stores the id field as "._id", but the mongoose schema model files here have been set to replace the field with ".id".

## Script commands

1. Start in production mode

    ```bash
    npm start
    ```

2. Start in dev mode

    ```bash
    npm run dev
    ```

3. Build UI

    ```bash
    npm run build:ui
    ```

4. Build UI & push to github

    ```bash
    npm run deploy:full
    ```