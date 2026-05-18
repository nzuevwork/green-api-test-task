function getCredentials() {
    const idInstance = document.getElementById("idInstance").value;
    const apiToken = document.getElementById("apiToken").value;

    return { idInstance, apiToken };
}

function showResponse(data) {
    document.getElementById("response").value =
        JSON.stringify(data, null, 2);
}

async function getSettings() {

    const { idInstance, apiToken } = getCredentials();

    const url =
        `https://api.green-api.com/waInstance${idInstance}/getSettings/${apiToken}`;

    const response = await fetch(url);

    const data = await response.json();

    showResponse(data);
}

async function getStateInstance() {

    const { idInstance, apiToken } = getCredentials();

    const url =
        `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiToken}`;

    const response = await fetch(url);

    const data = await response.json();

    showResponse(data);
}

async function sendMessage() {

    const { idInstance, apiToken } = getCredentials();

    const phoneNumber =
        document.getElementById("phoneNumber").value;

    const message =
        document.getElementById("messageText").value;

    const url =
        `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiToken}`;

    const body = {
        chatId: `${phoneNumber}@c.us`,
        message: message
    };

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    const data = await response.json();

    showResponse(data);
}

async function sendFileByUrl() {

    const { idInstance, apiToken } = getCredentials();

    const phoneNumber =
        document.getElementById("phoneNumber").value;

    const fileUrl =
        document.getElementById("fileUrl").value;

    const fileName =
        document.getElementById("fileName").value;

    const url =
        `https://api.green-api.com/waInstance${idInstance}/sendFileByUrl/${apiToken}`;

    const body = {
        chatId: `${phoneNumber}@c.us`,
        urlFile: fileUrl,
        fileName: fileName
    };

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    const data = await response.json();

    showResponse(data);
}