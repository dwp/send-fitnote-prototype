window.onload = function takeAPhoto() {
    var validImageFileTypes = new RegExp('^image/');
    var pageUrl = window.location.pathname;
    var submitButton = document.getElementById('js-submitButtonContainer');

    function showLoader() {
        document.getElementById('js-loading-message').className += 'js-show';
        submitButton.className = 'js-hide';
        document.getElementById('formData').submit();
        return true;
    }

    submitButton.onclick = function photoChange(e) {
        try {
            if ((!validImageFileTypes.test(e.target.files[0].type) && e.target.files[0].type !== 'application/pdf')) {
                window.location = pageUrl + '?type=1';
            } else if (e.target.files[0].size > 10000000) {
                window.location = pageUrl + '?size=2';
            } else {
                showLoader();
            }
        } catch (err) {
            showLoader();
        }
    };
};
