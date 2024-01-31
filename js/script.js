const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
   
    const weight = documentElementById('weight').value;
    const height = documentElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2)
    
    const value = documentElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');
});