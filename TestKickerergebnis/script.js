document.getElementById('add-result-button').addEventListener('click', function() {
    document.getElementById('input-form').classList.toggle('hidden');
});

document.getElementById('save-result-button').addEventListener('click', function() {
    const stephanScore = document.getElementById('stephan-score').value;
    const davidScore = document.getElementById('david-score').value;
    const currentDate = new Date().toLocaleDateString('de-DE');

    if (stephanScore !== '' && davidScore !== '') {
        const resultEntry = document.createElement('div');
        resultEntry.className = 'result-entry';
        resultEntry.textContent = `Stephan: ${stephanScore} - David: ${davidScore} (Datum: ${currentDate})`;
       
        document.getElementById('results').appendChild(resultEntry);
       
        document.getElementById('stephan-score').value = '';
        document.getElementById('david-score').value = '';
        document.getElementById('input-form').classList.add('hidden');
    } else {
        alert('Bitte beide Ergebnisse eintragen.');
    }
});