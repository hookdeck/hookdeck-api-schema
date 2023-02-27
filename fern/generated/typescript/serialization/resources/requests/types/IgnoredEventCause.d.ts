/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import { HookdeckApi } from "../../../..";
import * as core from "../../../../core";
export declare const IgnoredEventCause: core.serialization.Schema<serializers.IgnoredEventCause.Raw, HookdeckApi.IgnoredEventCause>;
export declare namespace IgnoredEventCause {
    type Raw = "ARCHIVED" | "FILTERED" | "TRANSFORMATION_FAILED" | "CLI_DISCONNECTED";
}
