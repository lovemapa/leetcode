
const list = [45, 67, 9, 54, 10, 39, 3, 37, 91, 4, 18, 70];


function mergeSort(low, high, list) {

    if (low < high) {

        let mid = parseInt((high - low) / 2 + low);
        mergeSort(low, mid, list);
        mergeSort(mid + 1, high, list);
        merge(low, mid, high,list)

    }


}


function merge(low,mid,high,list) {

    let listA= list.slice(low,mid+1);
    let listB= list.slice(mid+1,high+1);

    let i = 0, j = 0, k = low;
    while (i < listA.length && j < listB.length) {


        if (listA[i] < listB[j]) {
            list[k] = listA[i];
            i++;
            k++;
        }
        else {
            list[k] = listB[j];
            j++;
            k++;
        }
    }

    while (i < listA.length) {
        list[k] = listA[i];
        i++;
        k++;
    }

    while (j < listB.length) {
        list[k] = listB[j];
        j++;
        k++;
    }

}

mergeSort(0, list.length, list)
console.log(list);
