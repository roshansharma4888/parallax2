

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
// let mountains_behind = document.getElementById('mountains_behind');
// let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');

function mapValue(value, oldLow, oldHigh, newLow, newHigh) {
    // Ensure that the input value is within the old range
    if (value < oldLow) value = oldLow;
    if (value > oldHigh) value = oldHigh;

    // Calculate the percentage of the value within the old range
    const percentage = (value - oldLow) / (oldHigh - oldLow);

    // Map the percentage to the new range
    const newValue = newLow + percentage * (newHigh - newLow);

    return newValue;
}
window.addEventListener('scroll', function () {
    var height = Math.max(document.body.scrollHeight, document.body.offsetHeight);
    let value = window.scrollY;
    stars.style.transform = `scale(${mapValue(value, 0, height, 1, 3)})`;
    moon.style.top = value * 1.03 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    // text.style.marginRight = value * 3 + 'px';
    // text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 3 + 'px';
})



