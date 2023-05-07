import { GetStaticProps } from 'next';
import axios from 'axios';

import { withLayout } from '@/layout/Layout';
import { MenuItem } from '@/interfaces/menu.interface';
import { useRouter } from 'next/router';


function Search(): JSX.Element {
	const router = useRouter();
	return (
		<>
		{router.asPath}
		</>
	);
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	
	const {data: menu} = await axios.post<MenuItem[]>('https://courses-top.ru/api/top-page/find', {firstCategory});
	// console.log('s' + process.env.NEXT_PUBLIC_DOMAIN);
	// const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {firstCategory});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown>{
	menu: MenuItem[];
	firstCategory: number;
}