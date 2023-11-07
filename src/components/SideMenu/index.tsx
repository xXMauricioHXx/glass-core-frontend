import './style.scss';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import {
  MenuList,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Button,
  Box,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export type MenuItems = {
  name: string;
  icon?: React.ReactNode;
  to: string;
};

export default () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItem = (event: any) => {
    setIsOpen(!isOpen);
  };

  const renderItens = (items: MenuItems[]) => {
    return items.map((item, index) => {
      const className =
        location.pathname === item.to ? 'menu-item-active' : 'menu-item';

      return (
        <MenuItem
          className={className}
          key={index}
          onClick={(event) => handleMenuItem(event)}
          component={Link}
          to={item.to}
        >
          <ListItemIcon className='menu-item-icon'>{item.icon}</ListItemIcon>
          <ListItemText>{item.name}</ListItemText>
        </MenuItem>
      );
    });
  };

  return (
    <Grid
      container
      xs={12}
      md={3}
      lg={2}
      xl={1}
      sx={{
        position: { xs: 'absolute', md: 'relative' },
        left: { xs: '0px', md: 'unset' },
        width: { xs: '100%', md: 'unset' },
      }}
      className='menu'
    >
      <Grid
        item
        xs={12}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
        className='menu-button'
      >
        <Button onClick={handleOpenMenu}>
          <MenuRoundedIcon />
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        className='menu-container'
        sx={{
          position: { xs: 'absolute', md: 'relative' },
          left: { xs: isOpen ? '0px' : '-540px', md: 'unset' },
          width: { xs: '80%', sm: '40%', md: 'unset' },
        }}
      >
        <Box className='menu-logo-container'>
          <span className='menu-logo' />
          <h1>Glass Core</h1>
        </Box>
        <MenuList sx={{ marginX: 2 }}>
          {renderItens([
            { name: 'Inicio', to: '/home', icon: <HomeOutlinedIcon /> },
            {
              name: 'Produtotos',
              to: '/products',
              icon: <ShoppingCartOutlinedIcon />,
            },
            {
              name: 'Fornecedores',
              to: '/suppliers',
              icon: <PeopleOutlineIcon />,
            },
          ])}
        </MenuList>
      </Grid>
      <Grid
        item
        xs={12}
        className='menu-overlay'
        sx={{
          display: { xs: isOpen ? 'block' : 'none', md: 'none' },
          position: { xs: 'absolute', md: 'relative' },
        }}
      ></Grid>
    </Grid>
  );
};
