import React from "react";
import {FormWrapper} from "./weather-form.styles";

export default function WeatherForm(props: {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setImperial: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  return (
    <FormWrapper>
      <h2>Weather Form:</h2>
      <form>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          onChange={e => {
            props.setCity(e.target.value);
          }}
        />
        <br></br>
        <label htmlFor="imperial">Imperial</label>
        <input
          type="checkbox"
          id="imperial"
          onChange={e => {
            props.setImperial(previous => !previous);
          }}
        />
      </form>
    </FormWrapper>
  );
}
