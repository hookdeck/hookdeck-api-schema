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
    getIssues(request?: HookdeckApi.GetIssuesRequest): Promise<HookdeckApi.IssueWithDataPaginatedResult>;
    /**
     *
     */
    getIssueCount(request?: HookdeckApi.GetIssueCountRequest): Promise<HookdeckApi.IssueCount>;
    /**
     *
     */
    getIssue(id: string): Promise<HookdeckApi.DeliveryIssueWithData>;
    /**
     *
     */
    updateIssue(id: string, request: HookdeckApi.UpdateIssueRequest): Promise<HookdeckApi.DeliveryIssue>;
    /**
     *
     */
    dismissIssue(id: string): Promise<HookdeckApi.DeliveryIssue>;
}
