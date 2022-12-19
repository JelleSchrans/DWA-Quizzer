function Button(props){
    return (
        <button id={props.id} className={props.className}>{props.content}</button>
    )
}

export default Button;