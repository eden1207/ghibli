/** Function to provide a list of unique elements */
function removeDuplicates(data) {
    let uniqueElements = [];
    for(let i=0; i<data.length; i++) {
        let count = 0;
        for(let j=0; j<uniqueElements.length; j++) {
            if(data[i] === uniqueElements[j]) {
                count += 1;
            }
        }
        if(count === 0) {
            uniqueElements.push(data[i]);
        }
    }    
    return uniqueElements.sort();
}

/** Function to provide the titles of every movies */
export function getTitlesTags(data) {
    let titlesTags = [];
    for(let i=0; i<data.length; i++) {
        titlesTags.push(data[i].title.toLowerCase());
    }
    return removeDuplicates(titlesTags);
}

/** Function to provide the directors of every movies */
export function getDirectorsTags(data) {
    let directorsTags = [];
    for(let i=0; i<data.length; i++) {
        directorsTags.push(data[i].director.toLowerCase());
    }
    return removeDuplicates(directorsTags);
}

/** Function to provide the producers of every movies */
export function getProducersTags(data) {
    // Take all the elements from producer component
    let firstTreatment = [];
    for(let i=0; i<data.length; i++) {
        firstTreatment.push(data[i].producer.toLowerCase());
    }
    // Some ellements are a group of different names that we need to separate
    let secondTreatment = [];
    for(let i=0; i<firstTreatment.length; i++) {
        secondTreatment.push(firstTreatment[i].split(','));
    } 
    // We finally take all the elements
    let thirdTreatment = [];
    for(let i=0; i<secondTreatment.length; i++) {
        const resultElement = secondTreatment[i];
        for(let j=0; j<resultElement.length; j++) {
            thirdTreatment.push(resultElement[j].trim())
        }
    }
    return removeDuplicates(thirdTreatment);
}