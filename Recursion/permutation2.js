function permuation(index, arr, result) {


    if (index == arr.length) {
        result.push([...arr]);
        return;
    }

    for (let i = index; i < arr.length; i++) {

        swap(arr, index, i);
        permuation(index + 1, arr, result);
        swap(arr, index, i);
    }

}

function main() {
    const arr = [1, 2, 3];
    const result = [];

    permuation(0, arr, result);
    console.log(result);

}
function swap(arr, index, i) {
    let temp = arr[index];
    arr[index] = arr[i];
    arr[i] = temp;
}
main()