


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


{	
	let jtz=document.querySelector(".zc-left");
	let jty=document.querySelector(".zc-right");
	let dkh=document.querySelector(".txhz");
	jty.onclick=function(){
		this.classList.remove("active");
		jtz.classList.add("active");
		dkh.style.transform="translatex(-999px)"
	}
	jtz.onclick=function(){
		this.classList.remove("active");
		jty.classList.add("active");
		dkh.style.transform="translatex(0)"
	}
	
	let n=0;
	function stay(){
		n++;
		if(n%2==0){
			jty.onclick()
		}else{
			jtz.onclick()
		}
	}
		
}


{
	let inner=document.querySelector(".haohuo3 .content .list1")
	let prev=document.querySelector(".haohuo3 .content .btn-left")
	let next=document.querySelector('.haohuo3 .content .btn-right')
	let item=document.querySelectorAll(".haohuo3 .content .list .list2")
	let pages=document.querySelectorAll(".haohuo3 .content .yuan div")
	let items=item.length
	console.log(item)
	let n = 0;
	next.onclick = function() {
		n++
		if(n >=items) {
				n = items-1
				return
			}
			inner.style.marginLeft = -n * 360 + "px"
			for(let i = 0; i < pages.length; i++) {
				pages[i].classList.remove("active")
			}
				pages[n].classList.add("active")
			}
			prev.onclick = function() {
				n--
				if(n <0) {
				    n =0  
					return
				}
		    inner.style.marginLeft = -n * 360 + "px"
			for(let i = 0; i < pages.length; i++) {
				pages[i].classList.remove("active")
			}
			pages[n].classList.add("active")
			}
			pages.forEach(function(ele, index) {
				let m = index
				ele.onmousemove = function() {
					for(let i = 0; i < pages.length; i++) {
						pages[i].classList.remove("active")
					}
					ele.classList.add("active")
					inner.style.marginLeft = -m * 360 + "px"
					n = index
				}
			})	
}



