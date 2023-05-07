import { TopLevelCategory, TopPageModel } from '@/interfaces/page.interface';
import { ProductModel } from '@/interfaces/product.iterface';

export interface TopPageComponentProps {
	firstCategory: TopLevelCategory;
	page: TopPageModel;
	products: ProductModel[];
}