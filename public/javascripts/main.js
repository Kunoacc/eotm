$(document).ready(function () {
    $('#submit').click(function (e) {
        e.preventDefault();
        let email = $('#email').val();
        let password = $('#password').val();
        if (email === '' || password === ''){
            notie.alert({ type: 'error', text: 'All fields are required', time: 2 })
        }
        else {
            $.ajax({
                type: 'post',
                url: '/login',
                data: {
                    'email': email,
                    'password': password
                },
                beforeSend: function () {
                    $('.cover').css('display', 'inline');
                },
                success: function (data) {
                    $('.cover').removeAttr('style');
                    if (data.data){
                        notie.alert({type: 'success', text: 'Login Successful! Redirecting...', stay: true});
                        window.setTimeout(function () {location.href = '/home'}, 1000);
                    }
                    else if (data.code){
                        notie.alert({ type: 'error', text: 'Please enter the correct details... 😒', time: 2 });
                        console.log(data.code);
                    }
                    else{
                        notie.alert({ type: 'error', text: 'You broke it so fix it ✌🏻', time: 2 });
                    }
                }
            });
        }
    });
});