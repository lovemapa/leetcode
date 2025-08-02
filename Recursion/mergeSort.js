
const list = [45, 67, 9, 54, 10, 39, 3, 37, 91, 4, 18, 70];


function mergeSort(low, high, list) {

    if (low < high) {

        let mid = parseInt((high - low) / 2 + low);

        mergeSort(low, mid, list.slice(low, mid + 1));
        mergeSort(mid + 1, high, list.slice(mid + 1));
        merge(list.slice(low, mid + 1), list.slice(mid + 1))

    }


}


function merge(listA, listB) {

    let listC = new Array(listA.length + listB.length);

    let i = 0, j = 0, k = 0;
    while (i < listA.length && j < listB.length) {


        if (listA[i] < listB[j]) {
            listC[k] = listA[i];
            i++;
            k++;
        }
        else {
            listC[k] = listB[j];
            j++;
            k++;
        }
    }

    while (i < listA.length) {
        listC[k] = listA[i];
        i++;
        k++;
    }

    while (j < listB.length) {
        listC[k] = listB[j];
        j++;
        k++;
    }

}

mergeSort(0, list.length, list)
console.log(list);
