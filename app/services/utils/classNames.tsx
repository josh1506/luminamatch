const classNames = (...classes: (string | boolean | undefined | null)[]):string => {
    return classes.filter(Boolean).join(" ")
}

export default classNames
