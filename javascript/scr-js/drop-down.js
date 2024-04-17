            const toggleBtn = document.querySelector('.toggle');
            const toggleBtn1 = document.querySelector('.toggle i');
            const dropDown = document.querySelector('.dropdown');

            toggleBtn.onclick = function(){
                dropDown.classList.toggle('open')
                const isOpen = dropDown.classList.contains('open')
                toggleBtn1.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
            }
