import { useRouter } from 'next/router';
const ShopPage = () => {
	const { query } = useRouter();
	return (
		<div>
			{query?.slug}
			<h1>Shop Page</h1>
		</div>
	);
};

export default ShopPage;
