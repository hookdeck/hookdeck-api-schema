/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import { HookdeckApi } from "../../../..";
import * as core from "../../../../core";
export declare const CreateEventsBulkSuccessAt: core.serialization.ObjectSchema<serializers.CreateEventsBulkSuccessAt.Raw, HookdeckApi.CreateEventsBulkSuccessAt>;
export declare namespace CreateEventsBulkSuccessAt {
    interface Raw {
        ge?: number | null;
        gte?: number | null;
        le?: number | null;
        lte?: number | null;
        any?: boolean | null;
        contains?: number | null;
    }
}
