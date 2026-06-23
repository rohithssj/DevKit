document.addEventListener('DOMContentLoaded', () => {
    const jsonInput = document.getElementById('json-input');
    const jsonOutput = document.getElementById('json-output');
    const jsonFormatBtn = document.getElementById('json-format');
    const jsonCopyBtn = document.getElementById('json-copy');
    const jsonError = document.getElementById('json-error');

    if (!jsonInput) return; // Only run on pages with this tool

    jsonFormatBtn.addEventListener('click', () => {
        const inputVal = jsonInput.value.trim();
        jsonError.textContent = '';
        if (!inputVal) {
            jsonOutput.value = '';
            return;
        }

        try {
            const parsed = JSON.parse(inputVal);
            jsonOutput.value = JSON.stringify(parsed, null, 4);
        } catch (err) {
            jsonError.textContent = 'Invalid JSON: ' + err.message;
        }
    });

    jsonCopyBtn.addEventListener('click', () => window.copyToClipboard(jsonOutput.value, jsonCopyBtn));
});
