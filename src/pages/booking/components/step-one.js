import React from "react";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "../../../styles/date-picker.css";
import {
  HORIZONTAL_ORIENTATION,
  VERTICAL_ORIENTATION
} from "react-dates/constants";
import { DateRangePickerPhrases } from "react-dates/lib/defaultPhrases";
import PriceDetails from "./price-details";
import { getNoOfDays } from "coolcamper-common";
import { isSSR } from "../../../common/utils";
import Gift from "../../../assets/img/gift.svg";
import IconLabel from "../../../components/icon-label";

export const Name = "Alege perioada";
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null
    };
    window.ga("send", "event", {
      eventCategory: "New booking",
      eventAction: "view booking step",
      eventLabel: "step 1"
    });
  }

  render() {
    const { startDate, endDate, onDatesChange, error } = this.props;
    const isMobile = window.matchMedia("(max-width: 699px)").matches;
    const datePickerOrientation = isMobile
      ? VERTICAL_ORIENTATION
      : HORIZONTAL_ORIENTATION;
    const dateFormat = isMobile ? "dd, D MMM" : "dddd, D MMM";
    const noOfDays = getNoOfDays(startDate, endDate);

    return (
      <div className="step__one">
        <div className="step__one__left">
          <div className="step__one__labels">
            <label htmlFor="your_unique_start_date_id">De la</label>
            <label htmlFor="your_unique_end_date_id">Până la</label>
          </div>

          {!isSSR() && (
            <DateRangePicker
              startDate={startDate}
              startDateId="your_unique_start_date_id"
              endDate={endDate}
              endDateId="your_unique_end_date_id"
              startDatePlaceholderText="mm/dd/yyyy"
              endDatePlaceholderText="mm/dd/yyyy"
              readOnly
              required
              showClearDates={!isMobile}
              noBorder
              withFullScreenPortal={isMobile}
              disableScroll={isMobile}
              firstDayOfWeek={1}
              minimumNights={3}
              displayFormat={dateFormat}
              orientation={datePickerOrientation}
              onDatesChange={onDatesChange}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
              phrases={{
                ...DateRangePickerPhrases
              }}
            />
          )}

          {error && noOfDays <= 0 && (
            <div className="step__one__labels">
              <small className="error step__one__error">{error}</small>
            </div>
          )}
          {noOfDays > 0 && (
            <PriceDetails
              startDate={startDate}
              endDate={endDate}
              className="step__one__priceDetails"
            />
          )}
        </div>
        <div className="step__one__right">
          <img src={Gift} alt="Datele sunt în siguranță" />
          <h4>Beneficii incluse</h4>
          <div className="step__one__benefits_labels">
            <div style={{ width: "60%" }}>
              <IconLabel size="small" text="Asigurare full CASCO" />
              <IconLabel size="small" text="Rovignetă" />
              <IconLabel size="small" text="Număr nelimitat de km" />
              <IconLabel size="small" text="Suport de biciclete" />
              <IconLabel size="small" text="Masă și scaune de camping" />
            </div>
            <div>
              <IconLabel
                size="small"
                text="Așternuturi, perne și lenjerii de pat"
              />
              <IconLabel size="small" text="Prosoape de baie" />
              <IconLabel
                size="small"
                text="Veselă, oale și tigăi pentru gătit"
              />
              <IconLabel
                size="small"
                text="Anularea rezervării este gratuită, oricând"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
