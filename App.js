// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import { Route, BrowserRouter, Switch, Link, useHistory } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { withRouter } from 'react-router';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Dashboard from './components/Dashboard'
import Tab1 from './components/Tab1'
import Tab2 from './components/Tab2'
import Tab3 from './components/Tab3'
import { green, purple } from '@material-ui/core/colors';

const drawerWidth = 240;
const colorViolet = purple[800]//'rgb(94, 53, 177)'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: '#fff',
    color: '#000'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    // background: 'rgb(237, 231, 246)',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: colorViolet,
    color: '#fff'
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    background: colorViolet,
    color: '#fff'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    // background:'red',
    // minHeight:'100%'
  },
  openCloseSidebarWrapper: {
    position: 'absolute',
    bottom: 0,
    borderTop: '1px solid #000',
    width: '100%',
    background: colorViolet,
  },
  header: {
    display:'flex',
    justifyContent:' space-between'
  }
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpenClose = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: false,
        })}
      >
        <Toolbar  className={classes.header}>
          <div> Logo </div>
          <div> Menu Item</div>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
              {/* to have proper spacing on top of sidebar */}
          </div>
          <Divider />
          <List>
            {/* <ListItemText /> */}
            {['dashboard', 'tab1', 'tab2', 'tab3'].map((text, index) => (
              <ListItem button key={text} component={Link} to={`/${text}`}>
                <ListItemIcon >{index % 2 === 0 ? <InboxIcon color="#fff" /> : <MailIcon color="#fff" />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}

          </List>
          <div className={classes.openCloseSidebarWrapper}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpenClose}
              edge="end"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/dashboard" name="Dashboard" component={Dashboard} />
            <Route exact path="/tab1" name="Tab1" component={Tab1} />
            <Route exact path="/tab2" name="Tab2" component={Tab2} />
            <Route exact path="/tab3" name="Tab3" component={Tab3} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App