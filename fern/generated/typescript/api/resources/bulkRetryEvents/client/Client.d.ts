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
    getEventBulkRetries(request?: HookdeckApi.GetEventBulkRetriesRequest): Promise<HookdeckApi.BatchOperationPaginatedResult>;
    /**
     *
     */
    createEventBulkRetry(request: HookdeckApi.BulkRetryRequest): Promise<HookdeckApi.BatchOperation>;
    /**
     *
     */
    generateEventBulkRetryPlan(): Promise<HookdeckApi.BatchOperationPlan>;
    /**
     *
     */
    getEventBulkRetry(id: string): Promise<HookdeckApi.BatchOperation>;
    /**
     *
     */
    cancelEventBulkRetry(id: string): Promise<HookdeckApi.BatchOperation>;
}
