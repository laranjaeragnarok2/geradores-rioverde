import './index.css';
import { Zap, Power, Wrench, ArrowRight, Play } from 'lucide-react';

function App() {
  return (
    <>
      <header>
        <div className="container nav-container">
          <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            {/* GRV Logo Emulated */}
            <div style={{ marginRight: 12, position: 'relative' }}>
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                <path d="M20 50 C20 20, 50 20, 50 50 C 50 80, 80 80, 80 50" stroke="#FF0000" strokeWidth="12" strokeLinecap="round" />
                <path d="M50 20 C 80 20, 80 50, 50 50 C 20 50, 20 80, 50 80" stroke="#2B2E83" strokeWidth="12" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#2B2E83', fontFamily: 'Outfit, sans-serif', letterSpacing: '-1px' }}>grv</span>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#00A651', textTransform: 'uppercase', marginTop: '-4px', letterSpacing: '1px' }}>Geradores</div>
            </div>
          </div>

          <ul className="nav-links">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#servicos">Soluções</a></li>
            <li><a href="#sobre">Empresa</a></li>
            <li><a href="#produtos">Produtos</a></li>
          </ul>

          <div className="header-actions">
            <a href="tel:6430506940" className="btn btn-secondary" style={{ color: '#2B2E83', borderColor: 'rgba(43, 46, 131, 0.2)' }}>
              (64) 3050-6940
            </a>
            <a href="#contato" className="btn btn-primary">
              Orçamento Rápido
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION - Fluido Verde/Azul baseado na ref */}
        <section id="inicio" className="hero">
          <div className="hero-glow-1"></div>
          <div className="hero-glow-2"></div>

          <div className="container">
            <div className="hero-content">
              <span className="tagline">Energia Ininterrupta</span>
              <h1>Potência e Segurança para o seu <span className="text-gradient">Negócio.</span></h1>
              <p>Soluções completas em grupos geradores. Venda, locação e manutenção especializada com a referência GRV de qualidade industrial.</p>

              <div className="hero-actions" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <a href="#servicos" className="btn btn-primary">
                  Conheça Soluções <ArrowRight size={20} />
                </a>
                <a href="#" className="btn btn-secondary">
                  <Play size={20} /> Ver Vídeo Institucional
                </a>
              </div>
            </div>

            <div className="hero-image-wrapper">
              <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1200&auto=format&fit=crop" alt="Gerador Industrial GRV" />
            </div>
          </div>
        </section>

        {/* SERVIÇOS PREMIUM */}
        <section id="servicos">
          <div className="container">
            <div className="section-header">
              <span className="tagline">Nossas Especialidades</span>
              <h2>Performance de <span className="text-gradient">Ponta a Ponta</span></h2>
              <p>Projetos desenvolvidos sob medida para Condomínios, Obras, Supermercados, Hospitais e Indôstrias.</p>
            </div>

            <div className="services-grid">
              {/* Card 1 */}
              <article className="service-card">
                <div className="service-icon-wrapper">
                  <Power size={28} />
                </div>
                <div className="service-image">
                  <img src="https://images.unsplash.com/photo-1590058763566-a32b260029b9?q=80&w=800&auto=format&fit=crop" alt="Vendas de Geradores" />
                </div>
                <div className="service-content">
                  <h3>Vendas e Projetos</h3>
                  <p>Equipamentos variados (novos e usados), silenciados ou abertos, entregando a capacidade ideal para sua operação contínua.</p>
                  <a href="#" className="service-link">
                    Fazer Cotação <ArrowRight size={18} />
                  </a>
                </div>
              </article>

              {/* Card 2 */}
              <article className="service-card">
                <div className="service-icon-wrapper">
                  <Wrench size={28} />
                </div>
                <div className="service-image">
                  <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop" alt="Manutenção GRV" />
                </div>
                <div className="service-content">
                  <h3>Manutenção e Reparos</h3>
                  <p>Atuação preventiva e corretiva com laboratório próprio de última geração. Garantimos a vida útil máxima do seu grupo gerador.</p>
                  <a href="#" className="service-link">
                    Acione o Suporte <ArrowRight size={18} />
                  </a>
                </div>
              </article>

              {/* Card 3 */}
              <article className="service-card">
                <div className="service-icon-wrapper">
                  <Zap size={28} />
                </div>
                <div className="service-image">
                  <img src="https://images.unsplash.com/photo-1565515261895-3eb7658c4953?q=80&w=800&auto=format&fit=crop" alt="Locação Grupos Geradores" />
                </div>
                <div className="service-content">
                  <h3>Locação de Alta Tensão</h3>
                  <p>Frota diversificada com geradores silenciados (30KVA a 500KVA) focados em eventos, formaturas, agronegócio e obras urgentes.</p>
                  <a href="#" className="service-link">
                    Ver Catálogo <ArrowRight size={18} />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CTA INSPIRADO NA REFERENCIA DO INSTAGRAM DA MARCA */}
        <div className="cta-section">
          <div className="container">
            <div className="cta-box">
              <div className="sphere-1"></div>
              <div className="sphere-2"></div>

              <div className="cta-content">
                <h2>Gostou das Soluções? Traga energia de verdade!</h2>
                <p style={{ fontSize: '1.25rem', marginBottom: '32px', opacity: 0.9 }}>Fale com um dos nossos engenheiros agora mesmo e traga mais potência e segurança para sua empresa.</p>
                <a href="#" className="btn btn-secondary" style={{ backgroundColor: 'white', color: '#2B2E83', border: 'none' }}>
                  Iniciar Conversa no WhatsApp <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col" style={{ gridColumn: "1 / span 2" }}>
              <div className="footer-logo">
                <span style={{ fontSize: '2rem', fontWeight: 800, color: 'white', fontFamily: 'Outfit, sans-serif' }}>grv <span style={{ fontWeight: 300 }}>geradores</span></span>
              </div>
              <p>Sede GRV: Rua Cristal nº51 <br /> Parque Bandeirantes, Rio Verde – Goiás</p>
              <br />
              <p style={{ fontFamily: 'Outfit', fontSize: '1.5rem', fontWeight: 600 }}>+55 (64) 3050-6940</p>
              <p>contato@geradoresrioverde.com.br</p>
            </div>

            <div className="footer-col">
              <h4>Soluções</h4>
              <ul>
                <li><a href="#">Catálogo de Venda</a></li>
                <li><a href="#">Locação Específica</a></li>
                <li><a href="#">Manutenção Preditiva</a></li>
                <li><a href="#">Rebobinamento</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Empresa</h4>
              <ul>
                <li><a href="#">Nossa História</a></li>
                <li><a href="#">Equipe Técnica</a></li>
                <li><a href="#">Clientes de Sucesso</a></li>
                <li><a href="#">Política de Privacidade</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>Geradores Rio Verde © 2026 - Evoluindo sua energia com tecnologia e inovação estética.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
