# Poppin Mind — Backend

Description of current backend functionality.

---

## Setup for development

1. Within terminal navigate to poppin-mind/backend and run npm install
2. Add a .env file
3. Within the .env file add PORT=3000 (or another port number if you prefer, adjust vite.config.js accordingly)
4. Set up a mongo database for development and testing, then add MONGODB_URI=link_to_db_here to .env

In the app.js file the express.static('dist') statements serve the frontend production build from 'dist'.

### Documents, database structure and connections with the frontend

---

#### Servicelinks and Services

Both /api/services/links and /api/services/:path connect to a MongoDB collection named 'services' and return the relevant parts of the document(s). See services-example for details on document structure.

#### Pricing

Prices-example.json contains an example collection of documents for pricing plans. The collection should be named 'prices' in mongo database.

#### Qualifications

Qualifications-example.json contains an example collection of documents for qualifications. The collection should be named 'qualifications' in mongo database.

## Endpoints

There are four endpoints currently available:

1. /api/services/:path

2. /api/services/links

3. /api/qualifications

4. /api/prices

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