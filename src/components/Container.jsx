import React, { useState } from 'react';

import { getRepos } from '../services/github';
import Input from './Input';
import List from './List';

const Container = () => {
	const [reposList, setRepos] = useState([]);
	const handleSubmit = async (user) => {
		const reposListFromServer = await getRepos(user);
		setRepos(reposListFromServer);
	};
	return (
		<div data-testid="general-repo-container">
			<h2>Github username search form</h2>
			<Input handleSubmit={handleSubmit} />
			<List repos={reposList} />
		</div>
	);
};

export default Container;
