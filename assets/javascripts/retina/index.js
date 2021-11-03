$(document).ready(function() {

    /*
     * Replace all HTML content images with retina-ready variants
     * for each image in the document, append '_2x' to the image path before the file extension
     */
    if( 'devicePixelRatio' in window && window.devicePixelRatio > 1 ) {
        $('img').each(function() {

            var image = $(this);

            // create variables to contain the original image path, the split path, and our new path
            var imageSrc, splitSrc, newSrc;

            // split the src attribute string
            imageSrc = $(this).attr('src');
            splitSrc = imageSrc.split('.');

            // append our 2x identifier and construct the new src string
            splitSrc[0] += '_2x.';
            newSrc = splitSrc[0] + splitSrc[1];

            // new image object is used to check whether for existence of _2x resource.
            var retinaImage = new Image();

            // on success, replace src with path to retina resource.
            retinaImage.onload = function() {
                $(image).attr('src', newSrc);
            };

            // otherwise, log the error and keep the original path intact.
            retinaImage.onerror = function() {
                var msg = "Path: " + newSrc + " doesn't exist.";
                console.log(msg)
            };

            retinaImage.src = newSrc;
        });
    }
});