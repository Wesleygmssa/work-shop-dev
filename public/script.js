function onOff() {
    document
    .querySelector("#modal")
    .classList
    .toggle("hide")

    document
    .querySelector('body')
    .classList
    .toggle("hideScroll")

    document
    .querySelector('#modal')
    .classList
    .toggle("addScroll")
}


// document
// .querySelector("button.fat")
// .addEventListener("click", onOff )


function checkFildes(event){
    const valuesTocheck = [
        "title",
        "image,",
        "category",
        "description",
        "link",
     
    ]

    const isEmpaty = valuesTocheck.find((value)=>{
        const checkString = typeof event.target[value].value === "string"
        const checkEmpaty = !event.target[value].value.trim()
        if (checkString && checkEmpaty){
                return true
        }
    })

    if (isEmpaty){
        event.preventDefault()
        alert("Por favor, preencha todos os campos ")
    }

    // for (let value of valuesTocheck){
    //     event.target[value].value
    // }

}