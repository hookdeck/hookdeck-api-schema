/**
 * This file was auto-generated by Fern from our API Definition.
 */
import { HookdeckApi } from "../../../../..";
export interface GetRequestsRequest {
    status?: HookdeckApi.RequestStatus;
    verified?: boolean;
    path?: string;
    limit?: number;
    next?: string;
    prev?: string;
}
