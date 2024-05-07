// Function to handle file input change event
document.getElementById('fileInput').addEventListener('change', function(event) {
    // Get the file object
    var file = event.target.files[0];
    var reader = new FileReader();
    
    // When the file is loaded
    reader.onload = function(event) {
        // Display the content in the editor
        document.getElementById('editor').value = event.target.result;
    };
    
    // Read the file as text
    reader.readAsText(file);
});

// Function to highlight rhymes
function highlightRhymes() {
    // Get the text from the editor
    var text = document.getElementById("editor").value;
    // Get the rhyme word
    var rhymeWord = document.getElementById("rhymeWord").value;
    // Regular expression to find words that rhyme with the rhyme word
    var rhymeRegex = new RegExp('\\b(\\w*' + rhymeWord + '\\b|\\b' + rhymeWord + '\\w*\\b)', 'gi');
    // Replace words that rhyme with the rhyme word with a span having a class of 'highlight'
    var highlightedText = text.replace(rhymeRegex, '<span class="highlight">$&</span>');
    // Display the highlighted text
    document.getElementById("highlightedText").innerHTML = highlightedText;
}
