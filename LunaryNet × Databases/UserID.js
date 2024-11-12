function generateAlphaNumericID(length = 19) {
    const chars = '1234567890';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// Příklad použití
const newAlphaNumericID = generateAlphaNumericID();
console.log(newAlphaNumericID);
