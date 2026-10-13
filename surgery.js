const diagnoses = [
  { id: 'broken-arm', name: 'Broken Arm', type: 'Diagnosis', level: 'EASY', detail: 'The patient is bleeding slightly and has one broken bone.', note: 'Repair the bone with a Splint, then stop the bleeding with Stitches.', blood: 1, broken: 1, goal: 0, bones: true },
  { id: 'broken-leg', name: 'Broken Leg', type: 'Diagnosis', level: 'MEDIUM', detail: 'The patient is bleeding slightly, with one broken and one shattered bone.', note: 'Put the patient to sleep. Make one incision, use Pins, close it with Stitches, then use a Splint.', blood: 1, broken: 1, shattered: 1, goal: 1, bones: true },
  { id: 'bird-flu', name: 'Bird Flu', type: 'Flu', level: 'EASY', detail: 'The patient has a rising medium fever and low visibility.', note: 'Use the Lab Kit to unlock Antibiotics, then lower the patient’s temperature.', fever: 102, visibility: 1, goal: 0, flu: true },
  { id: 'turtle-flu', name: 'Turtle Flu', type: 'Flu', level: 'EASY', detail: 'The patient has a rapidly rising slight fever and low visibility.', note: 'Use the Lab Kit to unlock Antibiotics, then lower the patient’s temperature.', fever: 100.8, visibility: 1, goal: 0, flu: true },
  { id: 'monkey-flu', name: 'Monkey Flu', type: 'Flu', level: 'MEDIUM', detail: 'The patient has a rapidly rising high fever.', note: 'Use the Lab Kit, then give Antibiotics until the fever is reduced.', fever: 104, visibility: 0, goal: 0, flu: true },
  { id: 'nose-job', name: 'Nose Job', type: 'Diagnosis', level: 'EASY', detail: 'The patient is healthy and wants a nose job.', note: 'Put the patient to sleep, make one incision, and close it with Stitches.', goal: 1 },
  { id: 'lung-tumor', name: 'Lung Tumor', type: 'Diagnosis', level: 'EASY', detail: 'The patient appears stable at the start.', note: 'Put the patient to sleep, make one incision, select Fix It, then close the incision.', goal: 1 },
  { id: 'heart-attack', name: 'Heart Attack', type: 'Diagnosis', level: 'MEDIUM', detail: 'The patient appears stable at the start; monitor their heartbeat.', note: 'Put the patient to sleep, make two incisions, then close them. Keep a Defibrillator ready.', goal: 2, heartRisk: true },
  { id: 'brain-tumor', name: 'Brain Tumor', type: 'Diagnosis', level: 'MEDIUM', detail: 'The patient appears stable at the start.', note: 'Put the patient to sleep, make five incisions, then close them one at a time with Stitches.', goal: 5 },
  { id: 'liver-infection', name: 'Liver Infection', type: 'Diagnosis', level: 'MEDIUM', detail: 'The patient has a medium fever and an unclean operation site.', note: 'Lower the fever, put the patient to sleep, make two incisions, and close them.', fever: 102, site: 1, goal: 2 },
  { id: 'kidney-failure', name: 'Kidney Failure', type: 'Diagnosis', level: 'MEDIUM', detail: 'The patient has a slight fever and an unclean operation site.', note: 'Lower the fever, put the patient to sleep, make one incision, and close it.', fever: 100.8, site: 1, goal: 1 },
  { id: 'appendicitis', name: 'Appendicitis', type: 'Diagnosis', level: 'MEDIUM', detail: 'The patient has a rapidly rising slight fever and a very unclean operation site.', note: 'Clean the operation site, lower the fever, put the patient to sleep, and make three incisions.', fever: 100.8, site: 2, goal: 3 },
  { id: 'world-lock', name: 'Swallowed a World Lock', type: 'Diagnosis', level: 'MEDIUM', detail: 'The patient has a rapidly rising slight fever, an unclean operation site, and low visibility.', note: 'Use a Sponge if visibility is low. Put the patient to sleep, make two incisions, and close them.', fever: 100.8, site: 1, visibility: 2, goal: 2 },
  { id: 'hernia', name: 'Herniated Disc / Damaged Spine', type: 'Diagnosis', level: 'MEDIUM', detail: 'The patient’s temperature is almost feverish but stable.', note: 'Clean the operation site. Put the patient to sleep, make three incisions, and close them.', fever: 99.8, goal: 3 },
  { id: 'broken-everything', name: 'Broken Everything', type: 'Diagnosis', level: 'HARD', detail: 'The patient is bleeding, has four shattered bones, and has low visibility and an unclean site.', note: 'Stabilize the bleeding and clean the operation site before treating the bones.', blood: 1, shattered: 4, site: 2, visibility: 2, fever: 100.8, goal: 2, bones: true },
  { id: 'head-injury', name: 'Serious Head Injury', type: 'Diagnosis', level: 'HARD', detail: 'The patient has a weak pulse, rapid blood loss, an unclean site, and low visibility.', note: 'Stop the bleeding, put the patient to sleep, make one incision, and close it.', blood: 2, pulse: 1, site: 2, visibility: 2, goal: 1 },
  { id: 'serious-trauma', name: 'Serious Trauma', type: 'Diagnosis', level: 'HARD', detail: 'The patient is bleeding, has two broken bones and one shattered bone, and has low visibility.', note: 'Stabilize the bleeding, put the patient to sleep, access the bones through an incision, then repair them.', blood: 1, broken: 2, shattered: 1, site: 2, visibility: 2, fever: 100.8, goal: 2, bones: true },
  { id: 'massive-trauma', name: 'Massive Trauma', type: 'Diagnosis', level: 'HARD', detail: 'The patient is bleeding quickly, has three broken bones and two shattered bones, and has low visibility.', note: 'Advanced case: stabilize the patient before making incisions and repairing the bones.', blood: 2, broken: 3, shattered: 2, site: 2, visibility: 2, fever: 100.8, pulse: 2, goal: 3, bones: true },
  { id: 'torn-muscle', name: 'Torn Punching Muscle', type: 'Malady', level: 'EASY', detail: 'The patient appears stable at the start.', note: 'Put the patient to sleep, make one incision, and close it with Stitches.', goal: 1 },
  { id: 'gem-cuts', name: 'Gem Cuts', type: 'Malady', level: 'EASY', detail: 'The patient is bleeding slightly.', note: 'Put the patient to sleep, make two incisions, and close them with Stitches.', blood: 1, goal: 2 },
  { id: 'broken-heart', name: 'Broken Heart', type: 'Malady', level: 'HARD', detail: 'The patient has a high fever, two shattered bones, and a risk of cardiac arrest.', note: 'Watch for cardiac arrest. Keep a Defibrillator ready; lower the fever and repair the bones.', fever: 107, shattered: 2, site: 1, goal: 2, bones: true, heartRisk: true },
  { id: 'grumbleteeth', name: 'Grumbleteeth', type: 'Malady', level: 'MEDIUM', detail: 'The patient has a medium fever, one shattered bone, and low visibility.', note: 'Lower the fever, make an incision while the patient is asleep, then repair the bone.', fever: 102, shattered: 1, visibility: 1, goal: 1, bones: true },
  { id: 'chicken-feet', name: 'Chicken Feet', type: 'Malady', level: 'MEDIUM', detail: 'The patient has a slight fever, two shattered bones, and an unclean operation site.', note: 'Lower the fever, clean the site, then treat both shattered bones.', fever: 100.8, shattered: 2, site: 2, goal: 2, bones: true },
  { id: 'chaos-infection', name: 'Chaos Infection', type: 'Vile Malady', level: 'HARD', detail: 'The patient is bleeding, has a high fever and a broken bone, and has low visibility.', note: 'Conditions may change randomly. Check the patient’s status after every move.', blood: 1, fever: 107, broken: 1, site: 1, visibility: 2, goal: 3, volatile: true },
  { id: 'lupus', name: 'Lupus', type: 'Vile Malady', level: 'HARD', detail: 'The patient has a weak pulse, a rising near-fever, and slight blood loss.', note: 'Put the patient to sleep quickly. They may scratch themselves, adding incisions and blood loss.', blood: 1, fever: 99.8, pulse: 1, goal: 3, volatile: true },
  { id: 'brainworms', name: 'Brainworms', type: 'Vile Malady', level: 'HARD', detail: 'The patient is bleeding, has a medium fever and a shattered bone, and has low visibility.', note: 'Check the patient after Fix It; the worms may reappear.', blood: 1, fever: 102, shattered: 1, visibility: 2, goal: 2, bones: true, volatile: true },
  { id: 'moldy-guts', name: 'Moldy Guts', type: 'Vile Malady', level: 'HARD', detail: 'The patient has a medium fever, a shattered bone, an unclean site, and low visibility.', note: 'Use the Lab Kit before Antibiotics. Use a Sponge if visibility becomes too low.', fever: 102, shattered: 1, site: 2, visibility: 2, goal: 2, bones: true, flu: true, volatile: true },
  { id: 'ecto-bones', name: 'Ecto-Bones', type: 'Vile Malady', level: 'HARD', detail: 'The patient has six broken bones, two shattered bones, and low visibility.', note: 'Put the patient to sleep, make an incision, use Pins on shattered bones, close the incision, then use Splints.', broken: 6, shattered: 2, visibility: 2, goal: 1, bones: true },
  { id: 'fatty-liver', name: 'Fatty Liver', type: 'Vile Malady', level: 'HARD', detail: 'The patient has a rapidly rising medium fever and may suffer cardiac arrest while asleep.', note: 'Treat the fever and operation site. Keep a Defibrillator ready and monitor the patient’s heart.', fever: 102, site: 1, goal: 3, heartRisk: true, volatile: true }
];

const tools = [
  ['defibrillator', 'Defibrillator', '⚡', 'Restarts the patient’s heart after cardiac arrest.'],
  ['sponge', 'Sponge', '🧽', 'Clears the operation site when visibility is low.'],
  ['anesthetic', 'Anesthetic', '💨', 'Puts the patient to sleep before surgery.'],
  ['stitches', 'Stitches', '🪡', 'Closes incisions and stops blood loss.'],
  ['scalpel', 'Scalpel', '🗡️', 'Makes incisions to reach the affected area.'],
  ['ultrasound', 'Ultrasound', '📡', 'Reveals the diagnosis and bone conditions.'],
  ['antiseptic', 'Antiseptic', '🧴', 'Cleans and sanitizes the operation site.'],
  ['labkit', 'Lab Kit', '🧪', 'Diagnoses flu and unlocks Antibiotics.'],
  ['antibiotics', 'Antibiotics', '💊', 'Reduces fever; requires the Lab Kit first.'],
  ['transfusion', 'Transfusion', '🩸', 'Restores pulse strength after blood loss.'],
  ['splint', 'Splint', '🦴', 'Repairs broken bones.'],
  ['pins', 'Pins', '📍', 'Turns shattered bones into broken bones.'],
  ['clamp', 'Clamp', '🗜️', 'Reduces blood loss while an incision is open.']
];

const $ = (selector) => document.querySelector(selector);
const select = $('#disease-select');
let selected = diagnoses[0];
let state;
let move = 0;
let finished = false;
let actionCount = 0;

function freshState(diagnosis) {
  return {
    pulse: diagnosis.pulse ?? 2, fever: diagnosis.fever ?? 98.6,
    blood: diagnosis.blood ?? 0, site: diagnosis.site ?? 0,
    visibility: diagnosis.visibility ?? 0, broken: diagnosis.broken ?? 0,
    shattered: diagnosis.shattered ?? 0, incisions: 0, incisionsMade: 0, asleep: false,
    diagnosed: false, labKit: false, rootFixed: false, heartStopped: false,
    stepProgress: 0, heartStopMoves: 0, criticalPulseMoves: 0
  };
}

function render() {
  $('#diagnosis-name').textContent = state.diagnosed ? selected.name : 'The patient has not been diagnosed.';
  $('#pulse-status').textContent = ['Extremely weak', 'Weak', 'Steady', 'Strong'][state.pulse];
  $('#temp-status').textContent = state.fever.toFixed(1);
  $('#site-status').textContent = ['Clean', 'Not sanitized', 'Unclean'][state.site];
  $('#incision-status').textContent = state.incisions;
  $('#patient-state').textContent = state.heartStopped ? 'Heart stopped!' : state.asleep ? 'Unconscious' : 'Awake';
  $('#move-counter').textContent = `Move ${move}`;
  const alert = state.heartStopped ? 'The patient’s heart has stopped!' : state.blood > 1 ? 'Patient is losing blood quickly!' : state.blood === 1 ? 'Patient is losing blood!' : state.fever > 100.4 ? 'Patient’s fever is climbing!' : state.visibility > 0 ? 'It is becoming hard to see your work.' : 'Patient is prepped for surgery.';
  $('#patient-alert').textContent = alert;
  const canFix = state.diagnosed && selected.goal > 0 && (state.incisionsMade >= selected.goal || state.rootFixed) && !finished;
  $('#fix-button').hidden = !canFix;
  $('#fix-button').disabled = finished;
  const icons = { defibrillator: 'defibrillator', sponge: 'sponge', anesthetic: 'anesthetic', stitches: 'stitches', scalpel: 'scalpel', ultrasound: 'ultrasound', antiseptic: 'antiseptic', labkit: 'lab-kit', antibiotics: 'antibiotics', transfusion: 'transfusion', splint: 'splint', pins: 'pins', clamp: 'clamp' };
  const available = availableTools();
  const emptyTrayMessage = finished ? 'Surgery complete.' : canFix ? 'Press “Fix It” to continue.' : 'No tools are currently available.';
  $('#tools-grid').innerHTML = available.length ? available.map(([id, name, art, description]) => `
    <button class="tool-card" type="button" data-tool="${id}" title="${name}: ${description}" aria-label="${name}" ${finished ? 'disabled' : ''}>
      <img src="img/tools/${icons[id]}.png" alt="${name}" width="80" height="80">
    </button>`).join('') : `<p class="empty-tray">${emptyTrayMessage}</p>`;
  document.querySelectorAll('.tool-card').forEach(button => button.addEventListener('click', () => useTool(button.dataset.tool)));
  document.querySelectorAll('.case-card').forEach(button => button.classList.toggle('active', button.dataset.diagnosis === selected.id));
}

function availableTools() {
  if (finished) return [];
  // Guided mode shows only the next required tool for this patient's state.
  // At maximum visibility the game forces Sponge before any other action.
  if (state.visibility >= 2) return tools.filter(([id]) => id === 'sponge');
  if (state.heartStopped) return tools.filter(([id]) => id === 'defibrillator');

  let next;
  if (!state.diagnosed && !selected.flu) next = 'ultrasound';
  else if ((selected.flu || state.fever > 100.4) && !state.labKit) next = 'labkit';
  else if (state.fever > 100.4 && state.labKit) next = 'antibiotics';
  else if (state.pulse < 2) next = 'transfusion';
  else if (state.shattered > 0 && state.incisions > 0) next = 'pins';
  else if (state.broken > 0) next = 'splint';
  else if (state.blood > 0 && state.incisionsMade === 0 && state.incisions === 0) next = 'stitches';
  else if (Math.max(selected.goal, state.shattered > 0 ? 1 : 0) > state.incisionsMade) {
    next = state.asleep ? 'scalpel' : 'anesthetic';
  } else if (selected.goal > 0 && state.incisionsMade >= selected.goal && !state.rootFixed) next = null;
  else if (state.blood > 0 || state.incisions > 0) next = 'stitches';
  else if (state.site > 0) next = 'antiseptic';

  return next ? tools.filter(([id]) => id === next) : [];
}

function log(message, kind = '') {
  $('#diagnosis-detail').textContent = message;
  $('#patient-alert').textContent = message;
  $('#action-announcer').textContent = message;
}

function finishSimpleCase(message) {
  if (selected.goal === 0 && !selected.flu && state.diagnosed) state.rootFixed = true;
  const resolved = state.rootFixed && state.diagnosed && state.broken === 0 && state.shattered === 0 && state.incisions === 0 && state.blood === 0 && state.site === 0 && state.fever <= 100.4 && !state.heartStopped;
  if (resolved) {
    finished = true;
    log(message, 'log-success');
    return true;
  }
  return false;
}

function takeTurn() {
  move += 1;
  const heartWasAlreadyStopped = state.heartStopped;
  if (state.asleep) {
    state.stepProgress += 1;
    if (state.stepProgress >= 9) {
      state.asleep = false;
      if (state.incisions > 0) {
        state.blood = Math.min(3, state.blood + 1);
        state.visibility = Math.min(2, state.visibility + 1);
      }
    }
  }
  if (state.blood > 0) {
    state.pulse = Math.max(0, state.pulse - (state.blood > 1 ? 1 : 0));
    state.visibility = Math.min(2, state.visibility + 1);
    state.site = Math.min(2, state.site + 1);
  }
  if (state.fever > 100.4) state.fever = Math.min(110, state.fever + .4);
  if (state.site > 0 && state.blood > 0) state.fever = Math.min(110, state.fever + .2);
  if (selected.heartRisk && state.asleep && !state.heartStopped && Math.random() < .055) {
    state.heartStopped = true;
    state.heartStopMoves = 0;
  }
  if (heartWasAlreadyStopped && state.heartStopped) {
    state.heartStopMoves += 1;
    if (state.heartStopMoves > 2) {
      finished = true;
      log('The patient’s heart was not restarted in time. The practice has failed.', 'log-fail');
      return;
    }
  }
  if (selected.volatile && Math.random() < .08) {
    state.visibility = Math.min(2, state.visibility + 1);
    log('The malady changed the patient’s condition. Check their status before the next move.', 'log-fail');
    return;
  }
  if (state.pulse === 0) state.criticalPulseMoves += 1;
  else state.criticalPulseMoves = 0;
  if (state.criticalPulseMoves >= 4) {
    finished = true;
    log('The patient’s pulse remained critical for too long. The practice has failed. Select the case again to retry.', 'log-fail');
  }
}

function useTool(id) {
  if (finished) return;
  const tool = tools.find(item => item[0] === id);
  const [,, art, description] = tool;
  if (id === 'scalpel' && !state.asleep) { log('Put the patient to sleep before using the Scalpel. Operating on an awake patient causes malpractice.', 'log-fail'); return; }
  if (id === 'scalpel' && !state.diagnosed && selected.id !== 'nose-job') { log('Use Ultrasound or the Lab Kit to diagnose the patient before making an incision.', 'log-fail'); return; }
  if (id === 'antibiotics' && selected.flu && !state.labKit) { log('Use the Lab Kit first to unlock Antibiotics.', 'log-fail'); return; }
  if (id === 'pins' && (!state.diagnosed || !state.incisions || !state.shattered)) { log('Pins require an Ultrasound diagnosis, a shattered bone, and at least one open incision.', 'log-fail'); return; }
  if (id === 'splint' && (!state.diagnosed || !state.broken)) { log('Use Ultrasound first and make sure the patient has a broken bone before using a Splint.', 'log-fail'); return; }
  takeTurn();
  if (finished) { render(); return; }

  const messages = {
    sponge: () => { state.visibility = 0; return 'The Sponge clears the operation site. Visibility is restored.'; },
    ultrasound: () => { state.diagnosed = true; return `Ultrasound complete. Diagnosis confirmed: ${selected.name}.`; },
    labkit: () => { state.labKit = true; if (selected.flu) state.diagnosed = true; return selected.flu ? 'Lab Kit analysis complete. Diagnosis revealed; Antibiotics unlocked.' : 'Lab Kit complete. Antibiotics unlocked.'; },
    anesthetic: () => { state.asleep = true; state.stepProgress = 0; return 'The patient is asleep. You can continue the operation safely.'; },
    scalpel: () => {
      if (!state.asleep) { finished = true; return 'Malpractice! The Scalpel was used while the patient was awake. The practice has failed.'; }
      state.incisions += 1; state.incisionsMade += 1; state.blood = Math.min(3, state.blood + 1); state.site = Math.min(2, state.site + 1); state.visibility = Math.min(2, state.visibility + 1);
      return `Incision made (${state.incisions}). Visibility is reduced; watch for blood loss.`;
    },
    stitches: () => {
      if (state.incisions > 0) state.incisions -= 1;
      state.blood = Math.max(0, state.blood - 1);
      if (state.incisions === 0 && state.blood === 0 && state.incisions + state.stepProgress >= selected.goal) state.rootFixed = true;
      return state.blood === 0 ? 'Incisions closed and bleeding stopped.' : 'Stitches closed part of the wound and reduced blood loss.';
    },
    splint: () => { state.broken -= 1; return `Splint repaired a broken bone. ${state.broken} remaining.`; },
    pins: () => { state.shattered -= 1; state.broken += 1; return 'Pins stabilized a shattered bone. Use a Splint to repair it.'; },
    antiseptic: () => { state.site = Math.max(0, state.site - 1); return state.site === 0 ? 'The operation site is clean.' : 'The operation site is partially sanitized.'; },
    antibiotics: () => { state.fever = Math.max(98.6, state.fever - 2); return `The patient’s temperature is now ${state.fever.toFixed(1)}°F.`; },
    transfusion: () => { state.pulse = Math.min(3, state.pulse + 1); state.criticalPulseMoves = 0; state.blood = Math.max(0, state.blood - 1); return 'Transfusion strengthened the patient’s pulse and replaced lost blood.'; },
    clamp: () => { if (!state.incisions) return 'A Clamp requires at least one open incision.'; state.blood = Math.max(0, state.blood - 1); return 'The Clamp reduced blood loss.'; },
    defibrillator: () => { if (!state.heartStopped) return 'The patient’s heart is still beating. The Defibrillator is not needed yet.'; state.heartStopped = false; state.heartStopMoves = 0; state.pulse = Math.max(1, state.pulse); return 'The Defibrillator restored the patient’s heartbeat!'; }
  };
  const message = messages[id]();
  if (id === 'antibiotics' && state.fever <= 100.4 && selected.goal === 0) state.rootFixed = true;
  if (message.startsWith('Malpractice')) { finished = true; log(message, 'log-fail'); }
  else log(message, /requires|must be|not needed|not available|no broken/i.test(message) ? 'log-fail' : '');
  if (!finished) finishSimpleCase(`Surgery successful! ${selected.name} was treated.`);
  render();
}

function fixIt() {
  if (finished) return;
  takeTurn();
  if (finished) { render(); return; }
  // "Fix it" is the actual treatment step after enough incisions have been
  // made. Closing those incisions afterward remains a separate operation.
  if (state.diagnosed && selected.goal > 0 && state.incisionsMade >= selected.goal) state.rootFixed = true;
  if (!selected.bones && !selected.flu && selected.goal === 0) state.rootFixed = true;
  const ready = state.rootFixed && state.broken === 0 && state.shattered === 0 && state.incisions === 0 && state.blood === 0 && state.site === 0 && state.fever <= 100.4 && !state.heartStopped;
  if (ready) {
    finished = true;
    log(`Surgery successful! ${selected.name} was treated in ${move} moves.`, 'log-success');
  } else {
    const missing = [];
    if (!state.rootFixed) missing.push(selected.flu ? 'treat the fever with the Lab Kit and Antibiotics' : `make ${selected.goal} incision(s), then press Fix It to treat the diagnosis`);
    if (state.broken || state.shattered) missing.push('repair all broken and shattered bones');
    if (state.incisions) missing.push('close the incisions with Stitches');
    if (state.blood) missing.push('stop the bleeding');
    if (state.fever > 100.4) missing.push('reduce the fever');
    if (state.heartStopped) missing.push('restart the patient’s heart');
    log(`Not ready yet. ${missing.join('; ')}.`, 'log-fail');
  }
  render();
}

function loadDiagnosis(id) {
  selected = diagnoses.find(d => d.id === id) || diagnoses[0];
  state = freshState(selected); move = 0; finished = false;
  $('#diagnosis-detail').textContent = selected.note;
  $('#patient-alert').textContent = 'Patient is prepped for surgery.';
  render();
}

const caseCard = item => `<button type="button" class="case-card" data-diagnosis="${item.id}">${item.name}</button>`;
$('#malady-list').innerHTML = diagnoses.filter(item => item.type.includes('Malady')).map(caseCard).join('');
$('#diagnosis-list').innerHTML = diagnoses.filter(item => !item.type.includes('Malady')).map(caseCard).join('');
$('#reset-button').addEventListener('click', () => loadDiagnosis(selected.id));
$('#fix-button').addEventListener('click', fixIt);
document.querySelectorAll('.case-card').forEach(button => button.addEventListener('click', () => loadDiagnosis(button.dataset.diagnosis)));
loadDiagnosis(selected.id);
