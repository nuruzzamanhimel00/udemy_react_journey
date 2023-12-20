const Card = (props) => {
    const classess =  props.className
    return (
        
        <div className={classess}>
            {props.children}
        </div>
    );
}

export default Card;