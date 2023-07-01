const name = document.getElementById("name")
const tags = document.querySelector('.tags')
const addname = () => {

    const tag = document.createElement("div")
    tag.setAttribute('class', 'tag')

    if (name.value !='') {
        tag.innerText = `hey i am ${name.value}`
        tags.append(tag)
    }
    else {  
      alert(`Enter your 'Name' Plz`)
    }
}