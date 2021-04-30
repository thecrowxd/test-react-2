const publishers = {
	prisa: {
		sites: ['maxima', 'elpais', 'los40']
	},
	vocento: {
		sites: ['abc', 'elcomercio', 'mujerhoy']
	},
	godo: {
		sites: ['mundodeportivo', 'lavanguardia', 'rac1']
	}
}

const sites = {
	maxima: {
		url: 'https://www.maxima.fm/',
	},
	elpais: {
		url: 'https://elpais.com/',
	},
	los40: {
		url: 'https://los40.com/',
	},
	abc: {
		url: 'https://www.abc.es/',
	},
	elcomercio: {
		url: 'https://www.elcomercio.es/',
	},
	mujerhoy: {
		url: 'https://www.mujerhoy.com/',
	},
	mundodeportivo: {
		url: 'https://www.mundodeportivo.com/',
	},
	lavanguardia: {
		url: 'https://www.lavanguardia.com/',
	},
	rac1: {
		url: 'https://www.rac1.cat/',
	},
}

export const getPublishers = async () => await new Promise(resolve => resolve(publishers), 10);

export const getSite = async (site) => await new Promise(resolve => resolve(sites[site]), 10);