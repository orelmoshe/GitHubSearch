import React from 'react';

const Input = (props) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const text = event.target.text.value;
		props.handleSubmit(text);
	};
	return (
		<form onSubmit={handleSubmit}>
			<input name="text" type="text" placeholder="Enter username and press on Enter" style={{ width: 280 }} />
		</form>
	);
};

export default Input;
