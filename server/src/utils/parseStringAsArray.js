module.exports = (arrayAsString) => {
    return arrayAsString.split(',').map(singleString => singleString.trim());
    
}