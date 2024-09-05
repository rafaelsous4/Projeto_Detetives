document.addEventListener('DOMContentLoaded', () => {
    const analyzeButton = document.getElementById('analyze-button');
    const alertDiv = document.getElementById('alert');
    const infoDiv = document.getElementById('info');
    const infoTextDiv = document.getElementById('info-text');
    const substanceImage = document.getElementById('substance-image');
    const downloadButton = document.getElementById('download-button');
    const anotherSubstanceButton = document.getElementById('another-substance-button');
    
    const analysisText = `
Análise Completa da Substância:
------------------------------------

50.55% de Água
23.5% de Álcool
11.7% de Outras Substâncias
8.8% de Cianeto (SUBSTÂNCIA ALTAMENTE PERIGOSA!)
5.5% de Glicerol

CIANETO:
Fórmula Química: KCN
Peso Molecular: 65,12 g/mol
Ponto de Ebulição: 1625 °C
Ponto de Fusão: 634 °C

Descrição:
O cianeto de potássio é um composto químico altamente tóxico. É um sólido cristalino branco e é conhecido por sua alta toxicidade. 
Usado em processos industriais e na fabricação de produtos químicos. Contato com a pele ou inalação pode causar graves efeitos adversos, incluindo a morte.
    `;
    
    const imageURL = 'https://via.placeholder.com/300x225?text=Imagem+da+Subst%C3%A2ncia'; // URL da imagem da substância

    function typeWriter(text, element, speed) {
        let i = 0;
        element.textContent = ''; // Limpar o conteúdo antes de iniciar
        const intervalId = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(intervalId);
            }
        }, speed);
    }

    function downloadReport() {
        const blob = new Blob([analysisText], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'relatorio_analise.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    if (analyzeButton) {
        analyzeButton.addEventListener('click', () => {
            window.location.href = 'results.html'; // Redireciona para a página de resultados
        });
    }

    if (infoDiv) {
        // Página de Resultados
        infoDiv.style.display = 'flex'; // Mostra a seção de informações
        substanceImage.src = imageURL; // Define a URL da imagem
        typeWriter(analysisText, infoTextDiv, 50); // Mostra o texto com efeito de máquina de escrever
        downloadButton.classList.remove('hidden'); // Mostra o botão de download
        anotherSubstanceButton.classList.remove('hidden'); // Mostra o botão de analisar outra substância
        
        downloadButton.addEventListener('click', downloadReport);
        anotherSubstanceButton.addEventListener('click', () => {
            window.location.href = 'index.html'; // Redireciona para a página inicial
        });
    }
});
