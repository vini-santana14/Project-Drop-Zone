const dropzoneBox = document.getElementsByClassName("dropzone-box")[0]
const inputFiles = document.querySelectorAll(".dropzone-area input[type='File']")
const inputElement = inputFiles[0]
const dropZoneElement = inputElement.closest(".dropzone-area")
const fileLimit = 25000000



inputElement.addEventListener("change", (e) => {
    if (inputElement.files[0].size > fileLimit) {
        alert("Aquivo é maior que 25MB! ")
        return
    }

    if (inputElement.files.length) {
        updateDropzoneFileList(dropZoneElement, inputElement.files[0])
    }
})

dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault()
    dropZoneElement.classList.add("dropzone--over")
})

["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
        dropZoneElement.classList.remove("dropzone--over")
    })
})

dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault()

    if(e.dataTransfer.files[0].size > fileLimit) {
        alert("Arquivo passou de 25MB! ")
        dropZoneElement.classList.remove("dropzone--over")

        return
    }

    if (e.dataTransfer.files.length) {
        inputElement.file = e.dataTransfer.files

        updateDropzoneFileList(dropZoneElement, e.dataTransfer.files[0])
    }

    dropZoneElement.classList.remove("dropzone--over")
})

const updateDropzoneFileList = (dropzoneElement, file) => {
    let dropzoneFileMessage = dropZoneElement.querySelector(".file-info")

    dropzoneFileMessage.innerHTML = `
    ${file.name}, ${file.size} bytes`
}

dropzoneBox.addEventListener("reset", (e) => {
    let dropzoneFileMessage = dropZoneElement.querySelector(".file-info")

    dropzoneFileMessage.innerHTML = `Nenhum arquivo selecionado`
})

dropzoneBox.addEventListener("submit", (e) => {
    e.preventDefault()
    const myField = document.getElementById("upload-file")

    if(myField.filex[0].size > fileLimit) {
        alert("Aquivo é maior que 25MB! ")
    }
    console.log(myField.files[0])
})