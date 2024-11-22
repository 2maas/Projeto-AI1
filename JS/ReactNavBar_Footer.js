

// Mostrar NavBar
function App() {
    return React.createElement('nav', { className: 'navbar' },
        React.createElement('div', { className: 'nav-titulo' },
            React.createElement('a', { href: '../index.html' },
                React.createElement('img', { src: '../imagens/logo.svg', style: { width: '130px', paddingRight: '5px' } })
            )
        ),
        React.createElement('div', { className: 'nav-conteudo' },
            React.createElement('ul', { className: 'nav-cont-ul' },
                React.createElement('li', null,
                    React.createElement('a', { href: 'MontagemPC.html' }, 'Monte o seu pc')
                ),
                React.createElement('li', null,
                    React.createElement('a', { href: 'SobreNos.html' }, 'Sobre nós')
                ),
                React.createElement('li', null,
                    React.createElement('a', { href: 'ProdutosDisponiveis.html' }, 'Produtos disponíveis')
                )
            )
        )
    );
}

ReactDOM.render(App1(), document.getElementById('teste'));