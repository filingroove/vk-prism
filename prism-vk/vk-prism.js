(function() {
	"use strict";

    var highlight = function() {
    	var msgs = document.querySelectorAll('.im_msg_text');

        for (i = 0; i < msgs.length; i++) {

        	var html = msgs[i].innerHTML;

			html =  html.replace('```js', '<pre class="language-javascript"><code class="language-javascript">')
						.replace('```css', '<pre class="language-css"><code class="language-css">')
						.replace('```markup', '<pre class="language-markup"><code class="language-markup">')
						.replace('```clike', '<pre class="language-clike"><code class="language-clike">')
						.replace('```java', '<pre class="language-java"><code class="language-java">')
						.replace('```php', '<pre class="language-php"><code class="language-php">')
						.replace('```ruby', '<pre class="language-ruby"><code class="language-ruby">')
						.replace('```python', '<pre class="language-python"><code class="language-python">')
						.replace('```cpp', '<pre class="language-cpp"><code class="language-cpp">')
						.replace('```bash', '<pre class="language-bash"><code class="language-bash">')
						.replace("```", "</pre></code>");

			msgs[i].innerHTML = html;
		}

		Prism.highlightAll();

		/*setTimeout(function() {
			for (i = 0; i < msgs.length; i++) {

	        	var html = msgs[i].innerHTML;

				html =  html.replace("#newline", "<br>");
							

				msgs[i].innerHTML = html;
			}
		}, 250);*/
		
    }

    var tableObserver = new MutationObserver(function(mutations) {
	 	highlight();   
	});

	var imObserver = new MutationObserver(function(mutations) {
		console.log('im observer');

	 	reloadObserve();
	 	setTimeout(highlight, 500);   
	});

    var reloadObserve = function() {

    	var tables = document.querySelectorAll('.im_log_t tbody');

	    for (var i = 0; i<tables.length; i++) {
			tableObserver.observe(tables[i], {
				childList: true,
				subtree: false
			});
	    }

    }

    reloadObserve();
    
    imObserver.observe(document.getElementById('im_rows'), {
    	childList: true,
		subtree: false
    })
	
    setTimeout(highlight, 500);
})();

