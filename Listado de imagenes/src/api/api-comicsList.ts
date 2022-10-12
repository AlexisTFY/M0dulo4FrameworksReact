import { Product } from './api.model';
import { mockComicList } from './mock-data-comisList';

let comicsList = [...mockComicList];

export const getComicList = async (): Promise<Product[]> => {
  return comicsList;
};
