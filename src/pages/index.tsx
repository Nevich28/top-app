import { Button, Htag, Paragraph, Rating, Tag } from '@/components';
import { useState } from 'react';

export default function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);
	return (
		<>
			<Htag tag='h1'>{5}</Htag>
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
		</>
	);
}
