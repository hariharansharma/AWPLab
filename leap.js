 let year = 2004
    let leap = (year % 4 == 0 && year % 100 != 0
        || year % 400 == 0);
        if (leap) {
            console.log( year, 'is a leap year.');
            } else {
                console.log( year, 'is not a leap year.');
                }
