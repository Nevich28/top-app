import { GetStaticProps } from 'next';
import { useState } from 'react';
import axios from 'axios';

import { Button, Htag, Input, Paragraph, Rating, Tag, Textarea } from '@/components';
import { withLayout } from '@/layout/Layout';
import { MenuItem } from '@/interfaces/menu.interface';
import { API } from '@/helpers/api';



function Home({menu}: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(4);
	return (
		<>
			<Htag tag='h1'>{process.env.NEXT_PUBLIC_DOMAIN + 'ghjk'}</Htag>
			<Button appearance='primary' arrow='right'>Кнопка</Button>
			<Button appearance='ghost' arrow='down'>Кнопка</Button>
			<Paragraph size='s'>hjhjkhljkhlhjl</Paragraph>
			<Paragraph>hjhjkhljkhlhjl</Paragraph>
			<Paragraph size='l'>hjhjkhljkhlhjl</Paragraph>
			<Tag size='s' color='red'>Маленький</Tag>
			<Tag size='m' color='primary'>Маленький</Tag>
			<Tag size='m' color='green'>Маленький</Tag>
			<Tag color='grey'>Маленький</Tag>
			<Rating rating={rating} isEditable setRating={setRating}/>
			<Input placeholder='test'/>
			<Textarea placeholder='test'/>
			
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	
	const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {firstCategory});
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