const timeElement = document.getElementById("time");

const milliseconds = Date.now();

const readableDate = new Date(milliseconds).toLocaleString();

timeElement.textContent = `(${readableDate})`;