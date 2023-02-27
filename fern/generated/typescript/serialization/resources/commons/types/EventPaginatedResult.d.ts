/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import { HookdeckApi } from "../../../..";
import * as core from "../../../../core";
export declare const EventPaginatedResult: core.serialization.ObjectSchema<serializers.EventPaginatedResult.Raw, HookdeckApi.EventPaginatedResult>;
export declare namespace EventPaginatedResult {
    interface Raw {
        pagination?: serializers.SeekPagination.Raw | null;
        count?: number | null;
        models?: serializers.Event.Raw[] | null;
    }
}
