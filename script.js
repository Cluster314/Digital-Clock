const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");
function update() {
    const now = new Date();
    const dateStr = now.toLocaleString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    });
    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    hours = hours % 12 || 12;
    const hoursStr = String(hours).padStart(2, ' ');
    dateElement.textContent = dateStr;
    timeElement.textContent = `${hoursStr}:${minutes}:${seconds} ${ampm}`;
    setTimeout(update, 1);
}
update();