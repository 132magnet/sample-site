document.querySelectorAll('.copy-script-button').forEach(button => {
    button.addEventListener('click', () => {
        const scriptDiv = button.closest('.script');
        if (!scriptDiv) return;

        const text = Array.from(scriptDiv.childNodes)
            .filter(node => node.nodeType === Node.TEXT_NODE)
            .map(node => node.textContent)
            .join('')
            .trim();

        navigator.clipboard.writeText(text).then(() => {
            const originalText = button.textContent;
            button.textContent = 'Copied!';
            setTimeout(() => {
                button.textContent = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    });
});