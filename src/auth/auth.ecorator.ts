import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthenticationError } from 'apollo-server-express';

import * as jwt from 'jsonwebtoken';
import { jwtConstants } from './constants';

export const AuthUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const headers = GqlExecutionContext.create(ctx).getContext().req.headers;
        try {
            // Remove 'Bearer' prefix and get the token.
            const token = headers.authorization.substring(
                7,
                headers.authorization.length,
            );

            // in case a route is not protected, we still want to get the optional auth user from jwt
            if (token) {
                const decoded: any = jwt.verify(token, jwtConstants.secret);
                return decoded;
            }
        } catch (e) {

            throw new AuthenticationError("AUTHORIZATION_FAILURE", {
                HttpStatusCode: 401,
            });
        }
    }
);