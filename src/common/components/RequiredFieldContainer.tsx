import { Field } from "../types";

const RequiredFieldContainer: React.FC<Field> = ({ value, dirty }) => {
  return dirty && !String(value).length ? <div>Field is required</div> : null;
};

export default RequiredFieldContainer;