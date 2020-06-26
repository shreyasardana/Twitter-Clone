// DOM elements
const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const newsFeedPage =  document.querySelector('.feeds-page');
const loginModal = document.querySelector('.login-modal');
const modalX = document.querySelector('.login-modal i');
const loginFormBtn = document.querySelector('.login-form-btn');
const postBtn = document.querySelector('.post-btn');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const postModalX = document.querySelector('.modal-header i');
const modalPostBtn = document.querySelector('.modal-header button');
const modalFooterPlus = document.querySelector('.modal-footer span');
const modalInput = document.querySelector('.modal-input');
const user = document.querySelector('.user');
const sidebar =  document.querySelector('.sidebar');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const Xbtn = document.querySelector('.sidebar-header i')
const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');
const logOut = document.querySelector('.log-out');
/***************************************************************/
/***************************************************************/

//MAIN PAGE

//to go to login page on clicking signup/login buttons on main page
const goToLoginPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
};

middleContent.addEventListener('click', e => {
    if(e.target.classList[1] === 'main-btn')
    {
        goToLoginPage();
    }
    //console.log(e.target.classList);
});

//validation
//1. take user to feed page if both inputs are non empty
btnTop.addEventListener('click', () => {
    const inputUserInfo = document.querySelector('.user-info');
    const inputPassword = document.querySelector('.password');
    if(inputUserInfo.value !== '' && inputPassword !== '')
    {
        mainPage.style.display='none';
        newsFeedPage.style.display='block';
    }
    else
    {
        goToLoginPage();
        //2. added modal box to html in login page
        loginModal.style.display='block';
    }

});

/****************************************************************/

//LOGIN PAGE

//1.hide modal on clicking  X
loginModal.addEventListener('click', () => {

    loginModal.style.display='none';

});

//2.button
loginFormBtn.addEventListener('click', () => {
const loginInput = document.querySelector('.login-user-info');
const loginPassword =  document.querySelector('.login-password');

if(loginInput.value !== '' && loginPassword.value !== '')
{
    loginPage.style.display='none';
    newsFeedPage.style.display='block';
}

else
{
    loginModal.style.display='block';
}

});

/******************************************************************* */

//FEED PAGE

//display post modal
postBtn.addEventListener('click', () => {
    modal.style.display='block';
    modalWrapper.classList.add('modal-wrapper-display');
    
});

//enable X
postModalX.addEventListener('click', () => {

    modal.style.display='none';
    modalWrapper.classList.remove('modal-wrapper-display');

    //to clear input field when X is clicked
    if(modalInput.value !=='')
    {
        modalInput.value = '';
        changeOpacity(.5);
    }
});

//decrease opacity of button and '+' when some text is input

const changeOpacity = (x) => {
    modalPostBtn.style.opacity = x;
    modalFooterPlus.style.opacity = x;
};

modalInput.addEventListener('keypress', e => {
    if(e.target.value!=='')
    {
        changeOpacity(1);
    }
    else
    {
        changeOpacity(0);
    }

});

//to make opacity normal when input is removed
// and user clicks anywhere else

//blur-when focus is anywhere else but on input
modalInput.addEventListener('blur', e => {
    if(e.target.value === '')
    {
        changeOpacity(.5);
    }

});


//SIDE BAR

//display side bar
user.addEventListener('click', () => {
    sidebar.classList.add('sidebar-display');
    sidebarWrapper.classList.add('sidebar-wrapper-display');
});

//remove sidebar
Xbtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-display');
    sidebarWrapper.classList.remove('sidebar-wrapper-display');
});


// DARK MODE

const darkElements1 = document.querySelectorAll('.dark-mode-1');
//returns node list which we have to convert to an array so that styles can be added
const darkElements2 = document.querySelectorAll('.dark-mode-2');
const lightTexts = document.querySelectorAll('.light-text');
const borders = document.querySelectorAll('.border');

toggle.addEventListener('click', () => {
    // toggle=adds class if it is not present and removes it if present
    circle.classList.toggle('move');

    //transforming node list to an array with Array.from
     //cycle through the array and assign to each HTML element, class dark-1 with .map
    Array.from(darkElements1).map((darkEl1) => darkEl1.classList.toggle('dark-1')
    );

    Array.from(darkElements2).map((darkEl2) => darkEl2.classList.toggle('dark-2')
    );

    Array.from(lightTexts).map((lightText) => lightText.classList.toggle('light')
    );

    Array.from(borders).map((border) => border.classList.toggle('border-color') 
    );

});


//LOG OUT
logOut.addEventListener('click', () => {
    newsFeedPage.style.display='none';
    mainPage.style.display='grid';
});
