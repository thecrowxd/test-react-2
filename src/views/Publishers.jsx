import React, { useState, useEffect} from 'react'
import {getPublishers, getSite} from '../components/dataSource'

const Publishers = () => {
	const [publishers, setPublishers] = useState([]);
    async function fetchPublishers (){

		var newPublishers = []

		const res = await getPublishers();
		 await Promise.all(
			 Object.keys(res).map(async (key) => {
				 const publisher = {
					 "name": key,
					 "sites": []
				 };

				 await Promise.all(
					 res[key].sites.map(async (key2) => {
						 getSite(key2)
						.then((res2) => {
							const site_1 = {
								"name": key2,
								"url": res2.url
							};

							publisher.sites.push(site_1);
						});
					})
				);

				newPublishers.push(publisher);
			 })
		 );
		 setPublishers(newPublishers);
		 setSearchResults(newPublishers);

	}
	useEffect(() => {
		fetchPublishers()
	}, []) 
	
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	useEffect(() => {
		
		const results = publishers.filter(publisher =>
			publisher.name.toLowerCase().includes(searchTerm)
		);
		setSearchResults(results);
		
		}, [searchTerm]);
		
	const handleChange = event => {
		setSearchTerm(event.target.value);
	};

	return (
		<React.Fragment>
			<h2>Lista de publishers</h2>
			<input type="text" placeholder="Filtro"  value={searchTerm} onChange={handleChange}></input>

			<ul>
				{searchResults?.map((publisher, index) => (
					<li key={index}>{publisher.name}
					<ul>
						{publisher.sites.map((site, index) => (
							<li key={index}><a href={site.url}>{site.name}</a></li>
						))}
					</ul> 
					</li> 
				))}
			</ul>
		</React.Fragment>           
	)
    
}

export default Publishers