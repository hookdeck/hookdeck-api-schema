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
    getTransformations(): Promise<HookdeckApi.TransformationPaginatedResult>;
    /**
     *
     */
    upsertTransformation(request: HookdeckApi.UpsertTransformationRequest): Promise<HookdeckApi.Transformation>;
    /**
     *
     */
    createTransformation(request: HookdeckApi.CreateTransformationRequest): Promise<HookdeckApi.Transformation>;
    /**
     *
     */
    getTransformation(id: string): Promise<HookdeckApi.Transformation>;
    /**
     *
     */
    updateTransformation(id: string, request?: HookdeckApi.UpdateTransformationRequest): Promise<HookdeckApi.Transformation>;
    /**
     *
     */
    testTransformation(request?: HookdeckApi.TestTransformationRequest): Promise<HookdeckApi.TransformationExecutorOutput>;
    /**
     *
     */
    getTransformationExecutions(id: string, request?: HookdeckApi.GetTransformationExecutionsRequest): Promise<HookdeckApi.TransformationExecutionPaginatedResult>;
    /**
     *
     */
    getTransformationExecution(id: string, executionId: string): Promise<HookdeckApi.TransformationExecution>;
}
