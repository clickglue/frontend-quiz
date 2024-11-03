import styles from './ButtonComp.module.css'

function ButtonComp({text, img, onclick}){

    function clickHandler(){
        onclick()
    }
    return(
        <div >
            <button className={styles.button} onClick={clickHandler}>
                <p className={styles.text}>
                    {text}
                </p>
                <img className={styles.img} src={img} alt={`Icon ${text}`} />
            </button>
        </div>
    )
}

export default ButtonComp