madlibBase = ['Last night I dreamed I was a adj butterfly with blue splotches that looked like blueberries. I flew to place with my best friend, cartoon, who was a adj noun. We ate some popcorn when we got there and then decided to verb. The dream ended when I said, "all\'s well that ends well"', 
'Today I met the Queen of place during a quick trip to place. I had left the house because I really needed to pick up a dozen adj noun in order to repair my noun. I wasn\'t planning on meeting her or I probably wouldn\'t have been so adj! I know most people would have bowed, but I forgot and decided to verb adv instead. She smiled politely and then said, "Better Luck Next Time!"',
'Say noun, the photographer adv said as the camera flashed! cartoon and I had gone to place to get our photos taken today. The first photo we really wanted was a picture of us dressed as noun pretending to be a noun. When we saw the proofs of it, I was a bit adj because it looked different than in my head. (I hadnt imagined a noun behind us.) However, the second photo was exactly what I wanted. We both looked like we were ready to verb --exactly what I had in mind!'];

const dictionary = {
    adjLib: [ 'happy', 'beautiful', 'sad', 'precocious', 'ugly'],
    verbLib: [ 'jump', 'eat', 'think', 'code', 'exaggerate'],
    nounLib: [ 'car', 'squirrel', 'man', 'woman', 'sun'],
    advLib: ['quickly', 'sneakily', 'seductively', 'arrogantly', 'jauntily'],
    placeLib: [ 'Nashville', 'school', 'barbershop', 'moon', 'Washington DC'],
    cartoonLib: [ 'Yogi Bear', 'Fred Flintstone', 'Pikachu', 'Goku', 'Johnny Bravo']
}

const madlibgen = () => {
    let madlibResult = madlibBase[randNum(madlibBase.length)]
    while (madlibResult.includes('adj')){
        madlibResult = madlibResult.replace('adj', genRandElement(dictionary.adjLib))
    }
    while (madlibResult.includes('verb')){
        madlibResult = madlibResult.replace('verb', genRandElement(dictionary.verbLib))
    }
    while (madlibResult.includes('noun')){
        madlibResult = madlibResult.replace('noun', genRandElement(dictionary.nounLib))
    }
    while (madlibResult.includes('adv')){
        madlibResult = madlibResult.replace('adv', genRandElement(dictionary.advLib))
    }
    while (madlibResult.includes('place')){
        madlibResult = madlibResult.replace('place', genRandElement(dictionary.placeLib))
    }
    while (madlibResult.includes('cartoon')){
        madlibResult = madlibResult.replace('cartoon', genRandElement(dictionary.cartoonLib))
    }
    return madlibResult;
}

const randNum = num => {
     return Math.floor(Math.random() * num)
};

const genRandElement = array => array[randNum(array.length)]

console.log(madlibgen());
