
const generateSenderPN = () => {   
    let result;
    let private_number = document.getElementById("privateNumber").value; 
    if(private_number) { 
        result = Math.pow(3,private_number) % 17;  
        alert(result);
    };
}

const generateRecieverPN = () => {
    let result;
    let private_number = document.getElementById("privateNumber").value; 
    if(private_number) { 
        result = Math.pow(3,private_number) % 17;  
        alert(result);
    };
}

const uploadBtn = () => { 
    document.getElementById('fileUpload').click();
}

const uploadedFile = document.getElementById('uploadedFile');
const setFile = () => {
    const fileValue = document.getElementById('fileUpload').files[0];
    uploadedFile.value = fileValue.name;
}
