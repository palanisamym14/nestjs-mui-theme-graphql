import { ExecutionContext, Injectable } from "@nestjs/common";
import { ExecutionContextHost } from "@nestjs/core/helpers/execution-context-host";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";
import { AuthenticationError } from "apollo-server-express";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const result = (await super.canActivate(context)) as boolean;
        if (!result) {
            throw new AuthenticationError('Invalid Token');
        }
        return result;
    }

    public getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context)
        return ctx.getContext().req
    }
}