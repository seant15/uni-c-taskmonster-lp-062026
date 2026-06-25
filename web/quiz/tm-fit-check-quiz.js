/**
 * Task Monsters Fit Check Quiz — web LP only (not in-app).
 * Spec: web/quiz/FIT-CHECK-QUIZ-SPEC.md
 */
(function () {
  'use strict';

  var cfg = window.TM_FIT_CHECK_CONFIG || {};
  var root = document.getElementById('tm-fit-check');
  if (!root) return;

  var state = { step: 0, answers: {}, score: 0, tier: 'good' };
  var totalSteps = 8;

  function q7Default() {
    return {
      id: 'lpFit',
      text: 'Does your issue involve breakers, outlets, or household electrical?',
      hint: 'This page is about electrical rescue — pick the closest match.',
      multi: false,
      options: [
        { label: 'Yes — breakers or panel', value: 'breaker', score: 25 },
        { label: 'Yes — outlets, switches, or lighting', value: 'outlets', score: 20 },
        { label: 'Maybe electrical — not sure yet', value: 'maybe', score: 10 },
        { label: 'No — a different home project', value: 'other', score: -15 }
      ]
    };
  }

  var questions = [
    {
      id: 'tried',
      text: 'What have you already tried?',
      hint: 'Select all that apply — Task Monsters is the rescue after DIY research.',
      multi: true,
      options: [
        { label: 'Searched Google or forums', value: 'google', score: 5 },
        { label: 'Watched YouTube how-to videos', value: 'youtube', score: 5 },
        { label: 'Asked AI (ChatGPT, etc.)', value: 'ai', score: 5 },
        { label: 'Asked friends or family', value: 'friends', score: 5 },
        { label: 'Got a quote or talked to a pro — still unsure', value: 'pro', score: 8 },
        { label: 'Nothing yet — just starting', value: 'none', score: -5 }
      ]
    },
    {
      id: 'licensed',
      text: 'Is this mainly about…',
      multi: false,
      options: [
        { label: 'Home repair, DIY, or contractor help', value: 'home', score: 10 },
        { label: 'Medical or health', value: 'medical', score: -100, hard: 'licensed' },
        { label: 'Legal or court matter', value: 'legal', score: -100, hard: 'licensed' },
        { label: 'Tax, investing, or financial advice', value: 'finance', score: -100, hard: 'licensed' }
      ]
    },
    {
      id: 'helpType',
      text: 'What kind of help do you need?',
      multi: false,
      options: [
        { label: 'Fix or troubleshoot something myself', value: 'craft', score: 15 },
        { label: 'Understand a quote or scope before I decide', value: 'consult', score: 12 },
        { label: 'Negotiate price or terms with a contractor', value: 'negotiate', score: 12 },
        { label: 'Tech / app / device setup help', value: 'tech', score: 12 }
      ]
    },
    {
      id: 'category',
      text: 'Which area fits best?',
      multi: false,
      options: [
        { label: 'Electrical', value: 'electrical', score: 10 },
        { label: 'Plumbing', value: 'plumbing', score: 10 },
        { label: 'Handyman / general home', value: 'handyman', score: 8 },
        { label: 'Carpentry / painting / gardening', value: 'craft', score: 8 },
        { label: 'Computer / smart home tech', value: 'computer', score: 8 },
        { label: 'Auto buying / negotiation', value: 'auto', score: 8 },
        { label: 'Not sure yet', value: 'unsure', score: 0 }
      ]
    },
    {
      id: 'danger',
      text: 'Right now, is there immediate danger?',
      multi: false,
      options: [
        { label: 'No — stuck or annoying, but safe to keep looking', value: 'safe', score: 5 },
        { label: 'Not sure — I want someone to look with me on video', value: 'unsure', score: 0 },
        { label: 'Yes — burning smell, shock, major flood, or gas', value: 'emergency', score: -100, hard: 'emergency' }
      ]
    },
    {
      id: 'video',
      text: 'Could you show the problem on a live video call with your phone?',
      multi: false,
      options: [
        { label: 'Yes — I can point the camera at it', value: 'yes', score: 20 },
        { label: 'Probably — with a little privacy comfort', value: 'maybe', score: 10 },
        { label: 'No — I can\'t show it on video', value: 'no', score: -25 }
      ]
    },
    cfg.q7Question ? {
      id: 'lpFit',
      text: cfg.q7Question,
      hint: cfg.q7Hint || '',
      multi: false,
      options: cfg.q7Options || q7Default().options
    } : q7Default(),
    {
      id: 'intentPrice',
      text: 'Last two — quick picks',
      hint: 'What you want + whether $9.99 for ~10 minutes works.',
      multi: false,
      sub: [
        {
          id: 'intent',
          label: 'What are you hoping for?',
          options: [
            { label: 'Guide me while I do it myself', value: 'diy', score: 20 },
            { label: 'Help me decide DIY vs hiring a pro', value: 'decide', score: 15 },
            { label: 'Someone to do the work for me', value: 'hire', score: -30 }
          ]
        },
        {
          id: 'price',
          label: '$9.99 for about 10 minutes on live video — works for you?',
          options: [
            { label: 'Yes — that\'s fair', value: 'yes', score: 10 },
            { label: 'I\'d try it once', value: 'try', score: 5 },
            { label: 'I need to think about it', value: 'think', score: -5 }
          ]
        }
      ]
    }
  ];

  function lpBoost() {
    var trade = (cfg.lpTrade || '').toLowerCase();
    var cat = state.answers.category;
    if (!cat || !trade) return 0;
    var map = {
      electrical: 'electrical',
      plumbing: 'plumbing',
      handyman: 'handyman',
      computer: 'computer',
      auto: 'auto'
    };
    if (map[trade] === cat) return 15;
    if (cfg.lpHelpType && state.answers.helpType === cfg.lpHelpType) return 10;
    return 0;
  }

  function computeScore() {
    state.hardStop = null;
    var score = 50;
    questions.forEach(function (q) {
      if (q.sub) {
        q.sub.forEach(function (sub) {
          var v = state.answers[sub.id];
          if (!v) return;
          sub.options.forEach(function (o) {
            if (o.value === v) score += o.score || 0;
          });
        });
        return;
      }
      var val = state.answers[q.id];
      if (val == null) return;
      if (q.multi && Array.isArray(val)) {
        val.forEach(function (v) {
          q.options.forEach(function (o) {
            if (o.value === v) score += o.score || 0;
          });
        });
        if (val.length === 1 && val[0] === 'none') score -= 5;
        return;
      }
      q.options.forEach(function (o) {
          if (o.value === val) {
            score += o.score || 0;
            if (o.hard) state.hardStop = o.hard;
          }
      });
    });

    if (state.hardStop) {
      return { score: 0, tier: 'stop', hard: state.hardStop };
    }

    score += lpBoost();
    score = Math.max(0, Math.min(100, score));

    var tier = 'soft';
    if (score >= 80) tier = 'great';
    else if (score >= 60) tier = 'good';
    else if (score >= 40) tier = 'soft';

    return { score: score, tier: tier, hard: null };
  }

  function resultCopy(result) {
    if (result.hard === 'licensed') {
      return {
        title: 'Not the right fit',
        body: 'Task Monsters helps with home DIY, trades, and contractor questions on live video. Medical, legal, and financial advice need a licensed professional in those fields.',
        ring: 'stop'
      };
    }
    if (result.hard === 'emergency') {
      return {
        title: 'Call a pro or 911 first',
        body: 'If you smell burning, feel a shock, have major flooding, or suspect gas — stop and contact emergency services or a licensed pro. Task Monsters is for guidance when it\'s safe to troubleshoot on video.',
        ring: 'stop'
      };
    }
    if (result.tier === 'great') {
      return {
        title: 'Strong match — Task Monsters fits',
        body: 'You\'ve done the research. You need a Subject Matter Expert to see YOUR setup on live video — that\'s exactly what the rescue app does. Choose ' + (cfg.lpTrade || 'your trade') + ' → ' + (cfg.lpTopic || 'your topic') + ' → a Subject Matter Expert. $9.99, once.',
        ring: 'great'
      };
    }
    if (result.tier === 'good') {
      return {
        title: 'Worth a try',
        body: 'Task Monsters could help — especially if you can show the problem on video. Download free; pay $9.99 only when you connect with a Subject Matter Expert.',
        ring: 'good'
      };
    }
    return {
      title: 'Maybe try free resources first',
      body: 'You might still use Task Monsters later — but Google, YouTube, or a local pro quote could be your next step. Come back when you\'re stuck after DIY research.',
      ring: 'soft'
    };
  }

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function getSelection(q) {
    if (q.sub) {
      return state.answers.intent && state.answers.price;
    }
    if (q.multi) {
      var arr = state.answers[q.id];
      return arr && arr.length > 0;
    }
    return state.answers[q.id] != null;
  }

  function render() {
    root.innerHTML = '';
    if (state.step >= totalSteps) {
      renderResult();
      return;
    }

    var q = questions[state.step];
    var card = el('div', 'tm-quiz__card');
    var pct = Math.round(((state.step) / totalSteps) * 100);

    card.appendChild(el('div', 'tm-quiz__progress-wrap', [
      '<div class="tm-quiz__progress-label"><span>Question ' + (state.step + 1) + ' of ' + totalSteps + '</span><span>' + pct + '%</span></div>',
      '<div class="tm-quiz__progress-bar"><span class="tm-quiz__progress-fill" style="width:' + pct + '%"></span></div>'
    ].join('')));

    card.appendChild(el('h3', 'tm-quiz__question', q.text));
    if (q.hint) card.appendChild(el('p', 'tm-quiz__hint', q.hint));

    var opts = el('div', 'tm-quiz__options');

    if (q.sub) {
      q.sub.forEach(function (sub) {
        opts.appendChild(el('p', 'tm-quiz__hint', sub.label));
        sub.options.forEach(function (o) {
          var btn = el('button', 'tm-quiz__option', o.label);
          btn.type = 'button';
          btn.dataset.sub = sub.id;
          btn.dataset.value = o.value;
          if (state.answers[sub.id] === o.value) btn.classList.add('is-selected');
          btn.addEventListener('click', function () {
            state.answers[sub.id] = o.value;
            opts.querySelectorAll('[data-sub="' + sub.id + '"]').forEach(function (b) {
              b.classList.toggle('is-selected', b.dataset.value === o.value);
            });
            updateNext();
          });
          opts.appendChild(btn);
        });
      });
    } else {
      q.options.forEach(function (o) {
        var btn = el('button', 'tm-quiz__option', o.label);
        btn.type = 'button';
        btn.dataset.value = o.value;
        if (q.multi) {
          var arr = state.answers[q.id] || [];
          if (arr.indexOf(o.value) >= 0) btn.classList.add('is-selected');
        } else if (state.answers[q.id] === o.value) {
          btn.classList.add('is-selected');
        }
        btn.addEventListener('click', function () {
          if (q.multi) {
            var list = state.answers[q.id] || [];
            var i = list.indexOf(o.value);
            if (i >= 0) list.splice(i, 1);
            else list.push(o.value);
            state.answers[q.id] = list;
            btn.classList.toggle('is-selected');
          } else {
            state.answers[q.id] = o.value;
            opts.querySelectorAll('.tm-quiz__option').forEach(function (b) {
              b.classList.toggle('is-selected', b.dataset.value === o.value);
            });
          }
          updateNext();
        });
        opts.appendChild(btn);
      });
    }

    card.appendChild(opts);

    var nav = el('div', 'tm-quiz__nav');
    if (state.step > 0) {
      var back = el('button', 'tm-quiz__back', '← Back');
      back.type = 'button';
      back.addEventListener('click', function () {
        state.step--;
        render();
      });
      nav.appendChild(back);
    }
    var next = el('button', 'tm-btn-primary tm-quiz__next', state.step === totalSteps - 1 ? 'See my result' : 'Next →');
    next.type = 'button';
    next.disabled = !getSelection(q);
    next.addEventListener('click', function () {
      if (!getSelection(q)) return;
      if (window.dataLayer) window.dataLayer.push({ event: 'quiz_step', step: state.step + 1 });
      state.step++;
      render();
    });
    nav.appendChild(next);
    card.appendChild(nav);
    root.appendChild(card);

    function updateNext() {
      next.disabled = !getSelection(q);
    }
  }

  function renderResult() {
    var result = computeScore();
    var copy = resultCopy(result);
    var card = el('div', 'tm-quiz__card tm-quiz__result');

    card.appendChild(el('div', 'tm-quiz__score-ring tm-quiz__score-ring--' + copy.ring, result.hard ? '!' : result.score));
    card.appendChild(el('h3', '', copy.title));
    card.appendChild(el('p', '', copy.body));

    if (!result.hard && (result.tier === 'great' || result.tier === 'good')) {
      // DISCOUNT20 only after quiz — fit tiers only (never in pre-quiz UI)
      var code = cfg.discountCode || 'DISCOUNT20';
      var pctOff = cfg.discountPercent || 20;
      var promo = el('div', 'tm-quiz__promo');
      promo.innerHTML = [
        '<p class="tm-quiz__promo-label">Your fit check reward</p>',
        '<div class="tm-quiz__code-row">',
        '  <span class="tm-quiz__code" id="tm-quiz-discount-code">' + code + '</span>',
        '  <button type="button" class="tm-btn-blue tm-quiz__copy-btn" id="tm-quiz-copy-code">Copy code</button>',
        '</div>',
        '<p class="tm-quiz__promo-note">' + pctOff + '% off your first rescue call. ' + (cfg.discountNote || 'Apply in the app at checkout.') + '</p>'
      ].join('');
      card.appendChild(promo);
      setTimeout(function () {
        var copyBtn = document.getElementById('tm-quiz-copy-code');
        if (!copyBtn) return;
        copyBtn.addEventListener('click', function () {
          var text = code;
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function () {
              copyBtn.textContent = 'Copied!';
            });
          } else {
            copyBtn.textContent = code;
          }
          if (window.dataLayer) {
            window.dataLayer.push({ event: 'quiz_discount_copy', code: code });
          }
        });
      }, 0);
    }

    if (!result.hard && result.tier !== 'soft') {
      var cta = el('div', 'tm-quiz__result-cta');
      cta.innerHTML = [
        '<a href="https://play.google.com/store/apps/details?id=com.taskmonster" class="tm-btn-primary" data-event="play_store_click">Play Store</a>',
        '<a href="https://apps.apple.com/us/app/task-monsters-diy-assistance/id6445980501" class="tm-btn-primary" data-event="app_store_click">App Store</a>'
      ].join('');
      card.appendChild(cta);
    }

    if (!result.hard) {
      var site = window.TM_SITE_CONFIG || {};
      var contactEmail = site.contactEmail || 'customersupport@gettaskmonsters.com';
      var emailBlock = el('div', 'tm-quiz__email-opt');
      emailBlock.innerHTML = '<label for="quiz-email">Optional — email my result &amp; rescue tips</label>';
      var row = el('div', 'tm-quiz__email-row');
      var input = el('input');
      input.type = 'email';
      input.id = 'quiz-email';
      input.name = 'email';
      input.placeholder = 'you@email.com';
      input.autocomplete = 'email';
      var sub = el('button', 'tm-btn-blue', 'Send');
      sub.type = 'button';
      sub.addEventListener('click', function () {
        var email = (input.value || '').trim();
        if (!email) return;
        var payload = {
          email: email,
          source: 'fit_check_quiz',
          lp_id: cfg.lpId || '',
          lp_trade: cfg.lpTrade || '',
          tier: result.tier,
          score: result.score,
          contact_routing: contactEmail
        };
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'quiz_email_capture',
            tier: result.tier,
            contact_email: contactEmail
          });
        }
        if (site.ghlWebhookUrl) {
          fetch(site.ghlWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          }).catch(function () { /* GHL retry handled in ops */ });
        }
        sub.textContent = 'Thanks!';
        sub.disabled = true;
        input.disabled = true;
      });
      row.appendChild(input);
      row.appendChild(sub);
      emailBlock.appendChild(row);
      emailBlock.appendChild(el('p', 'tm-quiz__fine', 'Web only — not part of the app. Routed to ' + contactEmail + '. Unsubscribe anytime.'));
      card.appendChild(emailBlock);
    }

    var retry = el('button', 'tm-quiz__back', '← Retake quiz');
    retry.type = 'button';
    retry.style.display = 'block';
    retry.style.margin = '16px auto 0';
    retry.addEventListener('click', function () {
      state = { step: 0, answers: {}, score: 0, tier: 'good' };
      var intro = document.getElementById('tm-quiz-intro');
      if (intro) intro.classList.remove('is-hidden');
      root.classList.add('is-hidden');
    });
    card.appendChild(retry);
    root.appendChild(card);

    if (window.dataLayer) {
      window.dataLayer.push({ event: 'quiz_complete', tier: result.tier, score: result.score });
    }
  }

  var startBtn = document.getElementById('tm-quiz-start');
  if (startBtn) {
    startBtn.addEventListener('click', function () {
      if (window.dataLayer) window.dataLayer.push({ event: 'quiz_start' });
      state.step = 0;
      var intro = document.getElementById('tm-quiz-intro');
      if (intro) intro.classList.add('is-hidden');
      root.classList.remove('is-hidden');
      render();
      root.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
})();
