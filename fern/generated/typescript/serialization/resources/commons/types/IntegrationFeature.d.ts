/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import { HookdeckApi } from "../../../..";
import * as core from "../../../../core";
export declare const IntegrationFeature: core.serialization.Schema<serializers.IntegrationFeature.Raw, HookdeckApi.IntegrationFeature>;
export declare namespace IntegrationFeature {
    type Raw = "VERIFICATION" | "HANDSHAKE" | "POLLING";
}
