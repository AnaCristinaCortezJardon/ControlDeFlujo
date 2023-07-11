/*function getDayNumber (janFirstDayNumber, yearDayNumber) {
    let dayNumber = ((janFirstDayNumber + yearDayNumber)-1) % 7;
    const WEEKDAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let dayOfWeek = WEEKDAY [dayNumber]
    return dayOfWeek
} //2023*/

function getDayNumber (janFirstDayNumber, yearDayNumber) {
    let dayNumber = ((janFirstDayNumber + (yearDayNumber+6)-1)) % 7;
    const WEEKDAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let dayOfWeek = WEEKDAY [dayNumber]
    return dayOfWeek} 
    //2022