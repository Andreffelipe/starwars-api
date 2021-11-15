import 'reflect-metadata';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';

import swaggerDocument from './docs.json';
import { ruleRouter } from './routes/ruleRouter';
import { graphqlRouter } from './routes';
import { Authenticated } from './middleware/authenticated';
import { userRouter } from './routes/userRoutes';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1/rule', ruleRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/graphql', Authenticated(), graphqlRouter);

export { app };
