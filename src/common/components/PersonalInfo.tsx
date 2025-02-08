import { useEffect, useRef, useState, DragEvent } from "react";
import { Field } from "../types";
import formStyles from "../../styles/tailwind_form_styles";
import RequiredFieldContainer from "./RequiredFieldContainer";
import ValidatorFieldContainer from "./ValidatorFieldContainer";
import { getInputClassName } from "../utils/formUtils";
import { PersonalInfoProps } from "../interfaces/types";

const PersonalInfo: React.FC<PersonalInfoProps> = ({
  firstname,
  surname,
  email,
  age,
  attachment,
  setFirstname,
  setSurname,
  setEmail,
  setAge,
  setAttachment,
  onChangeHandler,
  onBlurHandler
}) => {
  const sliderRef = useRef<HTMLInputElement | null>(null);
  const [thumbPosition, setThumbPosition] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const sliderWidth = slider.clientWidth;
      
      const min = Number(slider.min);
      const max = Number(slider.max);
      const newPosition = ((+age.value - min) / (max - min)) * (sliderWidth - 20);

      setThumbPosition(newPosition);
    }
  }, [age.value]);

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer?.items) {
      const files = [...e.dataTransfer.items].reduce((acc, item) => {
        if (item.kind === "file") {
          const file = item.getAsFile();
          if (file) {
            acc.push(file);
          }
        }
        return acc;
      }, [] as File[]);
      setAttachment((prev: Field) => ({ ...prev, value: files[0].name }));
    }
  };

  const onDragOver = (e: DragEvent<HTMLDivElement>) => e.preventDefault();

  const onClickElement = (id: string) => document.getElementById(id)?.click();

  return (
    <>
      <h2 className={formStyles.heading}>Personal info</h2>

      <div className={formStyles.fieldContainer}>
        <label className={formStyles.label}>First Name</label>
        <input 
          className={getInputClassName(firstname)}  
          value={firstname.value} 
          onChange={(e) => onChangeHandler(e, setFirstname)} 
          onBlur={() => onBlurHandler(setFirstname)} 
        />
        <div className={formStyles.validationMessage}>
          <RequiredFieldContainer {...firstname} />
          <ValidatorFieldContainer {...firstname} />
        </div>
      </div>

      <div className={formStyles.fieldContainer}>
        <label className={formStyles.label}>Last Name</label>
        <input 
          className={getInputClassName(surname)} 
          value={surname.value} 
          onChange={(e) => onChangeHandler(e, setSurname)} 
          onBlur={() => onBlurHandler(setSurname)} 
        />
        <div className={formStyles.validationMessage}>
          <RequiredFieldContainer {...surname} />
          <ValidatorFieldContainer {...surname} />
        </div>
      </div>

      <div className={formStyles.fieldContainer}>
        <label className={formStyles.label}>Email Address</label>
        <input 
          className={getInputClassName(email)} 
          value={email.value} 
          onChange={(e) => onChangeHandler(e, setEmail)} 
          onBlur={() => onBlurHandler(setEmail)} 
        />
        <div className={formStyles.validationMessage}>
          <RequiredFieldContainer {...email} />
          <ValidatorFieldContainer {...email} />
        </div>
      </div>

      <div className={formStyles.fieldContainer}>
        <label className={formStyles.label}>Age</label>
        <div className={formStyles.rangeWrapper}>
          <span className={formStyles.rangeMinLimit}>8</span>

          <input
            ref={sliderRef}
            className={`${formStyles.rangeInput}`}
            value={+age.value}
            type="range"
            min={8}
            max={100}
            step={1}
            onChange={(e) => onChangeHandler(e, setAge)}
            onBlur={() => onBlurHandler(setAge)}
          />

          <div
            className={formStyles.valueIndicator}
            style={{ left: `${thumbPosition}px` }}
          >
            {age.value}
            <div className={formStyles.valueTriangle}></div>
          </div>

          <span className={formStyles.rangeMaxLimit}>100</span>
        </div>
        <div className={formStyles.validationMessage}>
          <RequiredFieldContainer {...age} />
          <ValidatorFieldContainer {...age} />
        </div>
      </div>

      <div className={formStyles.fieldContainer}>
        <label className={formStyles.label}>Photo</label>
        <div
          className={formStyles.uploadContainer}
          tabIndex={0}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onClick={() => onClickElement("attachment")}
        >
          {!attachment.value && (
            <>
              <p className={formStyles.uploadPhotoText}>
                <u className={formStyles.underline}>Upload a file </u>
                <span className={formStyles.mobileNone}> or drag and drop here</span>
              </p>
            </>
          )}
          {attachment.value && (
            <span className={formStyles.file}>
              {attachment.value}
              <button 
                className={formStyles.closeBtn} 
                onClick={(e) => {
                  e.stopPropagation();
                  setAttachment({ ...attachment, value: "" });
                }}
              ></button>
            </span>
          )}
          <input 
            id="attachment" 
            className="hidden" 
            type="file" 
            accept=".jpg, .jpeg, .png, .gif"
            onChange={(e) => onChangeHandler(e, setAttachment)} 
            onBlur={() => onBlurHandler(setAttachment)} 
          />
        </div>
        <div className={formStyles.validationMessage}>
          <RequiredFieldContainer {...attachment} />
          <ValidatorFieldContainer {...attachment} />
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;