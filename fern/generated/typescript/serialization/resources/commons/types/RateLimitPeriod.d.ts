/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import { HookdeckApi } from "../../../..";
import * as core from "../../../../core";
export declare const RateLimitPeriod: core.serialization.Schema<serializers.RateLimitPeriod.Raw, HookdeckApi.RateLimitPeriod>;
export declare namespace RateLimitPeriod {
    type Raw = "second" | "minute" | "hour";
}
