const Button = ({text, textColor, bgColor, link}) => {
    return (
        <div>
            <a href={link}>
                <button className={ `${bgColor} ${textColor} py-4 px-8 rounded-4xl cursor-pointer text-sm `}>
                    {text}
                </button>
            </a>

        </div>
    )
}

export default Button;