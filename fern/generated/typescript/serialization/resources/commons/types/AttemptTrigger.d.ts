/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import { HookdeckApi } from "../../../..";
import * as core from "../../../../core";
export declare const AttemptTrigger: core.serialization.Schema<serializers.AttemptTrigger.Raw, HookdeckApi.AttemptTrigger>;
export declare namespace AttemptTrigger {
    type Raw = "INITIAL" | "MANUAL" | "BULK_RETRY" | "UNPAUSE" | "AUTOMATIC";
}
