import moment from 'moment';

export default function useHandleDate () {

  function getCurrentDateForDateInput () {
    return moment(new Date()).format("YYYY-MM-DD")
  }

  function getFirstDayOfCurrentMonth () {
    const currentData = moment().get('D') - 1;
    return moment().subtract(currentData, 'days').format('YYYY-MM-DD');
  }

  function parseYMDToDMY (date:string) {
    return moment(date).format('DD-MM-YYYY');
  }

  function parseDMYtoYMD (date:string) {
    return moment(date, 'DD-MM-YYYY').format('YYYY-MM-DD');
  }

  return {
    getCurrentDateForDateInput,
    getFirstDayOfCurrentMonth,
    parseYMDToDMY,
    parseDMYtoYMD
  }

}
