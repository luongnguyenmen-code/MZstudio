const fs = require('fs');

const v1 = fs.readFileSync('v1.html', 'utf8').replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$').replace(/<\/script>/g, '<\\/script>');
const v2 = fs.readFileSync('v2.html', 'utf8').replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$').replace(/<\/script>/g, '<\\/script>');
const v3 = fs.readFileSync('v3.html', 'utf8').replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$').replace(/<\/script>/g, '<\\/script>');
const v4 = fs.readFileSync('v4.html', 'utf8').replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$').replace(/<\/script>/g, '<\\/script>');
const v5 = fs.readFileSync('v5.html', 'utf8').replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$').replace(/<\/script>/g, '<\\/script>');
const v6 = fs.readFileSync('v6.html', 'utf8').replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$').replace(/<\/script>/g, '<\\/script>');

const output = `// Auto-generated from v1.html to v6.html
const CUSTOM_TEMPLATES = {
    'v1': (state) => \`${v1}\`,
    'v2': (state) => \`${v2}\`,
    'v3': (state) => \`${v3}\`,
    'v4': (state) => \`${v4}\`,
    'v5': (state) => \`${v5}\`,
    'v6': (state) => \`${v6}\`
};
`;

fs.writeFileSync('studio/js/custom-templates.js', output);
console.log('Successfully created custom-templates.js');
