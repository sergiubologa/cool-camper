import React from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import "react-dates/lib/css/_datepicker.css";
import "../../../styles/date-picker.css";
import {
  HORIZONTAL_ORIENTATION,
  VERTICAL_ORIENTATION
} from "react-dates/constants";
import { DateRangePickerPhrases } from "react-dates/lib/defaultPhrases";

// Initialize moment localization for RO
moment.locale("ro", {
  months: "Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie".split(
    "_"
  ),
  monthsShort: "ian._feb._mar._apr._mai_iun._iul._aug._sept._oct._noi._dec.".split(
    "_"
  ),
  monthsParseExact: true,
  weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
  weekdaysShort: "dum._lun._mar._mier._joi_vin._sâm.".split("_"),
  weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
  weekdaysParseExact: true
});

export const Name = "Alege perioada";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null
    };
    this.onDatesChange = this.onDatesChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate }, () => {
      console.log(startDate, endDate);
    });
  }

  render() {
    const isMobile = window.matchMedia("(max-width: 599px)").matches;
    const datePickerOrientation = isMobile
      ? VERTICAL_ORIENTATION
      : HORIZONTAL_ORIENTATION;
    return (
      <DateRangePicker
        startDate={this.state.startDate}
        startDateId="your_unique_start_date_id"
        endDate={this.state.endDate}
        endDateId="your_unique_end_date_id"
        startDatePlaceholderText="Data de inceput"
        endDatePlaceholderText=""
        readOnly
        showDefaultInputIcon
        showClearDates
        noBorder
        small
        withFullScreenPortal={isMobile}
        disableScroll={isMobile}
        firstDayOfWeek={1}
        hideKeyboardShortcutsPanel
        orientation={datePickerOrientation}
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.focusedInput}
        onFocusChange={focusedInput => this.setState({ focusedInput })}
        phrases={{
          ...DateRangePickerPhrases
        }}
      />
    );
  }
}
