import React from 'react';

import Item from './Item';

const List = ({ repos }) => {
	return (
		<div className="list-group">
			{repos.map((repo, index) => (
				<Item key={index} repo={repo} />
			))}
		</div>
	);
};

export default List;
