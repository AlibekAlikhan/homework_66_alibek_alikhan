console.log(document.getElementById('string-1').innerText)
console.log(document.getElementById('string-2').innerText)
console.log(document.getElementById('string-3').innerText)
console.log(document.getElementById('string-4').innerText)
console.log(document.getElementById('string-5').innerText)
console.log(document.getElementById('string-6').innerText)

const element = document.getElementsByClassName('element')
len = 0
for(i of element){
  len++
    if(len < 4){
        i.style.color = 'red'
    }
    else{
        i.style.color = 'green'
    }
}


const contaires = document.getElementById('container')
for(let i = 1; i < 6; i++){
    const divClass = document.createElement('div')
    divClass.innerText = Element ${i}
    divClass.className = 'elemnt'
    contaires.append(divClass);
}
const elements = contaires.getElementsByClassName('elemnt')
for(i of elements){
    console.log(i)
}

