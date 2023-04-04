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

