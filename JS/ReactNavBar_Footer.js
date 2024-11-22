'use strict';

// Mostrar NavBar
function NavBar() {
    return React.createElement('nav', {className: 'navbar'},
        React.createElement('div', { className: 'nav-titulo' },
            React.createElement('a', { href: 'index.html' },
                React.createElement('img', { src: 'imagens/logo.svg', style: { width: '130px', paddingRight: '5px' } })
            )
        ),
        React.createElement('div', { className: 'nav-conteudo' },
            React.createElement('ul', { className: 'nav-cont-ul' },
                React.createElement('li', null,
                    React.createElement('a', { href: "HTML/MontagemPC.html" }, 'Monte o seu pc')
                ),
                React.createElement('li', null,
                    React.createElement('a', { href: "HTML/SobreNos.html" }, 'Sobre nós')
                ),
                React.createElement('li', null,
                    React.createElement('a', { href: "HTML/ProdutosDisponiveis.html" }, 'Produtos disponíveis')
                ),
                React.createElement('li', { className: 'data_hora' },
                    React.createElement('label', { className: "data_hora_texto" })
                )
            ),
            React.createElement('button', { className: 'button-toggle', id: 'botao', onClick: () => abrirSidebar() },
                React.createElement('img', { src: 'imagens/Menu.svg', alt: 'Botão SideBar' })
            ),
            React.createElement('div', { className: 'overlay', id: 'overlay', onClick: () => fecharSidebar() }),
            React.createElement('div', { className: 'sidebar', id: 'mySidebar' },
                React.createElement('button', { className: 'button-close', onClick: () => fecharSidebar() },
                    React.createElement('img', { src: 'imagens/X_voltar.svg', alt: 'Botão Fechar SideBar', style: { width: '20px', paddingTop: '10px' } })
                ),
                React.createElement('ul', { className: 'nav-cont-ul-sideBar' },
                    React.createElement('li', null,
                        React.createElement('a', { href: "HTML/MontagemPC.html" }, 'Monte o seu pc')
                    ),
                    React.createElement('li', null,
                        React.createElement('a', { href: "HTML/SobreNos.html" }, 'Sobre nós')
                    ),
                    React.createElement('li', null,
                        React.createElement('a', { href: "HTML/ProdutosDisponiveis.html" }, 'Produtos disponíveis')
                    )
                ),
                React.createElement('div', { style: { textAlign: 'center', padding: '10px', fontWeight: 'bold' } },
                    React.createElement('label', { className: "data_hora_texto" })
                )
            )
        )
    );
    
}



// Mostrar NavBar
function NavBar() {
    return React.createElement('footer', {className: 'footer'},
        React.createElement('div', {className: 'container'},
            React.createElement('div', {className: 'row'},
                React.createElement('div', {className: 'footer-col'},
                    React.createElement('h4', null, 'Companhia'),
                    React.createElement('ul', null, 
                        React.createElement('li', null,
                            React.createElement('a', {href:'#'}, 'Sobre nós'),
                            React.createElement('a', {href:'#'}, 'Nossos serviços')
                    ),
                )),
                React.createElement('div', {className: 'footer-col'},
                    React.createElement('h4', null, 'Obter ajuda'),
                    React.createElement('ul', null, 
                        React.createElement('li', null,
                            React.createElement('a', {href:'#'}, 'Perguntas Frequentes'),
                            React.createElement('a', {href:'#'}, 'Diz-nos a tua Opinão')
                    ),
                )),
                React.createElement('div', {className: 'footer-col'},
                    React.createElement('h4', null, 'Loja Online'),
                    React.createElement('ul', null, 
                        React.createElement('li', null,
                            React.createElement('a', {href:'#'}, 'Computadores'),
                            React.createElement('a', {href:'#'}, 'Componentes')
                    ),
                )),
                React.createElement('div', {className: 'footer-col'},
                    React.createElement('h4', null, 'Siga-nos'),
                    React.createElement('div', {className:'social-links'}, 
                        React.createElement('a', {href:'#'}, 
                            React.createElement('img', {src:'imagens/facebook-f-brands-solid.svg', style:{width:'15px'}}),
                        ),
                        React.createElement('a', {href:'#'}, 
                            React.createElement('img', {src:'imagens/instagram-brands-solid.svg'}),
                        ),
                        React.createElement('a', {href:'#'}, 
                            React.createElement('img', {src:'imagens/twitter-brands-solid.svg', style:{width:'22px'}}),
                        ),
                    ),
                ),
            )
        )
    ),
    React.createElement('div', {href:'#'});
    
}


ReactDOM.render(React.createElement(NavBar), document.getElementById('Nav'));

ReactDOM.render(React.createElement(NavBar), document.getElementById('Footer'));
