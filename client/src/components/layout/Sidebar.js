import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
	AssignmentTurnedIn,
	BarChart,
	Celebration,
	ChatBubble,
	ConnectWithoutContact,
	DirectionsWalk,
	Group,
	Home as HomeIcon,
	KeyboardArrowDown,
	Notifications,
	Search as SearchIcon,
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LogoImage from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { alpha, styled } from '@mui/system';
import {
	Avatar,
	Badge,
	Button,
	FormControl,
	Input,
	InputAdornment,
	InputBase,
	InputLabel,
	TextField,
} from '@mui/material';

const drawerWidth = 240;

function Sidebar(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
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
					<div
						style={{
							display: 'flex',
							position: 'relative',
							flexGrow: 1,
						}}
					>
						<TextField
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
							color='success'
							style={{
								position: 'absolute',
								right: 10,
								top: 10,
							}}
						>
							Search
						</Button>
					</div>
					<div
						style={{
							marginLeft: 20,
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<div
							style={{
								marginRight: 30,
							}}
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
								<Notifications fontSize='large' />
							</Badge>
						</div>
						<Button
							variant='contained'
							style={{
								textTransform: 'none',
							}}
							endIcon={<KeyboardArrowDown />}
						>
							<Avatar
								alt='Remy Sharp'
								src={LogoImage}
								style={{
									marginRight: 20,
								}}
							/>
							<span>Abigail</span>
						</Button>
					</div>
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
