export function generateExists(type) {
  var now = new Date()
  var year = now.getFullYear()
  switch(type) {
    case "Day":
      var diff = now - new Date(year, 0, 0);
      var oneDay = 1000 * 60 * 60 * 24;
      var day = Math.round(diff / oneDay);
      return day + "_" + year

    case "Week":
      return Math.ceil((Date.now() -new Date(year,0,1))/(3600000*24*7)) + "_" + year

    case "Month":
      return (now.getMonth() + 1) + "_" + year

    default:
      return null
  }
}
