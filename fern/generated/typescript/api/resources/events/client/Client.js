"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const url_join_1 = __importDefault(require("url-join"));
const core = __importStar(require("../../../../core"));
const serializers = __importStar(require("../../../../serialization"));
const errors = __importStar(require("../../../../errors"));
class Client {
    options;
    constructor(options) {
        this.options = options;
    }
    /**
     *
     */
    async getEvents(request = {}) {
        const { include, path, limit, next, prev } = request;
        const _queryParams = new URLSearchParams();
        if (include != null) {
            _queryParams.append("include", include);
        }
        if (path != null) {
            _queryParams.append("path", path);
        }
        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }
        if (next != null) {
            _queryParams.append("next", next);
        }
        if (prev != null) {
            _queryParams.append("prev", prev);
        }
        const _response = await core.fetcher({
            url: (0, url_join_1.default)(this.options.environment, "/events"),
            method: "GET",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.EventPaginatedResult.parseOrThrow(_response.body, { allowUnknownKeys: true });
        }
        if (_response.error.reason === "status-code") {
            throw new errors.HookdeckApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }
        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HookdeckApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HookdeckApiTimeoutError();
            case "unknown":
                throw new errors.HookdeckApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
    /**
     *
     */
    async getEvent(id) {
        const _response = await core.fetcher({
            url: (0, url_join_1.default)(this.options.environment, `/events/${id}`),
            method: "GET",
        });
        if (_response.ok) {
            return await serializers.Event.parseOrThrow(_response.body, {
                allowUnknownKeys: true,
            });
        }
        if (_response.error.reason === "status-code") {
            throw new errors.HookdeckApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }
        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HookdeckApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HookdeckApiTimeoutError();
            case "unknown":
                throw new errors.HookdeckApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
    /**
     *
     */
    async retryEvent(id) {
        const _response = await core.fetcher({
            url: (0, url_join_1.default)(this.options.environment, `/events/${id}/retry`),
            method: "POST",
        });
        if (_response.ok) {
            return await serializers.RetriedEvent.parseOrThrow(_response.body, {
                allowUnknownKeys: true,
            });
        }
        if (_response.error.reason === "status-code") {
            throw new errors.HookdeckApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }
        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HookdeckApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HookdeckApiTimeoutError();
            case "unknown":
                throw new errors.HookdeckApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
    /**
     *
     */
    async muteEvent(id) {
        const _response = await core.fetcher({
            url: (0, url_join_1.default)(this.options.environment, `/events/${id}/mute`),
            method: "PUT",
        });
        if (_response.ok) {
            return await serializers.Event.parseOrThrow(_response.body, {
                allowUnknownKeys: true,
            });
        }
        if (_response.error.reason === "status-code") {
            throw new errors.HookdeckApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }
        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HookdeckApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HookdeckApiTimeoutError();
            case "unknown":
                throw new errors.HookdeckApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
exports.Client = Client;
