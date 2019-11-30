<template>
  <div class="g-textareaWithLabelAsPageHeading-form-group">
    <h1 class="g-textareaWithLabelAsPageHeading-label-wrapper">
      <label
        class="g-textareaWithLabelAsPageHeading-label"
        v-bind:for="textareaWithPageHeading"
      >
        Full address
      </label>
    </h1>

    <textarea
      class="g-textareaWithLabelAsPageHeading-textarea"
      v-bind:id="textareaWithPageHeading"
      v-bind:name="name"
      v-bind:rows="rows"
      v-bind:disabled="disabled"
      v-bind:readonly="readOnly"
      v-bind:cols="cols"
      v-bind:autofocus="autoFocus"
      v-bind:spellcheck="spellCheck"
      v-bind:autocomplete="computed__autocomplete"
      v-bind:maxlength="maxLength"
      v-bind:value="value"
    />
  </div>
</template>
<script>
import Vue from "vue";

const constants = {
  autoComplete: {
    Off: "off",
    On: "on",
    Name: "name",
    "Honorific: Prefix": "honorific-prefix",
    "Given Name": "given-name",
    "Additional Name": "additional-name",
    "Family Name": "family-name",
    "Honorific: Suffix": "honorific-suffix",
    Nickname: "nickname",
    Email: "email",
    Username: "username",
    "New Password": "new-password",
    "Current Password": "current-password",
    "Organization Title": "organization-title",
    Organization: "organization",
    "Street Address": "street-address",
    "Address Line 1": "address-line1",
    "Address Line 2": "address-line2",
    "Address Line 3": "address-line3",
    "Address Level 4": "address-level4",
    "Address Level 3": "address-level3",
    "Address Level 2": "address-level2",
    "Address Level 1": "address-level1",
    Country: "country",
    "Country Name": "country-name",
    "Postal Code": "postal-code",
    "Credit Card: Name": "cc-name",
    "Credit Card: Given Name": "cc-given-name",
    "Credit Card: Additional Name": "cc-additional-name",
    "Credit Card: Family Name": "cc-family-name",
    "Credit Card: Number": "cc-number",
    "Credit Card: Expiry": "cc-exp",
    "Credit Card: Expiry Month": "cc-exp-month",
    "Credit Card: Expiry Year": "cc-exp-year",
    "Credit Card: CSC": "cc-csc",
    "Credit Card: Type": "cc-type",
    "Transaction: Currency": "transaction-currency",
    "Transaction: Amount": "transaction-amount",
    Language: "language",
    Birthday: "bday",
    "Birthday: Day": "bday-day",
    "Birthday: Month": "bday-month",
    "Birthday: Year": "bday-year",
    Sex: "sex",
    Telephone: "tel",
    "Telephone: Country Code": "tel-country-code",
    "Telephone: National": "tel-national",
    "Telephone: Area Code": "tel-area-code",
    "Telephone: Local": "tel-local",
    "Telephone: Extension": "tel-extension",
    IMPP: "impp",
    URL: "url",
    Photo: "photo"
  }
};

export default Vue.extend({
  props: {
    textareaWithPageHeading: { type: String, required: false },
    name: { type: String, required: true },
    disabled: { type: Boolean, default: false, required: false },
    readOnly: { type: Boolean, default: false, required: false },
    rows: { type: String, required: false },
    cols: { type: String, required: false },
    autoFocus: { type: Boolean, default: false, required: false },
    spellCheck: { type: Boolean, default: false, required: false },
    autoComplete: {
      type: String,
      validator: value => {
        return (
          [
            "Off",
            "On",
            "Name",
            "Honorific: Prefix",
            "Given Name",
            "Additional Name",
            "Family Name",
            "Honorific: Suffix",
            "Nickname",
            "Email",
            "Username",
            "New Password",
            "Current Password",
            "Organization Title",
            "Organization",
            "Street Address",
            "Address Line 1",
            "Address Line 2",
            "Address Line 3",
            "Address Level 4",
            "Address Level 3",
            "Address Level 2",
            "Address Level 1",
            "Country",
            "Country Name",
            "Postal Code",
            "Credit Card: Name",
            "Credit Card: Given Name",
            "Credit Card: Additional Name",
            "Credit Card: Family Name",
            "Credit Card: Number",
            "Credit Card: Expiry",
            "Credit Card: Expiry Month",
            "Credit Card: Expiry Year",
            "Credit Card: CSC",
            "Credit Card: Type",
            "Transaction: Currency",
            "Transaction: Amount",
            "Language",
            "Birthday",
            "Birthday: Day",
            "Birthday: Month",
            "Birthday: Year",
            "Sex",
            "Telephone",
            "Telephone: Country Code",
            "Telephone: National",
            "Telephone: Area Code",
            "Telephone: Local",
            "Telephone: Extension",
            "IMPP",
            "URL",
            "Photo"
          ].indexOf(value) !== -1
        );
      },
      required: true
    },
    maxLength: { type: String, required: false },
    value: { type: String, required: false }
  },
  computed: {
    computed__autocomplete() {
      return constants.autoComplete[this.autoComplete] !== undefined
        ? constants.autoComplete[this.autoComplete]
        : "";
    }
  }
});
</script>
<style scoped>
.g-textareaWithLabelAsPageHeading-form-group {
  margin-bottom: 20px;
}
@media (min-width: 40.0625em) {
  .g-textareaWithLabelAsPageHeading-form-group {
    margin-bottom: 30px;
  }
}
.g-textareaWithLabelAsPageHeading-form-group
  .g-textareaWithLabelAsPageHeading-form-group:last-of-type {
  margin-bottom: 0;
}
.g-textareaWithLabelAsPageHeading-form-group--error
  .g-textareaWithLabelAsPageHeading-form-group {
  padding: 0;
  border: 0;
}
.g-textareaWithLabelAsPageHeading-label {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.25;
  color: #2a2a2a;
  display: block;
  margin-bottom: 5px;
}
@media print {
  .g-textareaWithLabelAsPageHeading-label {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-textareaWithLabelAsPageHeading-label {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
}
@media print {
  .g-textareaWithLabelAsPageHeading-label {
    font-size: 14pt;
    line-height: 1.15;
  }
}
@media print {
  .g-textareaWithLabelAsPageHeading-label {
    color: #000000;
  }
}
.g-textareaWithLabelAsPageHeading-label-wrapper {
  margin: 0;
}
.g-textareaWithLabelAsPageHeading-character-count
  .g-textareaWithLabelAsPageHeading-textarea {
  margin-bottom: 5px;
}
.g-textareaWithLabelAsPageHeading-textarea {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  box-sizing: border-box;
  display: block;
  width: 100%;
  min-height: 40px;
  margin-bottom: 20px;
  padding: 5px;
  resize: vertical;
  border: 2px solid #0b0c0c;
  border-radius: 0;
  -webkit-appearance: none;
}
@media print {
  .g-textareaWithLabelAsPageHeading-textarea {
    font-family: sans-serif;
  }
}
@media (min-width: 40.0625em) {
  .g-textareaWithLabelAsPageHeading-textarea {
    font-size: 1.1875rem;
    line-height: 1.25;
  }
}
@media print {
  .g-textareaWithLabelAsPageHeading-textarea {
    font-size: 14pt;
    line-height: 1.25;
  }
}
.g-textareaWithLabelAsPageHeading-textarea:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 0;
}
@media (min-width: 40.0625em) {
  .g-textareaWithLabelAsPageHeading-textarea {
    margin-bottom: 30px;
  }
}
.g-textareaWithLabelAsPageHeading-hint > * {
  margin-top: 0px;
}
</style>
