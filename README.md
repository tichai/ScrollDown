# ScrollDown
Scroll down the page with JavaScript.

##Requirement

**jquery.min.js**

## Getting Started
 
 Clone this repo and include all the `.js` file in your HTML file by `<script>` in `<head>`
 
 	<script type="text/javascript" src="jquery.min.js"></script>
 	<script type="text/javascript" src="easing.js"></script>
 	<script type="text/javascript" src="move-top.js"></script>
 	<script type="text/javascript" src="scroll.js"></script>
 	
## Scroll Down

	<a href="#" class="scroll"></a>

Use `class="scroll"` to call the ScrollDown styles.

## Move to top

	<script type="text/javascript">
		$(document).ready(function() {
			/*
			var defaults = {
			containerID: 'toTop', // fading element id
			containerHoverID: 'toTopHover', // fading element hover id
			scrollSpeed: 1200,
			easingType: 'linear' 
			};
			*/
										
			$().UItoTop({ easingType: 'easeOutQuart' });
										
		});
	</script>
	
	<a href="#" id="toTop" style="display: block;"> <span id="toTopHover" style="opacity: 1;"></span></a>
	
Add the `toTop` segment before the toTop button.

Add `id=toTop` in `<a>` for link and add `id=toTopHover` in `<span>` to show the to top button.

