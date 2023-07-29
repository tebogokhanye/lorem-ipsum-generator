document.getElementById('generate').addEventListener('click', function () {
    const numParagraphs = document.getElementById('paragraphs').value;
    const loremIpsumText = generateLoremIpsum(numParagraphs);
    document.getElementById('output').innerHTML = loremIpsumText;
});

function generateLoremIpsum(numParagraphs) {
    const loremIpsum =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel dictum erat. Suspendisse vitae sapien eu nisl sagittis volutpat. Sed vel orci a tellus faucibus consectetur. In viverra purus in fringilla consectetur. Nulla facilisi. Integer eget rhoncus erat. Aliquam posuere tristique ipsum, non consequat erat hendrerit in. In bibendum tellus non consectetur interdum. Suspendisse eu nulla non turpis blandit semper. Donec vel nisi eu metus tempus iaculis.';

    const paragraphs = loremIpsum.split('. ');

    let result = '';
    for (let i = 0; i < numParagraphs; i++) {
        result += '<p>' + paragraphs[i % paragraphs.length] + '.</p>';
    }

    return result;
}

