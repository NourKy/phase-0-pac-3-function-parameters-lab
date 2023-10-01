let name="Aki";
introduction(name);
function introduction(name)
{
return(`Hi, my name is ${name}.`)
}
const language="react";
console.log(introductionWithLanguage(name, language));
function introductionWithLanguage(name, language)
{
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
console.log(introductionWithLanguageOptional(name));
function introductionWithLanguageOptional(name, language=`JavaScript`)
{
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

