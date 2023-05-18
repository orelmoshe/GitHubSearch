import React from 'react';

const Item = ({ repo }) => {
	return (
		<div>
			<h2>{repo.name}</h2>
			<small>{new Date(Date.parse(repo.created_at)).toLocaleDateString()}</small>
			<p>{repo.description}</p>
			<a rel="noreferrer" href={repo.html_url} target="_blank">
				{repo.html_url}
			</a>
		</div>
	);
};

export default Item;
