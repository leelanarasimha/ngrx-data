import { EntityDataModuleConfig, EntityMetadataMap } from '@ngrx/data';

const entityMetaData: EntityMetadataMap = {
  Post: {},
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetaData,
};
