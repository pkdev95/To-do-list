const zerarItem = () => {
  const item = document.getElementById('pc');
  item.value = "";
}

const getOldValue = (indice) => {

  const editValue = document.getElementById(`plm-${indice}`).innerText;
  const valorSub = document.getElementById(`trfe-${indice}`).value = editValue;

}


const openModal = (itemIndex) => {
  const modal = document.getElementById(`fnt-${itemIndex}`);
  modal.style.display = "block";
  getOldValue(itemIndex);

}


const closeModal = (itemIndex) => {
  const modal = document.getElementById(`fnt-${itemIndex}`);
  modal.style.display = "none";
}

const removerItem = (indice) => {
  const itens = JSON.parse(localStorage.getItem('item'));

  if (itens.length > 0 && indice >= 0 && indice < itens.length) {
    itens.splice(indice, 1);
    localStorage.setItem('item', JSON.stringify(itens));
    window.location.reload();
  }
}

const editar = (indice) => {
  const valorSub = document.getElementById(`trfe-${indice}`).value;
  const itens = JSON.parse(localStorage.getItem('item'));

  if (itens && itens.length > 0 && indice >= 0 && indice < itens.length && valorSub !== "") {
    itens.splice(indice, 1, valorSub);
    localStorage.setItem('item', JSON.stringify(itens));
    
  }
};

const addItem = (itens, item) => {
  itens.unshift(item);
}

const renderizar = (newItens) => {
  const rendElement = document.getElementById('pk');
  rendElement.innerHTML = '';

  newItens.forEach((newItem, itemIndex) => {
    if (newItem) {
      const ll = document.createElement('li');
      ll.className = 'itlist';
      const btt = document.createElement('button');
      const edit = document.createElement('button');
      edit.innerText = 'Editar';
      edit.className = 'edt';
      edit.onclick = () => { openModal(itemIndex) };
      const ql = document.createElement('br');
      const li = document.createElement('hr');
      const sep = document.createElement('br');
      const divInpt = document.createElement('div');
      const fmm = document.createElement('form');
      const inpttn = document.createElement('input');
      const divMS = document.createElement('div');
      const fms = document.createElement('div');
      const x = document.createElement('div');
      const text = document.createElement('h2');
      const form = document.createElement('form');
      const input1 = document.createElement('input');
      const inpt2 = document.createElement('button');
      inpt2.innerText = "salvar";
      inpt2.onclick = () => { editar(itemIndex) };
      inpt2.className = "svt";
      input1.className = "nt";
      input1.placeholder = "nova tarefa";
      input1.id = `trfe-${itemIndex}`;
      text.innerText = "Alterar Tarefa"
      x.onclick = () => { closeModal(itemIndex) };
      x.innerText = "X";
      x.className = "cm";
      x.id = "close";
      fms.className = "formModalSave";
      divMS.className = "modalSave";
      divMS.id = `fnt-${itemIndex}`;;
      inpttn.placeholder = "nova tarefa";
      inpttn.type = "text";
      inpttn.name = "formNewTarefa";
      inpttn.className = "tfn"
      divInpt.className = "formEdit";
      li.className = 'lin';
      btt.innerText = 'Apagar';
      btt.className = 'vl';
      btt.onclick = () => { removerItem(itemIndex) };
      const btsave = document.createElement('button');
      btsave.innerText = 'Salvar';
      btsave.id = 'kol';
      btsave.className = "bts"
      btsave.onclick = () => { editar(itemIndex) };
      ll.innerText = newItem;

      divInpt.appendChild(fmm);
      fmm.appendChild(inpttn);
      fmm.appendChild(btsave);
      rendElement.appendChild(ql);
      rendElement.appendChild(ll);
      rendElement.appendChild(btt);
      rendElement.appendChild(edit);
      rendElement.appendChild(sep);
      rendElement.appendChild(divInpt);
      rendElement.appendChild(ql);
      rendElement.appendChild(li);
      let bd = document.body;
      bd.appendChild(divMS);
      divMS.appendChild(fms);
      fms.appendChild(x);
      fms.appendChild(text);
      fms.appendChild(form);
      form.appendChild(input1);
      form.appendChild(inpt2);
    }
  });
};

const salvarItens = () => {
  const item = document.getElementById('pc').value;
  const itens = JSON.parse(localStorage.getItem('item')) || [];
  addItem(itens, item);
  localStorage.setItem('item', JSON.stringify(itens));
  renderizar(itens);
  zerarItem();
}

salvarItens();
