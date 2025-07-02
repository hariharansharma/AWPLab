let num = 123
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        let digit = temp % 10;
        sum += digit * digit * digit;
        temp = Math.floor(temp / 10);
    }
    if (sum == num) {
        console.log( num, 'is an Armstrong number.');
    } else {
        console.log( num, 'is not an Armstrong number.');
    }