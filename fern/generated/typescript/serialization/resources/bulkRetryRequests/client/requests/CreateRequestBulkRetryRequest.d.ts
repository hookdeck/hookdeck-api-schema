/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../..";
import { HookdeckApi } from "../../../../..";
import * as core from "../../../../../core";
export declare const CreateRequestBulkRetryRequest: core.serialization.Schema<serializers.CreateRequestBulkRetryRequest.Raw, HookdeckApi.CreateRequestBulkRetryRequest>;
export declare namespace CreateRequestBulkRetryRequest {
    interface Raw {
        query?: serializers.CreateBulkRetryProperties.Raw | null;
    }
}
