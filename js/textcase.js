document.addEventListener('DOMContentLoaded', () => {
    const caseInput = document.getElementById('case-input');
    const btnUppercase = document.getElementById('btn-uppercase');
    const btnLowercase = document.getElementById('btn-lowercase');
    const btnTitlecase = document.getElementById('btn-titlecase');
    const btnCaseCopy = document.getElementById('btn-case-copy');

    if (!caseInput) return; // Only run on pages with this tool

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

    btnCaseCopy.addEventListener('click', () => window.copyToClipboard(caseInput.value, btnCaseCopy));
});
