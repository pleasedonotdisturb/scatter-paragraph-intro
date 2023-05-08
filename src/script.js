// splitting.js
Splitting();

// gsap
var tl = gsap.timeline();

tl.from(".char", {
	x: "random(-100, 100)",
	y: "random(-100, 100)",
	rotate: "random(-90, 90)",
	filter: "blur(20px)",
	opacity: 0,
	ease: "power3.out",
	duration: 1.5,
	stagger: {
		amount: 2
	}
});
tl.from(
	"p .word",
	{
		x: "random(-100, 100)",
		y: "random(-100, 100)",
		rotate: "random(-90, 90)",
		filter: "blur(20px)",
		opacity: 0,
		ease: "power3.out",
		duration: 1.5,
		stagger: {
			amount: 3
		}
	},
	"-=1"
);
