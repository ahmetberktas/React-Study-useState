import "./customButton.css";

const CustomButton = ({buttonTitle, onClick, type}) => {
    return (
        <button className="countButton" type={type} onClick={onClick}>{buttonTitle}</button>
    )
}

export default CustomButton