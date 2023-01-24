export default function getAge(fromdate, todate) {
  if (todate) todate = new Date(todate);
  else todate = new Date();

  var fromdate = new Date(fromdate),
    y = [todate.getFullYear(), fromdate.getFullYear()],
    ydiff = y[0] - y[1],
    m = [todate.getMonth(), fromdate.getMonth()],
    mdiff = m[0] - m[1],
    d = [todate.getDate(), fromdate.getDate()],
    ddiff = d[0] - d[1];

  if (mdiff < 0 || (mdiff === 0 && ddiff < 0)) --ydiff;
  if (mdiff < 0) mdiff += 12;
  if (ddiff < 0) {
    fromdate.setMonth(m[1] + 1, 0);
    ddiff = fromdate.getDate() - d[1] + d[0];
    --mdiff;
  }
  if (ydiff > 0) return `${ydiff}Y ago`;
  if (mdiff > 0) return `${mdiff}M ago`;
  if (ddiff > 0) return `${ddiff}D ago`;
  // if (age.length > 1) ;
  return '0';
}
