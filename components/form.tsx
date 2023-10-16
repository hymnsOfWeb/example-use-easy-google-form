import { useRef } from "react";
import { useEasyGoogleForm } from "@hymns-of-web/use-easy-google-form";

export default function MyCustomGForm() {
  const ref = useRef(null);
  const onSubmit = useEasyGoogleForm({
    formRef: ref,
    gFormId: "122D1i9I2K9EMRt9_7h3ZgIWmHZ5JvA6unh7yVlRYUPs",
    links: [
      {
        entryId: "entry.1344481754",
        formId: "yaEEp",
        type: "text"
      },
      {
        entryId: "entry.495412045",
        formId: "HwBmK",
        type: "textarea"
      },
      {
        entryId: "entry.292085155",
        formId: "cDKMF",
        type: "dropdown"
      },
      {
        entryId: "entry.921857152",
        formId: "qoRVf",
        type: "checkbox"
      },
      {
        entryId: "entry.1361224627",
        formId: "uELrl",
        type: "time"
      },
      {
        entryId: "entry.2037093087",
        formId: "esOoe",
        type: "date"
      },
      {
        entryId: "entry.752938781",
        formId: "MsLEJ",
        type: "dropdown"
      }
    ]
  });
  return (
    <form onSubmit={onSubmit} ref={ref}>
      <label htmlFor="yaEEp">What is your name?</label>

      <input type="text" id="yaEEp" />
      <label htmlFor="HwBmK">How would you best describe yourself? Give a short brief about yourself. </label>

      <textarea id="HwBmK" />
      <label htmlFor="cDKMF">How would you best describe yourself in one word.</label>

      <select id="cDKMF">
        <option value="Introvert">Introvert</option>
        <option value="Extrovert">Extrovert</option>
        <option value="Ambivert">Ambivert</option>
        <option value="A Pikachu">A Pikachu</option>
      </select>

      <div id="qoRVf">
        {/* I have modified the HTML for this div according to my preference. You can do the same but try not to tinker with the attribute values unless you know what you are doing XD */}
        <span>Which of the below web browsers are you familiar with or use on a daily basis? </span>

        <div>
          <input type="checkbox" name="qoRVf" id="LFvQz" value="Microsoft Edge" />
          <label htmlFor="LFvQz">Microsoft Edge</label>
        </div>

        <div>
          <input type="checkbox" name="qoRVf" id="YjaDQ" value="Google Chrome" />
          <label htmlFor="YjaDQ">Google Chrome</label>
        </div>

        <div>
          <input type="checkbox" name="qoRVf" id="YCZQV" value="Mozilla Firefox" />
          <label htmlFor="YCZQV">Mozilla Firefox</label>
        </div>

        <div>
          <input type="checkbox" name="qoRVf" id="VDFHR" value="Brave" />
          <label htmlFor="VDFHR">Brave</label>
        </div>

        <div>
          <input type="checkbox" name="qoRVf" id="xhICw" value="Safari" />
          <label htmlFor="xhICw">Safari</label>
        </div>

        <div>
          <input type="checkbox" name="qoRVf" id="TKnmm" value="Opera" />
          <label htmlFor="TKnmm">Opera</label>
        </div>

        <div>
          <input type="checkbox" name="qoRVf" id="EAcMi" value="DuckDuckGo" />
          <label htmlFor="EAcMi">DuckDuckGo</label>
        </div>
      </div>

      <div id="uELrl">
        <span>What time do you usually wake up at?</span>
        <span>Please use 24 Hour Format</span>
        <div>
          <label htmlFor="iFGve">hour</label>
          <input type="number" name="hour" id="iFGve" />
        </div>
        <div>
          <label htmlFor="xsYwm">minute</label>
          <input type="number" name="minute" id="xsYwm" />
        </div>
      </div>

      <div id="esOoe">
        <span>When is your birthday?</span>
        <span>Month starting from index 1 (e.g. March will be 3)</span>

        <label htmlFor="GNZNz">year</label>
        <input type="number" name="year" id="GNZNz" />

        <label htmlFor="DaCFv">month</label>
        <input type="number" name="month" id="DaCFv" />

        <label htmlFor="XFbua">day</label>
        <input type="number" name="day" id="XFbua" />
      </div>
      <label htmlFor="MsLEJ">Which city is closest to you?</label>

      <select id="MsLEJ">
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Chennai">Chennai</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
