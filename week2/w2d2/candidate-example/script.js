// Example candidates
const candidateA = {
    id: 5,
    name: 'Mx. Candidate A',
    toString: function () {
        return this.name;
    }
};

const candidateB = {
    id: 8,
    name: 'Mx. Candidate B'
};

// Create a function that returns the candidate 
// with the smaller id
function compareIds(candidateA, candidateB) {
    if (candidateA.id < candidateB.id) {
        return candidateA;
    }
    return candidateB;
}

// Find the selected candidate
const selectedCandidate = compareIds(candidateA, candidateB);

// Update the HTML element with the name of 
// the selected candidate

result.textContent += selectedCandidate.name;
console.log(selectedCandidate);
console.log(candidateA.toString());