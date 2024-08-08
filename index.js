const fs = require('fs');

// Read the JSON file
fs.readFile('input.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    // Parse the JSON data
    const jsonArray = JSON.parse(data);

    if (!Array.isArray(jsonArray)) {
      throw new Error('JSON data is not an array');
    }

    // Convert each object in the array to a compact JSON string
    const compactJsonLines = jsonArray.map((item) => JSON.stringify(item));

    // Join each compact JSON string with a newline character
    const output = compactJsonLines.join('\n');

    // Output the compact JSON lines to a file or console
    fs.writeFile('output.json', output, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('JSON file has been formatted successfully.');
      }
    });
  } catch (e) {
    console.error('Error parsing JSON:', e);
  }
});
