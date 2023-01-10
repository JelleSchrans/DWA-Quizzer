function Button(props){
    return (
        <button key={props.buttonKey} id={props.id} disabled={props.disabled} className={props.className} 
        onClick={props.handleClick}>{props.content}</button>
    )
}

export default Button;