document.addEventListener('DOMContentLoaded', () => {
    
    // --- Utility: Copy to Clipboard ---
    const copyToClipboard = async (text, buttonElement) => {
        if (!text) return;
        try {
            await navigator.clipboard.writeText(text);
            const originalText = buttonElement.innerText;
            buttonElement.innerText = 'Copied!';
            setTimeout(() => {
                buttonElement.innerText = originalText;
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    // --- 1. Password Generator ---
    const pwdLengthInput = document.getElementById('pwd-length');
    const pwdLengthVal = document.getElementById('pwd-length-val');
    const pwdNumbers = document.getElementById('pwd-numbers');
    const pwdSymbols = document.getElementById('pwd-symbols');
    const pwdOutput = document.getElementById('pwd-output');
    const pwdGenerateBtn = document.getElementById('pwd-generate');
    const pwdCopyBtn = document.getElementById('pwd-copy');

    pwdLengthInput.addEventListener('input', (e) => {
        pwdLengthVal.textContent = e.target.value;
    });

    const generatePassword = () => {
        const length = parseInt(pwdLengthInput.value);
        const includeNumbers = pwdNumbers.checked;
        const includeSymbols = pwdSymbols.checked;

        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

        let availableChars = chars;
        if (includeNumbers) availableChars += numbers;
        if (includeSymbols) availableChars += symbols;

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * availableChars.length);
            password += availableChars[randomIndex];
        }

        pwdOutput.value = password;
    };

    pwdGenerateBtn.addEventListener('click', generatePassword);
    pwdCopyBtn.addEventListener('click', () => copyToClipboard(pwdOutput.value, pwdCopyBtn));

    // Generate initial password
    generatePassword();


    // --- 2. JSON Formatter ---
    const jsonInput = document.getElementById('json-input');
    const jsonOutput = document.getElementById('json-output');
    const jsonFormatBtn = document.getElementById('json-format');
    const jsonCopyBtn = document.getElementById('json-copy');
    const jsonError = document.getElementById('json-error');

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

    jsonCopyBtn.addEventListener('click', () => copyToClipboard(jsonOutput.value, jsonCopyBtn));


    // --- 3. Word & Character Counter ---
    const counterInput = document.getElementById('counter-input');
    const statWords = document.getElementById('stat-words');
    const statChars = document.getElementById('stat-chars');
    const statSentences = document.getElementById('stat-sentences');

    counterInput.addEventListener('input', () => {
        const text = counterInput.value;
        
        // Characters
        statChars.textContent = text.length;

        // Words
        const words = text.trim().split(/\s+/).filter(word => word.length > 0);
        statWords.textContent = words.length;

        // Sentences (simple approximation based on punctuation)
        const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
        statSentences.textContent = sentences.length;
    });


    // --- 4. Text Case Converter ---
    const caseInput = document.getElementById('case-input');
    const btnUppercase = document.getElementById('btn-uppercase');
    const btnLowercase = document.getElementById('btn-lowercase');
    const btnTitlecase = document.getElementById('btn-titlecase');
    const btnCaseCopy = document.getElementById('btn-case-copy');

    btnUppercase.addEventListener('click', () => {
        caseInput.value = caseInput.value.toUpperCase();
    });

    btnLowercase.addEventListener('click', () => {
        caseInput.value = caseInput.value.toLowerCase();
    });

    btnTitlecase.addEventListener('click', () => {
        caseInput.value = caseInput.value.replace(
            /\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        );
    });

    btnCaseCopy.addEventListener('click', () => copyToClipboard(caseInput.value, btnCaseCopy));

});
