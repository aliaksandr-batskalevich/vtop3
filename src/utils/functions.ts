export const getPageTitle = (path: string) => {
	const pathArr = path.split('/');
	const pageTitle = pathArr[1];
	const title = pageTitle
		.split('-')
		.map(w => w.toLowerCase())
		.map((w, i) => i === 0
			? w.replace(/(^|\s)\S/g, a => a.toUpperCase())
			: w)
		.join(' ');

	return title;
};