import React from "react";
import * as S from "./Button";

interface ButtonProps {
    text: string;
    secondary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, secondary }) => {
    return (
        <>
            <S.Button isSecondary={secondary}>{text}</S.Button>
        </>
    );
};

export default Button;
