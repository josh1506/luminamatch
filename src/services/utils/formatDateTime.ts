export const formatDateTime = (date: Date): string => {
    const dateOptions: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "2-digit",
        year: "numeric",
    };

    const timeOptions: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", dateOptions).format(date);
    const formattedTime = new Intl.DateTimeFormat("en-US", timeOptions).format(date);

    return `${formattedDate} - ${formattedTime}`;
};
