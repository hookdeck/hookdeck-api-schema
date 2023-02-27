/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../environments";
import { HookdeckApi } from "../../../..";
export declare namespace Client {
    interface Options {
        environment: environments.HookdeckApiEnvironment | string;
    }
}
export declare class Client {
    private readonly options;
    constructor(options: Client.Options);
    /**
     *
     */
    getAttempts(request?: HookdeckApi.GetAttemptsRequest): Promise<HookdeckApi.EventAttemptPaginatedResult>;
    /**
     *
     */
    getAttempt(id: string): Promise<HookdeckApi.EventAttempt>;
}
