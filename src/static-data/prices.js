export default {
  highSeasonInterval: ["2018-05-01", "2018-09-30"],
  highSeasonPricePerDay: 140,
  lowSeasonPricePerDay: 100,
  minRentalDays: 3,
  deposit: 0,
  discounts: [
    {
      minDays: 7,
      percent: 5
    },
    {
      minDays: 14,
      percent: 7
    }
  ]
};
