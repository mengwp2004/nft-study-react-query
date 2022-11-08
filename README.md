# 通过graphql来查询链上数据

## 1  create project
npx create-react-app nft-study-react-query


## 2 install depend
npm install @apollo/client graphql

## 3 modify graphql api 

modify index.js

```
const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/mengwp2004/nftstudy',
  cache: new InMemoryCache(),
});

```

## 4 fetach data

modify app.js

```
const GET_LOCATIONS = gql`
query GetGravatars {
  gravatars(first: 5) {
    id
    owner
    displayName
    imageUrl
  }
}
`;

```
## 5 run
npm start

## 6 reference

### 1 js参考 
https://create-react-app.dev/docs/folder-structure
### 2 apollo graphql参考
https://www.apollographql.com/docs/react/get-started



