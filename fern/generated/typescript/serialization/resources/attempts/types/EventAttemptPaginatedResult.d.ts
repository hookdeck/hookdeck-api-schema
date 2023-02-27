/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import { HookdeckApi } from "../../../..";
import * as core from "../../../../core";
export declare const EventAttemptPaginatedResult: core.serialization.ObjectSchema<serializers.EventAttemptPaginatedResult.Raw, HookdeckApi.EventAttemptPaginatedResult>;
export declare namespace EventAttemptPaginatedResult {
    interface Raw {
        pagination?: serializers.SeekPagination.Raw | null;
        count?: number | null;
        models?: serializers.EventAttempt.Raw[] | null;
    }
}
