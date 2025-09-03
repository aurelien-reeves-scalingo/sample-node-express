

# Sample Application with Node.js and Express Framework

This sample is running on: https://node-express.is-easy-on-scalingo.com/

## Deploy via Git

Create an application on https://scalingo.com, then:

```shell
scalingo --app my-app git-setup
git push scalingo master
```

And that's it!

## Deploy via One-Click

[![Deploy to Scalingo](https://cdn.scalingo.com/deploy/button.svg)](https://my.scalingo.com/deploy)

## Running Locally

```shell
docker-compose build
docker-compose run --rm web npm install
docker-compose up
```

## Links

Documentation: https://doc.scalingo.com/languages/javascript/nodejs

test


## prune tests

| npm/yarn | env var               | cache | install dev deps | prune   |
| npm      | none                  | none  | yes              | yes     |
| npm      | none                  | yes   | yes              | yes     |
| npm      | NPM_CONFIG_PRODUCTION | none  | no               | skipped |
| npm      | NPM_CONFIG_PRODUCTION | yes   | no               | Skipped |
| yarn     | none                  | none  | yes              | yes     |
| yarn     | none                  | yes   | yes              | yes     |
| yarn     | YARN_PRODUCTION       | no    | no               | skipped |
| yarn     | YARN_PRODUCTION       | yes   | no               | skipped |
| yarn 2+  | none                  | no    | yes              | yes     |
| yarn 2+  | none                  | yes   | yes              | yes     |
| yarn 2+  | YARN2_SKIP_PRUNING    | no    | yes              | skipped |
| yarn 2+  | YARN2_SKIP_PRUNING    | yes   | yes              | skipped |
