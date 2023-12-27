import React from 'react'
import './Tempad.css'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import LanguageIcon from '@mui/icons-material/Language';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import CodeIcon from '@mui/icons-material/Code';
const Tempad = () => {
  return (
    <div className='outerdiv'>
        <div className='leftdiv'>
            <h1>Lorem ipsum is placeholder text</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
        </div>
        <div className='rightdiv'>
            <div className='icon'>
                <DeveloperModeIcon style={{fontSize:"100px"}}/>
            </div>
            <div className='icon'>
                <ViewInArIcon style={{fontSize:"100px"}}/>
            </div>
            <div className='icon'>
                <RocketLaunchIcon style={{fontSize:"100px"}}/>
            </div>
            <div className='icon'>
                <LanguageIcon style={{fontSize:"100px"}}/>
            </div>
            <div className='icon'>
                <CurrencyBitcoinIcon style={{fontSize:"100px"}}/>
            </div>
            <div className='icon'>
                <CodeIcon style={{fontSize:"100px"}}/>
            </div>
        </div>
    </div>
  )
}

export default Tempad
