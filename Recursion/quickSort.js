const list = [9, 6, 5, 0, 8, 2,100, 4, 7]


function quickSort(list, l, r) {

    if (l < r) {
        let j = partition(list, l, r);
        quickSort(list, l, j - 1);
        quickSort(list, j + 1, r);
    }

}


function partition(list, low, high) {
    let i = low - 1;
    let pivot = list[high];
    for (let j = low; j <= high - 1; j++) {
        if (list[j] < pivot) {
            i++;
            let temp = list[j];
            list[j] = list[i];
            list[i] = temp;
        }
    }
    let temp = list[i + 1];
    list[i + 1] = pivot;
    list[high] = temp;
    return i + 1;
}

quickSort(list, 0, list.length - 1)
console.log(list);
