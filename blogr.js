const productBtn = document.querySelector('.product');
const productModal = document.querySelector('.product-modal');
const companyBtn = document.querySelector('.company');
const companyModal = document.querySelector('.company-modal');
const connectBtn = document.querySelector('.connect');
const connectModal = document.querySelector('.connect-modal');
const modal = document.querySelector('.modal');
const ham = document.querySelector('.ham');
const close = document.querySelector('.close');
const productMobileBtn = document.querySelector('.productMobile');
const companyMobileBtn = document.querySelector('.companyMobile');
const connectMobileBtn = document.querySelector('.connectMobile');
const productMobileModal = document.querySelector('.product-drop');
const companyMobileModal = document.querySelector('.company-drop');
const connectMobileModal = document.querySelector('.connect-drop');

const showProduct = () => {
    productModal.classList.toggle('product-hidden');
}

productBtn.addEventListener('click', showProduct);

const showCompany = () => {
    companyModal.classList.toggle('company-hidden');
}

companyBtn.addEventListener('click', showCompany);

const showConnect = () => {
    connectModal.classList.toggle('connect-hidden');
}

connectBtn.addEventListener('click', showConnect);

const showModal = () => {
    modal.classList.toggle('modal-hidden');
    // modal.classList.toggle('is-active');
}

ham.addEventListener('click', showModal);

close.addEventListener('click', () => {
    modal.classList.toggle('modal-hidden');
})

const showMobileProduct = () => {
    productMobileModal.classList.toggle('product-drop-hidden');
}

productMobileBtn.addEventListener('click', () => {
    productMobileModal.classList.toggle('product-drop-hidden');
})

companyMobileBtn.addEventListener('click', () => {
    companyMobileModal.classList.toggle('company-drop-hidden');
})

connectMobileBtn.addEventListener('click', () => {
    connectMobileModal.classList.toggle('connect-drop-hidden');
})


