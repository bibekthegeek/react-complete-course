import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const userInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("Name input is valid..");
    }
  }, [enteredNameIsValid]);

  const nameInputChangeHnadler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);

    const enteredValue = userInputRef.current.value;
    console.log(enteredValue);

    // userInputRef.current.value = ""; => NOT IDEAL, DON"T MANIPULATE THE DOM
    setEnteredName("");
  };

  const nameInputIsInvalid = enteredNameTouched && !enteredNameIsValid;

  const nameInpurClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInpurClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={userInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHnadler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
