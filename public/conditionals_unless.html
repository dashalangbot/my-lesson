<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Conditionals & Neighbors — ESL Lesson</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

:root {
–coral: #E04530;
–coral-light: #E85840;
–dark: #F7F4F0;
–card: #FFFFFF;
–card2: #F5F1EC;
–text: #1A1410;
–muted: #6B5E52;
–muted2: #8A7A6E;
–green: #2A7A4A;
–red: #B53030;
–blue: #2A6A9A;
–purple: #6B3FA0;
–r: 12px;
}

- { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: ‘DM Sans’, sans-serif; background: var(–dark); color: var(–text); min-height: 100vh; font-size: 15px; line-height: 1.65; }

.hdr { background: linear-gradient(150deg, #fff 0%, #FFF0EC 50%, #fff 100%); border-bottom: 2px solid var(–coral); padding: 26px 18px 18px; text-align: center; position: relative; overflow: hidden; }
.hdr::before { content: ‘🏠’; position: absolute; top: 10px; left: 6%; font-size: 60px; opacity: .08; pointer-events: none; }
.hdr::after  { content: ‘🏠’; position: absolute; bottom: 5px; right: 5%; font-size: 80px; opacity: .06; pointer-events: none; }
.hdr h1 { font-family: ‘Playfair Display’, serif; font-size: clamp(19px,5vw,32px); color: var(–text); margin-bottom: 5px; line-height: 1.25; }
.hdr h1 em { color: var(–coral); font-style: italic; }
.hdr .sub { color: var(–muted); font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; }
.tl { display: flex; justify-content: center; gap: 5px; margin-top: 13px; flex-wrap: wrap; }
.tl-chip { background: rgba(224,69,48,0.08); border: 1px solid rgba(224,69,48,0.2); border-radius: 20px; padding: 3px 10px; font-size: 11px; color: var(–coral); }

.tabs-nav { display: flex; overflow-x: auto; background: #fff; border-bottom: 2px solid #E8E0D8; -webkit-overflow-scrolling: touch; scrollbar-width: none; justify-content: center; }
.tabs-nav::-webkit-scrollbar { display: none; }
.tab-btn { flex: 0 0 auto; padding: 12px 13px; background: none; border: none; color: var(–muted); font-family: ‘DM Sans’, sans-serif; font-size: 12px; font-weight: 500; cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -2px; white-space: nowrap; transition: all .2s; }
.tab-btn:hover { color: var(–text); }
.tab-btn.active { color: var(–coral); border-bottom-color: var(–coral); background: rgba(224,69,48,0.04); }

.pane { display: none; padding: 20px 16px 50px; max-width: 700px; margin: 0 auto; }
.pane.active { display: block; }

.label { font-size: 10.5px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(–coral); margin-bottom: 7px; margin-top: 26px; }
.label:first-child { margin-top: 0; }
h2 { font-family: ‘Playfair Display’, serif; font-size: 21px; color: var(–text); margin-bottom: 10px; line-height: 1.3; }
h3 { font-size: 14px; font-weight: 600; color: var(–blue); margin: 18px 0 8px; }
p { color: var(–muted); margin-bottom: 9px; font-size: 14.5px; }
strong { color: var(–text); font-weight: 500; }

.card { background: var(–card); border: 1px solid #E0D8D0; border-radius: var(–r); padding: 16px; margin-bottom: 11px; }
.card-hi { border-color: rgba(224,69,48,0.25); background: #FFF8F6; }
.card-blue { border-color: rgba(42,106,154,0.22); background: #F5F8FC; }
.card-green { border-color: rgba(42,122,74,0.22); background: #F5FBF7; }
.card-purple { border-color: rgba(107,63,160,0.22); background: #F8F5FC; }

.gbox { background: #FFF5F3; border-left: 3px solid var(–coral); border-radius: 0 var(–r) var(–r) 0; padding: 14px 16px; margin: 12px 0; }
.gbox .formula { font-family: ‘Playfair Display’, serif; font-size: 14.5px; color: var(–coral); margin-bottom: 5px; }

.cond-table { width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 13px; }
.cond-table th { padding: 7px 9px; text-align: left; font-weight: 600; font-size: 11px; text-transform: uppercase; letter-spacing: .8px; }
.cond-table td { padding: 7px 9px; border-bottom: 1px solid #EDE8E2; vertical-align: top; }
.cond-table tr:last-child td { border: none; }
.th0 { background: rgba(42,106,154,0.1); color: #1A5A8A; }
.th1 { background: rgba(42,122,74,0.1); color: #1A5A30; }
.th2 { background: rgba(224,69,48,0.1); color: var(–coral); }
.th3 { background: rgba(107,63,160,0.1); color: var(–purple); }
.td0 { color: #1A5A8A; }
.td1 { color: #1A5A30; }
.td2 { color: var(–coral); }
.td3 { color: var(–purple); }

.pill { display: inline-block; border-radius: 20px; padding: 2px 9px; font-size: 12px; margin: 2px; border: 1px solid; }
.p0 { background: rgba(42,106,154,0.08); border-color: rgba(42,106,154,0.3); color: #1A5A8A; }
.p1 { background: rgba(42,122,74,0.08); border-color: rgba(42,122,74,0.3); color: #1A5A30; }
.p2 { background: rgba(224,69,48,0.08); border-color: rgba(224,69,48,0.3); color: var(–coral); }
.p3 { background: rgba(107,63,160,0.08); border-color: rgba(107,63,160,0.3); color: var(–purple); }
.p-unless { background: rgba(0,0,0,0.05); border-color: rgba(0,0,0,0.15); color: var(–text); font-weight:500; }

.inp { background: #fff; border: 1px solid #D8D0C8; border-radius: 8px; color: var(–text); font-family: ‘DM Sans’, sans-serif; font-size: 14px; padding: 10px 12px; width: 100%; outline: none; transition: border-color .2s; }
.inp:focus { border-color: var(–coral); }
.inp.ok  { border-color: var(–green); background: #F0FAF4; color: #1A6A3A; }
.inp.err { border-color: var(–red);   background: #FDF0F0; color: #8A2020; }

.gap-inp { background: #FFF5F3; border: 1px solid rgba(224,69,48,0.35); border-radius: 6px; color: var(–coral); font-family: ‘DM Sans’, sans-serif; font-size: 13.5px; padding: 2px 8px; width: 155px; outline: none; transition: border-color .2s; }
.gap-inp:focus { border-color: var(–coral); }
.gap-inp.ok  { border-color: var(–green); background: #F0FAF4; color: #1A6A3A; }
.gap-inp.err { border-color: var(–red); background: #FDF0F0; color: #8A2020; }

.btn-main { display: block; width: 100%; padding: 13px; background: var(–coral); border: none; border-radius: var(–r); color: #fff; font-family: ‘DM Sans’, sans-serif; font-size: 14.5px; font-weight: 600; cursor: pointer; margin-top: 18px; transition: opacity .2s; }
.btn-main:hover { opacity: .88; }
.btn-main:disabled { opacity: .45; cursor: default; }
.btn-ghost { display: block; width: 100%; padding: 12px; background: #fff; border: 1px solid #D8D0C8; border-radius: var(–r); color: var(–muted); font-family: ‘DM Sans’, sans-serif; font-size: 13.5px; font-weight: 500; cursor: pointer; margin-top: 10px; transition: background .2s; }
.btn-ghost:hover { background: #F5F0EA; }
.btn-small { display: inline-block; padding: 6px 13px; background: var(–coral); border: none; border-radius: 7px; color: #fff; font-family: ‘DM Sans’, sans-serif; font-size: 12.5px; font-weight: 500; cursor: pointer; transition: opacity .2s; }
.btn-small:hover { opacity: .85; }

.ai-box { display: none; margin-top: 14px; padding: 0; background: transparent; border: none; border-radius: var(–r); font-size: 13.5px; color: var(–text); line-height: 1.75; }
.ai-box.show { display: block; }
.fb-card { border-radius: var(–r); padding: 13px 15px; margin-bottom: 8px; border: 1px solid; }
.fb-ok  { background: #F0FAF4; border-color: #2A7A4A; }
.fb-err { background: #FFFBF0; border-color: #C8960A; }
.fb-header { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; font-weight: 600; font-size: 14px; }
.fb-icon { font-size: 16px; }
.fb-ok .fb-header  { color: #1A5A30; }
.fb-err .fb-header { color: #8A6000; }
.fb-body { font-size: 13.5px; color: var(–text); line-height: 1.65; }
.fb-body em { font-style: italic; color: var(–coral); }

.step { display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; background: var(–coral); color: #fff; border-radius: 50%; font-size: 11.5px; font-weight: 700; margin-right: 7px; flex-shrink: 0; }
.step-row { display: flex; align-items: flex-start; margin-bottom: 11px; }
.step-row .sc { flex: 1; font-size: 14px; color: var(–text); }
.step-row .sc p { font-size: 13.5px; margin-top: 3px; color: var(–muted); }

.bridge { background: #FFF5F3; border: 1px dashed rgba(224,69,48,0.3); border-radius: var(–r); padding: 11px 14px; margin: 22px 0 0; font-size: 13px; color: var(–muted); font-style: italic; }
.bridge strong { color: var(–coral); font-style: normal; }

.vocab-card { background: #fff; border: 1px solid #E0D8D0; border-radius: var(–r); padding: 14px 16px; margin-bottom: 10px; transition: border-color .2s; }
.vocab-card:hover { border-color: rgba(224,69,48,0.3); }
.vocab-word { font-size: 15px; font-weight: 600; color: var(–coral); margin-bottom: 2px; }
.vocab-ru { font-size: 12.5px; color: var(–muted2); font-style: italic; margin-bottom: 6px; }
.vocab-ex { font-size: 13.5px; color: var(–text); margin-bottom: 3px; }
.vocab-ex::before { content: ’→ ’; color: var(–coral); }

.sp-card { background: #fff; border: 1px solid #E0D8D0; border-radius: var(–r); padding: 15px; margin-bottom: 10px; }
.sp-q { font-size: 15px; color: var(–text); margin-bottom: 5px; }
.sp-ru { font-size: 12.5px; color: var(–muted2); font-style: italic; margin-bottom: 8px; }
.scaffold { background: #FFF5F3; border-left: 2px solid rgba(224,69,48,0.35); border-radius: 0 7px 7px 0; padding: 10px 12px; font-size: 13px; color: var(–muted); }
.scaffold p { font-size: 13px; margin-bottom: 4px; }
.scaffold p:last-child { margin-bottom: 0; }

.reveal-box { display: none; background: #F5F8FC; border-left: 3px solid var(–blue); border-radius: 0 8px 8px 0; padding: 9px 12px; margin-top: 8px; font-size: 13.5px; color: var(–text); font-style: italic; }
.reveal-box.show { display: block; }
.reveal-box .label-ans { font-size:11px; font-weight:600; text-transform:uppercase; letter-spacing:1px; color:var(–muted2); display:block; margin-bottom:3px; font-style:normal; }

.match-chip { display: block; width: 100%; background: #fff; border: 1px solid #D8D0C8; border-radius: 8px; padding: 9px 11px; font-size: 13px; color: var(–muted); margin-bottom: 6px; cursor: pointer; user-select: none; transition: all .18s; text-align: left; }
.match-chip:hover { border-color: rgba(224,69,48,0.35); color: var(–text); }
.match-chip.selected { background: #FFF5F3; border-color: var(–coral); color: var(–coral); }
.match-chip.matched-ok { background: #F0FAF4; border-color: var(–green); color: #1A5A30; cursor: default; }
.match-chip.matched-err { background: #FDF0F0; border-color: var(–red); color: #8A2020; }

.cc-item { background: #fff; border: 1px solid #E0D8D0; border-radius: var(–r); padding: 14px; margin-bottom: 11px; }
.cc-q { font-size: 14.5px; color: var(–text); margin-bottom: 10px; line-height: 1.55; }
.cc-opts { display: flex; gap: 8px; flex-wrap: wrap; }
.cc-opt { flex: 1; min-width: 80px; padding: 9px 10px; border-radius: 8px; border: 1px solid #D8D0C8; background: #F5F1EC; color: var(–muted); font-family: ‘DM Sans’, sans-serif; font-size: 13px; cursor: pointer; text-align: center; transition: all .18s; }
.cc-opt:hover { border-color: var(–coral); color: var(–text); }
.cc-opt.chosen-ok  { background: #F0FAF4; border-color: var(–green); color: #1A5A30; }
.cc-opt.chosen-err { background: #FDF0F0; border-color: var(–red); color: #8A2020; }
.cc-opt.reveal-ok  { background: #F0FAF4; border-color: rgba(42,122,74,.4); color: #1A5A30; }
.cc-note { display: none; margin-top:7px; font-size:12.5px; color:var(–muted); font-style:italic; }

.score-row { text-align: center; font-size: 13px; color: var(–muted); margin: 10px 0; }
.score-row span { color: var(–coral); font-size: 17px; font-weight: 600; }

@media(max-width:480px) { .cc-opts { flex-direction: column; } .gap-inp { width: 120px; } }
</style>

</head>
<body>

<div class="hdr">
  <h1><em>If you change your mind,</em><br>come on over!</h1>
  <p class="sub">Conditionals 0–3 · Unless · Neighbor Vocabulary · B1+</p>
  <div class="tl">
    <div class="tl-chip">① Warm-up 10 min</div>
    <div class="tl-chip">② Vocab 12 min</div>
    <div class="tl-chip">③ Grammar 15 min</div>
    <div class="tl-chip">④ Unless 10 min</div>
    <div class="tl-chip">⑤ Practice 18 min</div>
    <div class="tl-chip">⑥ Speaking 15 min</div>
  </div>
</div>

<div class="tabs-nav">
  <button class="tab-btn active" onclick="switchTab('warmup',this)">① Warm-up</button>
  <button class="tab-btn" onclick="switchTab('vocab',this)">② Vocab</button>
  <button class="tab-btn" onclick="switchTab('grammar',this)">③ Grammar</button>
  <button class="tab-btn" onclick="switchTab('unless',this)">④ Unless</button>
  <button class="tab-btn" onclick="switchTab('practice',this)">⑤ Practice</button>
  <button class="tab-btn" onclick="switchTab('speaking',this)">⑥ Speaking</button>
</div>

<!-- ══════════ WARM-UP ══════════ -->

<div id="tab-warmup" class="pane active">
  <div class="label">① Warm-up · 10 minutes</div>
  <h2>Your neighbours</h2>
  <p>Discuss these questions with your group. Use the sentence starters below.</p>

  <div class="sp-card">
    <div class="sp-q">1. Do you know your neighbours? How well?</div>
    <div class="sp-ru">Знаешь ли ты своих соседей? Насколько хорошо?</div>
    <div class="scaffold">
      <p>✦ We wave to each other but... / We've never actually talked...</p>
      <p>✦ My neighbour across the street... / The people next door...</p>
    </div>
  </div>
  <div class="sp-card">
    <div class="sp-q">2. Has a neighbour ever bothered you? What happened?</div>
    <div class="sp-ru">Сосед когда-нибудь беспокоил тебя? Что случилось?</div>
    <div class="scaffold">
      <p>✦ It's driving me nuts because... / It doesn't bother me much but...</p>
      <p>✦ I've been meaning to say something about...</p>
    </div>
  </div>
  <div class="sp-card">
    <div class="sp-q">3. Would you go to a block party? Why / why not?</div>
    <div class="sp-ru">Ты бы пошёл на block party? Почему / нет?</div>
    <div class="scaffold">
      <p>✦ If there was a block party on my street, I would...</p>
      <p>✦ I'd like to come, but... / I'd go if...</p>
    </div>
  </div>

  <div class="bridge">
    <strong>Bridge to Vocabulary →</strong> You've already used some neighbour phrases. Let's learn them properly — plus some useful expressions.
  </div>
</div>

<!-- ══════════ VOCABULARY ══════════ -->

<div id="tab-vocab" class="pane">
  <div class="label">② Vocabulary · 12 minutes</div>
  <h2>Neighbour expressions</h2>
  <p>Two groups: <strong>social phrases</strong> you'll use in conversation, and <strong>context words</strong> you'll see in today's exercises.</p>

  <h3>Social phrases</h3>

  <div class="vocab-card">
    <div class="vocab-word">I'm your neighbor from around the block</div>
    <div class="vocab-ru">Я ваш сосед из этого квартала / неподалёку</div>
    <div class="vocab-ex">Hi! I'm your neighbor from around the block — we just moved in last week.</div>
  </div>
  <div class="vocab-card">
    <div class="vocab-word">We're having a... / We thought you might like to come</div>
    <div class="vocab-ru">У нас будет... / Мы подумали, вы захотите прийти</div>
    <div class="vocab-ex">We're having a little get-together on Saturday. We thought you might like to come!</div>
  </div>
  <div class="vocab-card">
    <div class="vocab-word">I'd like to come, but...</div>
    <div class="vocab-ru">Я бы с удовольствием пришёл, но... (вежливый отказ)</div>
    <div class="vocab-ex">I'd like to come, but I already have plans. Maybe next time!</div>
  </div>
  <div class="vocab-card">
    <div class="vocab-word">If you change your mind, come on over / Drop by anytime</div>
    <div class="vocab-ru">Если передумаете, заходите / Заходите в любое время</div>
    <div class="vocab-ex">If you change your mind, come on over — we'll be there all evening.</div>
    <div class="vocab-ex" style="margin-top:4px;">Drop by anytime. <span style="font-size:12px;color:var(--muted2);">(Often just polite — not always a real invitation!)</span></div>
  </div>
  <div class="vocab-card">
    <div class="vocab-word">I've been meaning to talk to you about...</div>
    <div class="vocab-ru">Я всё собирался поговорить с тобой о...</div>
    <div class="vocab-ex">I've been meaning to talk to you about your dog's barking — it wakes me up every morning.</div>
  </div>
  <div class="vocab-card">
    <div class="vocab-word">Does ... bother you? / It doesn't bother me / It's driving me nuts</div>
    <div class="vocab-ru">Вас беспокоит...? / Это меня не беспокоит / Это сводит меня с ума</div>
    <div class="vocab-ex">Does the noise bother you? — Honestly, it's driving me nuts.</div>
  </div>

  <h3>Words to know</h3>
  <div class="card">
    <div style="display:flex; flex-direction:column; gap:8px;">
      <div style="display:flex; gap:12px; align-items:flex-start; padding-bottom:8px; border-bottom:1px solid #EDE8E2;">
        <div style="min-width:130px; font-weight:600; color:var(--text); font-size:14px;">next door</div>
        <div><div style="font-size:12.5px;color:var(--muted2);font-style:italic;margin-bottom:2px;">по соседству / за стенкой</div><div style="font-size:13px;color:var(--muted);">I live next door. Let me know if you need anything.</div></div>
      </div>
      <div style="display:flex; gap:12px; align-items:flex-start; padding-bottom:8px; border-bottom:1px solid #EDE8E2;">
        <div style="min-width:130px; font-weight:600; color:var(--text); font-size:14px;">the suburbs</div>
        <div><div style="font-size:12.5px;color:var(--muted2);font-style:italic;margin-bottom:2px;">пригород</div><div style="font-size:13px;color:var(--muted);">We moved to the suburbs because it's quieter and cheaper.</div></div>
      </div>
      <div style="display:flex; gap:12px; align-items:flex-start; padding-bottom:8px; border-bottom:1px solid #EDE8E2;">
        <div style="min-width:130px; font-weight:600; color:var(--text); font-size:14px;">across the street / yard</div>
        <div><div style="font-size:12.5px;color:var(--muted2);font-style:italic;margin-bottom:2px;">через дорогу / через двор</div><div style="font-size:13px;color:var(--muted);">Jae and Ramon live across the street from us.</div></div>
      </div>
      <div style="display:flex; gap:12px; align-items:flex-start; padding-bottom:8px; border-bottom:1px solid #EDE8E2;">
        <div style="min-width:130px; font-weight:600; color:var(--text); font-size:14px;">fence / wave / bark</div>
        <div><div style="font-size:12.5px;color:var(--muted2);font-style:italic;margin-bottom:2px;">забор / махать рукой / лаять</div><div style="font-size:13px;color:var(--muted);">My neighbor always waves from the car. The dog barks all day.</div></div>
      </div>
      <div style="display:flex; gap:12px; align-items:flex-start; padding-bottom:8px; border-bottom:1px solid #EDE8E2;">
        <div style="min-width:130px; font-weight:600; color:var(--text); font-size:14px;">value (sth)</div>
        <div><div style="font-size:12.5px;color:var(--muted2);font-style:italic;margin-bottom:2px;">ценить (что-то)</div><div style="font-size:13px;color:var(--muted);">Americans really value their privacy, especially at home.</div></div>
      </div>
      <div style="display:flex; gap:12px; align-items:flex-start;">
        <div style="min-width:130px; font-weight:600; color:var(--text); font-size:14px;">block party</div>
        <div><div style="font-size:12.5px;color:var(--muted2);font-style:italic;margin-bottom:2px;">вечеринка для соседей (вся улица)</div><div style="font-size:13px;color:var(--muted);">Our neighborhood has a block party every summer.</div></div>
      </div>
    </div>
  </div>

  <!-- VOCAB MATCH -->

  <div class="label" style="margin-top:24px;">Vocab trainer — match phrase to meaning</div>
  <p>Tap a phrase → tap its meaning. Check when done.</p>
  <div style="display:flex; gap:12px; flex-wrap:wrap; margin:12px 0;">
    <div style="flex:1; min-width:140px;">
      <div style="font-size:11px;font-weight:600;text-transform:uppercase;color:var(--muted);letter-spacing:1px;margin-bottom:8px;">Phrases</div>
      <div id="vm-phrases"></div>
    </div>
    <div style="flex:1; min-width:140px;">
      <div style="font-size:11px;font-weight:600;text-transform:uppercase;color:var(--muted);letter-spacing:1px;margin-bottom:8px;">Meanings</div>
      <div id="vm-defs"></div>
    </div>
  </div>
  <button class="btn-main" onclick="checkVocabMatch()">Check matches ✓</button>
  <div class="ai-box" id="vm-result"></div>
  <button class="btn-ghost" onclick="resetVocabMatch()">↺ Shuffle again</button>

  <div class="bridge">
    <strong>Bridge to Grammar →</strong> Now let's learn the grammar — 4 types of conditionals. You'll use all these vocab words in the examples.
  </div>
</div>

<!-- ══════════ GRAMMAR ══════════ -->

<div id="tab-grammar" class="pane">
  <div class="label">③ Grammar · 15 minutes</div>
  <h2>Conditionals 0 · 1 · 2 · 3</h2>
  <p>Four types — each with a different time and level of reality.</p>

  <!-- TYPE 0 -->

  <div class="card card-blue" style="margin-top:12px;">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
      <span style="background:#2A6A9A;color:#fff;border-radius:50%;width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;">0</span>
      <strong style="font-size:15px;">Zero Conditional — general truths & facts</strong>
    </div>
    <div class="gbox" style="background:rgba(42,106,154,0.06);border-left-color:#2A6A9A;">
      <div class="formula" style="color:#2A6A9A;">If + present simple → present simple</div>
      <p style="font-size:13.5px;color:var(--muted);">If water <strong>reaches</strong> 100°C, it <strong>boils</strong>.</p>
    </div>
    <p style="font-size:13.5px;color:var(--muted);">🏠 <em>"If neighbours <strong>have</strong> a fence, they usually <strong>value</strong> their privacy."</em></p>
  </div>

  <!-- TYPE 1 -->

  <div class="card card-green">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
      <span style="background:#2A7A4A;color:#fff;border-radius:50%;width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;">1</span>
      <strong style="font-size:15px;">First Conditional — real & possible future</strong>
    </div>
    <div class="gbox" style="background:rgba(42,122,74,0.06);border-left-color:#2A7A4A;">
      <div class="formula" style="color:#2A7A4A;">If + present simple → will + infinitive</div>
      <p style="font-size:13.5px;color:var(--muted);">If it <strong>rains</strong>, we <strong>won't</strong> have the block party outside.</p>
    </div>
    <p style="font-size:13.5px;color:var(--muted);">🏠 <em>"If you <strong>change</strong> your mind, come on over — we <strong>will</strong> be there all evening."</em></p>
  </div>

  <!-- TYPE 2 -->

  <div class="card card-hi">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
      <span style="background:var(--coral);color:#fff;border-radius:50%;width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;">2</span>
      <strong style="font-size:15px;">Second Conditional — unreal / hypothetical present</strong>
    </div>
    <div class="gbox">
      <div class="formula">If + past simple → would + infinitive</div>
      <p style="font-size:13.5px;color:var(--muted);">If I <strong>lived</strong> next door, I <strong>would</strong> drop by every day.</p>
    </div>
    <p style="font-size:13.5px;color:var(--muted);">🏠 <em>"I <strong>would</strong> go to the party if I <strong>knew</strong> my neighbours better."</em></p>
    <p style="font-size:12.5px;color:var(--muted2);">⚠️ Use <strong>were</strong> (not was) for all persons in formal/written English: "If I <em>were</em> you..."</p>
  </div>

  <!-- TYPE 3 -->

  <div class="card card-purple">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
      <span style="background:var(--purple);color:#fff;border-radius:50%;width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;">3</span>
      <strong style="font-size:15px;">Third Conditional — unreal past / regret</strong>
    </div>
    <div class="gbox" style="background:rgba(107,63,160,0.06);border-left-color:var(--purple);">
      <div class="formula" style="color:var(--purple);">If + past perfect → would have + past participle</div>
      <p style="font-size:13.5px;color:var(--muted);">If she <strong>had knocked</strong> on the door, we <strong>would have</strong> let her in.</p>
    </div>
    <p style="font-size:13.5px;color:var(--muted);">🏠 <em>"If I <strong>had known</strong> about the block party, I <strong>would have</strong> come."</em></p>
  </div>

  <h3>Quick overview</h3>
  <table class="cond-table">
    <tr>
      <th class="th0">Type 0</th>
      <th class="th1">Type 1</th>
      <th class="th2">Type 2</th>
      <th class="th3">Type 3</th>
    </tr>
    <tr>
      <td class="td0">Always true</td>
      <td class="td1">Possible future</td>
      <td class="td2">Unreal present</td>
      <td class="td3">Unreal past</td>
    </tr>
    <tr>
      <td><em>If + pres → pres</em></td>
      <td><em>If + pres → will</em></td>
      <td><em>If + past → would</em></td>
      <td><em>If + past perf → would have</em></td>
    </tr>
  </table>

  <!-- QUICK IDENTIFY -->

  <h3>Quick check — which type?</h3>
  <p style="font-size:13px;">Tap the correct type for each sentence.</p>
  <div id="ident-container"></div>
  <div class="score-row">Score: <span id="ident-score">0</span> / <span id="ident-total">6</span></div>
  <button class="btn-ghost" onclick="resetIdent()">↺ Reset</button>

  <div class="bridge">
    <strong>Bridge to Unless →</strong> Now let's look at "unless" — it changes conditionals in a powerful way.
  </div>
</div>

<!-- ══════════ UNLESS ══════════ -->

<div id="tab-unless" class="pane">
  <div class="label">④ Unless · 10 minutes</div>
  <h2>Unless = If ... not</h2>

  <div class="card card-hi" style="margin-top:12px;">
    <div style="font-size:15px;font-weight:600;color:var(--text);margin-bottom:8px;">The rule</div>
    <div class="gbox">
      <div class="formula"><span class="p-unless">unless</span> = if ... not</div>
      <p style="font-size:13.5px;color:var(--muted);">It works with all conditional types. Never use <strong>would</strong> after unless.</p>
    </div>
    <div class="step-row"><span class="step">1</span><div class="sc"><strong>Type 1:</strong><p>"You'll be sick <strong>unless</strong> you stop eating." = "...if you <strong>don't</strong> stop eating."</p></div></div>
    <div class="step-row"><span class="step">2</span><div class="sc"><strong>Type 2:</strong><p>"I wouldn't eat that food <strong>unless</strong> I was really hungry." = "...if I <strong>wasn't</strong> really hungry."</p></div></div>
    <div class="step-row"><span class="step">3</span><div class="sc"><strong>Type 3:</strong><p>"They would have shot her <strong>unless</strong> she'd given them the money." = "...if she <strong>hadn't</strong> given them the money."</p></div></div>
  </div>

  <div class="card card-blue" style="margin-top:14px;">
    <div style="font-size:14px;font-weight:600;color:#1A5A8A;margin-bottom:6px;">🏠 Neighbour examples</div>
    <p style="font-size:13.5px;color:var(--muted);margin-bottom:5px;">→ "I won't go to the block party <strong>unless</strong> you come with me."</p>
    <p style="font-size:13.5px;color:var(--muted);margin-bottom:5px;">→ "Drop by anytime — <strong>unless</strong> it's after 10pm, of course!"</p>
    <p style="font-size:13.5px;color:var(--muted);">→ "She would never have moved to the suburbs <strong>unless</strong> she'd had children."</p>
  </div>

  <!-- UNLESS/IF EXERCISE -->

  <h3>Exercise — Unless or If?</h3>
  <p>From the original ESL Brains exercise. Choose unless or if for each sentence.</p>

  <div id="unless-container"></div>
  <div class="score-row">Score: <span id="unless-score">0</span> / <span id="unless-total">10</span></div>
  <button class="btn-ghost" onclick="resetUnless()">↺ Reset</button>

  <!-- REWRITE EXERCISE -->

  <h3>Exercise ② — Rewrite with unless or if</h3>
  <p>Rewrite each sentence as shown. AI checks all at once.</p>
  <div id="rewrite-container"></div>
  <button class="btn-main" id="rw-btn" onclick="checkRewrite()">Check all ✓</button>
  <div class="ai-box" id="rw-result"></div>
  <button class="btn-ghost" onclick="resetRewrite()">↺ Clear</button>

  <!-- TRANSFORM EXERCISE -->

  <h3>Exercise ③ — Transform: unless ↔ if...not</h3>
  <p>Rewrite each sentence replacing <strong>unless</strong> with <strong>if...not</strong>, or vice versa. Keep the same meaning. AI checks.</p>
  <div id="transform-container"></div>
  <button class="btn-main" id="tf-ai-btn" onclick="checkTransform()">Check all ✓</button>
  <div class="ai-box" id="tf-ai-result"></div>
  <button class="btn-ghost" onclick="resetTransform()">↺ Clear</button>

  <!-- WRITE YOUR OWN UNLESS -->

  <h3>Exercise ④ — Write your own with unless</h3>
  <p>Write a sentence with <strong>unless</strong> for each situation. Try different types (1, 2, 3). AI checks meaning, grammar and position of unless.</p>
  <div id="unless-write-container"></div>
  <button class="btn-main" id="uw-btn" onclick="checkUnlessWrite()">Check my sentences ✓</button>
  <div class="ai-box" id="uw-result"></div>
  <button class="btn-ghost" onclick="resetUnlessWrite()">↺ Clear</button>

  <div class="bridge">
    <strong>Bridge to Practice →</strong> You know all four types + unless. Let's put it all together with neighbour situations.
  </div>
</div>

<!-- ══════════ PRACTICE ══════════ -->

<div id="tab-practice" class="pane">
  <div class="label">⑤ Practice · 18 minutes</div>
  <h2>Conditionals in context</h2>

  <!-- EX 1 GAP FILL -->

  <div class="label" style="margin-top:0;">Exercise ① — Gap fill · 8 min</div>
  <p>Complete each sentence with the correct conditional form. AI checks all at once.</p>

  <div class="card" style="margin-top:12px;">
    <div id="gap-container" style="line-height:2.6;font-size:14.5px;color:var(--text);"></div>
  </div>
  <button class="btn-main" id="gap-btn" onclick="checkGaps()">Check all ✓</button>
  <div class="ai-box" id="gap-result"></div>
  <button class="btn-ghost" onclick="resetGaps()">↺ Try again</button>

  <!-- EX 2 WRITE YOUR OWN -->

  <div class="label" style="margin-top:28px;">Exercise ② — Write your own · 10 min</div>
  <p>Write a sentence for each prompt. Use the vocab and the correct conditional. AI checks all.</p>
  <div id="wo-container"></div>
  <button class="btn-main" id="wo-btn" onclick="checkWO()">Check all sentences ✓</button>
  <div class="ai-box" id="wo-result"></div>
  <button class="btn-ghost" onclick="resetWO()">↺ Clear</button>
</div>

<!-- ══════════ SPEAKING ══════════ -->

<div id="tab-speaking" class="pane">
  <div class="label">⑥ Speaking · 15 minutes</div>
  <h2>Neighbour roleplay & discussion</h2>

  <!-- ROLEPLAY -->

  <div class="label" style="margin-top:0;">Activity ① — Roleplay · 7 min</div>
  <p>Work in pairs. Student A knocks on the door. Student B answers. Use the phrases from vocab. Try to use at least <strong>one conditional</strong> each.</p>

  <div id="roleplay-cards"></div>

  <!-- DISCUSSION -->

  <div class="label" style="margin-top:24px;">Activity ② — Discussion · 8 min</div>
  <p>Talk for 1–2 minutes each. Use conditionals + vocab naturally.</p>

  <div class="sp-card">
    <div class="sp-q">1. If you could choose your perfect neighbour, what would they be like?</div>
    <div class="sp-ru">Если бы ты мог выбрать идеального соседа, каким бы он был?</div>
    <div class="scaffold">
      <p>✦ If I could choose, my neighbour would... / They wouldn't bother me unless...</p>
      <p>✦ I'd value a neighbour who... / It wouldn't drive me nuts if they...</p>
    </div>
  </div>
  <div class="sp-card">
    <div class="sp-q">2. Would you rather live in the city or the suburbs? Why?</div>
    <div class="sp-ru">Ты бы предпочёл жить в городе или в пригороде?</div>
    <div class="scaffold">
      <p>✦ If I lived in the suburbs, I would... / I wouldn't move unless...</p>
      <p>✦ If I had moved earlier, I would have...</p>
    </div>
  </div>
  <div class="sp-card">
    <div class="sp-q">3. Have you ever had a difficult neighbour situation? What would you have done differently?</div>
    <div class="sp-ru">Была ли у тебя сложная ситуация с соседом? Что бы ты сделал по-другому?</div>
    <div class="scaffold">
      <p>✦ If I had known... I would have... / I wouldn't have... unless...</p>
      <p>✦ I've been meaning to talk to them about... but if I do, they might...</p>
    </div>
  </div>
</div>

<script>
// ═══ TABS ═══
function switchTab(id, btn) {
  document.querySelectorAll('.pane').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  btn.classList.add('active');
}

// ═══ SHARED HELPERS ═══
function renderFeedback(boxId, items) {
  const box = document.getElementById(boxId);
  box.classList.add('show');
  box.innerHTML = items.map(item => `
    <div class="fb-card ${item.ok ? 'fb-ok' : 'fb-err'}">
      <div class="fb-header">
        <span class="fb-icon">${item.ok ? '✅' : '💛'}</span>
        <span>${item.ok ? 'Correct!' : 'Almost there'}</span>
      </div>
      <div class="fb-body">${item.text}</div>
    </div>`).join('');
}

function parseStars(str) {
  return str.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>');
}

async function callGemini(prompt) {
  const r = await fetch('/api/gemini', {
    method: 'POST', headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ contents:[{parts:[{text: prompt}]}] })
  });
  if (!r.ok) throw new Error('HTTP ' + r.status);
  const d = await r.json();
  // Handle Gemini error inside response
  if (d.error) throw new Error('Gemini: ' + d.error.message);
  const raw = d.candidates?.[0]?.content?.parts?.[0]?.text || '';
  return raw.replace(/```json\n?/g,'').replace(/```\n?/g,'').trim();
}

function safeParseJSON(raw) {
  if (!raw) return [{ ok: false, text: 'No response from AI. Please try again.' }];
  // 1. Try direct parse
  try { return JSON.parse(raw); } catch(e) {}
  // 2. Extract JSON array from text
  const match = raw.match(/\[\s*[\s\S]*?\]/);
  if (match) { try { return JSON.parse(match[0]); } catch(e) {} }
  // 3. Build cards from numbered lines (fallback for plain text)
  const lines = raw.split('\n').filter(l => /^\d+\./.test(l.trim()));
  if (lines.length > 0) {
    return lines.map(l => {
      const ok = /correct|perfect|great|well done|✅/i.test(l);
      return { ok, text: l.replace(/^\d+\.\s*/, '').replace(/\*\*/g,'').trim() };
    });
  }
  // 4. Show as-is stripped of markdown
  return [{ ok: true, text: raw.replace(/\*\*/g,'').replace(/\*/g,'').slice(0, 800) }];
}

// ═══ VOCAB MATCH ═══
const vmData = [
  { phrase: "come on over / drop by", def: "come to my place (warm invitation)" },
  { phrase: "it's driving me nuts", def: "it's really annoying me" },
  { phrase: "I've been meaning to talk to you", def: "I wanted to say something for a while" },
  { phrase: "Does it bother you?", def: "Is it a problem for you?" },
  { phrase: "we thought you might like to come", def: "we're inviting you (friendly)" },
  { phrase: "I'd like to come, but...", def: "polite way to say no to an invitation" },
];
let vmSelected = null, vmMatched = {};

function buildVocabMatch() {
  vmSelected = null; vmMatched = {};
  const ph = document.getElementById('vm-phrases');
  const df = document.getElementById('vm-defs');
  ph.innerHTML = ''; df.innerHTML = '';
  const sp = [...vmData].sort(() => Math.random() - 0.5);
  const sd = [...vmData].sort(() => Math.random() - 0.5);
  sp.forEach(item => {
    const c = document.createElement('button');
    c.className = 'match-chip'; c.textContent = item.phrase;
    c.dataset.key = item.phrase;
    c.onclick = () => { if(c.classList.contains('matched-ok')) return; document.querySelectorAll('#vm-phrases .match-chip').forEach(x=>x.classList.remove('selected')); c.classList.add('selected'); vmSelected=c; };
    ph.appendChild(c);
  });
  sd.forEach(item => {
    const c = document.createElement('button');
    c.className = 'match-chip'; c.textContent = item.def;
    c.dataset.answer = item.phrase;
    c.onclick = () => {
      if(!vmSelected || c.classList.contains('matched-ok')) return;
      const cur = vmSelected; vmSelected = null;
      if(cur.dataset.key === c.dataset.answer) {
        cur.classList.remove('selected'); cur.classList.add('matched-ok');
        c.classList.add('matched-ok'); vmMatched[cur.dataset.key] = true;
      } else {
        cur.classList.add('matched-err'); c.classList.add('matched-err');
        setTimeout(() => { cur.classList.remove('matched-err','selected'); c.classList.remove('matched-err'); }, 700);
      }
    };
    df.appendChild(c);
  });
}

function checkVocabMatch() {
  const correct = Object.keys(vmMatched).length;
  const r = document.getElementById('vm-result');
  r.classList.add('show');
  r.textContent = correct === vmData.length ? `Perfect! All ${vmData.length}/${vmData.length} matched! ✅` : `${correct}/${vmData.length} correct so far. Keep matching!`;
}
function resetVocabMatch() { document.getElementById('vm-result').classList.remove('show'); buildVocabMatch(); }

// ═══ IDENTIFY TYPE ═══
const identData = [
  { s: "If water reaches 100°C, it boils.", type: "0", opts: ["0","1","2","3"], note: "General truth → Type 0" },
  { s: "If you change your mind, come on over.", type: "1", opts: ["0","1","2","3"], note: "Real future possibility → Type 1" },
  { s: "If I lived next door, I would drop by every day.", type: "2", opts: ["0","1","2","3"], note: "Unreal present → Type 2 (I don't live next door)" },
  { s: "If I had known about the block party, I would have come.", type: "3", opts: ["0","1","2","3"], note: "Unreal past → Type 3" },
  { s: "I wouldn't eat that food unless I was really hungry.", type: "2", opts: ["0","1","2","3"], note: "Unless + past = Type 2 unreal present" },
  { s: "If neighbours value their privacy, they usually have a fence.", type: "0", opts: ["0","1","2","3"], note: "General truth → Type 0" },
];
let identScore = 0;

function buildIdent() {
  identScore = 0;
  document.getElementById('ident-score').textContent = '0';
  const c = document.getElementById('ident-container');
  c.innerHTML = '';
  identData.forEach((item, i) => {
    const d = document.createElement('div');
    d.className = 'cc-item';
    const optsHTML = item.opts.map(o => {
      const colors = { '0':'#2A6A9A','1':'#2A7A4A','2':'var(--coral)','3':'var(--purple)' };
      return `<button class="cc-opt" style="border-color:${colors[o]}20;" data-idx="${i}" data-val="${o}" onclick="pickIdent(this)">${o}</button>`;
    }).join('');
    d.innerHTML = `<div class="cc-q">${i+1}. <em>"${item.s}"</em></div>
      <div class="cc-opts">${optsHTML}</div>
      <div class="cc-note" id="in-note-${i}">${item.note}</div>`;
    c.appendChild(d);
  });
}

function pickIdent(btn) {
  const i = parseInt(btn.dataset.idx);
  const chosen = btn.dataset.val;
  const item = btn.closest('.cc-item');
  if(item.querySelector('.chosen-ok,.chosen-err')) return;
  item.querySelectorAll('.cc-opt').forEach(b => {
    b.disabled = true;
    if(b.dataset.val === identData[i].type) b.classList.add('reveal-ok');
  });
  const isRight = chosen === identData[i].type;
  btn.classList.add(isRight ? 'chosen-ok' : 'chosen-err');
  if(isRight) { identScore++; document.getElementById('ident-score').textContent = identScore; }
  document.getElementById('in-note-' + i).style.display = 'block';
}
function resetIdent() { identScore=0; buildIdent(); }

// ═══ UNLESS/IF EXERCISE ═══
const unlessData = [
  { s: "_____ he advertises in the newspaper he will sell a lot of goods.", answer: "If", opts: ["If","Unless"] },
  { s: "_____ I'm mistaken, that's certainly Mr Jones.", answer: "Unless", opts: ["If","Unless"] },
  { s: "_____ it's very cold, we will probably not have snow.", answer: "Unless", opts: ["If","Unless"] },
  { s: "_____ you use high quality material, you can't build a good house.", answer: "Unless", opts: ["If","Unless"] },
  { s: "_____ you finish work early, we can play tennis.", answer: "If", opts: ["If","Unless"] },
  { s: "_____ you don't keep your promises, you'll lose your friends.", answer: "If", opts: ["If","Unless"] },
  { s: "_____ you study hard, you won't get a scholarship.", answer: "Unless", opts: ["If","Unless"] },
  { s: "_____ you tell me what you want, I can get it for you.", answer: "If", opts: ["If","Unless"] },
  { s: "_____ you think about it you will make the right decision.", answer: "If", opts: ["If","Unless"] },
  { s: "_____ you take the test, you will not be able to join class next term.", answer: "Unless", opts: ["If","Unless"] },
];
let unlessScore = 0;

function buildUnless() {
  unlessScore = 0; document.getElementById('unless-score').textContent = '0';
  const c = document.getElementById('unless-container');
  c.innerHTML = '';
  unlessData.forEach((item, i) => {
    const d = document.createElement('div');
    d.className = 'cc-item';
    d.innerHTML = `<div class="cc-q">${i+1}. ${item.s}</div>
      <div class="cc-opts">
        ${item.opts.map(o => `<button class="cc-opt" data-idx="${i}" data-val="${o}" onclick="pickUnless(this)">${o}</button>`).join('')}
      </div>`;
    c.appendChild(d);
  });
}

function pickUnless(btn) {
  const i = parseInt(btn.dataset.idx);
  const chosen = btn.dataset.val;
  const item = btn.closest('.cc-item');
  if(item.querySelector('.chosen-ok,.chosen-err')) return;
  item.querySelectorAll('.cc-opt').forEach(b => {
    b.disabled = true;
    if(b.dataset.val === unlessData[i].answer) b.classList.add('reveal-ok');
  });
  const isRight = chosen === unlessData[i].answer;
  btn.classList.add(isRight ? 'chosen-ok' : 'chosen-err');
  if(isRight) { unlessScore++; document.getElementById('unless-score').textContent = unlessScore; }
}
function resetUnless() { unlessScore=0; buildUnless(); }

// ═══ REWRITE ═══
const rwData = [
  { original: "Take these pills three times a day and you'll soon feel better.", starter: "If you", answer: "If you take these pills three times a day, you'll soon feel better." },
  { original: "You don't tell me your address. The package is not sent on time.", starter: "The package will be sent on time unless", answer: "The package will be sent on time unless you tell me your address." },
  { original: "Unless you study hard you won't pass your exams.", starter: "If you", answer: "If you don't study hard, you won't pass your exams." },
  { original: "I didn't pass because I didn't study.", starter: "If I", answer: "If I had studied, I would have passed." },
  { original: "Sally won't go to Nebraska because she doesn't have enough money.", starter: "Unless Sally", answer: "Unless Sally has enough money, she won't go to Nebraska." },
  { original: "Philip won't go to Ireland with his friends because he doesn't like flying.", starter: "If", answer: "If Philip liked flying, he would go to Ireland with his friends." },
];

function buildRewrite() {
  const c = document.getElementById('rewrite-container');
  c.innerHTML = '';
  rwData.forEach((item, i) => {
    const d = document.createElement('div');
    d.className = 'card'; d.style.marginBottom = '11px';
    d.innerHTML = `<div style="font-size:13.5px;color:var(--text);margin-bottom:6px;font-weight:500;">${i+1}. ${item.original}</div>
      <div style="font-size:12.5px;color:var(--coral);margin-bottom:6px;font-style:italic;">Start with: <strong>${item.starter}...</strong></div>
      <textarea class="inp" id="rw-${i}" placeholder="${item.starter}..." style="resize:vertical;min-height:50px;"></textarea>`;

```
c.appendChild(d);
```

});
}

async function checkRewrite() {
const btn = document.getElementById(‘rw-btn’);
const res = document.getElementById(‘rw-result’);
const entries = rwData.map((item, i) => ({
original: item.original, starter: item.starter, sample: item.answer,
student: (document.getElementById(‘rw-’ + i) || {value:’’}).value.trim()
})).filter(e => e.student);
if (!entries.length) { res.classList.add(‘show’); res.innerHTML = ‘<div class="fb-card fb-err"><div class="fb-body">Please write at least one sentence!</div></div>’; return; }
btn.disabled = true; btn.textContent = ‘Checking…’;
res.classList.add(‘show’); res.innerHTML = ‘<div class="fb-card fb-err" style="background:#F5F1EC;border-color:#D8D0C8;color:var(--muted);"><div class="fb-body">⏳ Checking…</div></div>’;
const prompt = `English teacher. B1+. Students rewrote sentences using if/unless conditionals.\n\n${entries.map((e,i) => `${i+1}. Original: “${e.original}” | Starter: “${e.starter}…” | Sample: “${e.sample}” | Student: “${e.student}”`).join('\n')}\n\nReturn ONLY a JSON array, one object per sentence checked, no markdown fences, no extra text.\nFormat: [{"ok": true/false, "text": "plain text explanation, no asterisks. If wrong start with Correction: then corrected sentence. Max 2 sentences."}]`;
let raw = ‘’;
try {
raw = await callGemini(prompt);
} catch(e) {
res.innerHTML = ‘<div class="fb-card fb-err"><div class="fb-body">Connection error — please try again.</div></div>’;
btn.disabled = false; btn.textContent = ‘Check all ✓’;
return;
}
const parsed = safeParseJSON(raw);
renderFeedback(‘rw-result’, parsed.map(p => ({ ok: p.ok, text: parseStars(p.text) })));
btn.disabled = false; btn.textContent = ‘Check all ✓’;
}
function resetRewrite() {
rwData.forEach((r,i) => { const inp=document.getElementById(‘rw-’+i); if(inp) inp.value=’’; });
const r=document.getElementById(‘rw-result’); r.classList.remove(‘show’); r.textContent=’’;
}

// ═══ GAP FILL ═══
const gapData = [
{ pre:“If your neighbour”, blank:“plays”, post:“loud music every night, it”, blank2:“drives”, post2:“you crazy. (Type 0)”, hint:“play / drive — general truth” },
{ pre:“If you”, blank:“come”, post:“to the block party, you”, blank2:“will meet”, post2:“all your neighbours. (Type 1)”, hint:“come / will meet” },
{ pre:“I”, blank:“would move”, post:“to the suburbs if I”, blank2:“had”, post2:“a car. (Type 2)”, hint:“would move / had” },
{ pre:“If she”, blank:“had knocked”, post:“on the door, we”, blank2:“would have let”, post2:“her in. (Type 3)”, hint:“had knocked / would have let” },
{ pre:“Unless you”, blank:“tell”, post:“me what bothers you, I can’t fix it. (Type 1 + unless)”, hint:“tell — unless = if not” },
{ pre:“He”, blank:“wouldn’t have moved”, post:“next door unless he”, blank2:“had known”, post2:“someone on the street. (Type 3 + unless)”, hint:“wouldn’t have moved / had known” },
];

function buildGaps() {
const c = document.getElementById(‘gap-container’);
c.innerHTML = ‘’;
gapData.forEach((g, i) => {
const row = document.createElement(‘div’);
row.style.marginBottom = ‘12px’;
let html = `<span style="font-size:12px;color:var(--muted2);font-style:italic;display:block;margin-bottom:3px;">${i+1}. ${g.hint}</span>`;
html += `<span style="color:var(--muted)">${g.pre} </span><input class="gap-inp" id="gi-${i}-a" type="text" placeholder="...">`;
if(g.post2) {
html += `<span style="color:var(--muted)"> ${g.post} </span><input class="gap-inp" id="gi-${i}-b" type="text" placeholder="..."><span style="color:var(--muted)"> ${g.post2}</span>`;
} else {
html += `<span style="color:var(--muted)"> ${g.post}</span>`;
}
row.innerHTML = html;
c.appendChild(row);
});
}

async function checkGaps() {
const btn = document.getElementById(‘gap-btn’);
const res = document.getElementById(‘gap-result’);
btn.disabled=true; btn.textContent=‘Checking…’;
res.classList.add(‘show’); res.innerHTML = ‘<div class="fb-card fb-err" style="background:#F5F1EC;border-color:#D8D0C8;color:var(--muted);"><div class="fb-body">⏳ Checking…</div></div>’;
const answers = gapData.map((g,i) => ({
sentence: g.pre + ’ ___ ’ + g.post + (g.post2 ? ’ ___ ’ + g.post2 : ‘’),
correct: g.blank + (g.blank2 ? ’ / ’ + g.blank2 : ‘’),
studentA: (document.getElementById(‘gi-’+i+’-a’)||{value:’’}).value.trim(),
studentB: g.blank2 ? (document.getElementById(‘gi-’+i+’-b’)||{value:’’}).value.trim() : ‘’,
hint: g.hint
}));
const entries = answers.filter(a => a.studentA || a.studentB);
if (!entries.length) { res.innerHTML = ‘<div class="fb-card fb-err"><div class="fb-body">Please fill in at least one gap!</div></div>’; btn.disabled=false; btn.textContent=‘Check all ✓’; return; }
const prompt = `English teacher. B1+. Conditional gap-fill.\n\n${answers.map((a,i) => `${i+1}. “${a.sentence}” | Correct: “${a.correct}” | Student: “${a.studentA}${a.studentB ? ’ / ’ + a.studentB : ‘’}”`).join('\n')}\n\nReturn ONLY a JSON array, one object per sentence, no markdown fences, no extra text.\nFormat: [{"ok": true/false, "text": "plain text, no asterisks. If wrong: Correction: correct form. Max 1 sentence."}]`;
let rawGap = ‘’;
try { rawGap = await callGemini(prompt); } catch(e) {
res.innerHTML = ‘<div class="fb-card fb-err"><div class="fb-body">Connection error — please try again.</div></div>’;
btn.disabled=false; btn.textContent=‘Check all ✓’; return;
}
const parsed = safeParseJSON(rawGap);
renderFeedback(‘gap-result’, parsed.map(p => ({ ok: p.ok, text: parseStars(p.text) })));
parsed.forEach((p,i) => {
const a = document.getElementById(‘gi-’+i+’-a’);
const b = document.getElementById(‘gi-’+i+’-b’);
if(p.ok) { if(a) a.classList.add(‘ok’); if(b) b.classList.add(‘ok’); }
else { if(a) a.classList.add(‘err’); if(b) b.classList.add(‘err’); }
});
btn.disabled=false; btn.textContent=‘Check all ✓’;
}
function resetGaps() {
gapData.forEach((g,i) => {
[‘a’,‘b’].forEach(k => { const inp=document.getElementById(‘gi-’+i+’-’+k); if(inp){inp.value=’’;inp.className=‘gap-inp’;} });
});
const r=document.getElementById(‘gap-result’); r.classList.remove(‘show’); r.textContent=’’;
}

// ═══ WRITE YOUR OWN ═══
const woData = [
{ type:‘1’, ru:‘Твой сосед постоянно лает собака. Что будет если ты поговоришь с ним?’, starter:“If I talk to my neighbour about his dog…”, hint:“Type 1 + will” },
{ type:‘2’, ru:‘Представь что у тебя идеальный сосед. Что бы было по-другому?’, starter:“If I had a perfect neighbour…”, hint:“Type 2 + would” },
{ type:‘3’, ru:‘Ты не пошёл на block party. Что было бы если бы пошёл?’, starter:“If I had gone to the block party…”, hint:“Type 3 + would have” },
{ type:‘1+unless’, ru:‘Дай соседу совет с unless’, starter:“Unless you…”, hint:“Unless = if not, Type 1” },
{ type:‘2’, ru:‘Ты живёшь в городе. А если бы ты жил в пригороде?’, starter:“If I lived in the suburbs…”, hint:“Type 2 — hypothetical” },
];

function buildWO() {
const c = document.getElementById(‘wo-container’);
c.innerHTML = ‘’;
const colors = {‘0’:’#2A6A9A’,‘1’:’#2A7A4A’,‘2’:‘var(–coral)’,‘3’:‘var(–purple)’,‘1+unless’:’#2A7A4A’};
woData.forEach((item, i) => {
const d = document.createElement(‘div’);
d.className = ‘card’; d.style.marginBottom = ‘12px’;
d.innerHTML = `<span style="font-size:10.5px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:${colors[item.type]||'var(--coral)'};">Type ${item.type}</span> <div style="font-size:13.5px;color:var(--muted);font-style:italic;margin:5px 0;">${item.ru}</div> <div style="font-size:12.5px;color:var(--coral);margin-bottom:7px;">Starter: <em>${item.starter}</em> &nbsp;<span style="color:var(--muted2);font-size:11px;">(${item.hint})</span></div> <textarea class="inp" id="wo-${i}" placeholder="${item.starter}" style="resize:vertical;min-height:55px;"></textarea>`;
c.appendChild(d);
});
}

async function checkWO() {
const btn = document.getElementById(‘wo-btn’);
const res = document.getElementById(‘wo-result’);
const entries = woData.map((item,i) => ({…item, student:(document.getElementById(‘wo-’+i)||{value:’’}).value.trim()})).filter(e=>e.student);
if(!entries.length) { res.classList.add(‘show’); res.innerHTML=’<div class="fb-card fb-err"><div class="fb-body">Please write at least one sentence!</div></div>’; return; }
btn.disabled=true; btn.textContent=‘Checking…’;
res.classList.add(‘show’); res.innerHTML=’<div class="fb-card fb-err" style="background:#F5F1EC;border-color:#D8D0C8;color:var(--muted);"><div class="fb-body">⏳ Checking…</div></div>’;
const prompt = `Friendly English teacher. B1+. Conditionals + neighbour vocab (drop by, driving me nuts, block party, next door, value privacy, etc.)\n\n${entries.map((e,i) => `${i+1}. Task: “${e.ru}” | Type: ${e.type} (${e.hint}) | Student: “${e.student}”`).join('\n')}\n\nReturn ONLY a JSON array, one object per sentence, no markdown fences, no extra text.\nFormat: [{"ok": true/false, "text": "plain text, no asterisks. Max 2 sentences. If wrong: Correction: corrected version."}]`;
let rawAI = ‘’;
try { rawAI = await callGemini(prompt); } catch(e) {
res.innerHTML=’<div class="fb-card fb-err"><div class="fb-body">Connection error — please try again.</div></div>’;
btn.disabled=false; btn.textContent=‘Check all sentences ✓’; return;
}
const parsedAI = safeParseJSON(rawAI);
renderFeedback(‘wo-result’, parsedAI.map(p => ({ ok: p.ok, text: parseStars(p.text) })));
btn.disabled=false; btn.textContent=‘Check all sentences ✓’;
}
function resetWO() {
woData.forEach((w,i)=>{ const t=document.getElementById(‘wo-’+i); if(t) t.value=’’; });
const r=document.getElementById(‘wo-result’); r.classList.remove(‘show’); r.textContent=’’;
}

// ═══ ROLEPLAY CARDS ═══
const roleplays = [
{
emoji:‘🚪🎉’,
title:‘The party invitation’,
a:‘You are knocking on your neighbour's door. You're having a block party. Invite them!’,
b:‘You are home. A neighbour you barely know is at the door. Be polite but you're busy.’,
phrases:[‘We're having a…’, ‘We thought you might like to come’, ‘I'd like to come, but…’, ‘If you change your mind, come on over’]
},
{
emoji:‘🐕📢’,
title:‘The barking dog’,
a:‘Your neighbour's dog barks every morning at 6am. It's driving you nuts. Go talk to them.’,
b:‘Your neighbour is at the door. You didn't realize the dog was a problem.’,
phrases:[‘I've been meaning to talk to you about…’, ‘Does it bother you?’, ‘It's driving me nuts’, ‘Unless you… I'll have to…’]
},
{
emoji:‘🌳🏡’,
title:‘New neighbours’,
a:‘You just moved in next door. Introduce yourself. Ask about the neighbourhood.’,
b:‘A new neighbour introduces themselves. Be friendly and give them some tips.’,
phrases:[‘I'm your neighbor from around the block’, ‘Drop by anytime’, ‘If you need anything…’, ‘The suburbs are…’]
},
];

function buildRoleplays() {
const c = document.getElementById(‘roleplay-cards’);
c.innerHTML = ‘’;
roleplays.forEach((rp, i) => {
const d = document.createElement(‘div’);
d.className = ‘card card-blue’; d.style.marginBottom = ‘12px’;
d.innerHTML = `<div style="font-size:28px;margin-bottom:6px;">${rp.emoji}</div> <div style="font-size:15px;font-weight:600;color:var(--text);margin-bottom:10px;">${rp.title}</div> <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:10px;"> <div style="flex:1;min-width:130px;background:#FFF5F3;border-radius:8px;padding:10px;"> <div style="font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--coral);margin-bottom:4px;">Student A</div> <div style="font-size:13px;color:var(--text);">${rp.a}</div> </div> <div style="flex:1;min-width:130px;background:#F5F8FC;border-radius:8px;padding:10px;"> <div style="font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#2A6A9A;margin-bottom:4px;">Student B</div> <div style="font-size:13px;color:var(--text);">${rp.b}</div> </div> </div> <div style="font-size:12px;color:var(--muted2);">Use: ${rp.phrases.map(p=>`<em>”${p}”</em>`).join(' · ')}</div>`;
c.appendChild(d);
});
}

// ═══ TRANSFORM unless ↔ if…not ═══
const transformData = [
{ original: “Unless you call her, she won’t know about the party.”, direction: “unless → if…not”, placeholder: “If you don’t call her, she won’t know about the party.” },
{ original: “If you don’t drop by soon, I’ll come to you!”, direction: “if…not → unless”, placeholder: “Unless you drop by soon, I’ll come to you!” },
{ original: “She wouldn’t have moved next door unless she’d known someone on the street.”, direction: “unless → if…not”, placeholder: “She wouldn’t have moved next door if she hadn’t known someone…” },
{ original: “If you don’t value your privacy, living in the suburbs won’t feel different.”, direction: “if…not → unless”, placeholder: “Unless you value your privacy, living in the suburbs won’t feel different.” },
{ original: “Unless the dog stops barking, I’ll have to talk to the neighbour.”, direction: “unless → if…not”, placeholder: “If the dog doesn’t stop barking, I’ll have to talk to the neighbour.” },
{ original: “I wouldn’t have gone to the block party if it hadn’t been for you.”, direction: “if…not → unless”, placeholder: “Unless it had been for you, I wouldn’t have gone to the block party.” },
];

function buildTransform() {
const c = document.getElementById(‘transform-container’);
if (!c) return;
c.innerHTML = ‘’;
transformData.forEach((item, i) => {
const d = document.createElement(‘div’);
d.className = ‘card’; d.style.marginBottom = ‘11px’;
d.innerHTML = `<div style="font-size:13.5px;color:var(--text);font-weight:500;margin-bottom:5px;">${i+1}. ${item.original}</div> <div style="font-size:12px;color:var(--muted2);font-style:italic;margin-bottom:7px;">Rewrite using <strong style="color:var(--coral)">${item.direction}</strong> — same meaning:</div> <textarea class="inp" id="tr-${i}" placeholder="Rewrite here..." style="resize:vertical;min-height:50px;"></textarea>`;
c.appendChild(d);
});
}

async function checkTransform() {
const btn = document.getElementById(‘tf-ai-btn’);
const res = document.getElementById(‘tf-ai-result’);
const entries = transformData.map((item, i) => ({
original: item.original, direction: item.direction, sample: item.placeholder,
student: (document.getElementById(‘tr-’ + i) || {value:’’}).value.trim()
})).filter(e => e.student);
if (!entries.length) { res.classList.add(‘show’); res.innerHTML=’<div class="fb-card fb-err"><div class="fb-body">Please write at least one sentence!</div></div>’; return; }
btn.disabled = true; btn.textContent = ‘Checking…’;
res.classList.add(‘show’); res.innerHTML=’<div class="fb-card fb-err" style="background:#F5F1EC;border-color:#D8D0C8;color:var(--muted);"><div class="fb-body">⏳ Checking…</div></div>’;
const prompt = `English teacher. B1+. Transform unless <-> if...not. Meaning must stay the same.\n\n${entries.map((e,i) => `${i+1}. Original: “${e.original}” | Transform: ${e.direction} | Sample: “${e.sample}” | Student: “${e.student}”`).join('\n')}\n\nReturn ONLY a JSON array, one object per sentence, no markdown fences, no extra text.\nFormat: [{"ok": true/false, "text": "plain text, no asterisks. Max 2 sentences. If wrong: Correction: corrected version."}]`;
let rawTF = ‘’;
try { rawTF = await callGemini(prompt); } catch(e) {
res.innerHTML=’<div class="fb-card fb-err"><div class="fb-body">Connection error — please try again.</div></div>’;
btn.disabled = false; btn.textContent = ‘Check all ✓’; return;
}
const parsedTF = safeParseJSON(rawTF);
renderFeedback(‘tf-ai-result’, parsedTF.map(p => ({ ok: p.ok, text: parseStars(p.text) })));
btn.disabled = false; btn.textContent = ‘Check all ✓’;
}
function resetTransform() {
transformData.forEach((t, i) => { const inp = document.getElementById(‘tr-’ + i); if (inp) inp.value = ‘’; });
const r = document.getElementById(‘tf-ai-result’); r.classList.remove(‘show’); r.textContent = ‘’;
}

// ═══ WRITE YOUR OWN UNLESS ═══
const unlessWriteData = [
{ type: ‘1’, ru: ‘Что случится если твой сосед не перестанет шуметь?’, hint: ‘Type 1 — real consequence’, starter: ‘Unless my neighbour…’ },
{ type: ‘2’, ru: ‘При каком условии ты бы переехал в пригород? (нереальное сейчас)’, hint: ‘Type 2 — hypothetical’, starter: “I wouldn’t move to the suburbs unless…” },
{ type: ‘3’, ru: ‘Что бы не произошло если бы ты не познакомился с соседями?’, hint: ‘Type 3 — unreal past’, starter: “Unless I had…” },
{ type: ‘1’, ru: ‘Дай совет другу про соседей — что будет если он не сделает что-то?’, hint: ‘Type 1 — warning/advice’, starter: ‘You'll… unless you…’ },
{ type: ‘2’, ru: ‘При каком условии ты бы пошёл на вечеринку к соседям?’, hint: ‘Type 2 — hypothetical’, starter: “I wouldn’t go to the party unless…” },
{ type: ‘any’, ru: ‘Придумай своё предложение с unless про соседей или жизнь’, hint: ‘Any type — be creative!’, starter: ‘Unless…’ },
];

function buildUnlessWrite() {
const c = document.getElementById(‘unless-write-container’);
if (!c) return;
c.innerHTML = ‘’;
const typeColors = { ‘1’:’#2A7A4A’, ‘2’:‘var(–coral)’, ‘3’:‘var(–purple)’, ‘any’:’#2A6A9A’ };
unlessWriteData.forEach((item, i) => {
const d = document.createElement(‘div’);
d.className = ‘card’; d.style.marginBottom = ‘12px’;
d.innerHTML = `<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;"> <span style="background:${typeColors[item.type]||'var(--coral)'};color:#fff;border-radius:20px;padding:2px 10px;font-size:11px;font-weight:600;">Type ${item.type}</span> <span style="font-size:12px;color:var(--muted2);font-style:italic;">${item.hint}</span> </div> <div style="font-size:13.5px;color:var(--muted);font-style:italic;margin-bottom:7px;">${item.ru}</div> <div style="font-size:12.5px;color:var(--coral);margin-bottom:7px;">Starter: <em>${item.starter}</em></div> <textarea class="inp" id="uw-${i}" placeholder="${item.starter}" style="resize:vertical;min-height:55px;"></textarea>`;
c.appendChild(d);
});
}

async function checkUnlessWrite() {
const btn = document.getElementById(‘uw-btn’);
const res = document.getElementById(‘uw-result’);
const entries = unlessWriteData.map((item, i) => ({
ru: item.ru, type: item.type, hint: item.hint,
student: (document.getElementById(‘uw-’ + i) || {value:’’}).value.trim()
})).filter(e => e.student);
if (!entries.length) { res.classList.add(‘show’); res.innerHTML=’<div class="fb-card fb-err"><div class="fb-body">Please write at least one sentence!</div></div>’; return; }
btn.disabled = true; btn.textContent = ‘Checking…’;
res.classList.add(‘show’); res.innerHTML=’<div class="fb-card fb-err" style="background:#F5F1EC;border-color:#D8D0C8;color:var(--muted);"><div class="fb-body">⏳ Checking…</div></div>’;
const prompt = `Friendly English teacher. B1+. Students wrote sentences with unless. Check: 1) unless used correctly (= if...not)? 2) correct conditional verb form for the type? 3) would after unless? (big error) 4) logical meaning?\n\n${entries.map((e,i) => `${i+1}. Task: “${e.ru}” | Type: ${e.type} (${e.hint}) | Student: “${e.student}”`).join('\n')}\n\nReturn ONLY a JSON array, one object per sentence, no markdown fences, no extra text.\nFormat: [{"ok": true/false, "text": "plain text, no asterisks. Max 2 sentences. If wrong: Correction: corrected version."}]`;
let rawUW = ‘’;
try { rawUW = await callGemini(prompt); } catch(e) {
res.innerHTML=’<div class="fb-card fb-err"><div class="fb-body">Connection error — please try again.</div></div>’;
btn.disabled = false; btn.textContent = ‘Check my sentences ✓’; return;
}
const parsedUW = safeParseJSON(rawUW);
renderFeedback(‘uw-result’, parsedUW.map(p => ({ ok: p.ok, text: parseStars(p.text) })));
btn.disabled = false; btn.textContent = ‘Check my sentences ✓’;
}
function resetUnlessWrite() {
unlessWriteData.forEach((u, i) => { const t = document.getElementById(‘uw-’ + i); if (t) t.value = ‘’; });
const r = document.getElementById(‘uw-result’); r.classList.remove(‘show’); r.textContent = ‘’;
}

// ═══ INIT ═══
document.addEventListener(‘DOMContentLoaded’, () => {
buildVocabMatch();
buildIdent();
buildUnless();
buildRewrite();
buildTransform();
buildUnlessWrite();
buildGaps();
buildWO();
buildRoleplays();
});
</script>

</body>
</html>
