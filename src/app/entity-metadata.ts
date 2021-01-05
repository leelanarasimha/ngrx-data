import { EntityDataModuleConfig, EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Post: {},
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
};
