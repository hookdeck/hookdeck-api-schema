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
    async getConnections(request = {}) {
        const { archived, fullName, limit, next, prev } = request;
        const _queryParams = new URLSearchParams();
        if (archived != null) {
            _queryParams.append("archived", archived.toString());
        }
        if (fullName != null) {
            _queryParams.append("full_name", fullName);
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
            url: (0, url_join_1.default)(this.options.environment, "/webhooks"),
            method: "GET",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.ConnectionPaginatedResult.parseOrThrow(_response.body, { allowUnknownKeys: true });
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
    async upsertConnection(request) {
        const _response = await core.fetcher({
            url: (0, url_join_1.default)(this.options.environment, "/webhooks"),
            method: "PUT",
            body: await serializers.UpsertConnectionRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.Connection.parseOrThrow(_response.body, {
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
    async createConnection(request) {
        const _response = await core.fetcher({
            url: (0, url_join_1.default)(this.options.environment, "/webhooks"),
            method: "POST",
            body: await serializers.CreateConnectionRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.Connection.parseOrThrow(_response.body, {
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
    async getConnection(id) {
        const _response = await core.fetcher({
            url: (0, url_join_1.default)(this.options.environment, `/webhooks/${id}`),
            method: "GET",
        });
        if (_response.ok) {
            return await serializers.Connection.parseOrThrow(_response.body, {
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
    async updateConnection(id, request = {}) {
        const _response = await core.fetcher({
            url: (0, url_join_1.default)(this.options.environment, `/webhooks/${id}`),
            method: "PUT",
            body: await serializers.UpdateConnectionRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.Connection.parseOrThrow(_response.body, {
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
    async archiveConnection(id) {
        const _response = await core.fetcher({
            url: (0, url_join_1.default)(this.options.environment, `/webhooks/${id}/archive`),
            method: "PUT",
        });
        if (_response.ok) {
            return await serializers.Connection.parseOrThrow(_response.body, {
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
    async unarchiveConnection(id) {
        const _response = await core.fetcher({
            url: (0, url_join_1.default)(this.options.environment, `/webhooks/${id}/unarchive`),
            method: "PUT",
        });
        if (_response.ok) {
            return await serializers.Connection.parseOrThrow(_response.body, {
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
    async pauseConnection(id) {
        const _response = await core.fetcher({
            url: (0, url_join_1.default)(this.options.environment, `/webhooks/${id}/pause`),
            method: "PUT",
        });
        if (_response.ok) {
            return await serializers.Connection.parseOrThrow(_response.body, {
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
    async unpauseConnection(id) {
        const _response = await core.fetcher({
            url: (0, url_join_1.default)(this.options.environment, `/webhooks/${id}/unpause`),
            method: "PUT",
        });
        if (_response.ok) {
            return await serializers.Connection.parseOrThrow(_response.body, {
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
