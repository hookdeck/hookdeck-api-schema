/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import { HookdeckApi } from "../../../..";
import * as core from "../../../../core";
export declare const SourceIntegration: core.serialization.ObjectSchema<serializers.SourceIntegration.Raw, HookdeckApi.SourceIntegration>;
export declare namespace SourceIntegration {
    interface Raw {
        id: string;
        label: string;
        provider: serializers.IntegrationProvider.Raw;
        features: serializers.IntegrationFeature.Raw[];
    }
}
