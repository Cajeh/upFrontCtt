import React from 'react';
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
export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/dashboard">
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
  </div>
);

export const secondaryListItems = (
  <div>
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
  </div>
);