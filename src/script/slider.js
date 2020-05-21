window.document.onload = function() {

    let width = 300;
    let count = 2;
    let list = carousel.querySelector('ul');
    let listElems = carousel.querySelectorAll('li');

    let position = 0;
    let next = carousel.querySelector('.next')
    let prev = carousel.querySelector('.prev')

    let mark1 = document.getElementById('mark1'),
        mark2 = document.getElementById('mark2'),
        mark3 = document.getElementById('mark3'),
        mark4 = document.getElementById('mark4'),
        mark5 = document.getElementById('mark5'),
        mark6 = document.getElementById('mark6')

    function setMark() {
        switch (position) {
            case -600:
                mark2.classList = 'mark active';
                mark1.classList = 'mark';
                mark3.classList = 'mark';
                mark4.classList = 'mark';
                mark5.classList = 'mark';
                mark6.classList = 'mark';
                break;
            case -1200:
                mark3.classList = 'mark active';
                mark2.classList = 'mark';
                mark1.classList = 'mark';
                mark4.classList = 'mark';
                mark5.classList = 'mark';
                mark6.classList = 'mark';
                break;
            case -1800:
                mark4.classList = 'mark active';
                mark2.classList = 'mark';
                mark1.classList = 'mark';
                mark3.classList = 'mark';
                mark5.classList = 'mark';
                mark6.classList = 'mark';
                break;
            case -2400:
                mark5.classList = 'mark active';
                mark2.classList = 'mark';
                mark1.classList = 'mark';
                mark4.classList = 'mark';
                mark3.classList = 'mark';
                mark6.classList = 'mark';
                break;
            case -3000:
                mark6.classList = 'mark active';
                mark2.classList = 'mark';
                mark1.classList = 'mark';
                mark4.classList = 'mark';
                mark5.classList = 'mark';
                mark3.classList = 'mark';
                break;
            default:
                mark1.classList = 'mark active'
                mark2.classList = 'mark';
                mark3.classList = 'mark';
                mark4.classList = 'mark';
                mark5.classList = 'mark';
                mark6.classList = 'mark';
        }
    }
    prev.onclick = function() {
        position += width * count;
        position = Math.min(position, 0)
        list.style.marginLeft = position + 'px';
        setMark()
        if (position == 0) {
            prev.classList = 'arrow prev hide'
        }
        if (position > -3000) {
            next.classList = 'arrow next'
        }
    };

    next.onclick = function() {
        position -= width * count;
        position = Math.max(position, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';
        setMark()
        if (position < 0) {
            prev.classList = 'arrow prev'
        }
        if (position === -3000) {
            next.classList = 'arrow next hide'
        }
    };
}