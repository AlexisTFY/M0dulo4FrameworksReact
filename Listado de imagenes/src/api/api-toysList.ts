import { Product } from './api.model';
import { mockToyList } from './mock-data-toysList';

let toysList = [...mockToyList];

export const getToyList = async (): Promise<Product[]> => {
  return toysList;
};
