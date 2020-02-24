* $css prefixed is for CSS properties used in CSS format :

        element.removeProperty('background-color');

  The Isi way is :
    
        element.removeProperty($cssBackgroundColor);

  And will be minified like this :

        element.removeProperty(a);

* $js prefixed is for CSS properties used in JS format :

        element.style.backgroundColor = 'red';

  The Isi way is :

        element.style.[$jsBackgroundColor] = 'red';

  And will be minified like this :

        element.style.[a] = 'red';
