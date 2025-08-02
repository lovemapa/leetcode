
function printNames(count) {
    if (count == 0) {
        return
    }
    count--;
    console.log("Pawan");
    printNames(count);

}

function printN(n, N) {
    if (n == N + 1) {
        return;
    }
    console.log(n);
    n++;
    printN(n, N);

}


function printReverseN(n) {
    if (n <= 0) {
        return;
    }
    console.log(n);
    n--;
    printReverseN(n);

}


function printNWithBackTrack(n) {
    if (n == 0) {
        return;
    }
    n--;
    printNWithBackTrack(n);
    console.log(n);

}

function printReverseNWithBackTrack(n, N) {
    if (n > N) {
        return;
    }

    printReverseNWithBackTrack(n + 1, N);
    console.log(n);

}

printReverseNWithBackTrack(1, 10)