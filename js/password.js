document.addEventListener('DOMContentLoaded', () => {
    const pwdLengthInput = document.getElementById('pwd-length');
    const pwdLengthVal = document.getElementById('pwd-length-val');
    const pwdNumbers = document.getElementById('pwd-numbers');
    const pwdSymbols = document.getElementById('pwd-symbols');
    const pwdOutput = document.getElementById('pwd-output');
    const pwdGenerateBtn = document.getElementById('pwd-generate');
    const pwdCopyBtn = document.getElementById('pwd-copy');

    if (!pwdLengthInput) return; // Only run on pages with this tool

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
    pwdCopyBtn.addEventListener('click', () => window.copyToClipboard(pwdOutput.value, pwdCopyBtn));

    // Generate initial password
    generatePassword();
});
