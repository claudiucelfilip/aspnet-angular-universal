var GLOBAL = GLOBAL || (function() {
    document.body.addEventListener('click', function(event)  {
        var target = event.target;
        var content = document.getElementById('content');
        var url;
        var appElement = document.querySelector('app'); 
        
        if (target.classList.contains('ajax-link')) {
            event.preventDefault();
           
            url = target.getAttribute('href');
            history.pushState({}, url, url);

            fetch(url)
                .then(function(response) {
                    return response.text();
                })
                .then(function(response) {
                    let div = document.createElement('div');
                    div.innerHTML = response;
                    
                    
                    div = div.querySelector('#content');

                    let scripts = div.querySelectorAll('script');
                    scripts.forEach(function(script) {
                        div.removeChild(script);
                    });

                    content.innerHTML = div.innerHTML;
                    scripts.forEach(function(script) {
                        var src = script.getAttribute('src');
                        if (src) {
                            var scriptEl = document.createElement('script');
                            
                            content.appendChild(scriptEl);
                            scriptEl.src = src;
                            
                        } else {
                            eval(script.innerText);
                        }
                        
                    });
                });
        }
    })
})();