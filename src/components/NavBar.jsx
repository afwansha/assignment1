import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography sx={{Flexgrow:1}} align='left'>BLOG DASHBOARD</Typography>
                 <Button><Link to={'/'}style={{align:'right',color:'white'}}>HOME</Link></Button>
                 <Button><Link to={'/add-blog'}style={{color:'white'}}>ADD BLOG</Link></Button>
                 

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar