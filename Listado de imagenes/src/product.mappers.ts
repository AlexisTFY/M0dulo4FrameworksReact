import * as am from './api/api.model';
import * as vm from './product.model';

export const mapProductVM = (
  data: am.Product[]
): vm.ProductModel[] => data.map(mapProductToVM);

const mapProductToVM = (data: am.Product): vm.ProductModel => ({
  id: data.id,
  picUrl: data.picUrl,
  title: data.title,
  selected: false,
});
