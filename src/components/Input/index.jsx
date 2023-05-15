import { InputStyled } from "./styled";

export const Input = ({ value, onChange, ...props }) => {
  const handleOnChange = (event) => {
    onChange(event.target.value);
  };

  return <InputStyled {...props} onChange={handleOnChange} />;
};
