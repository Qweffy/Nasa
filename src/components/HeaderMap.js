import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'
import HEADERCss from './HeaderMap.module.css'

const Header = () => {
    return (
        <header className={HEADERCss.header}>
            <h1><Icon icon={locationIcon}/> Wildfire Tracker (Powered by NASA)</h1>
        </header>
    )
}

export default Header
