import { camelCase } from 'lodash';

export const toId = (id: string): string => {
  // Normalise component id to be PascalCase
  return id.substring(0, 1).toUpperCase() + camelCase(id.substring(1));
};
