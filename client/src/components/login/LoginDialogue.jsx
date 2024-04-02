import { Dialog } from '@mui/material'
import React from 'react'

function LoginDialogue({open, setOpen}) {
    const handleClose = ()=>{
        setOpen(false)
    }
    return (
        <Dialog open={open} onClose={handleClose}>
            Hi im Dialiogie
        </Dialog>
    )
}

export default LoginDialogue
