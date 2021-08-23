console.log('hello world!')


const changeSample = (element) => {
    console.log('yo dawg')
    let typeface = element.innerHTML
    document.getElementById("specimen").style.fontFamily = typeface; 
    console.log(typeface)
}

console.log('and done')