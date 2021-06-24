import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import Register from '@material-ui/icons/PersonAddSharp';
//LINK PARA ICONES: https://material-ui.com/pt/components/material-icons/

//INFORMAR DADOS PARA CADA CELULA DO MENU
export const SidebarData = [
    {
        title: "home",
        icon: <HomeIcon />,
        link: "/"
    },
    {
        title: "Register",
        icon: <Register />,
        link: "/register"
    },
]