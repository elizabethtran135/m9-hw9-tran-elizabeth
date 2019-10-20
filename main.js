var accordionHeaders = document.querySelectorAll('#accordion .accordion-headers')
var accordionDescriptions = document.querySelectorAll('#accordion .accordion-description')


function expandAccordionDescription() {


    for (i=0;i<accordionHeaders.length;i++) {
      accordionHeaders[i].childNodes[3].innerHTML='+';
      accordionDescriptions[i].classList.remove('accordion-open');
    }

    this.nextElementSibling.classList.toggle('accordion-open');
    this.childNodes[3].innerHTML = '-';

}

for (i=0; i < accordionHeaders.length; i++) {
  accordionHeaders[i].addEventListener('click', expandAccordionDescription)

}
