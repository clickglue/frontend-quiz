import styles from './IntroductionComp.module.css'

function IntroductionComp(){
    return(
        <div className={styles.container}>
            <h2 className={styles.h2}>Welcome to the</h2>
            <h1 className={styles.h1}>Frontend Quiz!</h1>
            <h3 className={styles.h3}>Pick a subject to get started!</h3>
        </div>
    )
}
export default IntroductionComp