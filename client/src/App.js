import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import axios from 'axios';
import { API_URL } from './app.json';

function App() {
	const [pictures, setPictures] = React.useState([]);

	React.useEffect(() => {
		const getPictures = async () => {
			try {
				const response = await axios.get(`${API_URL}/pictures`);
				setPictures(response.data.Pictures);
			} catch (error) {
				setPictures([]);
				console.log(error);
			}
		};
		getPictures();
	}, []);
	return (
		<Routes>
			<Route
				path='/'
				element={<Homepage pictures={pictures} setPictures={setPictures} />}
				exact
			/>
		</Routes>
	);
}

export default App;
