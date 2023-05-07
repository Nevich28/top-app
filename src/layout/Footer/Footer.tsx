import format from 'date-fns/format';
import { Footerprops } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';

export const Footer = ({ className, ...props }: Footerprops): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
				<div className={styles.link1}>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
				<a href="#" target="_blank" className={styles.link2}>Пользовательское соглашение</a>
				<a href="#" target="_blank" className={styles.link3}>Политика конфиденциальности</a>
		</footer>
	);
};