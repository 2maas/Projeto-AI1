let precototal = 0;
        window.onload = loadComponents;

        function redirectTo(pagina) {
            window.location.href = `listagem.html?valor=${encodeURIComponent(pagina)}`;
        }

        function loadComponents() {

            const storedItems = JSON.parse(localStorage.getItem('selectedItems')) || {};
            if (storedItems['CPU']) {
                mostrarNaTabela(storedItems['CPU'], 'CPU');
            }
            if (storedItems['COOLER']) {
                mostrarNaTabela(storedItems['COOLER'], 'COOLER');
            }
            if (storedItems['MOTHERBOARD']) {
                mostrarNaTabela(storedItems['MOTHERBOARD'], 'MOTHERBOARD');
            }
            if (storedItems['RAM']) {
                mostrarNaTabela(storedItems['RAM'], 'RAM');
            }
            if (storedItems['ARMAZENAMENTO']) {
                mostrarNaTabela(storedItems['ARMAZENAMENTO'], 'ARMAZENAMENTO');
            }
            if (storedItems['GPU']) {
                mostrarNaTabela(storedItems['GPU'], 'GPU');
            }
            if (storedItems['CAIXA']) {
                mostrarNaTabela(storedItems['CAIXA'], 'CAIXA');
            }
            if (storedItems['FONTE']) {
                mostrarNaTabela(storedItems['FONTE'], 'FONTE');
            }

            document.getElementById("labelteste").innerHTML = "Valor Total: " + precototal.toFixed(2) + '€';
        }

        function mostrarNaTabela(Componente, Tipo) {
            document.getElementById(Tipo + '-img').style.display = 'block';
            document.getElementById(Tipo + '-img').src = Componente.img;
            document.getElementById(Tipo + '-info').textContent = `${Componente.name}`;
            document.getElementById(Tipo + '-preco').textContent = `${Componente.price.toFixed(2)}€`;
            
            document.getElementById(Tipo + '-botaoAdd').style.display = 'none';
            document.getElementById(Tipo + '-botaoRemove').style.display = 'inline';

            precototal += Componente.price;

            StyleComponentes(Tipo);
        }

        function StyleComponentes(Tipo) {
            document.getElementById(Tipo + '-td').style.display = 'flex';
            document.getElementById(Tipo + '-td').style.gap = '5px';
        }

        function RemoverComponenteTabela(tipo) {
            const Info = document.getElementById(tipo + '-info').textContent;
            const Preco = document.getElementById(tipo + '-preco').textContent;

            if (Info != '' && Preco != '') {
                let storedItems = JSON.parse(localStorage.getItem('selectedItems')) || {};

                if (storedItems[tipo]) {
                    precototal -= storedItems[tipo].price;
                    document.getElementById("labelteste").innerHTML = "Valor Total: " + precototal.toFixed(2) + '€';

                    delete storedItems[tipo];
                    localStorage.setItem('selectedItems', JSON.stringify(storedItems));

                    document.getElementById(tipo + '-info').innerHTML = 'Nenhum';
                    document.getElementById(tipo + '-preco').innerHTML = '';
                    document.getElementById(tipo + '-img').style.display = 'none';
                    document.getElementById(tipo + '-td').style.display = 'table-cell';
                    document.getElementById(tipo + '-botaoAdd').style.display = 'inline';
                    document.getElementById(tipo + '-botaoRemove').style.display = 'none';
                }
            }
        }