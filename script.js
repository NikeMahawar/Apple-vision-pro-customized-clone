function loco(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
loco()
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
gsap.to('#page>video',{
  scrollTrigger:{
    trigger:'#page>video',
    start: '2% top',
    end: 'bottom top',
    // markers:true,
    scroller:'#main',
  },
  onStart: ()=>{
    document.querySelector('#page>video').play()
  }
})
gsap.to('#page',{
  scrollTrigger:{
    trigger:'#page',
    start:'top top',
    end:'bottom top',
    scroller:'#main',
    pin:true,
  }
})
gsap.to('#page-bottom',{
  scrollTrigger:{
    trigger:'#page-bottom',
    start:'5% top',
    end:'bottom top',
    scroller:'#main',
    pin:true,
  },
  opacity: 0,
})

var t1=gsap.timeline({
  scrollTrigger:{
    trigger:'#page1',
    start:'top top',
    scrub:1,
    scroller:'#main',
    pin:true,
  }
})


t1.to('#page1>h1',{
  top:'-50%'
})

var tl1=gsap.timeline({
  scrollTrigger:{
    trigger:'#page2',
    start:'top top',
    scrub:1,
    scroller:'#main',
    pin:true,
  }
})


tl1.to('#page2>h1',{
  top:'-50%'
})


var tl2=gsap.timeline({
  scrollTrigger:{
    trigger:'#page4',
    start:'top top',
    scrub:1,
    scroller:'#main',
    pin:true,
  }
})


tl2.to('#page4>h1',{
  top:'-50%'
})



//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////



const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
    animated-images/male0001.png
    animated-images/male0002.png
    animated-images/male0003.png
    animated-images/male0004.png
    animated-images/male0005.png
    animated-images/male0006.png
    animated-images/male0007.png
    animated-images/male0008.png
    animated-images/male0009.png
    animated-images/male0010.png
    animated-images/male0011.png
    animated-images/male0012.png
    animated-images/male0013.png
    animated-images/male0014.png
    animated-images/male0015.png
    animated-images/male0016.png
    animated-images/male0017.png
    animated-images/male0018.png
    animated-images/male0019.png
    animated-images/male0020.png
    animated-images/male0021.png
    animated-images/male0022.png
    animated-images/male0023.png
    animated-images/male0024.png
    animated-images/male0025.png
    animated-images/male0026.png
    animated-images/male0027.png
    animated-images/male0028.png
    animated-images/male0029.png
    animated-images/male0030.png
    animated-images/male0031.png
    animated-images/male0032.png
    animated-images/male0033.png
    animated-images/male0034.png
    animated-images/male0035.png
    animated-images/male0036.png
    animated-images/male0037.png
    animated-images/male0038.png
    animated-images/male0039.png
    animated-images/male0040.png
    animated-images/male0041.png
    animated-images/male0042.png
    animated-images/male0043.png
    animated-images/male0044.png
    animated-images/male0045.png
    animated-images/male0046.png
    animated-images/male0047.png
    animated-images/male0048.png
    animated-images/male0049.png
    animated-images/male0050.png
    animated-images/male0051.png
    animated-images/male0052.png
    animated-images/male0053.png
    animated-images/male0054.png
    animated-images/male0055.png
    animated-images/male0056.png
    animated-images/male0057.png
    animated-images/male0058.png
    animated-images/male0059.png
    animated-images/male0060.png
    animated-images/male0061.png
    animated-images/male0062.png
    animated-images/male0063.png
    animated-images/male0064.png
    animated-images/male0065.png
    animated-images/male0066.png
    animated-images/male0067.png
    animated-images/male0068.png
    animated-images/male0069.png
    animated-images/male0070.png
    animated-images/male0071.png
    animated-images/male0072.png
    animated-images/male0073.png
    animated-images/male0074.png
    animated-images/male0075.png
    animated-images/male0076.png
    animated-images/male0077.png
    animated-images/male0078.png
    animated-images/male0079.png
    animated-images/male0080.png
    animated-images/male0081.png
    animated-images/male0082.png
    animated-images/male0083.png
    animated-images/male0084.png
    animated-images/male0085.png
    animated-images/male0086.png
    animated-images/male0087.png
    animated-images/male0088.png
    animated-images/male0089.png
    animated-images/male0090.png
    animated-images/male0091.png
    animated-images/male0092.png
    animated-images/male0093.png
    animated-images/male0094.png
    animated-images/male0095.png
    animated-images/male0096.png
    animated-images/male0097.png
    animated-images/male0098.png
    animated-images/male0099.png
    animated-images/male0100.png
    animated-images/male0101.png
    animated-images/male0102.png
    animated-images/male0103.png
    animated-images/male0104.png
    animated-images/male0105.png
    animated-images/male0106.png
    animated-images/male0107.png
    animated-images/male0108.png
    animated-images/male0109.png
    animated-images/male0110.png
    animated-images/male0111.png
    animated-images/male0112.png
    animated-images/male0113.png
    animated-images/male0114.png
    animated-images/male0115.png
    animated-images/male0116.png
    animated-images/male0117.png
    animated-images/male0118.png
    animated-images/male0119.png
    animated-images/male0120.png
    animated-images/male0121.png
    animated-images/male0122.png
    animated-images/male0123.png
    animated-images/male0124.png
    animated-images/male0125.png
    animated-images/male0126.png
    animated-images/male0127.png
    animated-images/male0128.png
    animated-images/male0129.png
    animated-images/male0130.png
    animated-images/male0131.png
    animated-images/male0132.png
    animated-images/male0133.png
    animated-images/male0134.png
    animated-images/male0135.png
    animated-images/male0136.png
    animated-images/male0137.png
    animated-images/male0138.png
    animated-images/male0139.png
    animated-images/male0140.png
    animated-images/male0141.png
    animated-images/male0142.png
    animated-images/male0143.png
    animated-images/male0144.png
    animated-images/male0145.png
    animated-images/male0146.png
    animated-images/male0147.png
    animated-images/male0148.png
    animated-images/male0149.png
    animated-images/male0150.png
    animated-images/male0151.png
    animated-images/male0152.png
    animated-images/male0153.png
    animated-images/male0154.png
    animated-images/male0155.png
    animated-images/male0156.png
    animated-images/male0157.png
    animated-images/male0158.png
    animated-images/male0159.png
    animated-images/male0160.png
    animated-images/male0161.png
    animated-images/male0162.png
    animated-images/male0163.png
    animated-images/male0164.png
    animated-images/male0165.png
    animated-images/male0166.png
    animated-images/male0167.png
    animated-images/male0168.png
    animated-images/male0169.png
    animated-images/male0170.png
    animated-images/male0171.png
    animated-images/male0172.png
    animated-images/male0173.png
    animated-images/male0174.png
    animated-images/male0175.png
    animated-images/male0176.png
    animated-images/male0177.png
    animated-images/male0178.png
    animated-images/male0179.png
    animated-images/male0180.png
    animated-images/male0181.png
    animated-images/male0182.png
    animated-images/male0183.png
    animated-images/male0184.png
    animated-images/male0185.png
    animated-images/male0186.png
    animated-images/male0187.png
    animated-images/male0188.png
    animated-images/male0189.png
    animated-images/male0190.png
    animated-images/male0191.png
    animated-images/male0192.png
    animated-images/male0193.png
    animated-images/male0194.png
    animated-images/male0195.png
    animated-images/male0196.png
    animated-images/male0197.png
    animated-images/male0198.png
    animated-images/male0199.png
    animated-images/male0200.png
    animated-images/male0201.png
    animated-images/male0202.png
    animated-images/male0203.png
    animated-images/male0204.png
    animated-images/male0205.png
    animated-images/male0206.png
    animated-images/male0207.png
    animated-images/male0208.png
    animated-images/male0209.png
    animated-images/male0210.png
    animated-images/male0211.png
    animated-images/male0212.png
    animated-images/male0213.png
    animated-images/male0214.png
    animated-images/male0215.png
    animated-images/male0216.png
    animated-images/male0217.png
    animated-images/male0218.png
    animated-images/male0219.png
    animated-images/male0220.png
    animated-images/male0221.png
    animated-images/male0222.png
    animated-images/male0223.png
    animated-images/male0224.png
    animated-images/male0225.png
    animated-images/male0226.png
    animated-images/male0227.png
    animated-images/male0228.png
    animated-images/male0229.png
    animated-images/male0230.png
    animated-images/male0231.png
    animated-images/male0232.png
    animated-images/male0233.png
    animated-images/male0234.png
    animated-images/male0235.png
    animated-images/male0236.png
    animated-images/male0237.png
    animated-images/male0238.png
    animated-images/male0239.png
    animated-images/male0240.png
    animated-images/male0241.png
    animated-images/male0242.png
    animated-images/male0243.png
    animated-images/male0244.png
    animated-images/male0245.png
    animated-images/male0246.png
    animated-images/male0247.png
    animated-images/male0248.png
    animated-images/male0249.png
    animated-images/male0250.png
    animated-images/male0251.png
    animated-images/male0252.png
    animated-images/male0253.png
    animated-images/male0254.png
    animated-images/male0255.png
    animated-images/male0256.png
    animated-images/male0257.png
    animated-images/male0258.png
    animated-images/male0259.png
    animated-images/male0260.png
    animated-images/male0261.png
    animated-images/male0262.png
    animated-images/male0263.png
    animated-images/male0264.png
    animated-images/male0265.png
    animated-images/male0266.png
    animated-images/male0267.png
    animated-images/male0268.png
    animated-images/male0269.png
    animated-images/male0270.png
    animated-images/male0271.png
    animated-images/male0272.png
    animated-images/male0273.png
    animated-images/male0274.png
    animated-images/male0275.png
    animated-images/male0276.png
    animated-images/male0277.png
    animated-images/male0278.png
    animated-images/male0279.png
    animated-images/male0280.png
    animated-images/male0281.png
    animated-images/male0282.png
    animated-images/male0283.png
    animated-images/male0284.png
    animated-images/male0285.png
    animated-images/male0286.png
    animated-images/male0287.png
    animated-images/male0288.png
    animated-images/male0289.png
    animated-images/male0290.png
    animated-images/male0291.png
    animated-images/male0292.png
    animated-images/male0293.png
    animated-images/male0294.png
    animated-images/male0295.png
    animated-images/male0296.png
    animated-images/male0297.png
    animated-images/male0298.png
    animated-images/male0299.png
    animated-images/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page7>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.min(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page7>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});


gsap.to('#page8',{
  scrollTrigger:{
    trigger:'#page8',
    start:'top top',
    end:'bottom top',
    pin:true,
    scroller:'#main'
  }
})
gsap.to('#page9',{
  scrollTrigger:{
    trigger:'#page9',
    start:'top top',
    end:'bottom top',
    pin:true,
    scroller:'#main'
  }
})
gsap.to('#page10',{
  scrollTrigger:{
    trigger:'#page10',
    start:'top top',
    end:'bottom top',
    pin:true,
    scroller:'#main'
  }
})
