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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
const core = __importStar(require("../../../../core"));
exports.Connection = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    teamId: core.serialization.property("team_id", core.serialization.string()),
    destination: core.serialization.lazyObject(async () => (await Promise.resolve().then(() => __importStar(require("../../..")))).Destination),
    source: core.serialization.lazyObject(async () => (await Promise.resolve().then(() => __importStar(require("../../..")))).Source),
    ruleset: core.serialization.lazyObject(async () => (await Promise.resolve().then(() => __importStar(require("../../..")))).Ruleset).optional(),
    resolvedRules: core.serialization.property("resolved_rules", core.serialization
        .list(core.serialization.lazyObject(async () => (await Promise.resolve().then(() => __importStar(require("../../..")))).RetryRule))
        .optional()),
    rules: core.serialization
        .list(core.serialization.lazyObject(async () => (await Promise.resolve().then(() => __importStar(require("../../..")))).RetryRule))
        .optional(),
    archivedAt: core.serialization.property("archived_at", core.serialization.string().optional()),
    pausedAt: core.serialization.property("paused_at", core.serialization.string().optional()),
    updatedAt: core.serialization.property("updated_at", core.serialization.string()),
    createdAt: core.serialization.property("created_at", core.serialization.string()),
});
