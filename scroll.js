let captions = document.getElementById("captions")
let screen = document.getElementById("screen")
let extra_screen = document.getElementById("extra_screen")

let maxScrollPosition = document.body.clientHeight- window.innerHeight
let currentScrollPosition;

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

var i = 1;
screen.style.backgroundImage = "url(media/images/1.png)"
setInterval(()=>{
    i++
    screen.style.backgroundImage = "url(media/images/"+i+".png)"
    if(i>114){i=1}
},6000)

function changeContentWithPosition(startingPercentage,endingPercentage,caption_text){
    if(currentScrollPosition > startingPercentage * maxScrollPosition && currentScrollPosition <= endingPercentage * maxScrollPosition){
        captions.innerText = caption_text
    }

    if(currentScrollPosition > 0.27 * maxScrollPosition && currentScrollPosition <= 0.74 * maxScrollPosition){
        captions.style.top = 45 + "vh"
        captions.style.textDecoration = "underline"
    } else {
        captions.style.top = 85 + "vh"
        captions.style.textDecoration = "none"
    }
}

window.addEventListener("scroll",()=>{
    currentScrollPosition = window.scrollY

    if(currentScrollPosition <= 0.05* maxScrollPosition){
        extra_screen.style.opacity = 1;
        extra_screen.style.backgroundImage = "url(media/images/cover.png)"
    } else if(currentScrollPosition > 0.27 * maxScrollPosition && currentScrollPosition <= 0.74 * maxScrollPosition && currentScrollPosition > 0.05 * maxScrollPosition ||
            currentScrollPosition > 0.94 * maxScrollPosition){
        extra_screen.style.opacity = 1;
        extra_screen.style.backgroundImage = "none"
    } else {
        extra_screen.style.opacity = 0;
    }

    changeContentWithPosition(0,0.02,"")

    changeContentWithPosition(0.02,0.03,"In the same day as always, in the same moment of always,")
    changeContentWithPosition(0.03,0.04,"I live out my life as I always do.")
    changeContentWithPosition(0.04,0.05,"In this eternal moment of always,")
    changeContentWithPosition(0.05,0.06,"I can’t say I have a routine")
    changeContentWithPosition(0.06,0.07,"because saying so would imply that there’s ever a different moment")
    changeContentWithPosition(0.07,0.08,"when my time takes on a different shape.")
    changeContentWithPosition(0.09,0.1,"")
    changeContentWithPosition(0.11,0.12,"In the same day as always, in the same moment of always,")
    changeContentWithPosition(0.12,0.13,"I surround myself with nothing more and nothing less")
    changeContentWithPosition(0.13,0.14,"than the things I’ve always known.")
    changeContentWithPosition(0.14,0.15,"I think it’s a sweet thing to live in a spiral.")
    changeContentWithPosition(0.15,0.16,"I inhabit my own always.")
    changeContentWithPosition(0.16,0.17,"It’s an always that I love and that will always love me back,")
    changeContentWithPosition(0.17,0.18,"because we share a mutual, eternal, and deep understanding of each other.")
    changeContentWithPosition(0.18,0.19,"It is as much my moment of always as I am its.")
    changeContentWithPosition(0.19,0.2,"")
    changeContentWithPosition(0.2,0.21,"Yet, in the same day as always, in the same moment of always,")
    changeContentWithPosition(0.21,0.22,"in the midst of my eternal dance with my everything else,")
    changeContentWithPosition(0.22,0.23,"it is with a heavy heart that I must admit to betraying this love.")
    changeContentWithPosition(0.23,0.24,"I feel myself stumbling away from its rhythm")
    changeContentWithPosition(0.24,0.25,"whenever I think back to that same thing.")
    changeContentWithPosition(0.25,0.27,"")

    changeContentWithPosition(0.27,0.28,"It starts with circles,")
    changeContentWithPosition(0.28,0.29,"shapes that could be maps,")
    changeContentWithPosition(0.3,0.31,"and symbols that grow more and more.")
    changeContentWithPosition(0.31,0.32,"It moves on to photographs of overwhelmingly large spheres")
    changeContentWithPosition(0.32,0.33,"engulfed in shadows and dust.")
    changeContentWithPosition(0.33,0.34,"For some reason, I’m scared of them.")
    changeContentWithPosition(0.34,0.35,"")
    changeContentWithPosition(0.35,0.36,"All of a sudden a cadaver, I think.")
    changeContentWithPosition(0.36,0.37,"Not sure if it’s a photograph anymore.")
    changeContentWithPosition(0.37,0.38,"Looking at it makes me think of violence,")
    changeContentWithPosition(0.38,0.39,"like something evil happened to it,")
    changeContentWithPosition(0.39,0.4,"but the cadaver looks at peace.")
    changeContentWithPosition(0.41,0.42,"The same symbols of before return,")
    changeContentWithPosition(0.42,0.43,"I think they’ve come to help the cadavers.")
    changeContentWithPosition(0.43,0.44,"")
    changeContentWithPosition(0.44,0.45,"And now they look different.")
    changeContentWithPosition(0.45,0.46,"Small, alive, but still violent.")
    changeContentWithPosition(0.46,0.47,"Is there a word for a live cadaver?")
    changeContentWithPosition(0.47,0.48,"I’ll call it a body for now.")
    changeContentWithPosition(0.48,0.49,"These bodies are growing,")
    changeContentWithPosition(0.49,0.5,"they seem to shift between shapes and colours and sizes.")
    changeContentWithPosition(0.5,0.51,"These bodies seem to spend a lot of time together.")
    changeContentWithPosition(0.51,0.52,"I think they enjoy it.")
    changeContentWithPosition(0.52,0.53,"")
    changeContentWithPosition(0.53,0.54,"Suddenly, I see no bodies at all.")
    changeContentWithPosition(0.54,0.55,"These are definitely photographs,")
    changeContentWithPosition(0.55,0.56,"but they’re so complex and varied")
    changeContentWithPosition(0.56,0.57,"that they almost seem made-up to me.")
    changeContentWithPosition(0.57,0.58,"I’m scared again, I want it to stop changing so much.")
    changeContentWithPosition(0.58,0.59,"")
    changeContentWithPosition(0.59,0.6,"The bodies are back.")
    changeContentWithPosition(0.6,0.61,"It seems that they occupy these imaginary places,")
    changeContentWithPosition(0.61,0.62,"but they’re killing each other.")
    changeContentWithPosition(0.62,0.63,"And they’re beautiful now, they must enjoy existing.")
    changeContentWithPosition(0.63,0.64,"They move in really strange ways.")
    changeContentWithPosition(0.64,0.65,"They move through each other,")
    changeContentWithPosition(0.65,0.66,"through these environments,")
    changeContentWithPosition(0.66,0.67,"they alter them,")
    changeContentWithPosition(0.67,0.68,"with so many different objects.")
    changeContentWithPosition(0.68,0.69,"What do they use them for?")
    changeContentWithPosition(0.69,0.7,"They touch them, hold them,")
    changeContentWithPosition(0.7,0.71,"place them, stack them,")
    changeContentWithPosition(0.71,0.72,"I don’t understand.")
    changeContentWithPosition(0.72,0.74,"")

    changeContentWithPosition(0.74,0.75,"In the same day as always, in the same moment of always,")
    changeContentWithPosition(0.75,0.76,"I think about these images a lot,")
    changeContentWithPosition(0.76,0.77,"angry with how desolate they make me feel in my own home.")
    changeContentWithPosition(0.77,0.78,"My moment of always used to be perfect,")
    changeContentWithPosition(0.78,0.79,"it was all I ever wanted to know.")
    changeContentWithPosition(0.79,0.8,"Things are the way they are here.")
    changeContentWithPosition(0.8,0.81,"They don’t need to think about what they are or how they are,")
    changeContentWithPosition(0.81,0.82,"they simply are, and I miss being okay with this.")
    changeContentWithPosition(0.82,0.83,"")
    changeContentWithPosition(0.83,0.84,"In the same day as always, in the same moment of always,")
    changeContentWithPosition(0.84,0.85,"suddenly I’m stuck.")
    changeContentWithPosition(0.85,0.86,"Because now I have to keep thinking about those images and what they might mean.")
    changeContentWithPosition(0.86,0.87,"I avoid trying to piece together what I’ve seen,")
    changeContentWithPosition(0.87,0.88,"because I’m afraid that seeing beyond my always will shatter the love we have for each other,")
    changeContentWithPosition(0.88,0.89,"so I think I’d rather sit with the discomfort of not knowing.")
    changeContentWithPosition(0.9,0.91,"But I don’t know where to find room in my previously perfect moment of always for discomfort, or for fear.")
    changeContentWithPosition(0.91,0.92,"")
    changeContentWithPosition(0.92,0.93,"When this fear becomes too strong, I return to my moment of always")
    changeContentWithPosition(0.93,0.94,"and I focus on counting the steps to my dance with my beloved everything else,")
    changeContentWithPosition(0.94,0.95,"destined to remain in this state of partial ignorance,")
    changeContentWithPosition(0.95,0.96,"destined to never know the things that aren’t here.")
    changeContentWithPosition(0.96,0.98,"")
    changeContentWithPosition(0.98,1,"Designed and written by Joana Sobral. Special thanks to Richard Niessen.")
    
    
})