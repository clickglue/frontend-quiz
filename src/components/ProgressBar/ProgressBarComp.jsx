import styles from './ProgressBarComp.module.css'

function ProgressBarComp({length, progress}){

    return(
        <div className={styles.container}>
        <div className={styles.progress} style={{ width: `${(progress / length) * 100}%` }}></div>
      </div>
    )
}

export default ProgressBarComp