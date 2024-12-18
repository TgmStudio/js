const queryString = location.search;
const params = new URLSearchParams(queryString);
const maintxt = document.getElementsByTagName("h3");
console.log(params.get('a'));
console.log(params.get('b'));
document.querySelector('.section').innerHTML = ('<dd id="ha"></dd>');
document.querySelector('.name').innerHTML = ('<dd id="hb"></dd>');
document.querySelector('#ha').textContent = (params.get('a'));
document.querySelector('#hb').textContent = (params.get('b'));
for (let i = 0; i < maintxt.length; i++) {
if (maintxt[i].innerHTML === '<ruby>先生<rt>せんせい</rt></ruby>からの<ruby>指示<rt> しじ</rt></ruby>') {
    maintxt[i].innerHTML = 'EasyEdit';
}
}
document.querySelector('.label').textContent = ('');
document.querySelector('.discription').textContent = ('EasyEditをご利用いただきありがとうございます。');
for (let i = 0; i < maintxt.length; i++) {
if (maintxt[i].innerHTML === '<ruby>自由<rt>じゆう</rt></ruby><ruby>学習<rt>がくしゅう</rt></ruby>') {
    maintxt[i].innerHTML = (params.get('c'));
}
}
