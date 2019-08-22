import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { unstable_Box as Box } from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IdentificacaoDoAluno from './IdentificacaoDoAluno'
import DadosSociodemograficos from './DadosSociodemograficos'
import DadosSobreSaude from './DadosSobreSaude'
import ResidenciaEstudantil from './ResidenciaEstudantil'
import Enfermagem from './Enfermagem'
import Psicologia from './Psicologia'
import Pedagogia from './Pedagogia'
import Odontologia from './Odontologia'
import ServicoSocial from './ServicoSocial'
import Nutricao from './Nutricao'
import {Route} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Assignment from '@material-ui/icons/AssignmentInd';
import Description from '@material-ui/icons/Description';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Link} from 'react-router-dom';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
      toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
      },
      toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
      },
      appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginLeft: 12,
        marginRight: 20,
      },
      menuButtonHidden: {
        display: 'none',
      },
      title: {
        flexGrow: 1,
      },
      inputRoot: {
        color: 'inherit',
        width: '100%',
      },
      inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 120,
          '&:focus': {
            width: 200,
          },
        },
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
        color:'blue',
        '&$disabled': {
          color: 'white',
        },
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        color:'blue'
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 20,
      },
});

class PersistentDrawerLeft extends React.Component {
  state = {
    open: false,
    selectedIndex:0,
  };
  handleListItemClick(novonumber) {
    this.setState({ selectedIndex: novonumber});

}

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
 //TAVA AKIIIIII
  handleDrawerClose = () => {
    this.setState({ ...this.state, open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden,
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              noWrap
              className={classes.title}
            >
            <Box fontWeight={500} textAlign='left' fontSize={22} fontFamily='Alegreya Sans' style={{color:'#f2f3f4'}} m={1}>
            Registrar Discente
      </Box>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          elevation = {16}
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
          <ListItem button component={Link} to="/dashboard" 
          selected={this.state.selectedIndex === 0}
          onClick={event => this.handleListItemClick(event, 0)}>
      <ListItemText primary="Identificação do Aluno"  />
      <ListItemIcon>
        <Assignment/>
      </ListItemIcon>
    </ListItem>
    <ListItem button component={Link} to="/dashboard/dadossociodemográficos">
      <ListItemText primary="Dados Sociedemográficos" />
      <ListItemIcon>
      <Description />
      </ListItemIcon>
    </ListItem>
    <ListItem button component={Link} to="/dashboard/dadossaúdegeral">
      <ListItemText primary="Dados sobre Saúde em Geral" />
      <ListItemIcon>
      <AssignmentIcon />
      </ListItemIcon>
    </ListItem>
    <ListItem button component={Link} to="/dashboard/residênciaestudantil">
      <ListItemText primary="Residência Estudantil" />
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
    </ListItem>
    </List>
          <Divider />
          <List>
          <ListSubheader inset>Dados Específicos</ListSubheader>
    <ListItem button component={Link} to="/dashboard/enfermagem">
      <ListItemText primary="Enfermagem" />
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
    </ListItem>
    <ListItem button component={Link} to="/dashboard/psicologia">
      <ListItemText primary="Psicologia" />
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
    </ListItem>
    <ListItem button component={Link} to="/dashboard/nutrição">
      <ListItemText primary="Nutrição" />
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
    </ListItem>
    <ListItem button component={Link} to="/dashboard/odontologia">
      <ListItemText primary="Odontologia" />
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
    </ListItem>
    <ListItem button component={Link} to="/dashboard/serviçosocial">
      <ListItemText primary="Serviço Social" />
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
    </ListItem>
    <ListItem button component={Link} to="/dashboard/pedagogia">
      <ListItemText primary="Pedagogia" />
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
    </ListItem>
          </List>
        </Drawer>
        <main
className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
                      <div className={classes.drawerHeader} />
                      <div  onClick={this.handleDrawerClose}
                            role="presentation"
>
          <Route exact path="/dashboard" render={(props) => <IdentificacaoDoAluno {...props} h1first='Identificação do Aluno' />}/>
              <Route path="/dashboard/dadossociodemográficos" exact render={(props) => <DadosSociodemograficos {...props} h1first='Dados Sociodemocráticos' />} />
              <Route path="/dashboard/dadossaúdegeral" exact render={(props) => <DadosSobreSaude {...props} h1first='Dados Sobre Saúde' />} />
              <Route path="/dashboard/residênciaestudantil" exact render={(props) => <ResidenciaEstudantil {...props} h1first='Residência Estudantil' />} />
              <Route path="/dashboard/enfermagem" exact render={(props) => <Enfermagem {...props} h1first='Enfermagem' />} />
              <Route path="/dashboard/psicologia" exact render={(props) => <Psicologia {...props} h1first='Psicologia' />} />
              <Route path="/dashboard/nutrição" exact render={(props) => <Nutricao {...props} h1first='Nutrição' />} />
              <Route path="/dashboard/odontologia" exact render={(props) => <Odontologia {...props} h1first='Odontologia' />} />
              <Route path="/dashboard/serviçosocial" exact render={(props) => <ServicoSocial {...props} h1first='Serviço social' />} />
              <Route path="/dashboard/pedagogia" exact render={(props) => <Pedagogia {...props} h1first='Pedagogia' />} />
              </div>
        </main>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);