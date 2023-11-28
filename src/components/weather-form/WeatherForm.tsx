import React from "react";
import {FormWrapper} from "./weather-form.styles";

export default function WeatherForm(props: {
  setCity: (city: string) => void;
  setImperial: (imperial: boolean) => void;
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
          name="imperial"
          onChange={e => {
            props.setImperial(Boolean(e.target.value));
          }}
        />
      </form>
    </FormWrapper>
  );
}
