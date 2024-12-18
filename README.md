# EasyEdit
## HTML タグ
```
<script src="https://tgmstudio.github.io/js/easyedit.js" defer></script>
```
## URL
```
https://tgmstudio.github.io/js/easyedit.js
```
## JS コード
```
const queryString = location.search;
const params = new URLSearchParams(queryString);
console.log(params.get('a'));
console.log(params.get('b'));
document.querySelector('.section').innerHTML = ('<dd id="ha"></dd>);
document.querySelector('.name').innerHTML = ('<dd id="hb"></dd>);
document.querySelector('#ha').textContent = (params.get('a'));
document.querySelector('#hb').textContent = (params.get('b'));
```
