import * as React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MoreVertIcon from 'material-ui/svg-icons/navigation/menu';
import HomeIcon from 'material-ui/svg-icons/action/home';
import HospitalIcon from 'material-ui/svg-icons/maps/local-hospital';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
import PhoneIcon from 'material-ui/svg-icons/communication/phone';


const tricareIconPath = require('../res/images/ui/tricare-online-icon.png');
const relayIconPath = require('../res/images/ui/tricare-relayhealth-icon.png');
const armyIconPath = require('../res/images/ui/tricare-army-icon.png');
const navyIconPath = require('../res/images/ui/tricare-navy-icon.png');
const airforceIconPath = require('../res/images/ui/tricare-airforce-icon.png');
import { Link } from 'react-router-dom';
import {drawerContainerStyles,drawerImageIconStyles,drawerLargeImageIconStyles} from './commonStyles';
export interface Props {
  open: boolean;
  setDrawerOpen: (open: boolean) => void;
  toggleDrawer: () => void;
}

export interface State {
 
}
export default class LeftMenu extends React.Component<Props, State>{
    constructor (props, context) {
      super(props);
    }

    handleToggle = (event) => {
      const {toggleDrawer} = this.props;
      event.preventDefault();
      event.stopPropagation();

      toggleDrawer();
    }
  handleClose = () => {
    const {setDrawerOpen} = this.props;
    setDrawerOpen(false);
  };
  render(){
     return (<div>
        <IconButton onTouchTap={this.handleToggle}><MoreVertIcon color="white" /></IconButton>
        <Drawer
          docked={false}
          width={300}
          open={this.props.open}
          onRequestChange={(open) => {
            this.props.setDrawerOpen(open);
          }}
          containerStyle={drawerContainerStyles}
        >
        <Menu>
          <MenuItem style={{color: 'white'}} leftIcon={<HomeIcon color={'white'} />} onTouchTap={this.handleClose} containerElement={<Link to="/" />} primaryText="Home" />
          <MenuItem style={{color: 'white'}} leftIcon={<HospitalIcon color={'white'} />} onTouchTap={this.handleClose} containerElement={<Link to="/hospitals" />} primaryText="Locations" />
          <MenuItem style={{color: 'white'}} leftIcon={<PhoneIcon color={'white'} />} onTouchTap={this.handleClose} containerElement={<Link to="/hotlines" />} primaryText="DoD Hotlines" />

          <MenuItem style={{color: 'white'}} insetChildren={true} onTouchTap={this.handleClose} containerElement={<Link to="/tricare-online" />} primaryText="TRICARE Online">
            <img style={drawerImageIconStyles} src={tricareIconPath} />
          </MenuItem>
          <MenuItem style={{color: 'white'}} insetChildren={true} onTouchTap={this.handleClose} containerElement={<Link to="/relay-health" />} primaryText="RelayHealth">
            <img style={drawerLargeImageIconStyles} src={relayIconPath} />
          </MenuItem>
          <MenuItem style={{color: 'white'}} insetChildren={true} onTouchTap={this.handleClose} containerElement={<Link to="/army" />} primaryText="Army Medicine">
            <img style={drawerLargeImageIconStyles} src={armyIconPath} />
          </MenuItem>
          <MenuItem style={{color: 'white'}} insetChildren={true} onTouchTap={this.handleClose} containerElement={<Link to="/navy" />} primaryText="Navy Medicine">
            <img style={drawerLargeImageIconStyles} src={navyIconPath} />
          </MenuItem>
          <MenuItem  style={{color: 'white'}} insetChildren={true} onTouchTap={this.handleClose} containerElement={<Link to="/air-force" />} primaryText="Air Force Medicine">
            <img style={drawerLargeImageIconStyles} src={airforceIconPath} />
          </MenuItem>
          <MenuItem style={{color: 'white'}} leftIcon={<FavoriteIcon color={'white'} />} onTouchTap={this.handleClose} containerElement={<Link to="/favorites" />} primaryText="Favorites" />
        </Menu>
        </Drawer>
      </div>);
  }
}