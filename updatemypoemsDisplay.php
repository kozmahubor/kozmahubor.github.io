<?php
try {
    // Get the display parameter from the query string
$display = $_GET['display'];
$display = $displayParam !== null ? $displayParam : 'none';

// Read the contents of the A1.html file
$html = file_get_contents('mypoems.html');

// Modify the style attribute of the #a1 element
$html = preg_replace('/<div id="content" class="style" style="display: (none|block);"><\/div>/',
 '<div id="content" class="style" style="display: ' . $display . ';"></div>', $html);

// Write the modified contents back to the A1.html file
file_put_contents('mypoems.html', $html);
} catch (Exception $e) {
    echo 'Error: ' . $e->getMessage();
}
?>