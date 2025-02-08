import { Field } from "../types";

const ValidatorFieldContainer: React.FC<Field> = ({ value, dirty, validators }) => {
  const validatorsMessages = validators.flatMap((validator) => validator(value));
  
  return dirty && String(value).length && validatorsMessages.length ? (
    <div>
      {validatorsMessages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  ) : null;
};

export default ValidatorFieldContainer;