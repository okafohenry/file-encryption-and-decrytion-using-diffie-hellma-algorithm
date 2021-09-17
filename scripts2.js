const retrieveReceiverData = () => {
    const items = JSON.parse(window.localStorage.getItem('data'));
    const receiverKey = items.receiverPublicKey;
    console.log(receiverKey);

    document.querySelector('#display-receiver-public-key').innerText = receiverKey;
}
