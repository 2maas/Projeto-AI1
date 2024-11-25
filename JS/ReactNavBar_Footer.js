'use strict';

function CaminhoDaImagem(NomeImagem) {
    const path = window.location.pathname;
    if (path.includes('/HTML/')) {
        return '../imagens/' + NomeImagem ;
    }
    return 'imagens/' + NomeImagem;
}

function CaminhoDaPagina(NomePagina) {
    const path = window.location.pathname;
    if (path.includes('/HTML/')) {
        if(NomePagina == 'index.html')
            return '../' + NomePagina;
        else
            return NomePagina;
    }
    else
        if(NomePagina == 'index.html')
            return NomePagina;
        else
        return 'HTML/' + NomePagina;
}


// Mostrar NavBar
function NavBar() {
    return React.createElement('nav', {className: 'navbar'},
        React.createElement('div', { className: 'nav-titulo' },
            React.createElement('a', { href: CaminhoDaPagina('index.html') },
                React.createElement('img', { src: CaminhoDaImagem('SVG/logo.svg'), style: { width: '130px', paddingRight: '5px' } })
            )
        ),
        React.createElement('div', { className: 'nav-conteudo' },
            React.createElement('ul', { className: 'nav-cont-ul' },
                React.createElement('li', null,
                    React.createElement('a', { href: CaminhoDaPagina('MontagemPC.html') }, 'Monte o seu pc')
                ),
                React.createElement('li', null,
                    React.createElement('a', { href: CaminhoDaPagina('SobreNos.html') }, 'Sobre nós')
                ),
                React.createElement('li', null,
                    React.createElement('a', { href: CaminhoDaPagina('ProdutosDisponiveis.html') }, 'Produtos disponíveis')
                ),
                React.createElement('li', { className: 'data_hora' },
                    React.createElement('label', { className: "data_hora_texto" })
                )
            ),
            React.createElement('button', { className: 'button-toggle', id: 'botao', onClick: () => abrirSidebar() },
                React.createElement('img', { src: CaminhoDaImagem('SVG/Menu.svg'), alt: 'Botão SideBar' })
            ),
            React.createElement('div', { className: 'overlay', id: 'overlay', onClick: () => fecharSidebar() }),
            React.createElement('div', { className: 'sidebar', id: 'mySidebar' },
                React.createElement('button', { className: 'button-close', onClick: () => fecharSidebar() },
                    React.createElement('img', { src: CaminhoDaImagem('SVG/X_voltar.svg'), alt: 'Botão Fechar SideBar', style: { width: '20px', paddingTop: '10px' } })
                ),
                React.createElement('ul', { className: 'nav-cont-ul-sideBar' },
                    React.createElement('li', null,
                        React.createElement('a', { href: CaminhoDaPagina('MontagemPC.html') }, 'Monte o seu pc')
                    ),
                    React.createElement('li', null,
                        React.createElement('a', { href: CaminhoDaPagina('SobreNos.html')}, 'Sobre nós')
                    ),
                    React.createElement('li', null,
                        React.createElement('a', { href: CaminhoDaPagina('ProdutosDisponiveis.html') }, 'Produtos disponíveis')
                    )
                ),
                React.createElement('div', { style: { textAlign: 'center', padding: '10px', fontWeight: 'bold' } },
                    React.createElement('label', { className: "data_hora_texto" })
                )
            )
        )
    );
    
}



function Footer() {
    return React.createElement('footer', {className: 'footer'},
        React.createElement('div', {className: 'container'},
            React.createElement('div', {className: 'row'},
                // Companhia Section
                React.createElement('div', {className: 'footer-col'},
                    React.createElement('h4', null, 'Companhia'),
                    React.createElement('ul', {style: {paddingLeft: '0px'}}, 
                        React.createElement('li', null, React.createElement('a', {href: '#'}, 'Sobre nós')),
                        React.createElement('li', null, React.createElement('a', {href: '#'}, 'Nossos serviços'))
                    )
                ),
                // Obter ajuda Section
                React.createElement('div', {className: 'footer-col'},
                    React.createElement('h4', null, 'Obter ajuda'),
                    React.createElement('ul', {style: {paddingLeft: '0px'}}, 
                        React.createElement('li', null, React.createElement('a', {href: '#'}, 'Perguntas Frequentes')),
                        React.createElement('li', null, React.createElement('a', {href: '#'}, 'Diz nos o que achas'))
                    )
                ),
                // Loja Online Section
                React.createElement('div', {className: 'footer-col'},
                    React.createElement('h4', null, 'Loja Online'),
                    React.createElement('ul', {style: {paddingLeft: '0px'}}, 
                        React.createElement('li', null, React.createElement('a', {href: '#'}, 'Computadores')),
                        React.createElement('li', null, React.createElement('a', {href: '#'}, 'Componentes'))
                    )
                ),
                // Siga-nos Section
                React.createElement('div', {className: 'footer-col'},
                    React.createElement('h4', null, 'Siga-nos'),
                    React.createElement('div', {className: 'social-links'}, 
                        React.createElement('a', {href: '#'}, 
                            React.createElement('img', {src: CaminhoDaImagem('SVG/facebook-f-brands-solid.svg'), alt: '', style: {width: '15px'}})
                        ),
                        React.createElement('a', {href: '#'}, 
                            React.createElement('img', {src: CaminhoDaImagem('SVG/instagram-brands-solid.svg'), alt: ''})
                        ),
                        React.createElement('a', {href: '#'}, 
                            React.createElement('img', {src: CaminhoDaImagem('SVG/twitter-brands-solid.svg'), alt: '', style: {width: '22px'}})
                        )
                    )
                )
            )
        )
    );
}

function Direitos() {
    return React.createElement('div', null, 
        React.createElement('p', {style: {paddingTop: '14px', color: 'white', backgroundColor: '#161616', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}, '@2024 Informatic. Todos os direitos reservados.')
    )
}



ReactDOM.render(React.createElement(NavBar), document.getElementById('Nav'));
ReactDOM.render(React.createElement(Footer), document.getElementById('Footer'));
ReactDOM.render(React.createElement(Direitos), document.getElementById('Direitos'));
