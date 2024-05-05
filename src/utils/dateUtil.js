export function convertUTCtoIST(utcDateTimeString) {
    // Create a new Date object from the UTC timestamp
    const utcDate = new Date(utcDateTimeString);

    // Get the UTC time in milliseconds
    const utcTime = utcDate.getTime();

    // Indian Standard Time (IST) is UTC + 5 hours 30 minutes
    const istTime = utcTime + (5.5 * 60 * 60 * 1000);

    // Create a new Date object for IST
    const istDate = new Date(istTime);

    // Format the IST date and time as a string
    const istDateTimeString = istDate.toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    return istDateTimeString;
}
