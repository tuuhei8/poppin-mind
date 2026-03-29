# Poppin Mind — Backend

Description of current backend functionality.

---

## Setup for development

1. Within terminal navigate to poppin-mind/backend and run npm install
2. Add a .env file
3. Within the .env file add PORT=3000 (or another port number if you prefer, adjust vite.config.js accordingly)
4. Set up a mongo database for development and testing, then add MONGODB_URI=link_to_db_here to .env

In the app.js file the express.static('dist') statements are, for the time being, commented out. If uncommented they serves the frontend production build from 'dist'.

### Documents, database structure and connections with the frontend

The App.jsx gets the information for links in the Home.jsx and Services.jsx pages from a mongo collection named 'servicelinks', at /api/serviceLinks. When one of the links is used a parameterized route is used to open a component folder named Service.The useEffect block in the Service component's index.jsx checks the path parameter of the URL and gets the matching service's details based on the "path" field, which should be identical in the matching service and servicelink documents.

Ready-made examples for the new 'servicelinks' and 'services' document collections can be found at the root folder within servicesDB-example.json file.

## Endpoints

There are five endpoints currently available:

1. /api/services

2. /api/services/:path

3. /api/servicelinks

4. /api/qualifications

5. /api/prices

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