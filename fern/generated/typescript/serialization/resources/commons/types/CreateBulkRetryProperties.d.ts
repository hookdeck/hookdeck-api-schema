/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import { HookdeckApi } from "../../../..";
import * as core from "../../../../core";
export declare const CreateBulkRetryProperties: core.serialization.ObjectSchema<serializers.CreateBulkRetryProperties.Raw, HookdeckApi.CreateBulkRetryProperties>;
export declare namespace CreateBulkRetryProperties {
    interface Raw {
        id?: string | null;
        status?: serializers.RequestStatus.Raw | null;
        rejection_cause?: string | null;
        ignored_count?: serializers.CreateEventsBulkAttempts.Raw | null;
        events_count?: serializers.CreateEventsBulkAttempts.Raw | null;
        source_id?: string | null;
        verified?: boolean | null;
        headers?: string | null;
        body?: string | null;
        parsed_query?: string | null;
        path?: string | null;
        created_at?: serializers.CreateEventsBulkResponseCreatedOrLastAttemptAt.Raw | null;
        ingested_at?: serializers.CreateEventsBulkResponseCreatedOrLastAttemptAt.Raw | null;
        bulk_retry_id?: string | null;
        order_by?: serializers.CreateEventsBulkResponseCreatedOrLastAttemptAt.Raw | null;
        dir?: serializers.CreateEventsBulkResponseDir.Raw | null;
        limit?: number | null;
        next?: string | null;
        prev?: string | null;
    }
}
