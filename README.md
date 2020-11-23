# Chat-o-matic

## How it was built

```
cd server
yarn init -y
yarn add graphql-yoga
yarn start     ----> runs server
cd ..
npx degit https://github.com/jherr/wp5-starter-react.git\#main client
cd client
yarn
yarn start     ----> runs front-end
yarn add shards-react
yarn add @apollo/client graphql
yarn add subscriptions-transport-ws
cd ..
npx degit https://github.com/jherr/wp5-starter-react.git\#main home-page
cd home-page
yarn
yarn add shards-react
yarn start
```

- `degit` just does a git clone, then removes the git directory. Then you add the branch you want to copy after the `#` then after a space give the name yo uwant to give the directory.