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
    getSources(request?: HookdeckApi.GetSourcesRequest): Promise<HookdeckApi.SourcePaginatedResult>;
    /**
     *
     */
    upsertSource(request: HookdeckApi.UpsertSourceRequest): Promise<HookdeckApi.Source>;
    /**
     *
     */
    createSource(request: HookdeckApi.CreateSourceRequest): Promise<HookdeckApi.Source>;
    /**
     *
     */
    getSource(id: string): Promise<HookdeckApi.Source>;
    /**
     *
     */
    updateSource(id: string, request?: HookdeckApi.UpdateSourceRequest): Promise<HookdeckApi.Source>;
    /**
     *
     */
    archiveSource(id: string): Promise<HookdeckApi.Source>;
    /**
     *
     */
    unarchiveSource(id: string): Promise<HookdeckApi.Source>;
}
