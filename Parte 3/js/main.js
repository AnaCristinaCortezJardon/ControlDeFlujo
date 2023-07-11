
function getDayNumber (janFirstDayNumber, yearDayNumber) {
    let dayNumber = ((janFirstDayNumber + yearDayNumber)-1) % 7;
    const WEEKDAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let dayOfWeek = WEEKDAY [dayNumber]
    return dayOfWeek
} 
// getDayNumber 2023

function businessHours(dayNumber, hourNumber) {
    if ((dayNumber >= 1 && dayNumber <= 5) &&
        (hourNumber >= 9 && hourNumber <= 18)) {
            return true;
            } else {
                return false;
            }
}

//busineesHours

function getDayBussinesHour(yearDayNumber, hourNumber) {
    let day = getDayNumber (0,yearDayNumber);

    return businessHours (day, hourNumber);
}