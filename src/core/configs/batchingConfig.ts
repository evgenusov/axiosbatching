import { BatchingConfig } from "../entities/batchingConfig";

export const DefaultBatchingConfig: BatchingConfig = {
    maxConcurrentRequests: 2,
    intervalBetweenRequests: 1000
}