import styles from "./CategoryComp.module.css";

function CategoryComp({title, icon, setCategory}) {

    function onclickHandler(){
        setCategory(title)
    }

  return (
  <div>
    {title}
    <img src={icon} alt={`Icon ${title}`} />
    <button onClick={onclickHandler}>{title}</button>
    </div>)
    
    ;
}
export default CategoryComp;
