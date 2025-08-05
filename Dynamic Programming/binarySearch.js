const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const low = 0;
const high = list.length - 1;
const key = 7;

function binarySearch(list, low, high) {

    if (low > high)
        return false;


    let mid = Math.floor(((high - low) / 2) + low);
    if (list[mid] == key) return true;

    if (key < list[low]) {
        return binarySearch(list, low, mid - 1);
    }
    else {
        return binarySearch(list, mid + 1, high);
    }


}

console.log(binarySearch(list, low, high));