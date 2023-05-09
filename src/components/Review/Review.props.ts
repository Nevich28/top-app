import { ReviewModel } from '@/interfaces/product.iterface';
import { DetailedHTMLProps, HTMLAttributes} from 'react';

export interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	review: ReviewModel;
}