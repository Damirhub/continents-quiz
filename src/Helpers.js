export const random = (array, arrayLength) => {
    let temp = []
    const randomize = (array, cb) => { [...Array(array)].forEach(cb) }
    randomize(arrayLength, _ => temp.push(array[Math.floor(Math.random() * array.length)]))
    return temp
}


export const shuffle = (array, arrayLength) => {
    let i, j, temp

    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array.slice(0, arrayLength);    
};