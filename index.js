import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';
import { createApi } from 'unsplash-js';
import nodeFetch from 'node-fetch'; //unsplash dependency
import { URL } from 'url';
import cors from 'cors';
import axios from 'axios';

const unsplash = createApi({
	accessKey: process.env.UNSPLASH_ACCESS_KEY,
	fetch: nodeFetch,
});

// To use __dirname and __filename when node app is in module mode
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DEFAULT_SERVER_PORT = 4000;
const server = express();

server.use(express.json());

server.use(cors());

// Get pictures
server.get('/api/pictures', async (req, res) => {
	try {
		const Pictures = await unsplash.photos.list({ page: 2, perPage: 16 });
		return res.json({ Pictures: Pictures.response.results });
	} catch (error) {
		console.log(error);
		return res.status(500).send("Couldn't get picures");
	}
});

// Search for pictures
server.post('/api/pictures', async (req, res) => {
	try {
		const { searchInput } = req.body;
		if (!searchInput) {
			return res.status(401).send('Invalid search input');
		}
		const Pictures = await unsplash.search.getPhotos({
			query: searchInput,
		});
		return res.json({ Pictures: Pictures.response.results });
	} catch (error) {
		console.log(error);
		return res.status(500).send("Couldn't get picures");
	}
});

// Added after all routes because of React's routing
server.use(express.static(path.join(__dirname, 'client', 'build')));

server.get('/*', async function (req, res) {
	res.sendFile(path.join(__dirname, 'client', '/build/index.html'));
});

server.listen(process.env.PORT || DEFAULT_SERVER_PORT, () => {
	console.log(
		`Server listening on port: ${process.env.PORT || DEFAULT_SERVER_PORT}`
	);
});
