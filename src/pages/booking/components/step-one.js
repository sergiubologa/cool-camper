import React from "react";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";

import moment from "moment";
import "react-dates/lib/css/_datepicker.css";
import "../../../styles/date-picker.css";
import {
  HORIZONTAL_ORIENTATION,
  VERTICAL_ORIENTATION
} from "react-dates/constants";
import { DateRangePickerPhrases } from "react-dates/lib/defaultPhrases";
import Popover from "react-popover";
import QuestionMark from "../../../components/svg/question";
import IconButton from "../../../components/inputs/icon-button";

// Initialize moment localization for RO
moment.locale("ro", {
  months: "Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie".split(
    "_"
  ),
  monthsShort: "Ian_Feb_Mar_Apr_Mai_Iun_Iul_Aug_Sept_Oct_Noi_Dec".split("_"),
  monthsParseExact: true,
  weekdays: "Duminică_Luni_Marți_Miercuri_Joi_Vineri_Sâmbătă".split("_"),
  weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
  weekdaysMin: "Du_Lu_Ma_Mi_Joi_Vi_Sâ".split("_"),
  weekdaysParseExact: true
});

export const Name = "Alege perioada";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      isTotalPriceTooltipOpen: false
    };
    this.onDatesChange = this.onDatesChange.bind(this);
    this.handleTotalPriceTooltipClick = this.handleTotalPriceTooltipClick.bind(
      this
    );

    this.totalPricePopoverRef = React.createRef();
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate }, () => {
      console.log(startDate, endDate);
    });
  }

  handleTotalPriceTooltipClick() {
    this.setState({
      isTotalPriceTooltipOpen: !this.state.isTotalPriceTooltipOpen
    });
  }

  render() {
    const { startDate, endDate } = this.state;
    const isMobile = window.matchMedia("(max-width: 699px)").matches;
    const datePickerOrientation = isMobile
      ? VERTICAL_ORIENTATION
      : HORIZONTAL_ORIENTATION;
    const dateFormat = isMobile ? "dd, D MMM" : "dddd, D MMM";
    const noOfDays = startDate && endDate ? endDate.diff(startDate, "days") : 0;
    const pricePerDay = 140;
    const totalPrice = noOfDays * pricePerDay;
    return (
      <div className="step__one">
        <div className="step__one__labels">
          <label>De la</label>
          <label>Până la</label>
        </div>
        <DateRangePicker
          startDate={this.state.startDate}
          startDateId="your_unique_start_date_id"
          endDate={this.state.endDate}
          endDateId="your_unique_end_date_id"
          startDatePlaceholderText="mm/dd/yyyy"
          endDatePlaceholderText="mm/dd/yyyy"
          readOnly
          showClearDates={!isMobile}
          noBorder
          withFullScreenPortal={isMobile}
          disableScroll={isMobile}
          firstDayOfWeek={1}
          minimumNights={3}
          displayFormat={dateFormat}
          orientation={datePickerOrientation}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
          phrases={{
            ...DateRangePickerPhrases
          }}
        />
        {noOfDays > 0 && (
          <div className="step__one__details">
            <div className="step__one__details__row">
              <span>
                140€ x {noOfDays} {noOfDays > 1 ? "zile" : "zi"}
                <Popover
                  isOpen={this.state.isTotalPriceTooltipOpen}
                  body={
                    <div>
                      <div>Popover Content</div> <div>Popover Content</div>{" "}
                      <div>Popover Content</div>
                    </div>
                  }
                  place="above"
                  onOuterAction={this.handleTotalPriceTooltipClick}
                  tipSize={7}
                  enterExitTransitionDurationMs={0}
                  refreshIntervalMs={0}
                >
                  <IconButton
                    onClick={this.handleTotalPriceTooltipClick}
                    className="popover__button"
                  >
                    <QuestionMark width={17} />
                  </IconButton>
                </Popover>
              </span>
              <span>{totalPrice.toLocaleString()}€</span>
            </div>
            <div className="step__one__details__row step__one__details__row__discount">
              <span>10% discount</span>
              <span>-100€</span>
            </div>
            <div className="step__one__details__row">
              <span>
                <strong>Total</strong>
              </span>
              <span>
                <strong>{totalPrice.toLocaleString()}€</strong>
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
}
