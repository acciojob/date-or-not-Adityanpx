var isDate = function (input) {
  if (input instanceof Date && !isNaN(input)) {
    return true; // जर हे वैध Date ऑब्जेक्ट असेल तर true परत करा
  }

  const parsedDate = new Date(input); // इनपुटला Date मध्ये कन्व्हर्ट करण्याचा प्रयत्न
  return !isNaN(parsedDate); // जर तो वैध डेट असेल तर true, नाहीतर false
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
