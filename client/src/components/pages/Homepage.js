import { KeyboardArrowDown } from '@mui/icons-material';
import { Button, ButtonGroup, Tab, Tabs, Typography } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Sidebar from '../layout/Sidebar';
const drawerWidth = 240;

function Homepage() {
	return (
		<>
			<Box sx={{ display: 'flex' }}>
				<Sidebar />
				<Box
					component='main'
					sx={{
						flexGrow: 1,
						p: 3,
						width: { sm: `calc(100% - ${drawerWidth}px)` },
					}}
				>
					<Toolbar />

					<ButtonGroup
						variant='outlined'
						aria-label='outlined button group'
						style={{
							paddingTop: 50,
							paddingBottom: 30,
							color: 'grey',
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

					<div>
						<Typography paragraph>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
							Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
							gravida rutrum quisque non tellus. Convallis convallis tellus id
							interdum velit laoreet id donec ultrices. Odio morbi quis commodo
							odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum
							est ultricies integer quis. Cursus euismod quis viverra nibh cras.
							Metus vulputate eu scelerisque felis imperdiet proin fermentum
							leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
							lobortis feugiat vivamus at augue. At augue eget arcu dictum
							varius duis at consectetur lorem. Velit sed ullamcorper morbi
							tincidunt. Lorem donec massa sapien faucibus et molestie ac.
						</Typography>
						<Typography paragraph>
							Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
							ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
							elementum integer enim neque volutpat ac tincidunt. Ornare
							suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
							volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
							Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
							ornare massa eget egestas purus viverra accumsan in. In hendrerit
							gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
							aliquam sem et tortor. Habitant morbi tristique senectus et.
							Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
							aenean euismod elementum nisi quis eleifend. Commodo viverra
							maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
							aliquam ultrices sagittis orci a.
						</Typography>
					</div>
				</Box>
			</Box>
		</>
	);
}

export default Homepage;
