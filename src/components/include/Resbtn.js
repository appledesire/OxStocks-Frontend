import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
// import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import GroupWorkOutlinedIcon from "@mui/icons-material/GroupWorkOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ConnectedTvOutlinedIcon from "@mui/icons-material/ConnectedTvOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import PreviewOutlinedIcon from '@mui/icons-material/PreviewOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
// import StarBorder from "@mui/icons-material/StarBorder";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function Resbtn() {
  const [open, setOpen] = React.useState(false);
  const [openMenu1, setOpenMenu1] = React.useState(false);
  const [openMenu2, setOpenMenu2] = React.useState(false);
  const [openMenu3, setOpenMenu3] = React.useState(false);
  // const [openMenu4, setOpenMenu4] = React.useState(false);

  const handleClickMenu1 = () => {
    setOpenMenu1(!openMenu1);
  };

  const handleClickMenu2 = () => {
    setOpenMenu2(!openMenu2);
  };

  const handleClickMenu3 = () => {
    setOpenMenu3(!openMenu3);
  };
  // const handleClickMenu4 = () => {
  //   setOpenMenu4(!openMenu4);
  // };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        style={{
          marginTop: "10px",
          color: "#fff",
          border: "1px solid rgb(255, 255, 255, 0.5)",
        }}
      >
        &#9776;
      </Button>
      <Dialog
        fullScreen={true}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", bgcolor: "#1C253A" }}>
          <Toolbar sx={{ position: "relative", bgcolor: "#1C253A" }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon sx={{ color: "#fff" }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List
          sx={{ width: "100%", bgcolor: "#1C253A" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              sx={{ bgcolor: "#1C253A", color: "#F79118", fontSize: "20px" }}
              component="div"
              id="nested-list-subheader"
            >
              Menus
            </ListSubheader>
          }
        >
          <a href="/">
            <ListItemButton>
              <ListItemIcon>
                <HomeOutlinedIcon sx={{ color: "#F79118" }} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </a>
          <ListItemButton onClick={handleClickMenu1}>
            <ListItemIcon>
              <ExploreOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Discover" />
            {openMenu1 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <a href="/aboutus">
            <Collapse in={openMenu1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <InfoOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="About" />
                </ListItemButton>
              </List>
            </Collapse>
          </a>
          <a href="/location">
            <Collapse in={openMenu1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <LocationOnOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Locations" />
                </ListItemButton>
              </List>
            </Collapse>
          </a>
          <a href="/partnerships">
            <Collapse in={openMenu1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <GroupWorkOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Partnerships" />
                </ListItemButton>
              </List>
            </Collapse>
          </a>
          <a href="/referral">
            <Collapse in={openMenu1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <PreviewOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Referral" />
                </ListItemButton>
              </List>
            </Collapse>
          </a>
          <a href="/contactus">
            <Collapse in={openMenu1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <ContactSupportOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Contact Us" />
                </ListItemButton>
              </List>
            </Collapse>
          </a>
          <ListItemButton onClick={handleClickMenu2}>
            <ListItemIcon>
              <MonetizationOnOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Crypto" />
            {openMenu2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          {/* <a href="/marketplace"> */}
          <Collapse in={openMenu2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StorefrontOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Marketplace" />
                  <span style={{ fontSize: "12px", color: "#fff" }}>(Feb 2023)</span>
                </ListItemButton>
              </List>
            </Collapse>
          {/* </a> */}
          <a href="/ERC20Crypto">
            <Collapse in={openMenu2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <LocalGroceryStoreOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Buy ERC20 Crypto" />
                  <span style={{ fontSize: "12px", color: "#fff" }}>(March 2023)</span>
                </ListItemButton>
              </List>
            </Collapse>
          </a>
          <a href="/oxmining">
            <Collapse in={openMenu2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <ConstructionOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Mining" />
                  <span style={{ fontSize: "12px", color: "#fff" }}>(March 2023)</span>
                </ListItemButton>
              </List>
            </Collapse>
          </a>
          <a href="/oxcoin">
            <Collapse in={openMenu2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <SavingsOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Ox Coin" />
                  
                </ListItemButton>
              </List>
            </Collapse>
          </a>
          
          <Collapse in={openMenu2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <LinkOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Ox Chain" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClickMenu3}>
            <ListItemIcon>
              <SettingsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Services" />
            {openMenu3 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <a href="/oxlabs">
            <Collapse in={openMenu3} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <ScienceOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Labs" />
                </ListItemButton>
              </List>
            </Collapse>
          </a>
          <a href="/roadmap">
            <Collapse in={openMenu3} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <MapOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Roadmap" />
                </ListItemButton>
              </List>
            </Collapse>
          </a>
          <a href="/connect">
            <Collapse in={openMenu3} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <ConnectedTvOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Connect" />
                  <span style={{ fontSize: "12px", color: "#fff" }}>(Feb 2023)</span>
                </ListItemButton>
              </List>
            </Collapse>
          </a>
        </List>
      </Dialog>
    </div>
  );
}
