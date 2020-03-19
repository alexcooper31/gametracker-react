export default (time) => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  let date = new Date(time * 1000)
  date.setDate(date.getDate() + 1)
  // date.toDateString()
  const result = `${monthNames[date.getMonth()]} ${date.getDay()} - ${date.getFullYear()}`
  return result;
}