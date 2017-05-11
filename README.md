### WOOO WOOO WOOOOO

## Installation

1.  [Download](../../archive/master.zip) this template.
1.  Unzip and rename the template directory.
1.  Empty [`README.md`](README.md) and fill with your own content.
1.  Move into the new project and `git init`.
1.  Replace all instances of `'express-api-template'` with your app name. This
    includes `package.json`, various debugger configurations, and the MongoDB
    store.
1.  Install dependencies with `npm install`.
1.  Set a SECRET_KEY in the environment.
1.  Run the API server with `npm start`. If you want your code to be reloaded on
    change, you should `npm install -g nodemon` and use `nodemon` instead of
    `npm start`.
1.  Once everything is working, make an initial commit.

For development and testing, set the SECRET_KEY from the root of your
 repository using

```sh
echo SECRET_KEY=$(/usr/local/opt/openssl/bin/openssl rand -base64 66 | tr -d '\n') >>.env
```

In order to make requests from your deployed client application, you will need
to set `CLIENT_ORIGIN` in the environment (e.g. `heroku config:set
CLIENT_ORIGIN=https://<github-username>.github.io`).
