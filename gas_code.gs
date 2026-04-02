function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById("https://script.google.com/macros/s/AKfycbxsvQBgszIx9MVhF_LdQpC-WyY4mV7XMJFibCpTehVHkfOOQjGG0ixN0VzLXmMK5EJA/exec").getSheetByName(data.type === 'proposal' ? 'Proposals' : 'Registrations');

    const row = [
      new Date(),
      data.type,
      data.name || data.eventName || '',
      data.email || '',
      data.mobile || '',
      data.regNumber || '' ,
      data.eventName || '',
      data.eventType || '',
      data.eventDate || '',
      data.eventTime || '',
      data.venue || '',
      data.posterUrl || '',
      data.description || '',
      data.participants || ''
    ];

    sheet.appendRow(row);
    return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: err.message })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  const sheet = SpreadsheetApp.openById("YOUR_SHEET_ID");
  const type = e.parameter.type;
  const tab = sheet.getSheetByName(type === "proposals" ? "Proposals" : "Registrations");
  const data = tab.getDataRange().getValues();

  const result = [];
  for (let i = 1; i < data.length; i++) {
    result.push(data[i]);
  }

  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}
