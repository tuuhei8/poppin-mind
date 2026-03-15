# Poppin Mind — Backend

Description of current backend functionality.

---

### Setup for development

1. Run npm install
2. Add a .env file
3. Within the .env file add PORT=3000 (or another port number if you prefer) and MONGODB_URI=link_to_db_here

### Endpoints and database

This backend uses two mongoose schemas to look for two collections of documents within a MongoDB database,
services and coaches.

There are four endpoints currently available:

1. /api/services will GET all service documents

2. /api/services/:id will GET a service document matching the id parameter

3. /api/coaches will GET all coach documents

4. /api/coaches/:id will GET a coach document matching the id parameter

All of the above endpoints can be tested with the test files found in the "rest-tests" folder (requires REST Client plugin for Visual Studio Code)

### Document structure

Notice: by default mongo stores the id field as "._id", but the mongoose schema model files here have been set to replace the field with ".id".

1. The services schema includes fields "title", "description" and "price" with expected String value for each. Example of a service document as it should appear in response to a GET request:

    ```js
    {
      "title": "example title string",
      "description": "example description string",
      "price": "example price string",
      "id": "example id"
    }
    ```
2. The coaches schema includes fields "name" with expected String value and "education" and "workExperience" with their value set to an Array containing a String or Strings. Example of a coach document as it should appear in response to a GET request:

  ```js
  {
    "name": "Example name string",
    "education": [
      "example degree string 1",
      "example degree string 2"
    ],
    "workExperience": [
      "example work experience string 1",
      "example work experience string 2"
    ],
    "id": "example id"
  }
  ```

### Script commands

1. Start in production mode

    ```bash
    npm start
    ```

2. Start in dev mode

    ```bash
    npm run dev
    ```

3. Build UI (does not work at the time of writing as the frontend needs to function first)

    ```bash
    npm run build:ui
    ```

4. Build UI & push to github (does not work at the time of writing as the frontend needs to function first)

    ```bash
    npm run deploy:full
    ```