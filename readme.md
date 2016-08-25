#Velo

Simple floating point based tween engine.  
Transition a `variable` between `0` and `1` over `Time`

Written in ES6.

Each call creates a `new` instance, so run in parallal if you like.

---

#### Usage

	import V from 'velo';
	
	V((step) => {
		value = step * target;
		
	});
	
	
#### Params

Usual bolts with defaults. 

	Velo(renderFn, duration = 400, easing = 'linear', onComplete = null)
	
#### Easing

Check the source for a full list.