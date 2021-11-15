import { Router } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { queryResolvers, queryTypeDefinitions } from '@services/queryGraphql';
import { crudResolvers, crudTypeDefinitions } from '@services/crudGraphql';

const graphqlRouter = Router();

const querySchema = makeExecutableSchema({
  resolvers: queryResolvers,
  typeDefs: queryTypeDefinitions,
});

const crudSchema = makeExecutableSchema({
  resolvers: crudResolvers,
  typeDefs: crudTypeDefinitions,
});

graphqlRouter.get('/', graphqlHTTP({ schema: querySchema, graphiql: true, }));

graphqlRouter.post('/crud', graphqlHTTP({ schema: crudSchema, graphiql: true, }));

export { graphqlRouter };
