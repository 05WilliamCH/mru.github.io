function calculateMRU() {
    const distance = parseFloat(document.getElementById("distance-mru").value);
    const time = parseFloat(document.getElementById("time-mru").value);

    if (!isNaN(distance) && !isNaN(time)) {
        const velocityMRU = distance / time;
        document.getElementById("velocity-mru").textContent = velocityMRU.toFixed(2);
    }
}

function calculateMRUm() {
    const distance = parseFloat(document.getElementById("distance-mru").value);
    const time = parseFloat(document.getElementById("time-mru").value);

    if (!isNaN(distance) && !isNaN(time)) {
        const velocityMRU = distance * time; // Cambio de la división (*) a la multiplicación (*)
        document.getElementById("velocity-mru").textContent = velocityMRU.toFixed(2);
    }
}

    function calculateMRUV() {
        const initialVelocity = parseFloat(document.getElementById("initial-velocity").value);
        const acceleration = parseFloat(document.getElementById("acceleration").value);
        const timeMRUV = parseFloat(document.getElementById("time-mruv").value);

        if (!isNaN(initialVelocity) && !isNaN(acceleration) && !isNaN(timeMRUV)) {
            const distanceMRUV = (initialVelocity * timeMRUV) + (0.5 * acceleration * Math.pow(timeMRUV, 2));
            document.getElementById("distance-mruv").textContent = distanceMRUV.toFixed(2);
        }
    }