(function () {
  var WA = '919266116116', MAIL = 'info.tradencity@gmail.com';
  var params = new URLSearchParams(location.search);

  /* ---------- Carry ?plan= through the selection page ---------- */
  if (document.getElementById('selection-content') && params.get('plan')) {
    document.querySelectorAll('.selection-grid a').forEach(function (a) {
      a.href += '&plan=' + encodeURIComponent(params.get('plan'));
    });
  }

  /* ---------- Registration form: pre-fill and send via WhatsApp ---------- */
  var reg = document.getElementById('register-form');
  if (reg) {
    if (params.get('type')) reg.type.value = params.get('type');
    if (params.get('plan')) reg.plan.value = params.get('plan');
  }

  function status(form, msg, ok) {
    var el = form.querySelector('.form-status');
    el.textContent = msg;
    el.className = 'form-status ' + (ok ? 'ok' : 'error');
  }

  if (reg) reg.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!reg.checkValidity()) { reg.reportValidity(); return; }
    var d = new FormData(reg);
    var text = 'New Tradencity registration\n' +
      'Type: ' + d.get('type') + '\nPlan: ' + d.get('plan') + '\nName: ' + d.get('name') +
      '\nBusiness: ' + d.get('business') + '\nPhone: ' + d.get('phone') +
      '\nEmail: ' + (d.get('email') || '-') + '\nCity: ' + d.get('city') +
      '\nDetails: ' + (d.get('products') || '-');
    status(reg, 'Opening WhatsApp to send your registration…', true);
    window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
  });

  /* ---------- Contact form: send via email app ---------- */
  var contact = document.getElementById('contact-form');
  if (contact) contact.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!contact.checkValidity()) { contact.reportValidity(); return; }
    var d = new FormData(contact);
    var body = 'Name: ' + d.get('name') + '\nEmail: ' + d.get('email') + '\n\n' + d.get('message');
    status(contact, 'Opening your email app…', true);
    location.href = 'mailto:' + MAIL + '?subject=' + encodeURIComponent(d.get('subject') || 'Website enquiry') +
      '&body=' + encodeURIComponent(body);
  });

  /* ---------- English / Hindi toggle ---------- */
  var HI = {
    'Home': 'होम', 'About Us': 'हमारे बारे में', 'Membership': 'सदस्यता', 'Contact Us': 'संपर्क करें',
    'Join Now': 'अभी जुड़ें', 'Free Business Registration': 'निःशुल्क बिज़नेस रजिस्ट्रेशन',
    'Where Businesses Connect & Grow.': 'जहाँ बिज़नेस जुड़ते और बढ़ते हैं।',
    'Your Business. Your Community. Your Growth Partner.': 'आपका बिज़नेस। आपका समुदाय। आपका ग्रोथ पार्टनर।',
    'Register for FREE Today': 'आज ही निःशुल्क रजिस्टर करें',
    'BUYERS': 'खरीदार', 'Save More, get better prices': 'ज़्यादा बचाएँ, बेहतर दाम पाएँ',
    'SUPPLIERS': 'सप्लायर', 'Sell More, reach new customers': 'ज़्यादा बेचें, नए ग्राहकों तक पहुँचें',
    'BUSINESS OPPORTUNITIES': 'बिज़नेस अवसर', 'Grow more, unlock 14 powerful benefits': 'ज़्यादा बढ़ें, 14 शानदार लाभ पाएँ',
    'Why Join Tradencity Business Community?': 'ट्रेडेंसिटी बिज़नेस कम्युनिटी से क्यों जुड़ें?',
    'Better Prices': 'बेहतर दाम', 'New Customers': 'नए ग्राहक', 'Business Growth': 'बिज़नेस ग्रोथ',
    'Join Tradencity Business Community': 'ट्रेडेंसिटी बिज़नेस कम्युनिटी से जुड़ें',
    '& Unlock 14 Powerful Benefits': 'और पाएँ 14 शानदार लाभ',
    'How It Works': 'यह कैसे काम करता है',
    'Sign up for a free membership.': 'निःशुल्क सदस्यता के लिए साइन अप करें।',
    'Complete your business profile.': 'अपनी बिज़नेस प्रोफ़ाइल पूरी करें।',
    'Connect with potential buyers, suppliers, and partners.': 'संभावित खरीदारों, सप्लायर और पार्टनर से जुड़ें।',
    'Tradencity simplifies the process of business connection and growth.': 'ट्रेडेंसिटी बिज़नेस से जुड़ने और बढ़ने की प्रक्रिया को आसान बनाती है।',
    'Tradencity – Together We Grow.': 'ट्रेडेंसिटी – साथ मिलकर आगे बढ़ें।',
    'Follow us on:': 'हमें फ़ॉलो करें:', 'Privacy Policy': 'गोपनीयता नीति', 'Terms': 'नियम व शर्तें',
    "India's Leading Business Network": 'भारत का अग्रणी बिज़नेस नेटवर्क',
    'Grow Your Business with Tradencity': 'ट्रेडेंसिटी के साथ अपना बिज़नेस बढ़ाएँ',
    'Choose Your Network': 'अपना नेटवर्क चुनें', 'Free family registration': 'निःशुल्क फैमिली रजिस्ट्रेशन', 'Register Now': 'अभी रजिस्टर करें', 'Business Network': 'बिज़नेस नेटवर्क', 'Family Network': 'फैमिली नेटवर्क', 'Join Business Network': 'बिज़नेस नेटवर्क से जुड़ें', 'Join Family Network': 'फैमिली नेटवर्क से जुड़ें',
    'Basic access to the platform': 'प्लेटफ़ॉर्म की बुनियादी सुविधा',
    'Get in Touch': 'हमसे संपर्क करें', 'Send Us a Message': 'हमें संदेश भेजें', 'Send Message': 'संदेश भेजें',
    'Contact Details': 'संपर्क विवरण', 'Corporate Office': 'कॉर्पोरेट ऑफ़िस', 'WhatsApp Number': 'व्हाट्सऐप नंबर',
    'Website': 'वेबसाइट', 'Email Address': 'ईमेल पता',
    'How would you like to join?': 'आप कैसे जुड़ना चाहेंगे?', 'I am a Buyer': 'मैं खरीदार हूँ', 'I am a Supplier': 'मैं सप्लायर हूँ',
    'Business Registration': 'बिज़नेस रजिस्ट्रेशन', 'Register your business': 'अपना बिज़नेस रजिस्टर करें',
    'Register for FREE': 'निःशुल्क रजिस्टर करें', 'Register Now': 'अभी रजिस्टर करें'
  };
  var HI_ATTR = {
    'Your Name': 'आपका नाम', 'Your Email': 'आपका ईमेल', 'Subject': 'विषय', 'Your Message': 'आपका संदेश',
    'Business Name': 'बिज़नेस का नाम', 'Mobile / WhatsApp Number': 'मोबाइल / व्हाट्सऐप नंबर',
    'Email (optional)': 'ईमेल (वैकल्पिक)', 'City': 'शहर', 'What do you buy or sell?': 'आप क्या खरीदते या बेचते हैं?'
  };
  var store = new WeakMap(), attrStore = new WeakMap();

  function walk(toHindi) {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null), n;
    while ((n = w.nextNode())) {
      var p = n.parentNode.nodeName;
      if (p === 'SCRIPT' || p === 'STYLE' || p === 'BUTTON' && n.parentNode.id === 'lang-toggle') continue;
      var raw = n.nodeValue, key = raw.replace(/\s+/g, ' ').trim();
      if (toHindi) {
        if (HI[key]) { store.set(n, raw); n.nodeValue = raw.replace(raw.trim(), HI[key]); }
      } else if (store.has(n)) { n.nodeValue = store.get(n); store.delete(n); }
    }
    document.querySelectorAll('[placeholder]').forEach(function (el) {
      var ph = el.getAttribute('placeholder');
      if (toHindi && HI_ATTR[ph]) { attrStore.set(el, ph); el.setAttribute('placeholder', HI_ATTR[ph]); }
      else if (!toHindi && attrStore.has(el)) { el.setAttribute('placeholder', attrStore.get(el)); }
    });
    document.documentElement.lang = toHindi ? 'hi' : 'en';
  }

  var btn = document.getElementById('lang-toggle');
  function setLang(l) {
    walk(l === 'hi');
    try { localStorage.setItem('lang', l); } catch (e) {}
    if (btn) btn.setAttribute('aria-pressed', l === 'hi');
  }
  var cur = 'en';
  try { cur = localStorage.getItem('lang') || 'en'; } catch (e) {}
  if (cur === 'hi') setLang('hi');
  if (btn) btn.addEventListener('click', function () {
    cur = cur === 'hi' ? 'en' : 'hi';
    setLang(cur);
  });
})();
