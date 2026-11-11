const latest = [
  ['16:42', 'SAFETY', 'Airports accelerate runway-incursion prevention programmes'],
  ['15:58', 'AIRLINES', 'Carriers reshape winter networks as long-haul demand evolves'],
  ['14:31', 'AIRPORTS', 'New terminal technology promises shorter connection times'],
  ['13:06', 'INDUSTRY', 'Manufacturers outline the next phase of lower-emission flight'],
  ['11:45', 'OPERATIONS', 'How dispatch teams plan around fast-changing weather'],
];

const briefings = [
  ['FLIGHT SAFETY', 'Why unstable approaches remain a focus for training departments', 'A clear guide to the decision points, data and cockpit discipline behind a safe go-around.'],
  ['AIRLINES', 'The fleet choices defining the next decade of regional flying', 'Capacity, range and economics are pushing airlines toward a new generation of aircraft.'],
  ['AIRPORTS', 'Inside the control rooms keeping major hubs moving', 'The people and systems coordinating thousands of daily movements.'],
];

export default function Home() {
  return (
    <main>
      <div className="utility">
        <span>WEDNESDAY, SEPTEMBER 2, 2026</span>
        <span>INDEPENDENT AVIATION JOURNALISM</span>
        <a href="#briefing">NEWSLETTER</a>
      </div>
      <header className="news-header">
        <a className="logo-lockup" href="#" aria-label="The Aviation Angle home">
          <img src="/the-aviation-angle-logo.png" alt="" />
          <span>THE AVIATION <b>ANGLE</b></span>
        </a>
        <div className="edition"><strong>GLOBAL EDITION</strong><span>News • Safety • Analysis</span></div>
        <button className="menu" aria-label="Open menu"><i></i><i></i><i></i></button>
      </header>
      <nav className="desk-nav" aria-label="News sections">
        <a href="#top">Top Stories</a><a href="#latest">Latest</a><a href="#safety">Flight Safety</a><a href="#airlines">Airlines</a><a href="#airports">Airports</a><a href="#industry">Industry</a><a href="#analysis">Analysis</a>
      </nav>
      <div className="breaking"><strong>BREAKING</strong><span>Global aviation authorities publish coordinated runway-safety guidance</span><time>16:48 IST</time></div>

      <section className="front-page" id="top">
        <div className="page-kicker"><h1>Top stories</h1><span>THE STORIES SHAPING GLOBAL AVIATION</span></div>
        <div className="lead-grid">
          <article className="side-lead">
            <div className="thumb tower"><span>ATC</span></div>
            <p className="tag">AIR TRAFFIC</p>
            <h2>Airspace modernisation moves from planning rooms to control towers</h2>
            <p>New tools are changing how controllers manage capacity, weather and increasingly complex traffic flows.</p>
            <small>5 MIN READ</small>
          </article>
          <article className="main-lead">
            <div className="hero-image"><span className="plane-mark">✈</span><b>THE BIG READ</b></div>
            <p className="tag">FLIGHT SAFETY</p>
            <h2>The invisible safety net behind every commercial flight</h2>
            <p>From dispatch to touchdown, dozens of independent checks protect each journey. We map the system—and the people—behind them.</p>
            <div className="byline"><span>BY THE AVIATION ANGLE DESK</span><small>8 MIN READ</small></div>
          </article>
          <aside className="latest" id="latest">
            <div className="latest-title"><h2>Latest</h2><span>LIVE</span></div>
            {latest.map(([time, tag, title]) => <article key={title}><time>{time}</time><div><span>{tag}</span><h3>{title}</h3></div></article>)}
            <a href="#more">View all news →</a>
          </aside>
        </div>
      </section>

      <section className="news-band" id="safety">
        <div className="band-heading"><h2>News &amp; briefings</h2><a href="#more">View all →</a></div>
        <div className="briefing-grid">
          {briefings.map(([tag,title,summary], index) => <article key={title}>
            <div className={'story-art art-'+(index+1)}><span>{index===0?'⚠':'✈'}</span></div>
            <p className="tag">{tag}</p><h3>{title}</h3><p>{summary}</p><small>THE AVIATION ANGLE DESK</small>
          </article>)}
        </div>
      </section>

      <section className="split-section" id="analysis">
        <div className="analysis">
          <p className="section-label">ANALYSIS</p><h2>Beyond the headline</h2>
          <article><span>01</span><div><h3>What a safety investigation can—and cannot—tell us</h3><p>A practical guide to evidence, timelines and why early conclusions are often misleading.</p></div></article>
          <article><span>02</span><div><h3>Why airline route maps are being redrawn</h3><p>Economics, aircraft capability and geopolitics are reshaping global connections.</p></div></article>
        </div>
        <aside className="safety-desk"><p className="section-label">SAFETY DESK</p><h2>Know before you fly</h2><p>Plain-language explainers on turbulence, evacuations, cockpit procedures and the systems that protect passengers.</p><a href="#safety">Explore safety explainers →</a></aside>
      </section>

      <section className="newsletter" id="briefing">
        <div><span>THE MORNING BRIEFING</span><h2>Aviation news,<br/>cleared for takeoff.</h2></div>
        <form action="mailto:news@theaviationangle.com" method="post"><label htmlFor="email">Get the day’s essential aviation stories and safety developments.</label><div><input id="email" name="email" type="email" placeholder="Email address" required/><button>Subscribe →</button></div></form>
      </section>
      <footer><img src="/the-aviation-angle-logo.png" alt="The Aviation Angle"/><div><strong>THE AVIATION ANGLE</strong><p>Independent reporting. Clear analysis. Safety first.</p></div><small>© 2026 THE AVIATION ANGLE</small></footer>
    </main>
  );
}
