
        function startComparison() {
            const progress = document.getElementById('progress');
            const progressBar = document.getElementById('progressBar');
            const userFingerprint = document.getElementById('userFingerprint');
            const statusText = document.getElementById('statusText');              

                progress.style.display = 'block';
                progressBar.style.width = '0%';
                progressBar.innerText = '0%';

                let progressValue = 0;
                const interval = setInterval(() => {
                    progressValue += 10;
                    progressBar.style.width = progressValue + '%';
                    progressBar.innerText = progressValue + '%';

                    if (progressValue >= 101) {
                        clearInterval(interval);
                        progress.style.display = 'none'; 
                        alert('Digitais Não Compatíveis'); 
                    }
                }, 200); 
            }

        function startDigital(){
            userFingerprint.src = "https://pa1.aminoapps.com/6707/510b0daee67fbc091f14b9d8ef40aeb6c0d4dc7d_00.gif";
            
            setTimeout(() => {
                userFingerprint.src = "/images/digital4.jpg";
                statusText.innerText = "Digital coletada";
            }, 1000);
        }
   
        function startDigital() {
            var button = document.getElementById("statusText");
            button.classList.add("clicked"); 
            button.innerHTML = "Verificação iniciada";
        }
