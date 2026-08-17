/* hubspot.js — silent background submission to HubSpot CRM */
(function () {
  var PORTAL = '246715076';
  var FORMS = {
    courses:  '29ada516-a177-4537-9a37-1414c05967fc',
    grooming: '97b1f021-1d40-4e7a-9a1f-7f03d6b8be5e',
    boarding: '1c032c49-faae-4b39-b788-2263766e49a7'
  };

  function splitName(full) {
    var parts = (full || '').trim().split(/\s+/);
    return { first: parts[0] || '', last: parts.slice(1).join(' ') };
  }

  function f(name, value) {
    return { objectTypeId: '0-1', name: name, value: String(value || '') };
  }

  window.hsSubmit = function (type, data) {
    var guid = FORMS[type] || FORMS.grooming;
    var n = splitName(data.name);
    var fields = [
      f('email',     data.email),
      f('firstname', n.first),
      f('lastname',  n.last),
      f('phone',     data.phone),
    ];

    var lines = ['Enquiry type: ' + type];
    if (type === 'grooming') {
      if (data.petName)     lines.push('Pet name: ' + data.petName);
      if (data.petType)     lines.push('Pet type: ' + data.petType);
      if (data.breed)       lines.push('Breed: ' + data.breed);
      if (data.size)        lines.push('Size: ' + data.size);
      if (data.coat)        lines.push('Coat type: ' + data.coat);
      if (data.temperament) lines.push('Temperament: ' + data.temperament);
      if (data.age)         lines.push('Age: ' + data.age);
      if (data.date)        lines.push('Preferred date: ' + new Date(data.date).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' }));
      if (data.time)        lines.push('Preferred time: ' + data.time);
      if (data.notes)       lines.push('Notes: ' + data.notes);
    } else if (type === 'boarding') {
      if (data.breed)    lines.push('Dog breed: ' + data.breed);
      if (data.dateFrom) lines.push('Check-in: ' + data.dateFrom);
      if (data.dateTo)   lines.push('Check-out: ' + data.dateTo);
    }
    fields.push(f('message', lines.join('\n')));

    fetch(
      'https://api.hsforms.com/submissions/v3/integration/submit/' + PORTAL + '/' + guid,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: fields.filter(function (x) { return x.value; }),
          context: { pageUri: window.location.href, pageName: document.title }
        })
      }
    ).catch(function () {});
  };
})();
