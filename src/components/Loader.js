import spinner from '../img/spinner.gif'
import LOADERCss from './Loader.module.css'

const Loader = () => {
    return (
        <div className={LOADERCss.loader}>
            <img src={spinner} alt="loading"></img>
            <h1>Fetching Data</h1>
        </div>
    )
}

export default Loader
