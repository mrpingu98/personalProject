import React from 'react'
import { LoginDialog } from './LoginDialog'
import { PrimaryButton } from '../../Components/PrimaryButton'

const Login: React.FC = () => {
    const [open, setOpen] = React.useState<boolean>(false)

    const onClick = () => {
        setOpen(true)
    }

    return(
        <div>

<PrimaryButton onClick={onClick} text="Login"/>
      <LoginDialog
      open={open}
      setOpen={setOpen}
      />
        </div>
    )
}

export {Login}