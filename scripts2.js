//retrieve sender data from localStorage and display in index file (p tag)

const loadDoc = () => {
    const items = JSON.parse(window.localStorage.getItem('data'));
    const div = document.getElementById('display');
    const load_img = document.getElementById('load-doc-img');
    if(items.doc) {  
        load_img.src = "loading-text-gif-10.gif" ;
        document.getElementById('load-doc-text').style.display = "hidden";
        setTimeout(() => {  div.innerText = items.doc }, 2500);
    }
}


const generateRecieverPublicKey = () => {
    document.getElementById('display-sender-public-key').innerHTML = "loading...";
    let result;
    let private_number = document.getElementById("receiver-private-number").value; 
    const items = JSON.parse(window.localStorage.getItem('data'));
    if(private_number) { 
        result = Math.pow(3,private_number) % 17; 

        //modify localStorage and store receiver's public Key
        items.receiverPublicKey = result;
        window.localStorage.setItem('data', JSON.stringify(items));

        //retrieve data from localStorage and display on P tag after 5 seconds
        setTimeout("retrieveSenderData()", 3500);
    };
}



const retrieveSenderData = () => {    
    const items = JSON.parse(window.localStorage.getItem('data'));
    const senderKey = items.senderPublicKey;
    console.log(senderKey)
    
    document.getElementById('display-sender-public-key').innerHTML = senderKey;
}

/*
generates receiver's private key, using sender's public key from localstorage then 
stores the result to localStorage
*/
const generateReceiverPrivateKey = () => {
    let private_number = document.getElementById("receiver-private-number").value;    
    //const senderPK = document.getElementById('display-sender-public-key').innerHTML
    const items = JSON.parse(window.localStorage.getItem('data'));
    if(items.senderPublicKey){
        let private_key = Math.pow(items.senderPublicKey, private_number ) % 17;
    
        items.receiverPrivateKey = private_key;
        window.localStorage.setItem('data', JSON.stringify(items));

        
        document.getElementById('display-receiver-private-key').innerText = private_key;
    }
}


//decrypts encrypted file by reversing encryption logic
const decryptText = () => {    
    const div = document.getElementById('display');
    const items = JSON.parse(window.localStorage.getItem('data'));
    let decryptedText = "";

    if(items.receiverPrivateKey && (items.senderPrivateKey == items.receiverPrivateKey)){
        decryptedText = div.innerText.replace(/zb/g, "a").replace(/df/g, "e").replace(/hj/g, "i").replace(/np/g, 'o').replace(/tv/g, 'u').replace(/~/g, '1').replace(/¬/g, '3');
        closePopup('generate-receiver-key-popup-overlay');
    
        div.innerText = decryptedText;
    }else{
        document.getElementById('error').innerHTML = "Private Key is incorrect!";
        setTimeout(() => {document.getElementById('error').innerHTML = ""}, 5000);
    }
    
}