import style from './display.module.css'
const UserInput=({calval})=>{
    return (
        <>
            <input type="text" className={style.display} value={calval} readOnly/>
        </>
    );
}

export default UserInput;