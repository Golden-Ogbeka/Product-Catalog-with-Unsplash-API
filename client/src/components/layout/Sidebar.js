import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {
	AssignmentTurnedIn,
	BarChart,
	Celebration,
	ChatBubble,
	ConnectWithoutContact,
	DirectionsWalk,
	Favorite,
	Group,
	Home as HomeIcon,
	KeyboardArrowDown,
	Notifications,
	Search as SearchIcon,
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import LogoImage from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import {
	Avatar,
	Badge,
	Button,
	Divider,
	InputAdornment,
	Menu,
	MenuItem,
	TextField,
} from '@mui/material';
import Person1 from '../../assets/person1.png';
import Person2 from '../../assets/person2.jpg';
import Person3 from '../../assets/person3.png';
import Person4 from '../../assets/person4.jpg';
import axios from 'axios';
import { API_URL } from '../../app.json';

const drawerWidth = 240;

function Sidebar(props) {
	// For Sidebar
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	// For notification menu
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	// For search box
	const [searchInput, setSearchInput] = React.useState('');

	const searchPicture = async () => {
		try {
			props.setPictures([]);
			const response = await axios.post(`${API_URL}/pictures`, {
				searchInput,
			});
			props.setPictures(response.data.Pictures);
			console.log(response);
		} catch (error) {
			props.setPictures([]);
			console.log(error);
		}
	};
	const drawer = (
		<div
			style={{
				marginLeft: 20,
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: 63,
					marginTop: 20,
				}}
			>
				<img src={LogoImage} alt='Blue cube' width='150px' height='auto' />
			</div>
			<List
				style={{
					fontFamily: 'Calibri',
					paddingLeft: 20,
					paddingRight: 20,
					paddingTop: 20,
				}}
			>
				<NavLink
					exact
					to='/'
					style={{
						textDecoration: 'none',
						color: 'indigo',
					}}
				>
					<ListItem
						button
						style={{
							display: 'flex',
							alignItems: 'center',
							borderStyle: 'solid',
							borderColor: '#CCC',
							borderWidth: 1,
							borderRadius: 10,
						}}
					>
						<HomeIcon
							style={{
								marginRight: 12,
							}}
							fontSize='small'
						/>

						<span
							style={{
								marginLeft: 0,
								fontSize: 15,
								fontWeight: 'bolder',
								color: '#666666',
							}}
						>
							Home
						</span>
					</ListItem>
				</NavLink>
				<NavLink
					exact
					to='/'
					style={{
						textDecoration: 'none',
						color: '#808080',
					}}
				>
					<ListItem
						button
						style={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<ChatBubble
							style={{
								marginRight: 12,
							}}
							fontSize='small'
						/>

						<span
							style={{
								marginLeft: 0,
								fontSize: 15,
								fontWeight: 'normal',
								color: '#808080',
							}}
						>
							Message
						</span>
					</ListItem>
				</NavLink>
				<div
					style={{
						paddingInline: 20,
						fontSize: 15,
						fontWeight: 'bold',
						color: '#666666',
						paddingBlock: 10,
					}}
				>
					<span>SHARE</span>
				</div>
				<NavLink
					exact
					to='/'
					style={{
						textDecoration: 'none',
						color: '#808080',
					}}
				>
					<ListItem
						button
						style={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<BarChart
							style={{
								marginRight: 12,
							}}
							fontSize='small'
						/>

						<span
							style={{
								marginLeft: 0,
								fontSize: 15,
								fontWeight: 'normal',
								color: '#808080',
							}}
						>
							Ranking
						</span>
					</ListItem>
				</NavLink>
				<NavLink
					exact
					to='/'
					style={{
						textDecoration: 'none',
						color: '#808080',
					}}
				>
					<ListItem
						button
						style={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<AssignmentTurnedIn
							style={{
								marginRight: 12,
							}}
							fontSize='small'
						/>

						<span
							style={{
								marginLeft: 0,
								fontSize: 15,
								fontWeight: 'normal',
								color: '#808080',
							}}
						>
							Challenge
						</span>
					</ListItem>
				</NavLink>
				<NavLink
					exact
					to='/'
					style={{
						textDecoration: 'none',
						color: '#808080',
					}}
				>
					<ListItem
						button
						style={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<Celebration
							style={{
								marginRight: 12,
							}}
							fontSize='small'
						/>

						<span
							style={{
								marginLeft: 0,
								fontSize: 15,
								fontWeight: 'normal',
								color: '#808080',
							}}
						>
							Party
						</span>
					</ListItem>
				</NavLink>
				<NavLink
					exact
					to='/'
					style={{
						textDecoration: 'none',
						color: '#808080',
					}}
				>
					<ListItem
						button
						style={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<ConnectWithoutContact
							style={{
								marginRight: 12,
							}}
							fontSize='small'
						/>

						<span
							style={{
								marginLeft: 0,
								fontSize: 15,
								fontWeight: 'normal',
								color: '#808080',
							}}
						>
							Connect
						</span>
					</ListItem>
				</NavLink>
				<NavLink
					exact
					to='/'
					style={{
						textDecoration: 'none',
						color: '#808080',
					}}
				>
					<ListItem
						button
						style={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<DirectionsWalk
							style={{
								marginRight: 12,
							}}
							fontSize='small'
						/>

						<span
							style={{
								marginLeft: 0,
								fontSize: 15,
								fontWeight: 'normal',
								color: '#808080',
							}}
						>
							Parade
						</span>
					</ListItem>
				</NavLink>
				<NavLink
					exact
					to='/'
					style={{
						textDecoration: 'none',
						color: '#808080',
					}}
				>
					<ListItem
						button
						style={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<Group
							style={{
								marginRight: 12,
							}}
							fontSize='small'
						/>

						<span
							style={{
								marginLeft: 0,
								fontSize: 15,
								fontWeight: 'normal',
								color: '#808080',
							}}
						>
							Group
						</span>
					</ListItem>
				</NavLink>
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box>
			<CssBaseline />

			<AppBar
				position='fixed'
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
					backgroundColor: {
						xs: 'indigo',
						sm: 'white',
					},
				}}
				style={{
					// backgroundColor: 'white',
					boxShadow: 'none',
				}}
			>
				<Toolbar
					style={{
						marginBlock: 20,
					}}
				>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Box
						sx={{
							display: {
								xs: 'none',
								sm: 'flex',
							},
						}}
						style={{
							position: 'relative',
							flexGrow: 1,
						}}
					>
						<TextField
							value={searchInput}
							onChange={(e) => setSearchInput(e.target.value)}
							InputProps={{
								startAdornment: (
									<InputAdornment
										position='start'
										style={{
											paddingLeft: 20,
											paddingRight: 10,
										}}
									>
										<SearchIcon fontSize='large' />
									</InputAdornment>
								),
							}}
							placeholder='Find Something...'
							variant='outlined'
							fullWidth
						/>
						<Button
							variant='contained'
							// color='success'
							style={{
								position: 'absolute',
								right: 10,
								top: 10,
								textTrasform: 'none',
								backgroundColor: 'indigo',
								textTransform: 'none',
							}}
							onClick={() => searchPicture()}
						>
							Search
						</Button>
					</Box>
					<Box
						sx={{
							display: {
								xs: 'none',
								sm: 'flex',
							},
						}}
						style={{
							marginLeft: 20,
							// display: 'flex',
							alignItems: 'center',
						}}
					>
						<div
							style={{
								marginRight: 30,
								color: 'indigo',
							}}
						>
							<IconButton
								color='inherit'
								aria-label='open drawer'
								edge='start'
								onClick={handleClick}
								// sx={{ mr: 2, display: { sm: 'none' } }}
							>
								<Badge
									badgeContent={3}
									color='error'
									anchorOrigin={{
										vertical: 'bottom',
										horizontal: 'right',
									}}
									overlap='circular'
								>
									<Notifications fontSize='large' color='inherit' />
								</Badge>
							</IconButton>
							<Menu
								id='basic-menu'
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								MenuListProps={{
									'aria-labelledby': 'basic-button',
								}}
							>
								<MenuItem
									onClick={handleClose}
									style={{
										display: 'flex',
									}}
								>
									<Avatar
										alt='Remy Sharp'
										src={Person1}
										style={{
											marginRight: 10,
										}}
									/>
									<div
										style={{
											display: 'flex',
											marginRight: 25,
											flexDirection: 'column',
										}}
									>
										<span
											style={{
												color: 'grey',
												fontSize: 14,
											}}
										>
											Micheal liked you!
										</span>
										<span
											style={{
												color: 'grey',
												fontSize: 11,
											}}
										>
											About 20 minutes ago
										</span>
									</div>
									<Favorite
										fontSize='small'
										style={{
											color: '#ccc',
										}}
									/>
								</MenuItem>
								<Divider />
								<MenuItem
									onClick={handleClose}
									style={{
										display: 'flex',
									}}
								>
									<Avatar
										alt='Remy Sharp'
										src={Person2}
										style={{
											marginRight: 10,
										}}
									/>
									<div
										style={{
											display: 'flex',
											marginRight: 28,
											flexDirection: 'column',
										}}
									>
										<span
											style={{
												fontSize: 14,
												color: 'indigo',
											}}
										>
											Jack liked you!
										</span>
										<span
											style={{
												fontSize: 11,
											}}
										>
											About 40 minutes ago
										</span>
									</div>
									<Favorite
										fontSize='small'
										style={{
											color: 'red',
										}}
									/>
								</MenuItem>
								<Divider />
								<MenuItem
									onClick={handleClose}
									style={{
										display: 'flex',
									}}
								>
									<Avatar
										alt='Remy Sharp'
										src={Person3}
										style={{
											marginRight: 10,
										}}
									/>
									<div
										style={{
											display: 'flex',
											marginRight: 20,
											flexDirection: 'column',
										}}
									>
										<span
											style={{
												fontSize: 14,
												color: 'indigo',
											}}
										>
											Martin commented
											<br />
											on your photo!
										</span>
										<span
											style={{
												fontSize: 11,
											}}
										>
											About 56 minutes ago
										</span>
									</div>
									<ChatBubble
										fontSize='small'
										style={{
											color: 'indigo',
										}}
									/>
								</MenuItem>
							</Menu>
						</div>
						<Button
							// variant='contained'
							style={{
								textTransform: 'none',
								color: 'indigo',
							}}
							endIcon={<KeyboardArrowDown />}
						>
							<div
								style={{
									marginRight: 20,
								}}
							>
								<Badge
									// badgeContent={3}
									color='success'
									variant='dot'
									anchorOrigin={{
										vertical: 'bottom',
										horizontal: 'right',
									}}
									overlap='circular'
								>
									<Avatar alt='Remy Sharp' src={Person4} />
								</Badge>
							</div>
							<spans>Abigail</spans>
						</Button>
					</Box>
				</Toolbar>
			</AppBar>

			<Box
				component='nav'
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label='mailbox folders'
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
					<Box
						sx={{
							display: {
								xs: 'block',
								sm: 'none',
							},
						}}
						style={{
							paddingInline: 10,
						}}
					>
						<div
							style={{
								fontSize: 15,
								fontWeight: 'bold',
								color: '#666666',
								marginBlock: 10,
								fontFamily: 'Calibri',
							}}
						>
							SEARCH
						</div>

						<TextField
							value={searchInput}
							onChange={(e) => setSearchInput(e.target.value)}
							InputProps={{
								startAdornment: (
									<InputAdornment
										position='start'
										// style={{
										// 	paddingLeft: 20,
										// 	paddingRight: 10,
										// }}
									>
										<SearchIcon fontSize='small' />
									</InputAdornment>
								),
							}}
							placeholder='Find Something...'
							variant='outlined'
							fullWidth
						/>
						<Button
							variant='contained'
							color='success'
							fullWidth
							style={{
								marginTop: 20,
							}}
							onClick={() => searchPicture()}
						>
							Search
						</Button>
					</Box>
				</Drawer>
				<Drawer
					variant='permanent'
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
}

export default Sidebar;
