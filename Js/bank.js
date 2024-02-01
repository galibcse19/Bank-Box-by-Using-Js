document.getElementById('clickButton').addEventListener('click',function(){
    const UserEmail=document.getElementById('user-email');
    const UserPassword = document.getElementById('user-password');

    const UserEmailData=UserEmail.value;
    const UserPasswordData=UserPassword.value;

    if(UserEmailData==='mrgalib40@gmail.com' && UserPasswordData==='123'){
        console.log('success');
        window.location.href = 'dashboard.html';
    }
    else{
        console.log('Invalid')
    }
    
 })