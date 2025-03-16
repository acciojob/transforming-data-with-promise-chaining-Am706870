document.getElementById("btn").addEventListener("click", function() {
    let inputElement = document.getElementById("ip");
    let outputElement = document.getElementById("output");
    
    let num = parseFloat(inputElement.value);

    if (isNaN(num)) {
        outputElement.innerHTML = `Please provide a valid number: invalid input ${num}`;
        return;
    }

    // Initial Promise (2 seconds)
    new Promise((resolve) => {
        setTimeout(() => {
            outputElement.innerHTML = `Result: ${num}`;
            resolve(num);
        }, 2000);
    })
    .then((num) => {
        // Second Promise (2 seconds): Multiply by 2
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num * 2;
                outputElement.innerHTML = `Result: ${result}`;
                resolve(result);
            }, 2000);
        });
    })
    .then((num) => {
        // Third Promise (1 second): Subtract 3
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num - 3;
                outputElement.innerHTML = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    .then((num) => {
        // Fourth Promise (1 second): Divide by 2
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num / 2;
                outputElement.innerHTML = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    .then((num) => {
        // Fifth Promise (1 second): Add 10
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num + 10;
                outputElement.innerHTML = `Final Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    });
});

