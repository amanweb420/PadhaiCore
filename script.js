* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --text: #f8f9ff;
  --muted: #b8bdd0;
  --card-border: rgba(255, 255, 255, 0.12);
  --glass: rgba(255, 255, 255, 0.08);
}

body {
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at 15% 10%, rgba(117, 72, 255, 0.30), transparent 28%),
    radial-gradient(circle at 90% 15%, rgba(0, 220, 255, 0.20), transparent 25%),
    radial-gradient(circle at 50% 90%, rgba(255, 72, 180, 0.16), transparent 30%),
    #080b18;
  overflow-x: hidden;
}

button {
  font: inherit;
}

.bg-circle {
  position: fixed;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  opacity: 0.35;
  z-index: -1;
}

.circle-one {
  width: 180px;
  height: 180px;
  background: #7048ff;
  top: 80px;
  left: -80px;
}

.circle-two {
  width: 220px;
  height: 220px;
  background: #00d9ff;
  right: -100px;
  top: 350px;
}

.circle-three {
  width: 180px;
  height: 180px;
  background: #ff3f9f;
  left: 30%;
  bottom: -100px;
}

.app {
  width: min(1100px, 92%);
  margin: auto;
  padding: 28px 0 40px;
}


/* =========================
   HERO
========================= */

.hero {
  position: relative;
  min-height: 330px;
  padding: 34px;
  border: 1px solid var(--card-border);
  border-radius: 32px;
  overflow: hidden;

  background:
    linear-gradient(
      135deg,
      rgba(108, 70, 255, 0.27),
      rgba(15, 20, 45, 0.82)
    );

  box-shadow:
    0 25px 80px rgba(0, 0, 0, 0.35),
    inset 0 1px rgba(255, 255, 255, 0.08);
}

.brand {
  display: flex;
  align-items: center;
  gap: 15px;
}

.brand-icon {
  width: 55px;
  height: 55px;
  display: grid;
  place-items: center;

  font-size: 28px;

  border-radius: 18px;

  background: linear-gradient(
    135deg,
    #7c5cff,
    #00d9ff
  );

  box-shadow: 0 10px 35px rgba(82, 80, 255, 0.45);
}

.brand h1 {
  font-size: clamp(32px, 6vw, 58px);
  line-height: 1;
  font-weight: 800;

  background: linear-gradient(
    90deg,
    #ffffff,
    #bfaeff,
    #6eeeff
  );

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.brand p {
  color: #aeb5cf;
  margin-top: 7px;
  font-size: 13px;
  letter-spacing: 0.5px;
}


/* Illustration */

.hero-illustration {
  position: absolute;
  right: 7%;
  top: 35px;

  width: 190px;
  height: 190px;
}

.book {
  position: absolute;
  display: grid;
  place-items: center;

  border-radius: 22px;

  box-shadow: 0 20px 45px rgba(0,0,0,0.35);

  transform: rotate(-8deg);
}

.book-back {
  width: 125px;
  height: 105px;

  right: 10px;
  top: 30px;

  font-size: 55px;

  background: linear-gradient(
    135deg,
    #ff5c91,
    #ff9f43
  );
}

.book-front {
  width: 135px;
  height: 115px;

  left: 5px;
  bottom: 8px;

  font-size: 58px;

  background: linear-gradient(
    135deg,
    #5c7cff,
    #8d5cff
  );

  transform: rotate(8deg);
}

.spark {
  position: absolute;
  color: #ffffff;
  text-shadow: 0 0 18px #8f7cff;
}

.spark-one {
  right: 0;
  top: 0;
  font-size: 24px;
}

.spark-two {
  left: 0;
  top: 35px;
  font-size: 18px;
}

.spark-three {
  right: 20px;
  bottom: 0;
  font-size: 28px;
}


/* Motivation */

.motivation {
  position: absolute;
  left: 34px;
  bottom: 30px;

  max-width: 430px;

  display: flex;
  gap: 12px;
  align-items: center;

  padding: 14px 18px;

  border-radius: 16px;

  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.10);

  backdrop-filter: blur(12px);
}

.motivation span {
  font-size: 22px;
}

.motivation p {
  color: #dfe3f3;
  font-size: 14px;
  line-height: 1.5;
}


/* =========================
   SECTION TITLE
========================= */

.section-heading {
  margin: 40px 4px 18px;
}

.section-heading span {
  color: #8c82ff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
}

.section-heading h2 {
  margin-top: 5px;
  font-size: 25px;
}


/* =========================
   CARDS
========================= */

.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.study-card {
  position: relative;
  min-height: 220px;

  text-align: left;
  color: white;

  padding: 24px;

  border-radius: 26px;

  border: 1px solid var(--card-border);

  cursor: pointer;

  overflow: hidden;

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.study-card:hover {
  transform: translateY(-7px);
  border-color: rgba(255,255,255,0.30);
  box-shadow: 0 22px 55px rgba(0,0,0,0.35);
}

.study-card:active {
  transform: scale(0.98);
}

.board-card {
  background: linear-gradient(
    135deg,
    rgba(0, 190, 255, 0.27),
    rgba(16, 35, 70, 0.9)
  );
}

.class11-card {
  background: linear-gradient(
    135deg,
    rgba(92, 75, 255, 0.30),
    rgba(31, 23, 72, 0.9)
  );
}

.class12-card {
  background: linear-gradient(
    135deg,
    rgba(255, 78, 139, 0.28),
    rgba(65, 22, 49, 0.9)
  );
}

.jee-card {
  background: linear-gradient(
    135deg,
    rgba(255, 164, 55, 0.25),
    rgba(66, 39, 17, 0.9)
  );
}

.editing-card {
  grid-column: 1 / -1;

  min-height: 185px;

  background: linear-gradient(
    135deg,
    rgba(0, 220, 170, 0.24),
    rgba(13, 50, 49, 0.9)
  );
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-icon {
  width: 54px;
  height: 54px;

  display: grid;
  place-items: center;

  font-size: 26px;

  border-radius: 17px;

  background: rgba(255,255,255,0.10);

  border: 1px solid rgba(255,255,255,0.12);
}

.arrow {
  font-size: 25px;
  opacity: 0.7;
}

.card-content {
  position: absolute;
  left: 24px;
  bottom: 24px;
  right: 24px;
}

.card-content h3 {
  font-size: 24px;
  margin-bottom: 7px;
}

.card-content p {
  color: #c4c9da;
  font-size: 12px;
  line-height: 1.5;
}


/* Mini chart */

.mini-chart {
  position: absolute;
  right: 25px;
  bottom: 25px;

  display: flex;
  align-items: end;
  gap: 5px;

  height: 60px;
}

.mini-chart span {
  width: 7px;
  border-radius: 8px;

  background: linear-gradient(
    to top,
    #00d9ff,
    #8c7cff
  );
}


/* Floating number */

.floating-symbol {
  position: absolute;

  right: 25px;
  top: 85px;

  font-size: 60px;
  font-weight: 800;

  color: rgba(255,255,255,0.08);
}


/* Target */

.target-decoration {
  position: absolute;
  right: 35px;
  top: 70px;

  width: 100px;
  height: 100px;

  border: 3px solid rgba(255,255,255,0.10);
  border-radius: 50%;

  display: grid;
  place-items: center;
}

.target-decoration span {
  position: absolute;

  width: 65px;
  height: 65px;

  border: 3px solid rgba(255,255,255,0.12);
  border-radius: 50%;
}

.target-decoration span:nth-child(2) {
  width: 32px;
  height: 32px;
}

.target-decoration span:nth-child(3) {
  width: 8px;
  height: 8px;

  background: #ffb34e;
  border: none;
}


/* Editing decoration */

.edit-decoration {
  position: absolute;
  right: 50px;
  top: 40px;

  display: flex;
  gap: 10px;
  align-items: center;

  font-size: 30px;
}

.edit-decoration span {
  padding: 12px;

  border-radius: 16px;

  background: rgba(255,255,255,0.08);

  transform: rotate(var(--rotate));
}

.edit-decoration span:nth-child(1) {
  --rotate: -8deg;
}

.edit-decoration span:nth-child(2) {
  --rotate: 5deg;
}

.edit-decoration span:nth-child(3) {
  --rotate: -4deg;
}


/* =========================
   QUICK AREA
========================= */

.quick-area {
  margin-top: 20px;

  padding: 22px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  border-radius: 24px;

  background: rgba(255,255,255,0.055);

  border: 1px solid rgba(255,255,255,0.10);
}

.quick-title {
  display: flex;
  gap: 14px;
  align-items: center;
}

.quick-title > span {
  font-size: 30px;
}

.quick-title h3 {
  font-size: 17px;
}

.quick-title p {
  margin-top: 5px;
  color: #aeb5ca;
  font-size: 12px;
}

.progress-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  gap: 10px;

  font-size: 11px;
  color: #9da5bd;
}

.progress-info strong {
  color: white;
}

.progress-line {
  margin-top: 12px;

  height: 7px;

  border-radius: 20px;

  background: rgba(255,255,255,0.08);

  overflow: hidden;
}

.progress-line div {
  width: 28%;
  height: 100%;

  border-radius: inherit;

  background: linear-gradient(
    90deg,
    #765cff,
    #00d9ff
  );
}


/* =========================
   FOOTER
========================= */

footer {
  padding: 30px 5px 5px;

  display: flex;
  justify-content: space-between;

  color: #777f98;

  font-size: 11px;
}

footer strong {
  color: #9b91ff;
}


/* =========================
   MOBILE
========================= */

@media (max-width: 700px) {

  .app {
    width: 94%;
    padding-top: 15px;
  }

  .hero {
    min-height: 410px;
    padding: 25px;
    border-radius: 27px;
  }

  .hero-illustration {
    top: 130px;
    right: 50%;
    transform: translateX(50%);
    opacity: 0.95;
  }

  .motivation {
    left: 20px;
    right: 20px;
    bottom: 22px;
    max-width: none;
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .study-card {
    min-height: 205px;
  }

  .editing-card {
    grid-column: auto;
  }

  .quick-area {
    grid-template-columns: 1fr;
  }

  footer {
    flex-direction: column;
    gap: 8px;
  }
}


/* Small phones */

@media (max-width: 380px) {

  .hero {
    min-height: 395px;
  }

  .brand h1 {
    font-size: 31px;
  }

  .hero-illustration {
    transform: translateX(50%) scale(0.85);
  }

  .card-content h3 {
    font-size: 21px;
  }

  .study-card {
    min-height: 190px;
  }
  }
