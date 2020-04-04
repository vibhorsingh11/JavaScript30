// Given Array. Need to sort the array ignoring the, a, an
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 
'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 
'Anywhere But Here', 'An Old Dog'];

document.addEventListener('DOMContentLoaded',Sort);

// Sorting and appending elements from array
function Sort() {
    const band = document.querySelector('#bands');
    // Sorting array after ignoring the, a, an
    const sortedBrands = bands.sort((a,b) => Remove(a) > Remove(b) ? 1 : -1);
    // Appending li elements to ul
    sortedBrands.map(value => {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(`${value}`));
        band.appendChild(li);
    })
}

// Removing the, a, an from thr array elements
function Remove(name) {
    return name.replace(/^(a |the |an )/i, '').trim();
}

