import Tonic from 'https://cdn.skypack.dev/@optoolco/tonic';


function FunctionalTest() {

    const connected = () => {
        console.log('xxx');
    }

    this.connected = connected;


    return this.html`
      <div>Test FP</div>
    `
}


  Tonic.add(FunctionalTest);
