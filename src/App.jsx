import { useState } from "react";
import UserInput from "./components/UserInput"
import Results from "./components/Results";


function App() {
  const [userData, setUserData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userData.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserData(prevUserData => {
      return {
        ...prevUserData,
        [inputIdentifier]: +newValue //Buradaki + hesaplamadaki string ifadeyi number'a dönüştürüyor

      };
    });
  }


  return (
    <>
      <UserInput onTest={handleChange} userData={userData} />
      {!inputIsValid ? <p className="center">Please enter a duration greater than zero.</p> : undefined }
      {inputIsValid ? <Results userData={userData} /> : undefined}

    </>
  );
};

export default App;
