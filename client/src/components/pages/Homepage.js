import {
	FavoriteBorder,
	KeyboardArrowDown,
	LocationOn,
	ThumbDownOutlined,
} from '@mui/icons-material';
import { Button, ButtonGroup, Skeleton } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Sidebar from '../layout/Sidebar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const drawerWidth = 240;

function Homepage(props) {
	return (
		<>
			<Box sx={{ display: 'flex' }}>
				<Sidebar pictures={props.pictures} setPictures={props.setPictures} />
				<Box
					component='main'
					sx={{
						flexGrow: 1,
						p: 3,
						width: { sm: `calc(100% - ${drawerWidth}px)` },
					}}
				>
					<Toolbar />

					<Box
						sx={{
							paddingTop: { xs: '30px', sm: 0 },
							paddingBottom: { xs: '30px', sm: 0 },
						}}
					></Box>

					<ButtonGroup
						variant='outlined'
						aria-label='outlined button group'
						style={{
							paddingTop: 50,
							paddingBottom: 30,
							color: 'grey',
						}}
						sx={{
							display: {
								xs: 'none',
								lg: 'flex',
							},
						}}
						fullWidth
					>
						<Button
							style={{
								textTransform: 'none',
								fontWeight: 'bold',
								fontFamily: 'Calibri',
								border: 'none',
								borderRightWidth: 1,
								borderRightStyle: 'solid',
								borderRightColor: '#CCCCCC',
							}}
							sx={{
								boxShadow: '0 1px 2px rgb(75 0 130 / 0.1)',
							}}
							endIcon={<KeyboardArrowDown />}
							color='inherit'
						>
							<span>World</span>
						</Button>
						<Button
							style={{
								textTransform: 'none',
								fontWeight: 'bold',
								fontFamily: 'Calibri',
								border: 'none',
								borderRightWidth: 1,
								borderRightColor: '#CCCCCC',
								borderRightStyle: 'solid',
							}}
							sx={{
								boxShadow: '0 1px 2px rgb(75 0 130 / 0.1)',
							}}
							endIcon={<KeyboardArrowDown />}
							color='inherit'
						>
							<span>Following</span>
						</Button>
						<Button
							style={{
								textTransform: 'none',
								fontWeight: 'bold',
								fontFamily: 'Calibri',
								border: 'none',
								borderRightWidth: 1,
								borderRightColor: '#CCCCCC',
								borderRightStyle: 'solid',
							}}
							sx={{
								boxShadow: '0 1px 2px rgb(75 0 130 / 0.1)',
							}}
							endIcon={<KeyboardArrowDown />}
							color='inherit'
						>
							<span>Popular</span>
						</Button>
						<Button
							style={{
								textTransform: 'none',
								fontWeight: 'bold',
								fontFamily: 'Calibri',
								border: 'none',
								borderRightWidth: 1,
								borderRightColor: '#CCCCCC',
								borderRightStyle: 'solid',
							}}
							sx={{
								boxShadow: '0 1px 2px rgb(75 0 130 / 0.1)',
							}}
							endIcon={<KeyboardArrowDown />}
							color='inherit'
						>
							<span>Post</span>
						</Button>
						<Button
							style={{
								textTransform: 'none',
								fontWeight: 'bold',
								fontFamily: 'Calibri',
								border: 'none',
								borderRightWidth: 1,
								borderRightColor: '#CCCCCC',
								borderRightStyle: 'solid',
							}}
							sx={{
								boxShadow: '0 1px 2px rgb(75 0 130 / 0.1)',
							}}
							endIcon={<KeyboardArrowDown />}
							color='inherit'
						>
							<span>Gender</span>
						</Button>
						<Button
							style={{
								textTransform: 'none',
								fontWeight: 'bold',
								fontFamily: 'Calibri',
								border: 'none',
								borderRightWidth: 1,
								borderRightColor: '#CCCCCC',
								borderRightStyle: 'solid',
							}}
							sx={{
								boxShadow: '0 1px 2px rgb(75 0 130 / 0.1)',
							}}
							endIcon={<KeyboardArrowDown />}
							color='inherit'
						>
							<span>Location</span>
						</Button>
						<Button
							style={{
								textTransform: 'none',
								fontWeight: 'bold',
								fontFamily: 'Calibri',
								border: 'none',
								borderRightWidth: 1,
								borderRightColor: '#CCCCCC',
								borderRightStyle: 'solid',
							}}
							sx={{
								boxShadow: '0 1px 2px rgb(75 0 130 / 0.1)',
							}}
							endIcon={<KeyboardArrowDown />}
							color='inherit'
						>
							<span>Profession</span>
						</Button>
						<Button
							style={{
								textTransform: 'none',
								fontWeight: 'bold',
								fontFamily: 'Calibri',
								border: 'none',
								borderRightWidth: 1,
								borderRightColor: '#CCCCCC',
								borderRightStyle: 'solid',
							}}
							sx={{
								boxShadow: '0 1px 2px rgb(75 0 130 / 0.1)',
							}}
							endIcon={<KeyboardArrowDown />}
							color='inherit'
						>
							<span>Featured</span>
						</Button>
						<Button
							style={{
								textTransform: 'none',
								fontWeight: 'bold',
								fontFamily: 'Calibri',
								border: 'none',
							}}
							sx={{
								boxShadow: '0 1px 2px rgb(75 0 130 / 0.1)',
							}}
							endIcon={<KeyboardArrowDown />}
							color='inherit'
						>
							<span>Extended</span>
						</Button>
					</ButtonGroup>

					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							flexWrap: 'wrap',
							alignItems: 'center',
						}}
					>
						{props.pictures && props.pictures.length > 0 ? (
							props.pictures.map((picture, index) => {
								if (index === 0) {
									return (
										<Card sx={{ width: 300, marginBottom: 2 }} key={index}>
											<CardMedia
												component='img'
												height='250'
												image={picture.urls.full}
												alt={picture.alt_description}
											/>
											<CardContent>
												<div
													style={{
														fontSize: 18,
														fontWeight: 'bold',
														paddingBottom: 10,
														fontFamily: 'Calibri',
													}}
												>
													{picture.user.name}, {picture.user.total_photos}
												</div>
												<div
													style={{
														display: 'flex',
														alignItems: 'center',
														fontSize: 12,
														fontFamily: 'Calibri',
													}}
												>
													<LocationOn
														fontSize='inherit'
														style={{
															color: 'grey',
															marginRight: 5,
														}}
													/>
													{picture.user.location}
												</div>
											</CardContent>
											<CardActions
												style={{
													display: 'flex',
													justifyContent: 'space-between',
												}}
											>
												<Button
													size='small'
													variant='contained'
													color='error'
													fullWidth
												>
													<FavoriteBorder fontSize='small' />
												</Button>
												<Button
													size='small'
													variant='contained'
													style={{
														backgroundColor: 'indigo',
														color: 'white',
													}}
													fullWidth
												>
													<ThumbDownOutlined fontSize='small' />
												</Button>
											</CardActions>
										</Card>
									);
								} else
									return (
										<Card
											sx={{ width: 300, marginBottom: 2 }}
											key={index}
											style={{
												position: 'relative',
											}}
										>
											<CardMedia
												component='img'
												height='350'
												image={picture.urls.full}
												alt={picture.alt_description}
											/>
											<div
												style={{
													backgroundColor: 'transparent',
													color: 'white',
													opacity: 1,
													position: 'absolute',
													bottom: 20,
													left: 20,
												}}
											>
												<div
													style={{
														fontSize: 18,
														fontWeight: 'bold',
														paddingBottom: 10,
														fontFamily: 'Calibri',
													}}
												>
													{picture.user.name}, {picture.user.total_photos}
												</div>
												<div
													style={{
														display: 'flex',
														alignItems: 'center',
														fontSize: 12,
														fontFamily: 'Calibri',
													}}
												>
													<LocationOn
														fontSize='inherit'
														style={{
															color: 'inherit',
															marginRight: 5,
														}}
													/>
													{picture.user.location}
												</div>
											</div>
										</Card>
									);
							})
						) : (
							<>
								<Skeleton variant='rectangular' width={210} height={118} />
							</>
						)}
					</div>
				</Box>
			</Box>
		</>
	);
}

export default Homepage;
