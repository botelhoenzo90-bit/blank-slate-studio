import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Cpu,
  GraduationCap,
  Headphones,
  Lock,
  Play,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Wrench,
  X,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const freeLessons = [
  {
    title: "Como trocar um C.I de Wi-Fi",
    description: "Veja na prática como identificar e substituir o chip de Wi-Fi com uma abordagem profissional.",
    video: "https://www.youtube.com/embed/SZLLDmMOiRA?rel=0",
  },
  {
    title: "Como trocar um IF PMIC",
    description: "Uma aula prática para entender o processo de substituição do IF PMIC com mais segurança.",
    video: "https://www.youtube.com/embed/FP5xYT-PFt0?rel=0",
  },
  {
    title: "Como trocar um PMIC",
    description: "Acompanhe o passo a passo de um reparo real em placa de celular.",
    video: "https://www.youtube.com/embed/MyxWlTqSn6k?rel=0",
  },
];

const testimonials = [
  { name: "Comunidade Mestre da Manutenção", text: "Mais de 1.000 alunos já passaram pela formação e pelo método prático do Mestre da Manutenção.", tag: "+1.000 alunos" },
  { name: "Quem quer evoluir na bancada", text: "Uma formação pensada para sair do básico, entender diagnóstico e avançar para reparos de placa.", tag: "Reparo avançado" },
  { name: "Técnicos em busca de especialização", text: "Conteúdo passo a passo, casos práticos e técnicas para ampliar o que você consegue oferecer na assistência.", tag: "100% prático" },
];

function Index() {
  const [testimonial, setTestimonial] = useState(0);
  const [lesson, setLesson] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => setTestimonial((current) => (current + 1) % testimonials.length), 4500);
    return () => window.clearInterval(timer);
  }, []);

  const scrollToOffer = () => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="landing">
      <div className="topbar"><div><span>⚡ OFERTA ESPECIAL</span><b> Você já viu o que é possível fazer com uma placa?</b></div><button onClick={scrollToOffer}>Ver oportunidade <ArrowRight size={15} /></button></div>

      <header className="nav">
        <a href="#inicio" className="brand" aria-label="Mestre da Manutenção - início"><span className="brand-mark"><Wrench size={22} /></span><span>MESTRE DA<br /><strong>MANUTENÇÃO</strong></span></a>
        <nav><a href="#problema">O problema</a><a href="#gratuitas">Aulas grátis</a><a href="#curso">O curso</a><a href="#depoimentos">Alunos</a></nav>
        <button className="nav-cta" onClick={scrollToOffer}>QUERO COMEÇAR <ArrowRight size={17} /></button>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse-dot" /> VOCÊ JÁ CONHECE O MESTRE DA MANUTENÇÃO</div>
          <h1>Você <span>não precisa</span> continuar recusando reparos que poderiam estar aumentando seu faturamento.</h1>
          <p className="hero-lead">Se você chegou até aqui depois de conhecer o curso, provavelmente já percebeu: <strong>o que limita muitos técnicos não é falta de cliente — é não dominar o diagnóstico e o reparo em placa.</strong></p>
          <p className="hero-sub">Agora imagine olhar para uma placa com segurança, encontrar a causa real da falha e executar um reparo que antes você precisaria terceirizar.</p>
          <div className="hero-actions"><button className="primary-btn" onClick={scrollToOffer}>QUERO APROVEITAR ESSA OPORTUNIDADE <ArrowRight /></button><a href="#gratuitas" className="ghost-btn"><Play size={18} /> VER AULAS GRATUITAS</a></div>
          <div className="trust-row"><span><ShieldCheck size={17} /> Compra segura</span><span><Clock3 size={17} /> 7 dias de garantia</span><span><Zap size={17} /> Acesso imediato</span></div>
        </div>
        <div className="hero-video-wrap"><div className="video-badge"><span>▶</span> ASSISTA ANTES DE DECIDIR</div><div className="hero-video"><iframe src="https://www.youtube.com/embed/3ONlCDPSsEY?rel=0" title="VSL Mestre da Manutenção" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div><div className="video-caption"><div><span className="live-dot" /> VÍDEO DE APRESENTAÇÃO</div><strong>Entenda como funciona o treinamento por dentro.</strong></div></div>
      </section>

      <section id="problema" className="pain-section section-pad">
        <div className="section-kicker">ANTES DE COMPRAR, RESPONDA</div>
        <h2>Quanto dinheiro e oportunidades você está deixando na bancada?</h2>
        <p className="section-intro">Talvez você já tenha uma assistência, ferramentas e clientes. Mas quando chega um aparelho com defeito de placa, curto ou falha complexa...</p>
        <div className="pain-grid">
          {["Você troca componentes sem ter certeza da causa do defeito?", "Tem receio de fazer microssoldagem e acabar danificando a placa?", "Precisa mandar reparos avançados para terceiros e dividir o lucro?", "Fica travado quando aparece um curto ou consumo que você não consegue encontrar?", "Sua bancada ficou limitada a tela, bateria, conector e serviços básicos?", "Sabe que pode evoluir, mas não sabe qual caminho seguir para chegar ao reparo avançado?"] .map((item) => <article className="pain-card" key={item}><X size={21} /><p>{item}</p></article>)}
        </div>
        <div className="turn-box"><div className="turn-icon"><TrendingUp /></div><div><strong>O ponto não é trabalhar mais.</strong><p>É aumentar sua capacidade de resolver problemas que poucos técnicos conseguem resolver.</p></div></div>
      </section>

      <section className="promise section-pad"><div className="promise-inner"><div className="section-kicker">A VIRADA DE CHAVE</div><h2>Do técnico que terceiriza para o especialista que resolve.</h2><p>O Mestre da Manutenção foi estruturado para levar você do entendimento do básico ao diagnóstico eletrônico e aos reparos avançados em placas de Android, iPhone e tablets.</p><div className="feature-row"><div><Cpu /><strong>Diagnóstico avançado</strong><span>Aprenda a interpretar medições e buscar a causa real do defeito.</span></div><div><Wrench /><strong>Microssoldagem</strong><span>Entenda retrabalho, remoção e substituição de componentes SMD.</span></div><div><Target /><strong>Serviços de alto valor</strong><span>Amplie o que você consegue oferecer e cobre pelo conhecimento.</span></div></div></div></section>

      <section id="gratuitas" className="free-section section-pad">
        <div className="section-kicker">PRESENTE ESPECIAL • 100% GRATUITO</div><h2>Antes de investir, <span>veja como eu ensino.</span></h2><p className="section-intro">Separei 3 aulas reais para você conhecer o nível do conteúdo e enxergar a metodologia na prática.</p>
        <div className="lesson-layout"><div className="lesson-video"><iframe src={freeLessons[lesson].video} title={freeLessons[lesson].title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div><div className="lesson-info"><div className="lesson-counter">AULA {String(lesson + 1).padStart(2, "0")} / 03</div><h3>{freeLessons[lesson].title}</h3><p>{freeLessons[lesson].description}</p><div className="lesson-tabs">{freeLessons.map((item, index) => <button key={item.title} className={index === lesson ? "active" : ""} onClick={() => setLesson(index)}><span>0{index + 1}</span>{item.title}</button>)}</div></div></div>
        <button className="secondary-btn" onClick={scrollToOffer}>QUERO TODAS AS AULAS <ArrowRight /></button>
      </section>

      <section id="curso" className="course-section section-pad"><div className="course-copy"><div className="section-kicker">O QUE VOCÊ VAI DOMINAR</div><h2>Mais do que assistir aulas. <span>Aprender a pensar como um técnico.</span></h2><p>Você vai aprender a diagnosticar, medir, testar e tomar decisões na bancada — em vez de apenas trocar peças por tentativa e erro.</p><div className="check-list">{["Troca de telas, baterias, câmeras e conectores", "Desoxidação, software e diagnóstico", "Multímetro, fonte e eletrônica", "Micro soldagem, reballing e jumper", "CPU, memória NAND e Swap", "Reparos em placa Android e iPhone", "Face ID, Interposer e separação de placas", "+100 aulas em vídeo passo a passo"].map((x) => <div key={x}><CheckCircle2 />{x}</div>)}</div></div><div className="course-card"><div className="card-glow" /><div className="course-level">NÍVEL 1 + NÍVEL 2</div><h3>Do básico ao reparo avançado</h3><div className="module"><span>01</span><div><strong>Fundamentos</strong><small>Base, ferramentas, componentes e diagnóstico.</small></div></div><div className="module"><span>02</span><div><strong>Reparos em placa</strong><small>iPhone, Android e tablets.</small></div></div><div className="module"><span>03</span><div><strong>Microssoldagem</strong><small>Prática para serviços avançados.</small></div></div><div className="module"><span>04</span><div><strong>Casos reais</strong><small>Aprenda a raciocinar diante do defeito.</small></div></div></div></section>

      <section className="mentor section-pad"><div className="mentor-image"><img src="https://id-preview--f45b6c00-282d-4f22-a237-674dbf05e5dc.lovable.app/assets/mentor-W7ixFxCp.png" alt="Júnior Bezerra, mentor do curso" /></div><div className="mentor-copy"><div className="section-kicker">QUEM VAI TE GUIAR</div><h2>Aprenda com quem vive isso na bancada.</h2><p>Júnior Bezerra trabalha há mais de <strong>7 anos</strong> com manutenção de celulares, já reparou mais de <strong>5.000 aparelhos</strong> e formou mais de <strong>1.000 alunos</strong>.</p><p>O objetivo é mostrar um caminho prático para você desenvolver uma habilidade que pode ampliar sua atuação profissional.</p><div className="mentor-stats"><div><strong>7+</strong><span>anos de experiência</span></div><div><strong>1.000+</strong><span>alunos formados</span></div><div><strong>5.000+</strong><span>celulares reparados</span></div></div></div></section>

      <section id="depoimentos" className="testimonial-section section-pad"><div className="section-kicker">QUEM ESTÁ NESSA JORNADA</div><h2>Uma comunidade que decidiu <span>subir o nível.</span></h2><div className="testimonial-wrap"><button className="carousel-arrow" onClick={() => setTestimonial((testimonial - 1 + testimonials.length) % testimonials.length)} aria-label="Depoimento anterior"><ChevronLeft /></button><article className="testimonial-card"><div className="stars">★★★★★</div><p>“{testimonials[testimonial].text}”</p><div className="testimonial-footer"><div className="avatar">MM</div><div><strong>{testimonials[testimonial].name}</strong><span>{testimonials[testimonial].tag}</span></div></div></article><button className="carousel-arrow" onClick={() => setTestimonial((testimonial + 1) % testimonials.length)} aria-label="Próximo depoimento"><ChevronRight /></button></div><div className="dots">{testimonials.map((_, i) => <button key={i} className={i === testimonial ? "active" : ""} onClick={() => setTestimonial(i)} aria-label={`Depoimento ${i + 1}`} />)}</div></section>

      <section className="bonus-section section-pad"><div className="section-kicker">E AINDA TEM MAIS</div><h2>Você não recebe só o curso.</h2><p className="section-intro">Receba uma estrutura pensada para acelerar sua evolução dentro e fora da bancada.</p><div className="bonus-grid">{[{icon: Wrench, title:"Kit Primeira Assistência", value:"R$ 297"},{icon: TrendingUp, title:"Método Turbinado de Clientes", value:"R$ 397"},{icon: Target, title:"Mapa dos Fornecedores Secretos", value:"R$ 197"},{icon: Headphones, title:"Comunidade VIP WhatsApp", value:"R$ 497"},{icon: Sparkles, title:"Atualizações Vitalícias", value:"R$ 297"}].map(({icon:Icon,title,value})=><article key={title} className="bonus-card"><Icon /><span>BÔNUS</span><h3>{title}</h3><del>{value}</del><strong>GRÁTIS</strong></article>)}</div></section>

      <section id="oferta" className="offer-section section-pad"><div className="offer-glow" /><div className="offer-kicker">⚡ OFERTA ESPECIAL • ÚLTIMAS VAGAS</div><h2>Você pode continuar adiando…<br /><span>ou começar a mudar sua bancada.</span></h2><p>Tenha acesso ao treinamento completo, bônus, comunidade, suporte e certificado.</p><div className="price-box"><div className="old-price">De R$ 697,00</div><div className="price"><small>por apenas</small><strong>R$ 147</strong></div><div className="installments">ou 12x de <b>R$ 12,25</b></div><div className="economy">ECONOMIA DE R$ 550</div><button className="primary-btn big" onClick={() => window.location.href = "https://pay.kiwify.com.br/eOrXUxm"}>QUERO COMEÇAR AGORA <ArrowRight /></button><div className="secure"><Lock size={15} /> Pagamento seguro via cartão ou PIX • Acesso imediato</div></div><div className="guarantee"><ShieldCheck /><div><strong>7 dias de garantia incondicional</strong><p>Você pode conhecer o conteúdo e decidir com tranquilidade dentro do prazo de garantia.</p></div></div></section>

      <section className="choice section-pad"><div className="section-kicker">A DECISÃO É SUA</div><h2>O que acontece se você não mudar nada?</h2><div className="choice-grid"><article className="choice-no"><span>CONTINUAR COMO ESTÁ</span><h3>Ficar limitado.</h3><p>• Recusar reparos avançados<br />• Terceirizar e perder margem<br />• Continuar preso aos serviços básicos<br />• Travar diante de falhas complexas</p></article><article className="choice-yes"><span>COMEÇAR AGORA</span><h3>Subir de nível.</h3><p>• Aprender diagnóstico e reparo em placa<br />• Ampliar os serviços da sua bancada<br />• Desenvolver uma habilidade especializada<br />• Resolver problemas com mais segurança</p><button className="primary-btn" onClick={scrollToOffer}>EU ESCOLHO COMEÇAR <ArrowRight /></button></article></div></section>

      <section className="faq section-pad"><div className="section-kicker">AINDA TEM DÚVIDAS?</div><h2>Perguntas frequentes</h2><div className="faq-list">{["Nunca fiz microssoldagem. Vou conseguir aprender?", "Vou aprender análise e diagnóstico de placas?", "Preciso ter experiência em manutenção?", "O curso ensina reparos em placas de Android e iPhone?", "Quanto tempo terei acesso ao curso?", "Existe suporte caso eu tenha dúvidas?", "Esse curso serve para quem já trabalha com manutenção?"].map((q,i)=><div className="faq-item" key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)}><span>{q}</span>{openFaq === i ? <X /> : <ChevronRight />}</button>{openFaq === i && <p>{i === 0 ? "Sim. O conteúdo foi estruturado para conduzir você progressivamente, com aulas práticas e explicações passo a passo." : i === 1 ? "Sim. Diagnóstico eletrônico e interpretação de medições fazem parte da proposta central do treinamento." : i === 2 ? "Não é necessário já dominar reparos avançados para começar. O treinamento possui uma progressão de aprendizado." : i === 3 ? "Sim. O conteúdo inclui reparos em placas de Android e iPhone, além de técnicas de microssoldagem." : i === 4 ? "A oferta apresentada nesta página inclui acesso por 1 ano ao curso completo." : i === 5 ? "Sim. A proposta inclui suporte direto pelo WhatsApp e comunidade de alunos." : "Sim. O conteúdo também foi pensado para quem já trabalha com manutenção e quer ampliar sua capacidade técnica."}</p>}</div>)}</div></section>

      <footer><div className="footer-brand"><span className="brand-mark"><Wrench size={22} /></span><span>MESTRE DA<br /><strong>MANUTENÇÃO</strong></span></div><p>Formação prática para quem quer evoluir na manutenção de celulares.</p><div className="footer-links"><a href="#inicio">Início</a><a href="#gratuitas">Aulas gratuitas</a><a href="#oferta">Oferta</a></div><small>© 2026 Mestre da Manutenção. Todos os direitos reservados.</small></footer>
      <a className="floating-whatsapp" href="https://wa.me/558894231328?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20curso%20Mestre%20da%20Manuten%C3%A7%C3%A3o%21" target="_blank" rel="noreferrer">WhatsApp</a>
    </main>
  );
}
