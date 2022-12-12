// Import Tonic from '@socketsupply/tonic';
import Tonic from 'https://cdn.skypack.dev/@optoolco/tonic';
import './my-greeting.css';

function MyGreeting() {
	return this.html`
      <div>Hello, World.</div>
    `;
}

Tonic.add(MyGreeting);

console.log('tonic?');
