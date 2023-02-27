/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import { HookdeckApi } from "../../../..";
import * as core from "../../../../core";
export declare const Event: core.serialization.ObjectSchema<serializers.Event.Raw, HookdeckApi.Event>;
export declare namespace Event {
    interface Raw {
        id: string;
        team_id: string;
        webhook_id: string;
        source_id: string;
        destination_id: string;
        event_data_id: string;
        request_id: string;
        attempts: number;
        last_attempt_at?: string | null;
        next_attempt_at?: string | null;
        response_status?: number | null;
        status: serializers.EventStatus.Raw;
        successful_at?: string | null;
        cli_id?: string | null;
        updated_at: string;
        created_at: string;
    }
}
