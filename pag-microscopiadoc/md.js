document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('documentForm');
    const loading = document.getElementById('loading');
    const results = document.getElementById('results');
    const originalImage = document.getElementById('originalImage');
    const comparisonImage = document.getElementById('comparisonImage');
    const resultText = document.getElementById('resultText');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const documentImage = document.getElementById('documentImage').files[0];
        const comparisonFile = document.getElementById('comparisonFile').files[0];

        if (documentImage && comparisonFile) {
            loading.classList.remove('hidden');
            results.classList.add('hidden');

            // Simula o carregamento e comparação de documentos
            setTimeout(() => {
                loading.classList.add('hidden');
                results.classList.remove('hidden');

                const reader1 = new FileReader();
                const reader2 = new FileReader();

                reader1.onload = function(e) {
                    originalImage.src = e.target.result;
                };
                reader2.onload = function(e) {
                    comparisonImage.src = e.target.result;

                    // Verificação simples de compatibilidade (comparação de URLs para este exemplo)
                    if (originalImage.src === comparisonImage.src) {
                        resultText.textContent = 'Documentos compatíveis';
                    } else {
                        resultText.textContent = 'Documentos incompatíveis';
                    }
                };

                reader1.readAsDataURL(documentImage);
                reader2.readAsDataURL(comparisonFile);
            }, 2000); // Simula o tempo de processamento
        } else {
            alert('Por favor, carregue ambos os arquivos.');
        }
    });
});
