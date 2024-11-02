import styles from './ButtonComp.module.css'

function ButtonComp({text, img, onclick}){

    function clickHandler(){
        onclick()
    }
    return(
        <div className={styles.div}>
            <button onClick={clickHandler}>
                <p>
                    {text}
                </p>
                <img src={img} alt={`Icon ${text}`} />
            </button>
        </div>
    )
}

export default ButtonComp