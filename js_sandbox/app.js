document.getElementById('button1').addEventListener('click', loadCustomer);


function loadCustomer() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customer.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);
      const output = `<ul><li>${customer.id}</li>
      <li>${customer.company}</li></ul>`

      document.getElementById('customer').innerHTML = output
    }
  }
  xhr.send();

}