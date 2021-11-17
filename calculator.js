function calculator() {
    const operation = Number(prompt('Choose the operation:\n 1 - Addition(+)\n 2 - Subtraction(-)\n 3 - Multiplication(*)\n 4 - Royal Division(/)\n 5 - Entire Division(%)\n 6 - Potentiation(**)'));
    console.log(operation);

    if (!operation || operation >= 7) {
        alert('Erro - Invalid operation');
        calculator();
    } else {
        
    let n1 = Number(prompt('Enter the first value:'));
    let n2 = Number(prompt('Enter the second value:'));
    let result;

    if (!n1 || !n2) {
        alert('Erro - Invalid parameters')
        calculator();
    } else {
        function addition() {
            result = n1 + n2;
            alert(`${n1} + ${n2} = ${result}`);
            newOperation();
        }
    
        function subtraction() {
            result = n1 - n2;
            alert(`${n1} - ${n2} = ${result}`);
            newOperation();
        }
    
        function multiplication() {
            result = n1 * n2;
            alert(`${n1} * ${n2} = ${result}`);
            newOperation();
        }
    
        function royalDivision() {
            result = n1 / n2;
            alert(`${n1} / ${n2} = ${result}`);
            newOperation();
        }
    
        function entireDivision() {
            result = n1 % n2;
            alert(`The rest of the division between ${n1} and ${n2} is ${result}`);
            newOperation();
        }
    
        function potentiation() {
            result = n1 ** n2;
            alert(`${n1} raised to ${n2} is iqual to ${result}`);
            newOperation();
        }
    
        function newOperation() {
            let option = prompt('Do you want to perform a new operation?:\n 1 - Yes\n 2 - No')
    
            if (option == 1) {
                calculator();
            } else if (option == 2) {
                alert('See you!')
            } else {
                alert('Enter a valid option');
                newOperation();
            }
        }
    }

    if (operation == 1) {
        addition();
    } else if (operation == 2) {
        subtraction();
    } else if (operation == 3) {
        multiplication();
    } else if (operation == 4) {
        royalDivision();
    } else if (operation == 5) {
        entireDivision();
    } else if (operation == 6) {
        potentiation();
    }
    }

    
}

calculator();

