//{
//	let imgs = document.querySelectorAll(".luobo-neir .luobo-neikuan-zhong li");
//	console.log(imgs);
//	let pagings = document.querySelectorAll(".xiaoyuandain li");
//	let banners = document.querySelector(".luobo-neir");
//	let next = document.querySelector(".lb-yjt");
//	console.log(next);
//	let prev = document.querySelector(".lb-zjt");
//	pagings.forEach(function(ele, index) {
//		ele.onmouseover = function() {
//			for(let i = 0; i < pagings.length; i++) {
//				pagings[i].classList.remove("active");
//				imgs[i].classList.remove("active");
//			}
//			ele.classList.add("active");
//			imgs[index].classList.add("active");
//			n = index;
//		}
//	})
//	let n = 0;
//	function bannerdh(x) {
//		if(x) {
//			n--;
//		} else {
//			n++;
//		}
//		if(n === -1) {
//			n = imgs.length - 1
//		}
//		if(n == imgs.length) {
//			n = 0
//		}
//		for(let i = 0; i < pagings.length; i++) {
//			pagings[i].classList.remove("active");
//			imgs[i].classList.remove("active");
//		}
//		pagings[n].classList.add("active");
//		imgs[n].classList.add("active");
//	}
//	let st = setInterval(bannerdh, 3000);
//	banners.onmouseover = function() {
//		clearInterval(st)
//	};
//	banners.onmouseout = function() {
//		st = setInterval(bannerdh, 3000);
//	}
//	let flat = true
//	next.onclick = function() {
//		if(flat) {
//			flat = false
//			bannerdh()
//		}
//	}
//	prev.onclick = function() {
//		if(flat) {
//			flat = false
//			bannerdh(1)
//		}
//	}
//	imgs.forEach(function(ele) {
//		ele.addEventListener("transitionend", function() {
//			flat = true
//		})
//	})
//} 

{
	let imgs = document.querySelectorAll(".luobo-neikuan-zhong li");
	let pagings = document.querySelectorAll(".xiaoyuandain li");
	let banners = document.querySelector(".luobo-neir");
	let next = document.querySelector(".lb-yjt");
	let prev = document.querySelector(".lb-zjt");
	pagings.forEach(function(ele, index) {
		ele.onmouseover = function() {
			for(let i = 0; i < pagings.length; i++) {
				pagings[i].classList.remove("active");
				imgs[i].classList.remove("active");
			}
			ele.classList.add("active");
			imgs[index].classList.add("active");
			n = index;
		}
	})
	let n = 0;
	function bannerdh(x) {
		if(x) {
			n--;
		} else {
			n++;
		}
		if(n === -1) {
			n = imgs.length - 1
		}
		if(n == imgs.length) {
			n = 0
		}
		for(let i = 0; i < pagings.length; i++) {
			pagings[i].classList.remove("active");
			imgs[i].classList.remove("active");
		}
		pagings[n].classList.add("active");
		imgs[n].classList.add("active");
	}
	let st = setInterval(bannerdh, 3000);
	banners.onmouseover = function() {
		clearInterval(st)
	};
	banners.onmouseout = function() {
		st = setInterval(bannerdh, 3000);
	}
	let flat = true
	next.onclick = function() {
		if(flat) {
			flat = false
			bannerdh()
		}
	}
	prev.onclick = function() {
		if(flat) {
			flat = false
			bannerdh(1)
		}
	}
	imgs.forEach(function(ele) {
		ele.addEventListener("transitionend", function() {
			flat = true
		})
	})
} 