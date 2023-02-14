import React ,{useState }from 'react';
import { AppBar, Toolbar, Grid,Typography,IconButton,List,ListItem,ListItemText,Drawer } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from './styles';
// import {BrowserRouter as Router,Routes,Link, Route} from 'react-router-dom';
// import {Switch} from 'react-router-dom';
const Header = ()=>{
    const classes = useStyles();
    const[openDrawer,setOpenDrawer]= useState(false);
    return (
        <>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar>
                <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                            <MenuIcon />
                        </IconButton>
                <Drawer className= {classes.drawer}
                                open={openDrawer}
                                onClose={() => setOpenDrawer(false)}
                            >
                            
                                <List className={classes.list}>
                                    <ListItem onClick={()=>setOpenDrawer(false)}>
                                        <ListItemText >
                                            <a className={classes.list} href = "https://github.com/ansisme" target="_blank" rel="noreferrer">My Github</a>
                                            {/* <Link to={{pathname:"https://github.com"}} atrget = "_blank">About</Link> */}
                                        </ListItemText>
                                    </ListItem>
                              
                                     <ListItem onClick={()=>setOpenDrawer(false)} >
                                        <ListItemText>
                                        <a href = "https://linkedin.com/in/anshul-s-4246a8223" target="_blank" rel="noreferrer">My LinkedIn</a>

                                            {/* <Link to="https://github.com">About</Link> */}
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem onClick={()=>setOpenDrawer(false)}>
                                        <ListItemText>
                                        <a href = "https://api.nasa.gov/" target="_blank" rel="noreferrer">Generate your own NASA API key</a>

                                            {/* <Link to="https://api.nasa.gov/">Generate your own API key</Link> */}
                                        </ListItemText>
                                    </ListItem>


                                </List>
                                 
                        </Drawer>
                        <Grid>
                            <Typography className ={classes.text} variant="h6">
                                Nasa data fetching from Nasa API
                            </Typography>
                        </Grid>
                        {/* <Button color="inherit">Login</Button> */}
                    </Toolbar>
            </AppBar>
            </>
    );
}


                                    
// function Drawercomponent(){
//     const[openDrawer,setOpenDrawer]= useState(false);
//     return (

//         <List>
//             <ListItem onClick={()=>setOpenDrawer(false)}>
//                 <ListItemText>
//                     {/* <a href = "https://github.com/ansisme">My Github</a> */}
//                     <Link to={{pathname:"/https://github.com"}} target = "_blank">About</Link>
//                 </ListItemText>
//                 </ListItem>

//             {/* <ListItem onClick={()=>setOpenDrawer(false)}>
//                 <ListItemText>
//                     <Link to="https://github.com">About</Link>
//                 </ListItemText>
//             </ListItem>
//             <ListItem onClick={()=>setOpenDrawer(false)}>
//                 <ListItemText>
//                     <Link to="https://api.nasa.gov/">Generate your own API key</Link>
//                 </ListItemText> 
//             </ListItem> */}
//         </List>
//     )
// }
export default Header;



