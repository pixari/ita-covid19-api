// 40X - Client Side Error
// 50X - Server Side Error 

module.exports = {
  ERROR_STATUS_ARRAY: [
    {
      status: "401",
      message: "Mandatory Parameter (date) missing.",
      data: "date param is missing."
    },
    {
      status: "402",
      message: "Mandatory Parameter (date) wrong.",
      data: "date param isn't a valid date format (yyyy-mm-dd)."
    },
  ]
}