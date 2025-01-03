document.addEventListener('DOMContentLoaded', function() {
    // Chama a função logo após o conteúdo da página ser carregado
    data_horaF();
    // Atualiza a data e hora a cada segundo
    setInterval(data_horaF, 1000);
});

function data_horaF() {
    const dateTimeElement = document.querySelectorAll('.data_hora_texto');
    const now = new Date();

    // Formatar a hora
    const hour = now.toLocaleString('pt-PT', { hour: '2-digit', minute: '2-digit' , second: '2-digit' });

    // Formatar a data
    const date = now.toLocaleString('pt-PT', { year: 'numeric', month: 'numeric', day: 'numeric' });

    // Combinar a hora e data na ordem desejada
    const formattedDateTime = `${hour} - ${date}`;

    // Atualizar o elemento com a data e hora formatada
    dateTimeElement.forEach((element) => {
        element.textContent = formattedDateTime;
    });
}

setInterval(data_horaF, 1000);

data_horaF();

function abrirSidebar() {
    document.getElementById("mySidebar").classList.add("open");
    document.getElementById("overlay").style.display = "block";
    document.body.style.overflow = "hidden"; 
}
  
function fecharSidebar() {
    document.getElementById("mySidebar").classList.remove("open");
    document.getElementById("overlay").style.display = "none";
    document.body.style.overflow = ""; 
}

function AbrirAba(event,id){
    const li = event.currentTarget;
    const imagem = li.querySelector('img'); 
    const tipoC = document.getElementById(id);

    if (imagem.style.transform === 'rotate(-180deg)') {
        imagem.style.transform = 'rotate(0deg)';
        tipoC.classList.remove('visivel');
        li.classList.remove('aberto');
    }
    else {
        imagem.style.transform = 'rotate(-180deg)';
        tipoC.classList.add('visivel');
        li.classList.add('aberto');
    }
}

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
        if(NomePagina.includes('index.html'))
            return '../' + NomePagina;
        else
            return NomePagina;
    }
    else
        if(NomePagina.includes('index.html'))
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
                React.createElement('li', { className: 'menu-item' },
                    React.createElement('a', { className: 'menu-title', href: CaminhoDaPagina('listagem.html?valor=todos')}, 'Produtos disponíveis'),
                    React.createElement('ul', { className: 'submenu', id:"Produtos"},
                        React.createElement('li', null,
                            React.createElement('a', {href: CaminhoDaPagina('listagem.html?valor=CPU')},
                                React.createElement('img', { src: CaminhoDaImagem('Componentes_Menu/processador.png')}) ,
                                React.createElement('p', null ,'CPU'),
                            ),
                            React.createElement('a', {href: CaminhoDaPagina('listagem.html?valor=COOLER')},
                                React.createElement('img', { src: CaminhoDaImagem('Componentes_Menu/cooler.png')}),
                                React.createElement('p', null ,'Cooler'),
                            ),
                            React.createElement('a', {href: CaminhoDaPagina('listagem.html?valor=MOTHERBOARD')},
                                React.createElement('img', { src: CaminhoDaImagem('Componentes_Menu/placamae.png')}),
                                React.createElement('p', null ,'Motherboard')
                            ),
                            React.createElement('a', {href: CaminhoDaPagina('listagem.html?valor=RAM')},
                                React.createElement('img', { src: CaminhoDaImagem('Componentes_Menu/ram.png')}),
                                React.createElement('p', null ,'RAM')
                            ),
                            React.createElement('a', {href: CaminhoDaPagina('listagem.html?valor=ARMAZENAMENTO')},
                                React.createElement('img', { src: CaminhoDaImagem('Componentes_Menu/armazenamento.png')}),
                                React.createElement('p',  null ,'Armazenamento')
                            ),
                            React.createElement('a', {href: CaminhoDaPagina('listagem.html?valor=GPU')},
                                React.createElement('img', { src: CaminhoDaImagem('Componentes_Menu/grafica.png')}),
                                React.createElement('p',  null ,'GPU')  
                            ),
                            React.createElement('a', {href: CaminhoDaPagina('listagem.html?valor=CAIXA')},
                                React.createElement('img', { src: CaminhoDaImagem('Componentes_Menu/caixa.png')}),
                                React.createElement('p', null ,'Caixa')
                            ),
                            React.createElement('a', {href: CaminhoDaPagina('listagem.html?valor=FONTE')},
                                React.createElement('img', { src: CaminhoDaImagem('Componentes_Menu/fonte.png')}),
                                React.createElement('p', null ,'Fonte')
                            )
                        ),
                    )
                ),
                React.createElement('li', { className: 'menu-item' },
                    React.createElement('p', { style: {cursor: 'pointer'} }, 'PCChip8Builder'),
                    React.createElement('ul', { className: 'submenu' },
                        React.createElement('li', null,
                            React.createElement('a', {href: CaminhoDaPagina('EmailsEnviados.html')},
                                React.createElement('img', {src: CaminhoDaImagem('SVG/envelope-solid.svg')}),
                                React.createElement('p', null ,'Emails Enviados'),
                            ),
                            React.createElement('a', {href: CaminhoDaPagina('EnviarEmail.html')},
                                React.createElement('img', {src: CaminhoDaImagem('SVG/paper-plane-solid.svg')}),
                                React.createElement('p', null ,'Fala connosco'),
                            ),
                            React.createElement('a', {href: CaminhoDaPagina('SobreNos.html')},
                                React.createElement('img', {src: CaminhoDaImagem('SVG/exclamation-solid.svg')}),
                                React.createElement('p', null ,'Sobre Nós'),
                            )
                       )
                    )
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
                    React.createElement('div', { style: { display: 'flex', paddingTop: '10px'} }, 
                        React.createElement('button', { className: 'button-close', onClick: () => fecharSidebar() },
                            React.createElement('img', { src: CaminhoDaImagem('SVG/X_voltar.svg'), alt: 'Botão Fechar SideBar', style: { width: '20px'} })
                        ),
                        React.createElement('div', { style: {fontWeight: 'bold', paddingTop: '14px', width:'100%'} },
                            React.createElement('label', { className: "data_hora_texto", style: {paddingLeft:'15%'} })
                        )
                    ),
                React.createElement('ul', { className: 'nav-cont-ul-sideBar' },
                    React.createElement('li', null,
                        React.createElement('a', { href: CaminhoDaPagina('MontagemPC.html') }, 'Monte o seu pc'),
                   ),
                    React.createElement('li', {onClick: (event) => AbrirAba(event, 'Componente')},
                        React.createElement('a', { href: CaminhoDaPagina('listagem.html?valor=todos') }, 'Produtos disponíveis'),
                        React.createElement('button', { className: 'aba'},
                            React.createElement('img', { src: CaminhoDaImagem('SVG/chevron-down-solid.svg') })
                        ),
                    ),
                    React.createElement('ul', {className: 'SideBarUL', id:'Componente'},
                        React.createElement('li', null,
                            React.createElement('a', {href: 'listagem.html?valor=CPU'},
                                React.createElement('img', { src: CaminhoDaImagem('Componentes_Menu/processador.png')}) ,'CPU'
                            ),
                        ),
                        React.createElement('li', null,
                            React.createElement('a', {href: 'listagem.html?valor=COOLER'},
                                React.createElement('img', { src: CaminhoDaImagem('Componentes_Menu/cooler.png')}) ,'Cooler'
                            ),
                        ),
                        React.createElement('li', null,
                            React.createElement('a', {href: 'listagem.html?valor=MOTHERBOARD'},
                                React.createElement('img', { src: CaminhoDaImagem('Componentes_Menu/placamae.png')}) ,'Motherboard'
                            ),
                        ),
                        React.createElement('li', null,
                            React.createElement('a', {href: 'listagem.html?valor=RAM'},
                                React.createElement('img', { src: CaminhoDaImagem('Componentes_Menu/ram.png') }) ,'RAM'
                            ),
                        ),
                        React.createElement('li', null,
                            React.createElement('a', {href: 'listagem.html?valor=ARMAZENAMENTO'},
                                React.createElement('img', { src: CaminhoDaImagem('Componentes_Menu/armazenamento.png')}) ,'Armazenamento'
                            ),
                        ),
                        React.createElement('li', null,
                            React.createElement('a', {href: 'listagem.html?valor=GPU'},
                                React.createElement('img', { src: CaminhoDaImagem('Componentes_Menu/grafica.png')}) ,'GPU'
                            ),
                        ),
                        React.createElement('li', null,
                            React.createElement('a', {href: 'listagem.html?valor=CAIXA'},
                                React.createElement('img', { src: CaminhoDaImagem('Componentes_Menu/caixa.png')}) ,'Caixa'
                            ),
                        ),
                        React.createElement('li', null,
                            React.createElement('a', {href: 'listagem.html?valor=FONTE'},
                                React.createElement('img', { src: CaminhoDaImagem('Componentes_Menu/fonte.png')}) ,'Fonte'
                            ),
                        ),
                    ),
                    React.createElement('li', {onClick: (event) => AbrirAba(event,'PCChip')},
                        React.createElement('a', null, 'PCChip8Builder'),
                        React.createElement('button', { className: 'aba'},
                            React.createElement('img', { src: CaminhoDaImagem('SVG/chevron-down-solid.svg') })
                        ),
                    ),
                    React.createElement('ul', {className: 'SideBarUL', id:'PCChip'},
                        React.createElement('li', null,
                            React.createElement('a', {href: CaminhoDaPagina('EmailsEnviados.html')},
                                React.createElement('img', {src: CaminhoDaImagem('SVG/envelope-solid.svg'), style: {width: '25px', height: '25px'} }),
                                React.createElement('p', {style: {paddingBottom: '5px'}} ,'Emails Enviados'),
                            ),
                            React.createElement('a', {href: CaminhoDaPagina('EnviarEmail.html')},
                                React.createElement('img', {src: CaminhoDaImagem('SVG/paper-plane-solid.svg'), style: {width: '25px', height: '25px'} }),
                                React.createElement('p', {style: {paddingBottom: '5px'}} ,'Fala connosco'),
                            ),
                            React.createElement('a', {href: CaminhoDaPagina('SobreNos.html')},
                                React.createElement('img', {src: CaminhoDaImagem('SVG/exclamation-solid.svg'), style: {width: '25px', height: '25px'} }),
                                React.createElement('p', {style: {paddingBottom: '5px'}} ,'Sobre Nós'),
                            )
                       ),
                    ),
                ),
                
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
                        React.createElement('li', null, React.createElement('a', {href: CaminhoDaPagina('SobreNos.html')}, 'Sobre nós')),
                    )
                ),
                // Obter ajuda Section
                React.createElement('div', {className: 'footer-col'},
                    React.createElement('h4', null, 'Obter ajuda'),
                    React.createElement('ul', {style: {paddingLeft: '0px'}},
                        React.createElement('li', null, React.createElement('a', {href: CaminhoDaPagina('EnviarEmail.html')}, 'Fala connosco!')),
                        React.createElement('li', null, React.createElement('a', {href: CaminhoDaPagina('EmailsEnviados.html')}, 'Emails Enviados'))
                    )
                ),
                // Loja Online Section
                React.createElement('div', {className: 'footer-col'},
                    React.createElement('h4', null, 'Loja Online'),
                    React.createElement('ul', {style: {paddingLeft: '0px'}}, 
                        React.createElement('li', null, React.createElement('a', {href: CaminhoDaPagina('index.html#pcs')}, 'Computadores')),
                        React.createElement('li', null, React.createElement('a', {href: CaminhoDaPagina('listagem.html?valor=todos')}, 'Componentes'))
                    )
                ),
                // Siga-nos Section
                React.createElement('div', {className: 'footer-col'},
                    React.createElement('h4', null, 'Siga-nos'),
                    React.createElement('div', {className: 'social-links'}, 
                        React.createElement('a', {href: 'https://www.facebook.com', target: "_blank"},
                            React.createElement('img', {src: CaminhoDaImagem('SVG/facebook-f-brands-solid.svg'), alt: '', style: {width: '15px'}})
                        ),
                        React.createElement('a', {href: 'https://www.instagram.com', target: "_blank"}, 
                            React.createElement('img', {src: CaminhoDaImagem('SVG/instagram-brands-solid.svg'), alt: ''})
                        ),
                        React.createElement('a', {href: 'https://x.com', target: "_blank"}, 
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
        React.createElement('p', {style: {color: 'white', backgroundColor: '#161616', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}, '@2024 Informatic. Todos os direitos reservados.')
    )
}

ReactDOM.render(React.createElement(NavBar), document.getElementById('Nav'));
ReactDOM.render(React.createElement(Footer), document.getElementById('Footer'));
ReactDOM.render(React.createElement(Direitos), document.getElementById('Direitos'));
