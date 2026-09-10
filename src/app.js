function name(params) {
    return `hello ${params}`
}


module.exports = name;

if (require.main == module) 
    {

    console.log(name("ahmed")) 
    
    };