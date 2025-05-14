import React from 'react';
import { ExternalLink, AlertTriangle, Phone, Mail, MapPin, Apple as WhatsApp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Guia Fácil do Imposto de Renda</h2>
            <div className="flex items-start gap-2 text-amber-300 mb-4">
              <AlertTriangle className="mt-1 flex-shrink-0" size={20} />
              <p className="text-sm">
                Atenção: Este site não é afiliado à Receita Federal. 
                Consulte um contador para casos complexos.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.gov.br/receitafederal/pt-br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-300 hover:text-blue-200 transition"
                >
                  <ExternalLink size={16} />
                  <span>Receita Federal</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/irpf-imposto-de-renda-pessoa-fisica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-300 hover:text-blue-200 transition"
                >
                  <ExternalLink size={16} />
                  <span>IRPF - Orientação</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/download/pgd/dirpf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-300 hover:text-blue-200 transition"
                >
                  <ExternalLink size={16} />
                  <span>Download do Programa IRPF</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Precisa de ajuda?</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-green-400" />
                <a href="tel:+551136808030" className="hover:text-blue-200 transition">
                  (11) 3680-8030
                </a>
              </li>
              <li className="flex items-center gap-2">
                <WhatsApp size={16} className="text-green-400" />
                <a 
                  href="https://wa.me/5511992946628"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-200 transition"
                >
                  (11) 99294-6628
                </a>
              </li>
              <li className="flex items-center gap-2">
                <WhatsApp size={16} className="text-green-400" />
                <a 
                  href="https://wa.me/5511970603441"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-200 transition"
                >
                  (11) 97060-3441
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-green-400" />
                <a 
                  href="mailto:juliocamposmachado@gmail.com"
                  className="hover:text-blue-200 transition"
                >
                  juliocamposmachado@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-green-400" />
                <a 
                  href="https://likelook.wixsite.com/solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-200 transition"
                >
                  Like Look Solutions
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Like Look Solutions - Conteúdo informativo</p>
          <p className="mt-1">
            Desenvolvido por{' '}
            <a 
              href="https://likelook.wixsite.com/solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200 transition"
            >
              Like Look Solutions
            </a>
            {' '}| Programador:{' '}
            <a 
              href="https://wa.me/5511970603441"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200 transition"
            >
              Julio Campos Machado
            </a>
          </p>
          <p className="mt-1">Última atualização: Abril 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
