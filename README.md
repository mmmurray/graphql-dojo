# GraphQL Dojo

In this Dojo we will be building a Metrolink live departures app using GraphQL and React.

![](docs/app-screenshot.png)

## 1 - Designing a schema

Designing the schema for a GraphQL API can be a tricky job. You need to consider all the different use cases of the API to best represent these as types and fields.

#### What you need to do 👈

```bash
git checkout ex1
```

Open up `src/server/types.graphql`. This is where you will define all of the types and fields that make up the schema of your API.

At the top of the file are a list of requirements written in plain english. Using the GraphQL Schema Language Cheat Sheet below, try to write a schema that encapsulates all of the requirements.

> ⚠️ The only files you should need to modify for this exercise are:
>
> * `src/server/types.graphql`

#### Tips 🎓

* List out all the different domain objects you can think of and try to create a type for each.
* Try to give your types a single responsibility so that they can be reused.
* Consider all the possible values each field could have in order to pick the most appropriate type.

#### Extra Time 🤓

* Think about which fields can never be `null` and make this explicit by adding a `!` after the field type.

## 2 - Creating resolvers

```bash
git checkout ex2
```

> ⚠️ The only files you should need to modify for this exercise are:
>
> * `src/server/resolvers.js`
> * `test/exercise-2.test.js`

## 3 - Combining multiple APIs

```bash
git checkout ex3
```

> ⚠️ The only files you should need to modify for this exercise are:
>
> * `src/server/resolvers.js`
> * `test/exercise-3.test.js`

## 4 - Integrate with the React app

```bash
git checkout ex4
```

> ⚠️ The only files you should need to modify for this exercise are:
>
> * `src/client/app.js.js`
> * `src/client/components/station-input-loader.js`
> * `src/client/components/departures-loader.js`

## Resources

### GraphQL Cheat Sheet

https://wehavefaces.net/graphql-shorthand-notation-cheatsheet-17cd715861b6

![](https://cdn-images-1.medium.com/max/2000/1*HaEeoGrja2IGUxzvmj5Vnw.png)

### Further reading

* https://www.youtube.com/watch?v=lAJWHHUz8_8&list=PL0zVEGEvSaeEjIDdbK1KfR7V9XBCVAr0P
* http://graphql.org/learn/
* https://www.graphql.college/
* https://github.com/facebook/dataloader
* https://github.com/graphcool/graphql-playground
* https://github.com/apollographql/apollo-link-state

## Attribution

Metrolink tram icon:
https://golborne-identity.deviantart.com/art/Metrolink-icon-302441114
