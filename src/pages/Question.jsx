import ButtonComp from '../components/Button/ButtonComp'

function Question({data, setProgress}){

    function handleAnswer(){
        setProgress(true);
    }
    return(
        <div>
            {data.question}
            {data.options[0]}
            {data.options[1]}
            {data.options[2]}
            {data.options[3]}

            <ButtonComp onclick={handleAnswer}/>
        </div>
    )
}

export default Question