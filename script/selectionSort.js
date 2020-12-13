selectionSort = (pillarArray) => {
    for (var i = 0; i < size; ++i) {
        let minI = i, min = array[i];
        for (var j = i + 1; j < size; ++j) {
            updatePillar(pillarArray[j], array[j], 'yellow')
            if (array[j] < min) {
                updatePillar(pillarArray[minI], array[minI], '#1a1a1d');
                min = array[j];
                minI = j;
                updatePillar(pillarArray[minI], array[minI], 'purple');
            }
            else
                updatePillar(pillarArray[j], array[j], '#1a1a1d');
        }
        if (minI != i) {
            let temp = array[i];
            array[i] = array[minI];
            array[minI] = temp;

            updatePillar(pillarArray[i], array[i], 'red');
            updatePillar(pillarArray[minI], array[minI], 'red');
            updatePillar(pillarArray[minI], array[minI], '#1a1a1d')
        }
        updatePillar(pillarArray[i], array[i], 'green');
    }
}