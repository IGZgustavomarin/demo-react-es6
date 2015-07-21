import Debug from 'debug';
import App from '../../app';

let app = new App({});

Debug.enable('GifBox*');

app.render(document.getElementById('myApp'));
