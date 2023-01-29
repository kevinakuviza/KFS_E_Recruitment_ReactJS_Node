import useInput from "../hooks/use-input";
// import React, { useRef, useState } from 'react';
const Form = () => {
  const {
    value: firstNameValue,
    inputChangeHandler: firstNameInputChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    inputError: firstNameInputError,
    valueIsValid: firstNameValueIsValid,
    resetInput: firstNameResetInput,
  } = useInput({
    validator: (val) => {
      return val.trim() !== "";
    },
  });

  const {
    value: lastNameValue,
    inputChangeHandler: lastNameInputChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    inputError: lastNameInputError,
    valueIsValid: lastNameValueIsValid,
    resetInput: lastNameResetInput,
  } = useInput({
    validator: (val) => {
      return val.trim() !== "";
    },
  });

  const {
    value: emailValue,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    inputError: emailInputError,
    valueIsValid: emailValueIsValid,
    resetInput: emailResetInput,
  } = useInput({
    validator: (val) => {
      return val.trim().includes("@");
    },
  });

  const {
    value: passwordValue,
    inputChangeHandler: passwordInputChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
    inputError: passwordInputError,
    valueIsValid: passwordValueIsValid,
    resetInput: passwordResetInput,
  } = useInput({
    validator: (val) => {
      return val.trim() !== "";
    },
  });

  const firstNameErrorInputClass = !firstNameInputError ? "hiddenSign" : "";
  const firstNameErrorTextClass = !firstNameInputError ? "hiddenText" : "";

  const lastNameErrorInputClass = !lastNameInputError ? "hiddenSign" : "";
  const lastNameErrorTextClass = !lastNameInputError ? "hiddenText" : "";

  const emailErrorInputClass = !emailInputError ? "hiddenSign" : "";
  const emailErrorTextClass = !emailInputError ? "hiddenText" : "";

  const passwordErrorInputClass = !passwordInputError ? "hiddenSign" : "";
  const passwordErrorTextClass = !passwordInputError ? "hiddenText" : "";

  const formIsValid =
    firstNameValueIsValid &&
    lastNameValueIsValid &&
    emailValueIsValid &&
    passwordValueIsValid;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // allInputsTouched();
    firstNameInputBlurHandler();
    lastNameInputBlurHandler();
    passwordInputBlurHandler();
    emailInputBlurHandler();

    if (!formIsValid) {
      return;
    }
    firstNameResetInput();
    lastNameResetInput();
    emailResetInput();
    passwordResetInput();
  };

  return (
    <form className="card-form__form" onSubmit={formSubmitHandler}>
      <input
        className={`card-form__form__item ${firstNameErrorInputClass}`}
        type="text"
        placeholder={!firstNameInputError && "First Name"}
        value={firstNameValue}
        onChange={firstNameInputChangeHandler}
        onBlur={firstNameInputBlurHandler}
      />
      
      <p className={`card-form__form__item-error ${firstNameErrorTextClass}`}>
        First Name cannot be empty
      </p>
      <input
        className={`card-form__form__item ${firstNameErrorInputClass}`}
        type="text"
        placeholder={!firstNameInputError && "Sur Name"}
        value={firstNameValue}
        onChange={firstNameInputChangeHandler}
        onBlur={firstNameInputBlurHandler}
      />
      
      <p className={`card-form__form__item-error ${firstNameErrorTextClass}`}>
        First Name cannot be empty
      </p>
      <input
        className={`card-form__form__item ${lastNameErrorInputClass}`}
        type="text"
        placeholder={!lastNameInputError && "Last Name"}
        value={lastNameValue}
        onChange={lastNameInputChangeHandler}
        onBlur={lastNameInputBlurHandler}
      />
      <p className={`card-form__form__item-error ${lastNameErrorTextClass}`}>
        Last Name cannot be empty
      </p>
      <input
        className={`card-form__form__item ${lastNameErrorInputClass}`}
        type="text"
        placeholder={!lastNameInputError && "Title"}
        value={lastNameValue}
        onChange={lastNameInputChangeHandler}
        onBlur={lastNameInputBlurHandler}
      />
      <p className={`card-form__form__item-error ${lastNameErrorTextClass}`}>
        Last Name cannot be empty
      </p>
      <input
        className={`card-form__form__item ${lastNameErrorInputClass}`}
        type="text"
        placeholder={!lastNameInputError && "Date of Birth"}
        value={lastNameValue}
        onChange={lastNameInputChangeHandler}
        onBlur={lastNameInputBlurHandler}
      />
      <p className={`card-form__form__item-error ${lastNameErrorTextClass}`}>
        Last Name cannot be empty
      </p>
      <input
        className={`card-form__form__item ${lastNameErrorInputClass}`}
        type="text"
        placeholder={!lastNameInputError && "National ID Number"}
        value={lastNameValue}
        onChange={lastNameInputChangeHandler}
        onBlur={lastNameInputBlurHandler}
      />
      <p className={`card-form__form__item-error ${lastNameErrorTextClass}`}>
        Last Name cannot be empty
      </p>
      <input
        className={`card-form__form__item ${lastNameErrorInputClass}`}
        type="text"
        placeholder={!lastNameInputError && "Ethnicity"}
        value={lastNameValue}
        onChange={lastNameInputChangeHandler}
        onBlur={lastNameInputBlurHandler}
      />
      <p className={`card-form__form__item-error ${lastNameErrorTextClass}`}>
        Last Name cannot be empty
      </p>
      <input
        className={`card-form__form__item ${lastNameErrorInputClass}`}
        type="text"
        placeholder={!lastNameInputError && "Gender"}
        value={lastNameValue}
        onChange={lastNameInputChangeHandler}
        onBlur={lastNameInputBlurHandler}
      />
      <p className={`card-form__form__item-error ${lastNameErrorTextClass}`}>
        Last Name cannot be empty
      </p>
      <input
        className={`card-form__form__item ${lastNameErrorInputClass}`}
        type="text"
        placeholder={!lastNameInputError && "Nationality"}
        value={lastNameValue}
        onChange={lastNameInputChangeHandler}
        onBlur={lastNameInputBlurHandler}
      />
      <p className={`card-form__form__item-error ${lastNameErrorTextClass}`}>
        Last Name cannot be empty
      </p>
      <input
        className={`card-form__form__item ${lastNameErrorInputClass}`}
        type="text"
        placeholder={!lastNameInputError && "County"}
        value={lastNameValue}
        onChange={lastNameInputChangeHandler}
        onBlur={lastNameInputBlurHandler}
      />
      <p className={`card-form__form__item-error ${lastNameErrorTextClass}`}>
        Last Name cannot be empty
      </p>
      <input
        className={`card-form__form__item ${lastNameErrorInputClass}`}
        type="text"
        placeholder={!lastNameInputError && "Sub-County"}
        value={lastNameValue}
        onChange={lastNameInputChangeHandler}
        onBlur={lastNameInputBlurHandler}
      />
      <p className={`card-form__form__item-error ${lastNameErrorTextClass}`}>
        Last Name cannot be empty
      </p>
      <input
        className={`card-form__form__item ${lastNameErrorInputClass}`}
        type="text"
        placeholder={!lastNameInputError && "Town/city"}
        value={lastNameValue}
        onChange={lastNameInputChangeHandler}
        onBlur={lastNameInputBlurHandler}
      />
      <p className={`card-form__form__item-error ${lastNameErrorTextClass}`}>
        Last Name cannot be empty
      </p>

      <input
        className={`card-form__form__item ${lastNameErrorInputClass}`}
        type="text"
        placeholder={!lastNameInputError && "Mobile Number Details"}
        value={lastNameValue}
        onChange={lastNameInputChangeHandler}
        onBlur={lastNameInputBlurHandler}
      />
      <p className={`card-form__form__item-error ${lastNameErrorTextClass}`}>
        Last Name cannot be empty
      </p>
      <input
        className={`card-form__form__item ${lastNameErrorInputClass}`}
        type="text"
        placeholder={!lastNameInputError && "Contact Person Information"}
        value={lastNameValue}
        onChange={lastNameInputChangeHandler}
        onBlur={lastNameInputBlurHandler}
      />
      <p className={`card-form__form__item-error ${lastNameErrorTextClass}`}>
        Last Name cannot be empty
      </p>
      <input
        className={`card-form__form__item ${emailErrorInputClass}`}
        type="email"
        placeholder={emailInputError ? "email@example/com" : "Email Address"}
        value={emailValue}
        onChange={emailInputChangeHandler}
        onBlur={emailInputBlurHandler}
      />
      <p className={`card-form__form__item-error ${emailErrorTextClass}`}>
        Looks like this is not an Email
      </p>
      <input
        className={`card-form__form__item ${passwordErrorInputClass}`}
        type="password"
        placeholder={!passwordInputError && "Password"}
        value={passwordValue}
        onChange={passwordInputChangeHandler}
        onBlur={passwordInputBlurHandler}
      />
      <p className={`card-form__form__item-error ${passwordErrorTextClass}`}>
        Password cannot be empty
      </p>
      <button className="card-form__form__button" type="submit">
Click Next [after completing filling the personal details]
      </button>
      <article className="tas">
   
        <span className="tint"></span>
      </article>
    </form>
  );
};

export default Form;
