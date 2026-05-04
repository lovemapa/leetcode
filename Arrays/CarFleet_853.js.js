function main() {
    const target = 10, position = [3], speed = [3]

    const timeToTravel = new Array();
    for (let i = 0; i < position.length; i++) {

        timeToTravel.push([position[i], (target - position[i]) / speed[i]]);

    }


    let numOfFleets = 1;


    timeToTravel.sort((a, b) => a[0] - b[0]);


    for (let i = position.length - 1; i >= 1; i--) {

        if (timeToTravel[i - 1][1] <= timeToTravel[i][1]) {
            timeToTravel[i - 1] = Math.max(timeToTravel[i - 1][1], timeToTravel[i][1]);
        }
        else{

            numOfFleets++;
        }

    }

    return numOfFleets;

}

console.log(main());




