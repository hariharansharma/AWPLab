function operation1() {
    // addition of two numbers with user input
    let a = 4
    let b = 5
    let sum = parseInt(a) + parseInt(b);

    if (isNaN(sum)) {
        document.getElementById('output1').innerText = 'Operation 1 Error: Please enter valid numbers.';
        console.error('Operation 1 Error: Invalid input');
    } else {
        document.getElementById('output1').innerText = 'Operation 1 - The sum of the numbers is: ' + sum;
        console.log('Operation 1 - The sum of the numbers is:', sum);
    }
}

function operation2() {
    // factorial of first 5 numbers
    let res = 1;
    for (let i = 1; i <= 5; i++) {
        res = res * i;
    }
    document.getElementById('output2').innerText = 'Operation 2 - The factorial of first 5 numbers is: ' + res;
    console.log('Operation 2 - The factorial of first 5 numbers is:', res);
}

function operation3() {
    //armstrong number verification
    let num = 123
    num = parseInt(num);
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        let digit = temp % 10;
        sum += digit * digit * digit;
        temp = Math.floor(temp / 10);
    }
    if (sum == num) {
        document.getElementById('output3').innerText = num + ' is an Armstrong number.';
        console.log('Operation 3:', num, 'is an Armstrong number.');
    } else {
        document.getElementById('output3').innerText = num + ' is not an Armstrong number.';
        console.log('Operation 3:', num, 'is not an Armstrong number.');
    }
}

function operation4(){
    //to find leap year
    let year = 2004
    let leap = (year % 4 == 0 && year % 100 != 0
        || year % 400 == 0);
        if (leap) {
            document.getElementById('output4').innerText = year + ' is a leap year.';
            console.log('Operation 4:', year, 'is a leap year.');
            } else {
                document.getElementById('output4').innerText = year + ' is not a leap year.';
                console.log('Operation 4:', year, 'is not a leap year.');
                }
                

    
}

operation1();
operation2();
operation3();
operation4();
