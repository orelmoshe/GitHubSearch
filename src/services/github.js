export const getRepos = async (user) => {
	const url = `https://api.github.com/users/${user}/repos`;
	const response = await fetch(url);
	const repos = await response.json();
	return repos;
};

export const getUsers = async (user) => {
	const url = `https://api.github.com/search/users?q=${user}`;
	const response = await fetch(url);
	const repos = await response.json();
	return repos;
};
